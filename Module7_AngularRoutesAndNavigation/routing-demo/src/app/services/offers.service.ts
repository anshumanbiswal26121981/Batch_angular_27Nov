import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offers: any[] = [
    { discount: 0.5, type: "Savings", gender: "Female", category: "Accounts" },
    { discount: 0.2, type: "Business", gender: "Male", category: "Accounts" },
    { discount: 0.3, type: "Current", gender: "Male", category: "Accounts" },
    { discount: 0.4, type: "Home Loan", gender: "Female", category: "Loans" },
    { discount: 0.5, type: "Home Loan", gender: "Male", category: "Loans" },
    { discount: 0.2, type: "International Card", gender: "Female", category: "Cards" },
    { discount: 0.3, type: "Domestic Card", gender: "Male", category: "Cards" },
  ]

  constructor() { }

  getOffers(_category: string) {
    const filteredOffers = _category ? this.offers.filter(offer => offer.category == _category) : this.offers;
    return filteredOffers;
  }
}
