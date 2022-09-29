import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflejosComponent } from './reflejos.component';

describe('ReflejosComponent', () => {
  let component: ReflejosComponent;
  let fixture: ComponentFixture<ReflejosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflejosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
