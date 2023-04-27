import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JeuxComponent } from './jeux/jeux.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'jeux',component:JeuxComponent},
  {path:'personnage',component:PersonnageComponent},
  {path:'episode',component:EpisodeComponent},
  { path: 'episode/:id', component: EpisodeDetailComponent },

  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
