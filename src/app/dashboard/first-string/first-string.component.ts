import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first-string',
  templateUrl: './first-string.component.html',
  styleUrls: ['./first-string.component.css']
})
export class FirstStringComponent {
  @Input() firstString?: string;
  @Output() newFirstStringEvent = new EventEmitter<string>();

  getFirstString() {
    this.newFirstStringEvent.emit(this.firstString);
    console.log(this.firstString)
  }
}
