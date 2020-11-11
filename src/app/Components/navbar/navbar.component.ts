import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(public _AuthService:AuthService , private _Router:Router) { }

  ngOnInit(): void {

  }

  signOut(){
    localStorage.clear()
    this._Router.navigate(['/signin'])
    
  }

}
