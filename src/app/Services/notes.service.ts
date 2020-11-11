import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl = 'https://routeegypt.herokuapp.com/'

  getAllNotes(data):Observable<any>{
    return  this._HttpClient.post(this.baseUrl + 'getUserNotes' , data)
  }
}
