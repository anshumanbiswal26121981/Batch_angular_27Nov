import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ColorDirective } from './directives/color.directive';
import { NewemployeeComponent } from './newemployee/newemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ColorDirective,
    NewemployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
