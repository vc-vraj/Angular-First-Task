import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-string-concat',
  templateUrl: './string-concat.component.html',
  styleUrls: ['./string-concat.component.css']
})
export class StringConcatComponent {
  @Output() newStringEvent = new EventEmitter<string>();

  

  concatingString() {
    this.newStringEvent.emit()
  }

}
