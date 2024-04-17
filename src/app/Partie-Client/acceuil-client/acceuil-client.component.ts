import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-acceuil-client',
  templateUrl: './acceuil-client.component.html',
  styleUrls: ['./acceuil-client.component.css'],
})
export class AcceuilClientComponent implements OnInit {
  constructor() {}

  showButton: boolean = false; // Variable to control button visibility

  

  ngOnInit(): void {
    this.checkScrollPosition(); // Check scroll position initially
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
}
