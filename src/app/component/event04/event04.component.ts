import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event04',
  templateUrl: './event04.component.html',
  styleUrls: ['./event04.component.css']
})
export class Event04Component implements OnInit {
  innerData = '';
  @Input()
  data;
  @Output()
  dataChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  handleInput(e) {
    this.innerData = e.srcElement.value;
    this.dataChange.emit(this.innerData);
  }
}
