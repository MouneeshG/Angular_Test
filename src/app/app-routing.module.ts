import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmlpoyeeComponent } from './emlpoyee/emlpoyee.component';

const routes: Routes = [
  {path:'', component: EmlpoyeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
