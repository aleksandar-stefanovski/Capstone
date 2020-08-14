import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRestaurantCategoryComponent } from './details-restaurant-category.component';

describe('DetailsRestaurantCategoryComponent', () => {
  let component: DetailsRestaurantCategoryComponent;
  let fixture: ComponentFixture<DetailsRestaurantCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRestaurantCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRestaurantCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
