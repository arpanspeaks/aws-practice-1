import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyComponentService } from './my-component.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  people: any;
  myForm!: FormGroup;

  constructor(private myService: MyComponentService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getPeople();
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  getPeople() {
    this.myService.getPeople().subscribe(people => {
      this.people = JSON.parse(people);
    }, error => {
      console.log(error.message);
    });
  }

  onSubmit() {
    this.addPerson();
    this.myForm.reset();
  }

  addPerson() {
    this.myService.addPeople(this.myForm.value).subscribe(person => {
      alert(this.myForm.value.firstName + ' ' + this.myForm.value.lastName + ' added successfully');
      this.getPeople();
    }, error => {
      console.log(error.message);
    });
  }

}
