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
  authService: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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
          this.authService.setToken(token);
          if(email=='ellen' && senha=='123'){
            this.router.navigate(['/dashboard']);
          }
        
  
        },
        (error) => {
          if (error.status === 401) {
            // Login inválido
            console.error('Credenciais inválidas');
          } else {
            // Outros erros
            console.error('Erro ao fazer login:', error);
          }
        }
      );
  }
}
