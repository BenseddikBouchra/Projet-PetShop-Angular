import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidentifier-client',
  templateUrl: './sidentifier-client.component.html',
  styleUrls: ['./sidentifier-client.component.css']
})
export class SidentifierClientComponent implements OnInit {
  email: boolean = false;
  password: boolean = false;
  Infos = {
    email:'',
    pass: '',
}

  constructor() { }

  ngOnInit(): void {
  }
  connecter() {
    this.email = this.Infos.email === '';
    this.password = this.Infos.pass === ''
    if (this.email || this.password) {
            alert('veuiller saisir tous les champs');

      return;
    }
    else {
      alert('connexion reussie!')
}
  }

}
