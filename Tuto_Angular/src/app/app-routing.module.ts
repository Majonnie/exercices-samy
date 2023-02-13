import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionVoituresComponent } from './gestion-voitures/gestion-voitures.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gestion_voitures' },
  { path: 'gestion_voitures', component: GestionVoituresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
