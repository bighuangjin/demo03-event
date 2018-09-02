import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyEvnetComponent } from './diy-evnet.component';

describe('DiyEvnetComponent', () => {
  let component: DiyEvnetComponent;
  let fixture: ComponentFixture<DiyEvnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiyEvnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyEvnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
