import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClRestaurantDetailsComponent } from './cl-restaurant-details.component';

describe('ClRestaurantDetailsComponent', () => {
  let component: ClRestaurantDetailsComponent;
  let fixture: ComponentFixture<ClRestaurantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClRestaurantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClRestaurantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
