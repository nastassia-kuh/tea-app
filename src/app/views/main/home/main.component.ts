import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})
export class MainComponent implements OnInit, OnDestroy {

  popupShow: boolean = false;
  private observable: Observable<string>

  constructor() {
    this.observable = new Observable<string>((observer) => {
      setTimeout(() => {
        observer.next()
      }, 10000)
    })
  }

  private subscription: Subscription | null = null;

  ngOnInit(): void {

    this.subscription = this.observable.subscribe(() => {
      this.popupShow = true
    })
  }

  close() {
    this.popupShow = false
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}


