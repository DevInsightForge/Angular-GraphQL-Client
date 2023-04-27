import { Injectable } from "@angular/core";
import { Select } from "@ngxs/store";

import { Observable } from "rxjs";
import { AuthUserState } from "../store/user/auth-user.state";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  @Select(AuthUserState.isAuthenticated) isAuthenticated!: Observable<boolean>;
  @Select(AuthUserState.loading) isLoading!: Observable<boolean>;
}
