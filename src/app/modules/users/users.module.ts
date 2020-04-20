import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {router , RoutingComponents} from './users-routing.module';


@NgModule({
  declarations: [UsersComponent, RoutingComponents],
  imports: [
    CommonModule,
    router
  ]
})
export class UsersModule { }
