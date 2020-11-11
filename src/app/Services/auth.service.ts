import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl = 'https://routeegypt.herokuapp.com/'

  signIn(data):Observable<any>{
    return this._HttpClient.post(this.baseUrl+ 'signIn' , data)
  }


  signUp(data):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 'signup' , data)
  }

  signOut(data):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 'signOut' , data)
  }

  isClient(){
    return !!localStorage.getItem('TOKEN')
  }

}


