import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { router , RoutingComponents} from './crud.router';


@NgModule({
  declarations: [RoutingComponents],
  imports: [
    CommonModule,
    router,
  ]
})
export class CrudModule { }
