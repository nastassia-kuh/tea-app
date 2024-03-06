import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../shared/types/products.type";
import {ProductService} from "../../../shared/services/product.service";
import {Router} from "@angular/router";


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/']);
      }
    })
  }
}
