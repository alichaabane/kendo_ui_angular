import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {GridComponent} from "./components/grid/grid.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  // Optionally, you can add a wildcard route for handling unknown routes
  {
    path: '**',
    redirectTo: '/'
    // You can also create a custom component for handling 404 errors
    // component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
