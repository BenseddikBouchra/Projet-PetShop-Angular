import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.css']
})
export class MenuClientComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

    
  }

}

document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('#navbar');

    if (mobileNavToggle && navbar) {
        mobileNavToggle.addEventListener('click', function(this: HTMLElement, e: Event) {
            navbar.classList.toggle('navbar-mobile');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });
    }
});
