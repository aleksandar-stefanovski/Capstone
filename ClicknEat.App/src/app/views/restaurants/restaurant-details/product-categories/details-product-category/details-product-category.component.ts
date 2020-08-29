import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategory, Products } from '../../../../../models/restaurant/restaurant.model';
import { ProductsService } from '../../../../../services/products.service';
import { ProductCategoryService } from '../../../../../services/product-category.service';

@Component({
  selector: 'app-details-product-category',
  templateUrl: './details-product-category.component.html',
  styleUrls: ['./details-product-category.component.scss']
})
export class DetailsProductCategoryComponent implements OnInit {

  id: any;
  productCategory?: ProductCategory;

  constructor(private productsService: ProductsService, private productCategoryService: ProductCategoryService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProductCategory();
  }

  getProductCategory() {
    this.productCategoryService.getProductCategory(this.id).subscribe((res: any) => {
      this.productCategory = res as ProductCategory;

      console.log('From Component PROD CAT', this.productCategory);
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((res: any) => {
      const deletedContrat = this.productCategory.products.find(x => x.id === id);
      this.productCategory.products.splice(this.productCategory.products.indexOf(deletedContrat), 1);
    });
  }
}
