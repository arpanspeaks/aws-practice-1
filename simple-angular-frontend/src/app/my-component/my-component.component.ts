import { Component, OnInit } from '@angular/core';
import { MyComponentService } from './my-component.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  message: any;

  constructor(private myService: MyComponentService) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    this.myService.getMessage().subscribe(data => {
      this.message = data;
    }, error => {
      this.message = error.message;
    });
  }

}
