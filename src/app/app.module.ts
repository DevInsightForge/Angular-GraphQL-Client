import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloClientModule } from '../core/apollo-client.module';
import { AppRoutingModule } from '../core/app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ApolloClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
