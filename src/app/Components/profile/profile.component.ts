import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _NotesService: NotesService) {

    let token = localStorage.getItem('TOKEN');
    let decoded = jwt_decode(token);
    console.log(decoded);

    let userData = {
      token,
      userID : `decoded._id`
    }

    console.log(userData.userID);
    

    this._NotesService.getAllNotes(userData).subscribe(data => {

    })
  }



  ngOnInit(): void {

  }

}
