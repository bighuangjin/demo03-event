import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Event04Component } from './event04.component';

describe('Event04Component', () => {
  let component: Event04Component;
  let fixture: ComponentFixture<Event04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Event04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Event04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
