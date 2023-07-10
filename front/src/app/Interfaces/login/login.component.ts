import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  authService: any; // Renomeie essa propriedade para evitar conflito de nomes

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private authServiceService: ServicesService) { }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  fazerLogin() {
    const nome = this.loginForm.controls['email'].value;
    const senha = this.loginForm.controls['senha'].value;
    console.log(nome)
    // Envie a solicitação POST para a API com as credenciais
    this.authServiceService.login({ nome, senha })
    .subscribe(
      (data: any) => {
        // Armazene o token retornado pela API
        const token = data.token;
        this.authServiceService.setToken(token);
  
        // Redirecione para a página de dashboard
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        if (error.status === 401) {
          // Login inválido
          console.log(nome)
          console.error('Credenciais inválidas');
        } else {
          // Outros erros
          console.error('Erro ao fazer login:', error);
        }
      }
    );
  
  
  }
}
