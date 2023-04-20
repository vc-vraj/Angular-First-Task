import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  home = "Home";
  userName = "";
  backgroundColor = "white";

  alertName(value: string): void {
    alert(`Hello ${value}`);
  };

  getRandomColor(): void {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.backgroundColor = color;
  }
}
