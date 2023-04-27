import { Component } from '@angular/core';

import { SingletonListepisode } from './SingletonListepisode';
import { Episode } from './Episode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent {

  listeEpisode: Episode[];

  constructor(private router: Router) { 
    this.listeEpisode = SingletonListepisode.getInstance().listeEpisode;
  }

  onEpisodeClick(episode: Episode) {
    this.router.navigate(['/episode', episode.id]);
  }

}
