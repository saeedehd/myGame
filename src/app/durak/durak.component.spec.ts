import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurakComponent } from './durak.component';

describe('DurakComponent', () => {
  let component: DurakComponent;
  let fixture: ComponentFixture<DurakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
