import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MainModule} from "./views/main/main.module";
import {OrderModule} from "./views/order/order.module";
import {ProductsModule} from "./views/products/products.module";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    OrderModule,
    ProductsModule,
    RouterModule,
    NgbModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
