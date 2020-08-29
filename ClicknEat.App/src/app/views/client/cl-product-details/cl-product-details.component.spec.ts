import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClProductDetailsComponent } from './cl-product-details.component';

describe('ClProductDetailsComponent', () => {
  let component: ClProductDetailsComponent;
  let fixture: ComponentFixture<ClProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
