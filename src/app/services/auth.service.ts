import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginForm!:FormGroup
  details={
    id:'12345',
    name:'Victor'
  }
 
   private messageSource = new BehaviorSubject(this.details);
   currentMessage = this.messageSource.asObservable();
   constructor() { }

   changeMessage(message: any) {
     this.messageSource.next(message);
   }
}
