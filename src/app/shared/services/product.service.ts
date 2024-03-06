import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../types/products.type";
import {Observable} from "rxjs";
import {OrderType} from "../types/order.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:ProductType[] = [];
  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/tea');
  }


  getProduct(id: number): Observable<ProductType> {
   return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`);
  }

  createOrder(data: OrderType) {
    return this.http.post<{success: boolean, message?: string}>('https://testologia.site/order-tea', data)
  }
}
