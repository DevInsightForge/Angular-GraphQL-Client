import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  chatId: string | null = null;

  setChatId(newItem: string) {
    this.chatId = newItem;
  }
}
