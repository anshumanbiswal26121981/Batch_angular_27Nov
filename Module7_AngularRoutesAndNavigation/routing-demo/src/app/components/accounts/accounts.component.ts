import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  goToOffers() {
    const queryParams = {
      category: "Accounts"
    }

    this._router.navigate(['/accounts/offers'], { queryParams });

  }

  downloadStatement(type: string) {
    this._router.navigate(['/accounts/download', type]);
  }


}
