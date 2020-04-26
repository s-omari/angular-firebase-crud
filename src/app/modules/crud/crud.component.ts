import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
// import { map } from 'rxjs/operators';
// import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  // isHandset$: Observable<boolean> = breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );

  // entities = ['items' , 'users'];
  entities = [
    { entityName: 'items',
      mainField: 'content'
    },
    { entityName: 'haloproteins',
      mainField: 'name'
    }
  ];
  entityList: Observable<any[]>;
  selectedEntity = this.entities[0];
  selectedItem;
  constructor(public db: AngularFireDatabase) {
    this.entityList = db.list(this.selectedEntity.entityName).valueChanges();
    // this.db.list('haloproteins').push({ name: 'myosin' , subunitCount: 4 , id: uuid()});
  }

  ngOnInit(): void {
    // this.selectedEntity = this.entities[1];
    console.log(this.entities[1])
  }
  selectEntity(entity) {
    this.selectedEntity = entity;
    this.entityList = this.db.list(entity.entityName).valueChanges();
    console.log(this.entityList)

    console.log(this.selectedEntity)
  }
  selectItem(item) {
    console.log(item);
    this.selectedItem = item;
  }

}
