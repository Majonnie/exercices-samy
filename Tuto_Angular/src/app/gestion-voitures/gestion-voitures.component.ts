import { Component, OnInit } from '@angular/core';
import { Voiture } from '../classes/Voiture';
import { VoitureService } from '../services/voiture/voiture.service';

@Component({
  selector: 'app-gestion-voitures',
  templateUrl: './gestion-voitures.component.html',
  styleUrls: ['./gestion-voitures.component.css']
})
export class GestionVoituresComponent implements OnInit {

  liste_voitures: Array<Voiture> = [];

  constructor(private voitureService: VoitureService) {
    this.liste_voitures = this.voitureService.listVoitures();

  }

  ngOnInit(): void {
    let voiture1: Voiture = this.liste_voitures[0];

    console.log(voiture1.passagers);
    voiture1.removePassager(0.9);
    console.log(voiture1.passagers);
  }

}
