import { Component, OnInit } from '@angular/core';
import { specialpet } from 'src/app/Beans/specialpet';
import { PetsService } from 'src/app/Services/pets.service';

@Component({
  selector: 'app-specials-client',
  templateUrl: './specials-client.component.html',
  styleUrls: ['./specials-client.component.css'],
})
export class SpecialsClientComponent implements OnInit {
  constructor(private pet_service: PetsService) {}
  specialchats!: specialpet[];
  specialchiens!: specialpet[];

  ngOnInit(): void {
    this.getSpecialCats();
    this.getSpecialChiens();
  }

  getSpecialCats(): void {
    this.pet_service.specialChats().subscribe(
      (response) => {
        this.specialchats = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getSpecialChiens(): void {
    this.pet_service.specialChiens().subscribe(
      (response) => {
        this.specialchiens = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  achter(id: string, categorie: string) {
    console.log('id', id);
    console.log('categorie', categorie);
  }
}
