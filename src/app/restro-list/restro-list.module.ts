import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestroListComponent } from './restro-list/restro-list.component';



@NgModule({
  declarations: [
    RestroListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RestroListComponent
  ]
})
export class RestroListModule { }
