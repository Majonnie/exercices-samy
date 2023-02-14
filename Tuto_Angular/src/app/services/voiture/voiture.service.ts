import { Injectable } from '@angular/core';
import { Voiture } from 'src/app/classes/Voiture';


@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  //Initialisation de la liste des voitures
  liste_voitures: Array<Voiture> = [];

  //Création des voitures
  voiture1: Voiture = new Voiture(0, "Mercedes", "", "noire", ["Rova", "Samy", "Julie"], 0);
  voiture2: Voiture = new Voiture(1, "Ford", "", "rouge", ["Rova", "Samy", "Julie"], 0);

  constructor() {
    this.liste_voitures.push(this.voiture1);
  }

  listVoitures() {
    return this.liste_voitures;
  }

}
