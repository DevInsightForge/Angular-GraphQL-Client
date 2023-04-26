import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    email: "admin@admin.com",
    password: "Admin@123",
  });

  login() {
    console.log(this.loginForm.value);
  }
}
