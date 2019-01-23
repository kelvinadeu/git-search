import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import {GitSearchFormComponent} from '../git-Search-form/git-Search-form.Component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes:Routes=[
  {path:"git-serch-form",component:GitSearchForm},
  {path:'**',component:PageNotFoundComponent},
  {path:"",redirectTo:"/git-search-form",pathMatch:"full"},
  {path:'**',component:PageNotFoundComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
