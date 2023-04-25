import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second-string',
  templateUrl: './second-string.component.html',
  styleUrls: ['./second-string.component.css']
})
export class SecondStringComponent {
  @Input() secondString? : string;
  @Output() newSecondStringEvent = new EventEmitter<string>();

  getSecondString() {
    this.newSecondStringEvent.emit(this.secondString);
    console.log(this.secondString)
  }
  
}
