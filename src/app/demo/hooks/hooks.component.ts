import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructos called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, "onChanges");
  }

  ngOnInit(): void { 
    console.log("onInit of Hooks");
  }

  ngDoCheck(): void {
    console.log("docheck")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
  ngAfterContentInit(): void {
    console.log("after content init")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
      console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked')
  }
  
}
