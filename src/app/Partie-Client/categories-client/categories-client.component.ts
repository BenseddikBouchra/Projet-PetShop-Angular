import { Component, OnInit } from '@angular/core';
import { latestPet } from 'src/app/Beans/latestpet';
import { latestproduct } from 'src/app/Beans/latestproduct';
import { specialpet } from 'src/app/Beans/specialpet';
import { PetsService } from 'src/app/Services/pets.service';
import { ProduitsService } from 'src/app/Services/produits.service';

@Component({
  selector: 'app-categories-client',
  templateUrl: './categories-client.component.html',
  styleUrls: ['./categories-client.component.css'],
})
export class CategoriesClientComponent implements OnInit {
  allChiens!: specialpet[];
  allChats!: specialpet[];
  allProduits!: latestproduct[];
  constructor(
    private pet_service: PetsService,
    private prod_service: ProduitsService
  ) {}

  ngOnInit(): void {
    this.getAllChiens();
    this.getAllChats();
    this.getAllProduits();
  }
  getAllChiens(): void {
    this.pet_service.AllChiens().subscribe(
      (response) => {
        this.allChiens = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getAllChats(): void {
    this.pet_service.AllChats().subscribe(
      (response) => {
        this.allChats = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getAllProduits(): void {
    this.prod_service.getAllProducts().subscribe(
      (response) => {
        this.allProduits = response;
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
