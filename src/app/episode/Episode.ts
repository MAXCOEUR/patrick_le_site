export class Episode {
  private static idCurrent=0;
    id:number;
    titre: string;
    lien: string;
    description: string;
  
    constructor(titre: string, lien: string, description: string) {
      this.id=Episode.idCurrent++;
      this.titre = titre;
      this.lien = lien;
      this.description = description;
    }
  }
  