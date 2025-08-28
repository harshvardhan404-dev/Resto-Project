import { Component } from '@angular/core';
import { UserRegistrationService } from '../services/user-registration.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  name: string = 'harsh';
  username: string = '';

  //registerService:RegisterService=new RegisterService();

  user = {
    name: '',
    email: '',
    phone: '',
    password: ''
  }

  employees = [
    { name: 'harsh', age: 20, salary: 53677, isVisible: true },
    { name: 'jhon', age: 23, salary: 35467, isVisible: false },
    { name: 'harry', age: 34, salary: 564778, isVisible: true }
  ]

  constructor(private registerService: UserRegistrationService) {
    this.name = 'raj';
    registerService.sample();
  }
  updateName(): void {
    this.name = 'HArry';
    this.registerService.updateName();
  }

  toggleVisibility(index: number): void {
    this.employees[index].isVisible = !this.employees[index].isVisible;
  }
  onSubmit(form: NgForm): void {
    console.log(form);
    if (form.valid) {
      this.registerService.saveUser(this.user);
      console.log("Form submitted successfully!", this.user);
      alert("Registration Successful ");
    } else {
      console.log("Form is invalid!");
      alert("Form is invalid");
    }
  }
}
