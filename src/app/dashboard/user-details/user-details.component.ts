import { Component, Input } from '@angular/core';

interface IUserData {
  name: string;
  age: number;
  country: string
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() userData: IUserData[] = [];
}
