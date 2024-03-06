import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-accordion-toggle',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './accordion.component.html',
})
export class NgbdAccordionToggle {}
