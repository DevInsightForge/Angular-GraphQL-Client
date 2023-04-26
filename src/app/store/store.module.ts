import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { AuthUserState } from "./user/auth-user.state";

@NgModule({
  imports: [NgxsModule.forRoot([AuthUserState])],
  exports: [NgxsModule],
})
export class StoreModule {}
