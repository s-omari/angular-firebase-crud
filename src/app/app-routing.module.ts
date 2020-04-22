import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {path: '' , loadChildren: './modules/users/users.module#UsersModule' }
  // {path: '' ,
  // loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) 
  // },
  {path: '' ,
  loadChildren: () => import('./modules/crud/crud.module').then(m => m.CrudModule) 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

