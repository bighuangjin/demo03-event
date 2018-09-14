import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diy-evnet',
  templateUrl: './diy-evnet.component.html',
  styleUrls: ['./diy-evnet.component.css']
})
export class DiyEvnetComponent implements OnInit {
  @Output() handleAllOperation = new EventEmitter();
  constructor() {
    setTimeout(() => {
      this.handleAllOperation.emit('sss');
    }, 1000);
  }

  ngOnInit() {}
}
