import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAComponent } from './name-a.component';

describe('NameAComponent', () => {
  let component: NameAComponent;
  let fixture: ComponentFixture<NameAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
