import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  categories: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
    this.categories = afs.collection('categories').valueChanges();
  }

  ngOnInit() {
  }
}
