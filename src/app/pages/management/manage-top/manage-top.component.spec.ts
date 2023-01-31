import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTopComponent } from './manage-top.component';

describe('ManageComponent', () => {
  let component: ManageTopComponent;
  let fixture: ComponentFixture<ManageTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageTopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
