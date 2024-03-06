import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {MainComponent} from "./home/main.component";
import {NgbdAccordionToggle} from "./accordion/accordion.component";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbdAccordionToggle,
    MainRoutingModule
  ],
  exports: [
    MainRoutingModule
  ]
})
export class MainModule { }
