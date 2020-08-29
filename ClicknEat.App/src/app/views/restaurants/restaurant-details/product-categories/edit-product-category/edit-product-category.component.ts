import { Component, OnInit } from '@angular/core';
import { ProductCategoryAddEdit } from '../../../../../models/product/productCategory.model';
import { ProductCategoryService } from '../../../../../services/product-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-product-category',
  templateUrl: '../add-product-category/add-edit-product-category.component.html',
  styleUrls: ['./edit-product-category.component.scss']
})
export class EditProductCategoryComponent implements OnInit {


  id: string;
  productCategoryAddEdit: ProductCategoryAddEdit = new ProductCategoryAddEdit();

  constructor(private location: Location, private productCategoryService: ProductCategoryService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.productCategoryAddEdit = {
      id: null,
      productCategoryName: ''
    };
  }

  editRestaurantCategory(form: NgForm) {
    this.productCategoryService.updateProductCategory(this.id, form.value).subscribe(res => {
      this.resetForm(form);
      this.goToRestaurantCat();
    });

    console.log(this.productCategoryAddEdit);
  }


  onSubmit(form: NgForm) {
    this.editRestaurantCategory(form);
  }

  goToRestaurantCat() {
    this.location.back();
  }
}
