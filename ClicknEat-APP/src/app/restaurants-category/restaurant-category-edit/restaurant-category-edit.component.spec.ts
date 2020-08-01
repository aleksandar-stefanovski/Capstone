import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCategoryEditComponent } from './restaurant-category-edit.component';

describe('RestaurantCategoryEditComponent', () => {
  let component: RestaurantCategoryEditComponent;
  let fixture: ComponentFixture<RestaurantCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
