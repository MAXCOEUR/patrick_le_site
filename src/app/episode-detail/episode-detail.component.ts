import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SingletonListepisode } from '../episode/SingletonListepisode';
import { Episode } from '../episode/Episode';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit {

  episode: Episode = new Episode("null", "null", "null");

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Récupération de l'id de l'URL
    const foundEpisode = SingletonListepisode.getInstance().listeEpisode.find(e => e.id.toString() === id); // Recherche de l'épisode correspondant
    if (foundEpisode) {
      this.episode = foundEpisode;
    } else {
      this.episode = new Episode("null", "null", "null");
    }
  }


  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
