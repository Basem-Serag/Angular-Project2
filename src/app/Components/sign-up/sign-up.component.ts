import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // users:any['']
  constructor(private _AuthService: AuthService, private _Router: Router) {
    // this.users = [this.signUp.controls.value];
    // localStorage.setItem('USERS' , this.users)
    // console.log(this.users);

    // let user =  localStorage.getItem('user')
    // console.log(user);
    
    
    
  }

  signUp = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9_]{1,15}$/)]),
    last_name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9_]{1,15}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.pattern(/[1-9]{1}[0-9]/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/([0-9a-z].*[A-Z])|([A-Z].*[a-z])/)])
  })
  
  
   user : any[]

  isSignUpValid = { 'background-color': 'gray', 'border': 'gray' };
  isSignUpInvalid = { 'background-color': '#138496', 'border': '138496' };
  isClicked = false
  dataSuccessMessage = ''
  dataErrorMessage = ''
  succsessMessageAlert = false
  errorMessageAlert = false

  signUpValue() {
    // this.user = this.signUp.value

    // console.log(this.user);
    

  //   this.isClicked = true


  //   if (this.signUp.valid) {


  //     this._AuthService.signUp(this.signUp.value).subscribe(data => {
  //       if (data.message == 'success') {

  //         this.signUp.reset()
  //         this.isClicked = false
  //         this.succsessMessageAlert = true
  //         this.errorMessageAlert = false
  //         setTimeout( ()=> this._Router.navigate(['/signin']) , 1500);
  //         this.dataSuccessMessage = data.message
          
  //       }
  //       else {
  //         this.dataErrorMessage = data.errors.email.message
  //         this.succsessMessageAlert = false
  //         this.errorMessageAlert = true
  //         this.isClicked = false

  //       }
  //       console.log(data);


  //     })

  //   }

  }



  ngOnInit() {


  }

}
