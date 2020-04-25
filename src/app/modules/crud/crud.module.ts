import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { router , RoutingComponents} from './crud.router';
import { SharedModule} from '../../shared/shared.module';
// import { ThemeModule} from '../../@theme/theme.module';


@NgModule({
  declarations: [RoutingComponents],
  imports: [
    CommonModule,
    router,
    SharedModule,
    // ThemeModule
  ]
})
export class CrudModule { }
