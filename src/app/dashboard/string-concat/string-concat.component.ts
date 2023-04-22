import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-string-concat',
  templateUrl: './string-concat.component.html',
  styleUrls: ['./string-concat.component.css']
})
export class StringConcatComponent {
  @Input() concatString : string;
  @Input() string1 : string;
  @Input() string2 : string;
  @Output() newStringEvent = new EventEmitter<string>();

  constructor() {
    this.concatString = "";
    this.string1 = "";
    this.string2 = "";
  }

  concatingString() {
    this.concatString = this.string1 + this.string2;
    console.log(this.concatString)
    this.newStringEvent.emit(this.concatString)
  }

}
