import { Component, OnInit, HostListener } from '@angular/core';
import { PetsService } from 'src/app/Services/pets.service';
import { pets } from 'src/app/Beans/petsBean';
import { produits } from 'src/app/Beans/produitsBean';
import { ProduitsService } from 'src/app/Services/produits.service';
import { UserService } from 'src/app/Services/user.service';
import { latestPet } from 'src/app/Beans/latestpet';
import { latestproduct } from 'src/app/Beans/latestproduct';
@Component({
  selector: 'app-acceuil-client',
  templateUrl: './acceuil-client.component.html',
  styleUrls: ['./acceuil-client.component.css'],
})
export class AcceuilClientComponent implements OnInit {
  constructor(
    private pets_service: PetsService,
    private produits_service: ProduitsService,
    private users_service: UserService
  ) {}

  showButton: boolean = false; // Variable to control button visibility
  mostPopularChat!: pets;
  mostPopularChien!: pets;
  mostPopularProduct!: produits;
  countCats!: number;
  countDogs!: number;
  countProducts!: number;
  countUsers!: number;
  latestChats!: latestPet[];
  latestChiens!: latestPet[];
  lastetProduct!: latestproduct[];
  ngOnInit(): void {
    this.checkScrollPosition(); // Check scroll position initially
    this.getMostPopularPetChat(); // Get the most popular pet chat on page load
    this.getMostPopularPetChien();
    this.getMostPopularProduct();
    this.getCountCat();
    this.getCountDog();
    this.getCountProducts();
    this.getCountUsers();
    this.getLatestChats();
    this.getLatestChiens();
    this.getLatestProducts();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkScrollPosition(); // Check scroll position on scrolling
  }

  checkScrollPosition(): void {
    // Show button only if scrolled down
    this.showButton = window.pageYOffset > 100;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  }

  getMostPopularPetChat(): void {
    this.pets_service.mostPopularChat().subscribe(
      (response) => {
        this.mostPopularChat = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getMostPopularPetChien(): void {
    this.pets_service.mostPopularChien().subscribe(
      (response) => {
        this.mostPopularChien = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getMostPopularProduct(): void {
    this.produits_service.getMostPopularProduct().subscribe(
      (data) => {
        this.mostPopularProduct = data;
      },
      (err) => {
        console.log('Erreur de chargement des produits les plus populaires');
      }
    );
  }

  getCountCat(): void {
    this.pets_service.countChats().subscribe(
      (response) => {
        this.countCats = response.countCats;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getCountDog(): void {
    this.pets_service.countChiens().subscribe(
      (response) => {
        this.countDogs = response.countDogs;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getCountProducts(): void {
    this.produits_service.getCountProducts().subscribe(
      (Response) => {
        this.countProducts = Response.countProducts;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getCountUsers(): void {
    this.users_service.countUsers().subscribe(
      (response) => {
        this.countUsers = response.countUsers;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  getLatestChats(): void {
    this.pets_service.latestChats().subscribe(
      (data) => {
        this.latestChats = data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getLatestChiens(): void {
    this.pets_service.latestChiens().subscribe(
      (data) => {
        this.latestChiens = data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getLatestProducts(): void {
    this.produits_service.getLatestProducts().subscribe(
      (data) => {
        this.lastetProduct = data;
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
