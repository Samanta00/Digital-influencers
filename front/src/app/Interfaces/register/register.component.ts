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
      nome: ['', Validators.required],
      quantidadeInscritos: ['', Validators.required],
      canal: ['', Validators.required],
      plataforma: ['', Validators.required],
      categoriaConteudo: ['', Validators.required]
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
    console.log('fazer login')
  }
  voltarPagina(){
    this.router.navigate(['/']);
  }

}
