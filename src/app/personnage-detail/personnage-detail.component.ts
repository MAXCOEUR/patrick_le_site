import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingletonListePersonnages } from '../personnage/SingletonListePersonnage';
import { Personnage } from '../personnage/Personnage';

@Component({
  selector: 'app-personnage-detail',
  templateUrl: './personnage-detail.component.html',
  styleUrls: ['./personnage-detail.component.css']
})
export class PersonnageDetailComponent {
  personnage: Personnage = new Personnage("null","null","null");
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Récupération de l'id de l'URL
    const foundPersonnage = SingletonListePersonnages.getInstance().listeEpisode.find(e => e.id.toString() === id); // Recherche de l'épisode correspondant
    if (foundPersonnage) {
      this.personnage = foundPersonnage;
    } else {
      this.personnage = new Personnage("null", "null", "null");
    }
  }
}
