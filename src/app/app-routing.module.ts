import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-registration/user-register/user-register.component';
import { BookTableComponent } from './booking/book-table/book-table.component';
import { HomeComponent } from './shared/home/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./user-registration/user-registration.module').then(m=>m.UserRegistrationModule)
  },
  {
    path: 'booking',
    component: BookTableComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
