import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  data = [
    {
      name: "Vraj Patel",
      age: 21,
      country: "India"
    },
    {
      name: "Kallirroi Yanis",
      age: 30,
      country: "Greek"
    },
    {
      name: "Efstathios Evgenia",
      age: 15,
      country: "UK"
    },
    {
      name: "Ishita Venkata",
      age: 20,
      country: "India"
    },
    {
      name: "SJ",
      age: 18,
      country: "India"
    },
    {
      name: "Prema Neeraj",
      age: 39,
      country: "UK"
    },
    {
      name: "Pradip Kanti",
      age: 19,
      country: "USA"
    },
    {
      name: "Anantha Chandana",
      age: 28,
      country: "USA"
    }
  ];
}
