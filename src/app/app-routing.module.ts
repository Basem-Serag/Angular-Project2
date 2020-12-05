import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path: '' , redirectTo:'signin' , pathMatch:'full'},
  {path: 'signin' , component:SignInComponent},
  {path: 'signup' , component:SignUpComponent},
  {path: 'profile' , canActivate:[AuthGuard] , component:ProfileComponent},
  {path: 'signin' , component:SignInComponent},
  {path: '**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
