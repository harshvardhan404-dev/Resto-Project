import { Injectable } from '@angular/core';
import { RegistrationRequest } from '../Models/registration-request';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  private userData!: RegistrationRequest;

  constructor() { }
  sample(): void {
    console.log('Sample service method called');
  }

  updateName(): void {
    console.log('Update name called from service');
  }
  saveUser(data: RegistrationRequest): void {
    this.userData = data;
    console.log("User Data Saved:", this.userData);
  }
  getUser(): RegistrationRequest {
    return this.userData;
  }
}
