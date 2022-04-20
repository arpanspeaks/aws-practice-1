import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyComponentService } from './my-component.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  message: any;
  myForm!: FormGroup;

  constructor(private myService: MyComponentService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getMessage();
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  getMessage() {
    this.myService.getMessage().subscribe(data => {
      this.message = data;
    }, error => {
      this.message = error.message;
    });
  }

  onSubmit() {
    this.postMessage();
  }

  postMessage() {
    this.myService.postMessage(this.myForm.value).subscribe(data => {
      this.message = data;
    }, error => {
      this.message = error.message;
    });
  }

}
