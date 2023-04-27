import { Episode } from './Episode';

export class SingletonListepisode {
    private static instance: SingletonListepisode;
    listeEpisode: Episode[];

    private constructor() {
        this.listeEpisode = [
            new Episode("Patrick épisode 1", "https://www.youtube.com/embed/l1oIhw3PvQQ", "ceci est l'épisode 1"),
            new Episode("Patrick épisode 2", "https://www.youtube.com/embed/s41U8uvpmBw", "ceci est l'épisode 2"),
            new Episode("Patrick Hors Série 1", "https://www.youtube.com/embed/NEc3FiFdRQI", "ceci est un épisode hors série"),
            new Episode("Patrick épisode 3", "https://www.youtube.com/embed/WqjnWBqeuv8", "ceci est l'épisode 3")
        ];
    }

    public static getInstance(): SingletonListepisode {
        if (!SingletonListepisode.instance) {
            SingletonListepisode.instance = new SingletonListepisode();
        }
        return SingletonListepisode.instance;
    }
}
