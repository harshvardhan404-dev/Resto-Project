import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  name: string='harsh';

  employees=[
    {name:'harsh',age:20,salary:53677,isVisible:true},
    {name:'jhon',age:23,salary:35467,isVisible:false},
    {name:'harry',age:34,salary:564778,isVisible:true}
  ]

  constructor(){
    this.name='raj';
  }
  updateName():void{
    this.name='HArry'
  }

  toggleVisibility(index:number) : void{
    this.employees[index].isVisible=!this.employees[index].isVisible;
  }
}
