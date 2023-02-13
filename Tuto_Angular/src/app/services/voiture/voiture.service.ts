import { Injectable } from '@angular/core';
import { Voiture } from 'src/app/classes/Voiture';


@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  //Initialisation de la liste des voitures
  liste_voitures: Array<Voiture> = [];

  //Création des voitures
  mini: Voiture = new Voiture(0, "Mercedes", "", "noire", ["Rova", "Samy", "Julie"], 0);

  constructor() {
    this.liste_voitures.push(this.mini);
  }

  listVoitures() {
    return this.liste_voitures;
  }

}
