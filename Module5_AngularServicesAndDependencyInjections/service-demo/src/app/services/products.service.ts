import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  listOfProducts = [
    {name : 'iPhone', price: '$999'},
    {name : 'iPad', price: '$1999'},
    {name : 'iPod', price: '$2999'},
    {name : 'iMac', price: '$3999'},
    {name : 'iWatch', price: '$4999'},

  ]
  constructor() { }

  getProducts() {
    return this.listOfProducts;
  }

  addProduct(product: any) {
    this.listOfProducts.push(product);
  }
}
