import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { SighUpComponent } from '../sigh-up/sigh-up.component';

const routes:Routes=[
  {path:'',redirectTo:'auth/login',pathMatch:'full'},
  {path:'',component:AuthComponent,children:[
    // {path:'login',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
    {path:'forgotPassword',component:ForgotPasswordComponent},
    // {path:'resetPassword',component:ResetPasswordComponent},
    {path:"SighUp",component:SighUpComponent}
  ]},
  
]

@NgModule({
  declarations: [
    AuthComponent,
    ForgotPasswordComponent,
    LoginComponent,
    SighUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
