import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  products: Product[] = [
    { id:1, 
      name: "Nokia 5.1 Plus", 
      price: 8999, 
      image:"https://i.gadgets360cdn.com/products/large/1534837092_635_nokia_5.1_plus.jpg?downsize=*:420&output-quality=80", 
      desc:"Nokia 3GB/32GB"
    },
    { id:2, 
      name: "Samsung A10s", 
      price: 10999, 
      image:"https://i.gadgets360cdn.com/products/large/1551336239_635_galaxya10_db.jpg?downsize=*:420&output-quality=80", 
      desc:"Samsung 8GB/64GB"
    },
    { id:3, 
      name: "Redmi Note 5 pro", 
      price: 12999, 
      image:"https://i.gadgets360cdn.com/products/large/1518591172_635_xiaomi_redmi_note_5_141818_121801_6078.jpg?downsize=*:420&output-quality=80", 
      desc:"Redmi 8GB/64GB"
    },
    { id:4, 
      name: "Vivo y2", 
      price: 9500, 
      image:"https://i.gadgets360cdn.com/products/large/vivo-y21-db-395x800-1629436528.jpg?downsize=*:420&output-quality=80", 
      desc:"Vivo 8GB/32GB"
    }
  ]

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductsById(id: any) {
    console.log("Inside ProductService ngOnInit() getProductsById id is "+id)
    const filteredObject = this.products.find(prod => prod.id == id) ;
    return filteredObject;
  }
}
