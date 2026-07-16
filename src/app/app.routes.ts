import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

export const routes: Routes = [
    {
        path: 'home',component: Home, title : "Home - Eslam's shos"
    },
    {
        path: 'catalog',component: Catalog
    },
    {
        path: 'cart',component: CartComponent
    },
    {
        path: 'signIn',component: SignInComponent
    },
    {path :'',redirectTo: '/home',pathMatch:'full'}
];
