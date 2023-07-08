import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  fazerLogin() {
    // Simulando a lógica de autenticação
    const email = this.loginForm.controls['email'].value;
    const senha = this.loginForm.controls['senha'].value;

    if (email === 'exemplo@email.com' && senha === 'senha') {
      // Redirecionar para a página desejada após o login
      this.router.navigate(['/dashboard']);
    } else {
      // Lógica de tratamento de erro ou exibição de mensagem de login inválido
    }
  }
}
