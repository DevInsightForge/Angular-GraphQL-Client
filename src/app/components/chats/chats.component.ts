import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { ChatBasic, ChatsGQL } from "../../../generated/graphql";

@Component({
  selector: "app-chats",
  templateUrl: "./chats.component.html",
  styleUrls: ["./chats.component.scss"],
})
export class ChatsComponent {
  @Output() setChatIdEvent = new EventEmitter<string>();
  @Input() chatId: string | null = null;

  myChats$: Observable<ChatBasic[]> = of([]);

  setChatId(value: string) {
    this.setChatIdEvent.emit(value);
  }

  constructor(private chatQuery: ChatsGQL) {
    this.myChats$ = this.chatQuery
      .watch()
      .valueChanges.pipe(map((result) => result.data.myChats));
  }
}
