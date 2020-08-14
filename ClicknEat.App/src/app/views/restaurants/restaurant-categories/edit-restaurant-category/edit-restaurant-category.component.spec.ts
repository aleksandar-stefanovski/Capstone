import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestaurantCategoryComponent } from './edit-restaurant-category.component';

describe('EditRestaurantCategoryComponent', () => {
  let component: EditRestaurantCategoryComponent;
  let fixture: ComponentFixture<EditRestaurantCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRestaurantCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRestaurantCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
