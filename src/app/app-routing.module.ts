import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'movie/:id', component:MovieDetailComponent},
  {path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
