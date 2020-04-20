import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  itemValue = '';
  items: Observable<any[]>;
  ledHistory: Observable<any[]>;


  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
    this.ledHistory = db.list('led_history').valueChanges();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }
}
