import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCategoryDetailsComponent } from './restaurant-category-details.component';

describe('RestaurantCategoryDetailsComponent', () => {
  let component: RestaurantCategoryDetailsComponent;
  let fixture: ComponentFixture<RestaurantCategoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCategoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
