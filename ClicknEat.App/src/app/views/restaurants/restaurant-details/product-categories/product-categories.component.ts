import { Component, OnInit } from '@angular/core';
import { ProductCategories } from '../../../../models/restaurant/restaurant.model';
import { ProductCategoryService } from '../../../../services/product-category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {

  id: any;
  productCategories: ProductCategories[];

  constructor(private productCategoryService: ProductCategoryService,
    private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProductCategories();
  }

  getProductCategories() {
    this.productCategories = [];
    this.productCategoryService.getProductCategories(this.id).subscribe((res: any) => {
      this.productCategories = res as ProductCategories[];
      console.log('From Component Product Categories', this.productCategories);
    });
  }

  deleteProductCategory(id: string) {
    this.productCategoryService.deleteProductCategory(id).subscribe(res => {
      const deletedContrat = this.productCategories.find(x => x.id === id);
      this.productCategories.splice(this.productCategories.indexOf(deletedContrat), 1);
    });
  }
}
