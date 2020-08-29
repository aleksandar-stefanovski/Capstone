import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductCategoryService } from '../../../../../services/product-category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategoryAddEdit } from '../../../../../models/product/productCategory.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-edit-product-category.component.html',
  styleUrls: ['./add-product-category.component.scss']
})
export class AddProductCategoryComponent implements OnInit {
  id: any;
  productCategoryAddEdit: ProductCategoryAddEdit = new ProductCategoryAddEdit();

  constructor(private location: Location, private productCategoryService: ProductCategoryService,
    private router: Router, private route: ActivatedRoute) { }

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

  createProductCat(form: NgForm) {
    this.productCategoryService.createProductCategory(this.id, form.value).subscribe(res => {
      this.resetForm(form);
      this.goToProductCat();
    });

    console.log(this.productCategoryAddEdit);
  }

  onSubmit(form: NgForm) {
    this.createProductCat(form);
  }

  goToProductCat() {
    this.location.back();
  }
}
