import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  fazerLogin() {
    const email = this.loginForm.controls['email'].value;
    const senha = this.loginForm.controls['senha'].value;

    // Envie a solicitação POST para a API com as credenciais
    this.http.post<any>('http://localhost:8081/auth/login', { email, senha })
      .subscribe(
        (data) => {
          // Armazene o token retornado pela API
          const token = data.token;
          // Salve o token em localStorage ou em algum serviço de autenticação
          localStorage.setItem('token', token);
          // Redirecione para a página desejada após o login
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Lógica de tratamento de erro ou exibição de mensagem de login inválido
          console.error(error);
        }
      );
  }
}
