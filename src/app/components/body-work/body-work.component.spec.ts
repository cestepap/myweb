import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWorkComponent } from './body-work.component';

describe('BodyWorkComponent', () => {
  let component: BodyWorkComponent;
  let fixture: ComponentFixture<BodyWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
