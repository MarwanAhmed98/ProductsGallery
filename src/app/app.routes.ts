import { Routes } from '@angular/router';
export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () => import('./layouts/auth-layout/authlayout/authlayout.component').then(m => m.AuthlayoutComponent),
        children: [
            {
                path: 'Login',
                loadComponent: () => import('./pages/login/login/login.component').then(m => m.LoginComponent),
                title: 'Login'
            },
            {
                path: 'Register',
                loadComponent: () => import('./pages/register/register/register.component').then(m => m.RegisterComponent),
                title: 'Register'
            }
        ]
    },
    {
        path: '',
        loadComponent: () => import('./layouts/blank-layout/blanklayout/blanklayout.component').then(m => m.BlanklayoutComponent),
        children: [
            {
                path: 'Home',
                loadComponent: () => import('./pages/home/home/home.component').then(m => m.HomeComponent),
                title: 'Home'
            },
            {
                path: 'Products',
                loadComponent: () => import('./pages/products/products/products.component').then(m => m.ProductsComponent),
                title: 'Products'
            },
            {
                path: 'Brands',
                loadComponent: () => import('./pages/brands/brands/brands.component').then(m => m.BrandsComponent),
                title: 'Brands'
            },
            {
                path: 'Categories',
                loadComponent: () => import('./pages/categories/categories/categories.component').then(m => m.CategoriesComponent),
                title: 'Categories'
            },
            {
                path: 'Cart',
                loadComponent: () => import('./pages/cart/cart/cart.component').then(m => m.CartComponent),
                title: 'Cart'
            },
            {
                path: 'Details/:id',
                loadComponent: () => import('./pages/details/details/details.component').then(m => m.DetailsComponent),
                title: 'Details'
            },
            {
                path: 'Checkout',
                loadComponent: () => import('./pages/checkout/checkout/checkout.component').then(m => m.CheckoutComponent),
                title: 'Checkout'
            },
            {
                path: '**',
                loadComponent: () => import('./pages/notfound/notfound/notfound.component').then(m => m.NotfoundComponent),
                title: 'Error 404'
            }
        ]
    }
]
