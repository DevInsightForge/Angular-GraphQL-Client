import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-chats",
  templateUrl: "./chats.component.html",
  styleUrls: ["./chats.component.scss"],
})
export class ChatsComponent {
  @Output() setChatIdEvent = new EventEmitter<string>();

  setChatId(value: string) {
    this.setChatIdEvent.emit(value);
  }
}
