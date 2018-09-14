import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Event03Component } from './event03.component';

describe('Event03Component', () => {
  let component: Event03Component;
  let fixture: ComponentFixture<Event03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Event03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Event03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
