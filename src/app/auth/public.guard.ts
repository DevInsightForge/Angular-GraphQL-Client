import { inject } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

export const publicGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated) {
    return true;
  }

  // Redirect to the home page
  return router.parseUrl("/");
};
