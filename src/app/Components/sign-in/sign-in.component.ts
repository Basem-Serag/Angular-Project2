import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) { }


  'signIn' = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/([0-9a-z].*[A-Z])|([A-Z].*[a-z])/)])
  })

  dataMessage = ''
  isError = false
  isSuccess = false

  signInValue() {

    if (this.signIn.valid ) {

      this._AuthService.signIn(this.signIn.value).subscribe(data => {

        if (data.message == 'success') {

          localStorage.setItem('TOKEN', data.token)
          this.isError = false
          this.isSuccess = true
          this.dataMessage = data.message
          setTimeout(() => this._Router.navigate(['/profile']), 1500)

        } else {
          this.dataMessage = data.message
          this.isError = true
          this.isSuccess = false
        }

      })

    }

  }
  ngOnInit(): void { }

}