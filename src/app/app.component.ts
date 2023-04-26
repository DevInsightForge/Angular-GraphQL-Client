import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { AuthUserState } from "./store/user/auth-user.state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @Select(AuthUserState.loading) isLoading$: Observable<boolean> | undefined;
}
