// import angular librarries
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



// import components
import { AccountsComponent } from "./components/accounts/accounts.component";
import { LoansComponent } from "./components/loans/loans.component";
import { CardsComponent } from "./components/cards/cards.component";
import { OffersComponent } from "./components/offers/offers.component";
import { ErrorComponent } from "./components/error/error.component";
import { DownloadComponent } from "./components/download/download.component";

/// Route guard
import { AuthGuardService } from "./guards/auth-guard.service";

// create the mapping => routes
const routes: Routes = [
    { 
        path: 'accounts', // http://localhost:4200/accounts
        component: AccountsComponent,
        children: [
            { 
                path: 'offers',   // http://localhost:4200/accounts/offers
                component: OffersComponent
            },
            {
                path: 'download/:type', // http://localhost:4200/accounts/download/mini
                component: DownloadComponent
            }
        ],
        canDeactivate: [ AuthGuardService ]
    },
    { 
        path: 'loans',
        component: LoansComponent,
        children: [
            { 
                path: 'offers',
                component: OffersComponent
            }
        ],
        canActivate: [ AuthGuardService ]
    },
    { 
        path: 'cards',
        component: CardsComponent,
        children: [
            { 
                path: 'offers',
                component: OffersComponent
            }
        ]
    },
    { 
        path: 'offers',
        component: OffersComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'accounts'
    },
    { 
        path: '**',
        component: ErrorComponent
    }
]


// export the mapping
export const routingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes);