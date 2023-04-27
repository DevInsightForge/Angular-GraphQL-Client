import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { LogoutGQL, User } from "../../../generated/graphql";
import { AuthUserActions } from "../../store/user/auth-user.actions";
import { AuthUserState } from "../../store/user/auth-user.state";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  @Select(AuthUserState.user) user$: Observable<User> | undefined;

  constructor(
    private readonly logoutMutation: LogoutGQL,
    private readonly store: Store,
    private readonly router: Router
  ) {}

  logout() {
    const refreshToken = localStorage.getItem("refresh") || "";
    this.logoutMutation.mutate({ refreshToken }).subscribe(({ data }) => {
      if (data?.logout) {
        localStorage.removeItem("refresh");
        this.store.dispatch(new AuthUserActions.Reset());
        this.router.parseUrl("/login");
      }
    });
  }
}
