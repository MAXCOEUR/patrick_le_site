import { Personnage } from './Personnage';

export class SingletonListePersonnages {
    private static instance: SingletonListePersonnages;
    listeEpisode: Personnage[];

    private constructor() {
        this.listeEpisode = [
            new Personnage("Patrick", "Patrick.png", "C'est un stégosaure, il vit dans une grotte avec ses copains et possède une super force qu'il utilise pour les sauver en cas de danger."),
            new Personnage("Pouet", "Pouet.png", "C'est une poule. Il est ami avec Patrick et se fait capturer par Thierry lors de l'épîsode 1."),
            new Personnage("saucisse", "saucisse.png", "C'est une coccinelle et aussi un ami de Patrick"),
            new Personnage("Kalash", "Kalash.png", "C'est un magicarpe shiny et ami de Patrick."),
            new Personnage("Thierry", "Thierry.png", "T-rex méchant lors de l'épisode 1 où il capture Pouet. Patrick le remet dans le droit chemin et devient son ami par la suite. C'est un fervent combattant."),
            new Personnage("Pascal", "Pascal.png", "Roi autoproclamé d'un chateau, il capture un gentil renard et fait face à Patrick lors de l'épisode 2."),
            new Personnage("Pamouk", "Pamouk.png", "Méchant au service d'un mystérieux chef alien, il combat Patrick lors de l'épisode 3."),
            new Personnage("Brigitte", "Brigitte.png", "Vieux monsieur qui attend la venu annoncée de Patrick sur une planète extra-terrestre et qui l'aide dans sa quête.  On ignore d'où il vient."),
        ];
    }

    public static getInstance(): SingletonListePersonnages {
        if (!SingletonListePersonnages.instance) {
            SingletonListePersonnages.instance = new SingletonListePersonnages();
        }
        return SingletonListePersonnages.instance;
    }
}
