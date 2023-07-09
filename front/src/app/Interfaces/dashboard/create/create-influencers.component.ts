import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-create-influencers',
  templateUrl: './create-influencers.component.html',
  styleUrls: ['./create-influencers.component.css']
})
export class CreateInfluencersComponent {
  cadastroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cadastroService: ServicesService
  ){
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      quantidadeInscritos:['', Validators.required],
      canal:['', Validators.required],
      plataforma:['', Validators.required],
      categoria:['', Validators.required]

    })

  }
  cadastrarPessoa() {
    if (this.cadastroForm.valid) {
      const personData = this.cadastroForm.value;
      this.cadastroService.createPerson(personData).subscribe(
        (response) => {
          // Sucesso no cadastro
          console.log(response);
        },
        (error) => {
          // Tratamento de erro
          console.error(error);
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }

  fazerLogin() {
    this.router.navigate(['/login']);
  }

  voltarPagina() {
    this.router.navigate(['/']);
  }

}
