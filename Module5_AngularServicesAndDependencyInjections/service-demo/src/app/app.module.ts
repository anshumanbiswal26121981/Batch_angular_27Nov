import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { TodoComponent } from './components/todo/todo.component';
import { ProductsService } from './services/products.service';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,  // older approach
    TodoService], // older approach to provide the services in the providers 
  bootstrap: [AppComponent]
})
export class AppModule { }
