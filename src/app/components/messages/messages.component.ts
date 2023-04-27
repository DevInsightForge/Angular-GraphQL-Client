import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { GetChatMessagesGQL, Message } from "../../../generated/graphql";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnChanges {
  constructor(private messageQuery: GetChatMessagesGQL) {}

  @Input() chatId: string = "";

  messages$: Observable<Message[]> = of([]);

  private fetchMessages() {
    this.messages$ = this.messageQuery
      .watch({ chatId: this.chatId })
      .valueChanges.pipe(map((result) => result.data.getChat.messages));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["chatId"] && this.chatId) {
      this.fetchMessages();
    }
  }
}
