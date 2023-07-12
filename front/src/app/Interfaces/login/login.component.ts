import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authServiceService: ServicesService
  ) {}

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
    this.authServiceService.login({ nome: email, senha }).subscribe(
      (data: any) => {
        // Armazene o token retornado pela API
        const token = data.token;
        this.authServiceService.setToken(token);
        this.authServiceService.setEmail(email); // Armazene o email autenticado no serviço de autenticação
  
        // Redirecione para a página de dashboard
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
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
