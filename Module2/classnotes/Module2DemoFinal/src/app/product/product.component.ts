import { Component, OnInit } from '@angular/core';

 

import { Product } from './Products';

 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

 

 

products: Product[];

selectedProduct:Product;

productList: Product[]=[];

 errorItem: boolean = false;

 

  constructor() {}

 

   ngOnInit() {

    

 

    this.products = [

    {

      p_id : 1,

      product_name : '',

      product_weight : '',

      product_price : 0,

      product_image : ''

    },

    
  ]

 

  }

 

total() {

    return this.productList.reduce((total, item) => total + item.product_price, 0);

 }

 

addToCart(item) {

  

 

    if(this.productList.indexOf(item) === -1) {

      this.productList.push(item);

      this.errorItem = false;

    }

 

    else if (this.productList.indexOf(item) > -1) {

        this.errorItem = true;

    }

   

  }

 

   removeItem(item) {

    var index = this.productList.indexOf(item);

    if (index > -1) {

      this.productList.splice(index, 1);

 

    }

  }





}

 
