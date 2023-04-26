import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ApolloClientModule } from "./core/apollo-client.module";
import { AppRoutingModule } from "./core/app-routing.module";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
