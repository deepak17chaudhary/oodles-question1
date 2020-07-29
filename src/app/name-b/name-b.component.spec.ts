import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameBComponent } from './name-b.component';

describe('NameBComponent', () => {
  let component: NameBComponent;
  let fixture: ComponentFixture<NameBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
