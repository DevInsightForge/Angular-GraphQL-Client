import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { User } from "../../../generated/graphql";
import { AuthUserState } from "../../store/user/auth-user.state";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  @Select(AuthUserState.user) user$: Observable<User> | undefined;
}
