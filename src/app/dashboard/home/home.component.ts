import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home = "Home";
  userName = "";
  backgroundColor = "";
  string1 = "Hello";
  string2 = "World"
  concatString = this.string1 + this.string2;

  ngOnInit(): void {
    console.log("ngOnInit of Home called ")
     this.backgroundColor = "red" 
  }

  alertName(value: string): void {
    alert(`Hello ${value}`);
  };

  getRandomColor(): void {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    this.backgroundColor = color;
  }

  concatingString(value: string): void {
    this.concatString = value;
  }

  
}
