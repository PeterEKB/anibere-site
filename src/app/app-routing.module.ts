import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Anibere | Home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'booking',
    title: 'Anibere | Booking',
    loadChildren: () =>
      import('./features/booking/booking.module').then((m) => m.BookingModule),
  },
  {
    path: 'shop',
    title: 'Anibere | Shop',
    loadChildren: () =>
      import('./features/shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'about',
    title: 'Anibere | About',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  { path: 'home', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
