import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

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
  constructor(public db: AngularFireDatabase) {
    this.entityList = db.list(this.selectedEntity.entityName).valueChanges();
    // this.db.list('haloproteins').push({ name: 'kinesin' , subunitCount: 3});
  }

  ngOnInit(): void {
    // this.selectedEntity = this.entities[1];
    console.log(this.entities[1])
  }
  selectEntity(entity) {
    this.selectedEntity = entity;
    this.entityList = this.db.list(entity.entityName).valueChanges();

    console.log(this.selectedEntity)
  }

}
