import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutePaths} from '../app/shared/enums/route-paths.enum';
import { StartComponent } from '../app/pages/start/start.component';
import { ListComponent } from 'src/app/pages/list/list.component';
import { UpdateComponent } from 'src/app/pages/update/update.component';

const routes: Routes = [
  {path: RoutePaths.START, component: StartComponent, pathMatch: RoutePaths.FULL_PATH_MATCH},
  {path: RoutePaths.LIST, component: ListComponent},
  {path: RoutePaths.UPDATE, component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
