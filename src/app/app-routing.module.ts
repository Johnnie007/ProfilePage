import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'projects', component: HomepageComponent},
  {path: 'books', component: HomepageComponent},
  {path: 'shop', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
