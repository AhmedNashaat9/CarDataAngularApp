import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlateComponent } from './view-plate.component';

describe('ViewPlateComponent', () => {
  let component: ViewPlateComponent;
  let fixture: ComponentFixture<ViewPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
