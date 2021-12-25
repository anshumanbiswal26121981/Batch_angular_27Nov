import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  listOfOffers: any[] = [];
  category = 'All Offers';

  constructor(
    private _offersService: OffersService,
    private _activatedRoute: ActivatedRoute
  ) { 
    this.listOfOffers = _offersService.getOffers('');
  }

  ngOnInit(): void {
    if (this._activatedRoute) {
      this._activatedRoute.queryParams.subscribe(params => {
        if (params) {
          const { category } = params;
          this.category = category;
          this.listOfOffers = this._offersService.getOffers(category);
        }
      });
    }
  }

}
