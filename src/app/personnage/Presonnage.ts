export class Personnage {
    private static idCurrent=0;
      id:number;
      nom: string;
      lienImage: string;
      description: string;
    
      constructor(nom: string, lienImage: string, description: string) {
        this.id=Personnage.idCurrent++;
        this.nom = nom;
        this.lienImage = lienImage;
        this.description = description;
      }
    }
    