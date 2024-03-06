import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],

})
export class OrderComponent implements OnInit {

  showSuccess: boolean = false;
  showForm: boolean = true;
  showError: boolean = false;
  product = '';

  constructor( private fb: FormBuilder,
              private productService: ProductService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.product = params['product']
    })
    this.orderForm.patchValue({
      product: this.product
    });
  }

  orderForm = this.fb.group({
    product: [{value: this.product, disabled: true}],
    name: ['', [Validators.required, Validators.pattern('^[а-яА-Яa-zA-Z]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[а-яА-Яa-zA-Z]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-я0-9\\s\\-\\/]+$')]],
    comment: ['']
  })


  signIn() {
    this.productService.createOrder({
      name: this.orderForm.get('name')!.value,
      last_name: this.orderForm.get('last_name')!.value,
      phone: this.orderForm.get('phone')!.value,
      country: this.orderForm.get('country')!.value,
      zip: this.orderForm.get('zip')!.value,
      product: this.orderForm.get('product')!.value,
      address: this.orderForm.get('address')!.value,
      comment: this.orderForm.get('comment')?.value
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          this.showSuccess = true;
          this.showForm = false;

        } else {
          this.showError = true
        }
      })
    this.orderForm.reset();
  }
}
