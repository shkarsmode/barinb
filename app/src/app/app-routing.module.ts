import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/layout/components/layout/layout.component';
import { NotfoundComponent } from 'src/layout/components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // routes
    ],
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
