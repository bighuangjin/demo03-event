import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  pages = [1, 2, 3];
  act = 1;
  constructor() {}

  ngOnInit() {}
}
