import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/services/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id: any = '';
  selectedProd: any;
  isShown: boolean = true ;
  constructor( 
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    console.log("Inside ProductdetailsComponent ngOnInit()")
    const pid = this._activatedRoute.snapshot.paramMap.get('id')?.toString();
    this.id = pid;

    this._activatedRoute.params.subscribe((params: any) => { 
      console.log("Inside ProductdetailsComponent ngOnInit() inside subscribe")
      this.id = params.id;
      console.log("Inside ProductdetailsComponent ngOnInit() this.id is "+this.id)
      this.selectedProd = this._productService.getProductsById(this.id);
    })

  }

  goToProducts() {
    this.isShown = false;
    this._router.navigate(['/products/']);
  }

}
