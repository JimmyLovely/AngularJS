import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisesComponent }       from './crisises.component';
import { CrisisDetailComponent }     from './crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: 'a',
        component: CrisisesComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent
          },
          {
            path: 'b',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }