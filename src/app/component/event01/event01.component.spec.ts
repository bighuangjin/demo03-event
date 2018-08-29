import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Event01Component } from './event01.component';

describe('Event01Component', () => {
  let component: Event01Component;
  let fixture: ComponentFixture<Event01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Event01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Event01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
