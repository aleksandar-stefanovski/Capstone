import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductCategoryComponent } from './details-product-category.component';

describe('DetailsProductCategoryComponent', () => {
  let component: DetailsProductCategoryComponent;
  let fixture: ComponentFixture<DetailsProductCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProductCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
