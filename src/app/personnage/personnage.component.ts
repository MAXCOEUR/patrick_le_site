import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personnage } from './presonnage';
import { SingletonListePersonnages } from './SingletonListePersonnage';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent {
  ListePeronnage:Personnage[];
  constructor(private router: Router){
    this.ListePeronnage =SingletonListePersonnages.getInstance().listeEpisode;
  }
  onEpisodeClick(personnage: Personnage) {
    this.router.navigate(['/personnage', personnage.id]);
  }
}
