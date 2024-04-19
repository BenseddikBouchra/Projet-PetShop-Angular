import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinscrire-client',
  templateUrl: './sinscrire-client.component.html',
  styleUrls: ['./sinscrire-client.component.css'],
})
export class SinscrireClientComponent implements OnInit {
  nom: boolean = false;
  email: boolean = false;
  phone: boolean = false;
  entreprise: boolean = false;
  adresse: boolean = false;
  password: boolean = false;
  card: boolean = false;
  mois: boolean = false;
  annee: boolean = false;
  cvc: boolean = false;
  Infos = {
  nom: '',
  email: '',
  phone:'',
  entreprise:'' ,
  adresse: '',
  password: '',
  numCarte :'',
  moisCarte: '',
    anneeCarte: '',
  cvc :''

}

  constructor(private router : Router) {}

  ngOnInit(): void { }

  inscrire() {
    this.nom = this.Infos.nom === '';
    this.email = this.Infos.email === '';
    this.phone = this.Infos.phone === '';
    this.entreprise = this.Infos.entreprise === '';
    this.adresse = this.Infos.adresse === '';
    this.password = this.Infos.password === '';
    this.card = this.Infos.numCarte === '';
    this.annee = this.Infos.anneeCarte === '';
    this.mois = this.Infos.moisCarte === '';
    this.cvc = this.Infos.cvc === '';

    if (this.nom || this.email || this.phone || this.password || this.adresse || this.cvc || this.card || this.entreprise || this.annee || this.mois) {
      alert('veuillez remplire tous les champs');

      return;
    }
    else {
      alert('inscription réussie ! ');
      this.router.navigate(['/client/sidentifier-client']);
    }

  }

}
