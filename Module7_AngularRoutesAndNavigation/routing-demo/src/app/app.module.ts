import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoansComponent } from './components/loans/loans.component';
import { OffersComponent } from './components/offers/offers.component';
import { ErrorComponent } from './components/error/error.component';
import { routingModule } from './app.routing';
import { DownloadComponent } from './components/download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    CardsComponent,
    LoansComponent,
    OffersComponent,
    ErrorComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
