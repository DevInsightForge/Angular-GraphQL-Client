import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../auth/auth.guard";
import { publicGuard } from "../auth/public.guard";
import { HomeComponent } from "../pages/home/home.component";
import { LoginComponent } from "../pages/login/login.component";
import { RegisterComponent } from "../pages/register/register.component";

const routes: Routes = [
  {
    path: "",
    canActivateChild: [authGuard],
    children: [
      {
        path: "",
        component: HomeComponent,
      },
    ],
  },
  {
    path: "",
    canActivateChild: [publicGuard],
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
