import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { EmailDirective } from './directives/email.directive';
import { MinnumberDirective } from './directives/minnumber.directive';
import { MaxnumberDirective } from './directives/maxnumber.directive';
import { EqualvalidatorDirective } from './directives/equalvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    EmailDirective,
    MinnumberDirective,
    MaxnumberDirective,
    EqualvalidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
