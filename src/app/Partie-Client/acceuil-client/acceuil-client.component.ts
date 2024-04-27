import { Component, OnInit, HostListener } from '@angular/core';
import { PetsService } from 'src/app/Services/pets.service';
import { pets } from 'src/app/Beans/petsBean';
@Component({
  selector: 'app-acceuil-client',
  templateUrl: './acceuil-client.component.html',
  styleUrls: ['./acceuil-client.component.css'],
})
export class AcceuilClientComponent implements OnInit {
  constructor(private pets_service: PetsService) { }

  showButton: boolean = false; // Variable to control button visibility
  mostPopularChat!: pets;
  ngOnInit(): void {
    this.checkScrollPosition(); // Check scroll position initially
    this.getMostPopularPetChat(); // Get the most popular pet chat on page load
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

  getMostPopularPetChat(): void{
    this.pets_service.mostPopularChat().subscribe(
      (response) => {
        this.mostPopularChat = response;
      },
  (error) => {
        console.log("error", error);
      }
    );
  }

}
