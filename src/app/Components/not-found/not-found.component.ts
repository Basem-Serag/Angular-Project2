import { Component, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder , FormControl } from "@angular/forms";

export interface Subject {
  name: string;
}



@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup;

  GradeArray: any = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
  SubjectsArray: Subject[] = [];


  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      name: [''],
      email: [''],
      gender: ['Male'],
      dob: [''],      
      grade: [''],
      subjects: [this.SubjectsArray]
    })
  }

  'newForm' = new FormGroup({
    id: new FormControl(),
    user: new FormControl()
  })



  submitForm() {
    console.log(this.myForm.value)
    localStorage.setItem('USER' , JSON.stringify( this.myForm.value))
  }

  anotherForm(){
    console.log(this.myForm.value + 'hello')
    localStorage.setItem('NEW_USER' , JSON.stringify( this.myForm.value))
    

  }

}
