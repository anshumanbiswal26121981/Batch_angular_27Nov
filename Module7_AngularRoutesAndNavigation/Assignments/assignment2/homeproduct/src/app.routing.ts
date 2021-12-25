// import angular librarries
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import components
import { HomeComponent } from "./app/components/home/home.component";
import { ProductComponent} from "./app/components/product/product.component";
import { ContactComponent } from "./app/components/contact/contact.component";
import { ErrorComponent } from "./app/components/error/error.component";
import { ProductdetailsComponent } from "./app/components/productdetails/productdetails.component";


// create the mapping => routes
const routes: Routes = [
    { 
        path: 'home', // http://localhost:4200/home
        component: HomeComponent
    },
    { 
        path: 'products',
        component: ProductComponent,
        children: [
            {
                path: 'productdetails/:id',
                component: ProductdetailsComponent
            }
        ],
    },
    { 
        path: 'contacts',
        component: ContactComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { 
        path: '**',
        component: ErrorComponent
    }
]


// export the mapping
export const routingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes);