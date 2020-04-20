import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {router , RoutingComponents} from './users-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersComponent, RoutingComponents],
  imports: [
    CommonModule,
    router,
    FormsModule
  ]
})
export class UsersModule { }
