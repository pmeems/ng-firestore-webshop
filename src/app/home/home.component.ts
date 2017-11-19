import {Component, HostListener, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  numberColumns = 4;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('screen width', event.target.innerWidth);
    this.setNumColumns(event.target.innerWidth);
  }

  @HostListener('window:onload', ['$event'])
  onLoad(event) {
    console.log('screen width onload', event.target.innerWidth);
    this.setNumColumns(event.target.innerWidth);
  }

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection('gummiapan', ref => ref.limit(12));
    this.products = this.productsCollection.valueChanges();
  }

  ngOnInit() {
    console.log('Initial screen width', window.screen.availWidth);
    this.setNumColumns(window.screen.availWidth);
  }

  setNumColumns(width: number) {

    if (width < 700) {
      this.numberColumns = 3;
    } else if (width < 1200) {
      this.numberColumns = 4;
    } else {
      this.numberColumns = 5;
    }
  }

}
