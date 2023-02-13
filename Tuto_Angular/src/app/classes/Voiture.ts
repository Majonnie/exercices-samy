export class Voiture {

    //Attributs de la classe Voiture

    id: number;
    marque: string;
    modele: string;
    couleur: string;
    passagers: Array<string>;
    compteur: number;


    constructor(
        id: number,
        marque: string,
        modele: string,
        couleur: string,
        passagers: Array<string>,
        compteur: number
    ) {
        this.id = id;
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.passagers = passagers;
        this.compteur = compteur;
    }


    //Méthodes de la classe voiture

    avancer(distance: number) {
        this.compteur += distance;
    }

    reculer(distance: number) {
        this.compteur -= distance;
    }

    addPassager(nom: string) {
        this.passagers.push(nom);
    }

    removePassager(index: number) {

        index = parseInt(index.toString());

        if (index >= 0 && index < this.passagers.length) { //On vérifie que l'index est correct
            this.passagers.splice(index, 1);
            //à tester
        }
        else {
            console.log("L'index " + index + " est incorrect.");
        }
    }
}