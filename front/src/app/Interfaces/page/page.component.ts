import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  constructor(private router: Router) {}


  irParaLogin() {
    // Lógica para navegar para a página de login
    this.router.navigate(['/login']);
  }




}
