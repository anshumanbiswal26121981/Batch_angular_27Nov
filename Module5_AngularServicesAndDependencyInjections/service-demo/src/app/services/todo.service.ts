import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { UserModule } from '../modules/user/user.module';

@Injectable({
 // providedIn: 'root' // type<any> | 'root' | null
 // if we want to reduce the scope to a particular module then do the followongh
  providedIn: UserModule // type<any> | 'root' | null
})
export class TodoService {

  constructor(private _productservice: ProductsService) { }

  ngOnInit() {
    const products = this._productservice.getProducts();
  }
}
