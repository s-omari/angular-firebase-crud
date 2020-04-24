import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule} from '../@theme/theme.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
