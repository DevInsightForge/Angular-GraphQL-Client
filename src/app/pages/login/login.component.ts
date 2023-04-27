import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { LoginGQL } from "../../../generated/graphql";
import { AuthUserActions } from "../../store/user/auth-user.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loginLoading: boolean = false;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private readonly loginMutation: LoginGQL,
    private readonly router: Router
  ) {}

  loginForm = this.formBuilder.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  login() {
    if (this.loginForm.value.email && this.loginForm.value.password) {
      this.loginLoading = true;
      this.loginMutation
        .mutate({
          input: {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
          },
        })
        .subscribe(({ data }) => {
          localStorage.setItem("refresh", data?.login?.refreshToken as string);
          this.loginLoading = false;
          this.store.dispatch(new AuthUserActions.Reset());
          this.router.parseUrl("/");
        });
    }
  }
}
