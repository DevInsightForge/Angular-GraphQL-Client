import { inject } from "@angular/core";
import { Router } from "@angular/router";

import { map } from "rxjs";
import { AuthService } from "./auth.service";

export const publicGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated?.pipe(
    map((check) => {
      if (!Boolean(check)) {
        return true;
      }

      // Redirect to the login page
      return router.parseUrl("/");
    })
  );
};
