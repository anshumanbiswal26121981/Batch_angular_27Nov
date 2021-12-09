import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SortPipe } from './pipes/sort.pipe';
import { DefaultColorOnEventDirective } from './directives/bgdirective';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,  
    DefaultColorOnEventDirective,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
