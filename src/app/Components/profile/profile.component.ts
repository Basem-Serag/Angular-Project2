import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';
import jwt_decode from "jwt-decode";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  allNotes: any
  addNote: FormGroup
  token
  decoded
  isLoad = false

  constructor(private _NotesService: NotesService, private fb: FormBuilder) {

    this.token = localStorage.getItem('TOKEN');
    this.decoded = jwt_decode(this.token);
    this.getAllNotes()
  }


  ngOnInit(): void {

    this.addNote = this.fb.group({

      title: ['', Validators.required],
      desc: ['', Validators.required]

    })
  }


  getAllNotes() {
    let userData = {
      token: this.token,
      userID: this.decoded._id
    }

    this._NotesService.getAllNotes(userData).subscribe(data => {

      this.allNotes = data.Notes
      this.isLoad= true
      console.log(this.allNotes);

    })

  }


  addData() {

    let data = {
      title: this.addNote.controls.title.value,
      desc: this.addNote.controls.desc.value,
      citizenID: this.decoded._id,
      token: this.token
    }

    this._NotesService.addNote(data).subscribe(res => {

      if (res.message == 'success') {
        $('#addNote').modal('hide')
        this.isLoad = false
        this.getAllNotes()
        this.addNote.reset()
      }
      console.log(res);

    })

    // console.log(this.addNote.value);

  }

}
