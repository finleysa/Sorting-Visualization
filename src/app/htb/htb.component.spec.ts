import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtbComponent } from './htb.component';

describe('HtbComponent', () => {
  let component: HtbComponent;
  let fixture: ComponentFixture<HtbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
