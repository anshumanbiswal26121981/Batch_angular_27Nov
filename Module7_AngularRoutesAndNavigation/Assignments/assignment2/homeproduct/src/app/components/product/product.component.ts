import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listOfproducts: any[] = [];
  isShown: boolean = true ;
  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (this._activatedRoute) {
      this.listOfproducts = this._productService.getProducts();
    }
  }

  goToProductDetails(id: Number) {
    console.log("Inside ProductComponent:goToProductDetails id is "+id);
    this._router.navigate(['/products/productdetails', id]);
    this.isShown = false;
  }
}
