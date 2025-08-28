import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { BusinessRegisterComponent } from './business-register/business-register.component';
import { RegistrationRoutingModule } from './registration-routing.module'; 


@NgModule({
  declarations: [
    UserRegisterComponent,
    BusinessRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,//foe static forms
    RegistrationRoutingModule
  ],
  exports:[UserRegisterComponent]
})
export class UserRegistrationModule { }
