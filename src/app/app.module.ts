import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EpisodeComponent } from './episode/episode.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { JeuxComponent } from './jeux/jeux.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EpisodeComponent,
    PersonnageComponent,
    JeuxComponent,
    HeaderComponent,
    FooterComponent,
    EpisodeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
