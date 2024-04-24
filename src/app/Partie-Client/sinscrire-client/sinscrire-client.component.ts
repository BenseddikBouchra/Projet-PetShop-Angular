import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userBean } from 'src/app/Beans/userBean';
import { UserService } from 'src/app/Services/user.service';

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

  userInfos: userBean = {
    userNom: '',
    userEmail: '',
    userMotDePasse: '',
    userTelephone: '',
    userAdresse: '',
    userEntreprise: '',
    userNumCart: '',
    userCvc: '',
    moisExpCart: '',
    anneeExpCart: '',
  };

  constructor(private router: Router, private user_service: UserService) {}

  ngOnInit(): void {}

  inscrire() {
    this.nom = this.userInfos.userNom === '';
    this.email = this.userInfos.userEmail === '';
    this.phone = this.userInfos.userTelephone === '';
    this.entreprise = this.userInfos.userEntreprise === '';
    this.adresse = this.userInfos.userAdresse === '';
    this.password = this.userInfos.userMotDePasse === '';
    this.card = this.userInfos.userNumCart === '';
    this.annee = this.userInfos.anneeExpCart === '';
    this.mois = this.userInfos.moisExpCart === '';
    this.cvc = this.userInfos.userCvc === '';

    if (
      this.nom ||
      this.email ||
      this.phone ||
      this.password ||
      this.adresse ||
      this.cvc ||
      this.card ||
      this.entreprise ||
      this.annee ||
      this.mois
    ) {
      alert('veuillez remplire tous les champs');

      return;
    } else {
      this.user_service.addUser(this.userInfos).subscribe(
        (response) => {
          console.log("response", response);
          console.log("inscription reussie", response);
          alert('inscription reussie!');

        },
        (error) => {
          console.log("error", error);
        }
      );
    }
  }
}
