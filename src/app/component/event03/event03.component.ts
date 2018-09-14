import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event03',
  templateUrl: './event03.component.html',
  styleUrls: ['./event03.component.css']
})
export class Event03Component implements OnInit {
  str = '';
  @Input() fly: string;
  @Output() flyChange: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  handleI(val) {
    this.flyChange.emit(val);
  }
}
