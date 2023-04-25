import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  InitialFirstString = "Hello";
  InitialSecondString = "World";
  concatString = `${this.InitialFirstString} ${this.InitialSecondString}`;
  
  getFirstString(value: string): void {
    this.InitialFirstString = value;
  }  

  getSeconfString(value: string): void {
    this.InitialSecondString = value;
  }

  concating(): void {
    this.concatString = `${this.InitialFirstString} ${this.InitialSecondString}`;
  }
}
