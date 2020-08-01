import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCategoryAddComponent } from './restaurant-category-add.component';

describe('RestaurantCategoryAddComponent', () => {
  let component: RestaurantCategoryAddComponent;
  let fixture: ComponentFixture<RestaurantCategoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCategoryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
