import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  cadastroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.cadastroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  cadastrarPessoa() {
    if (this.cadastroForm.valid) {
      // Aqui você pode fazer a lógica para enviar os dados do formulário para o servidor ou realizar outras ações
      console.log(this.cadastroForm.value);
    } else {
      // Caso o formulário seja inválido, você pode exibir uma mensagem de erro ou realizar outras ações
      console.log('Formulário inválido');
    }
  }
  fazerLogin(){
    this.router.navigate(['/login'])
  }
  voltarPagina(){
    this.router.navigate(['/']);
  }

}
