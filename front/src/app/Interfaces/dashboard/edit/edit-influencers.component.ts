import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-edit-influencers',
  templateUrl: './edit-influencers.component.html',
  styleUrls: ['./edit-influencers.component.css']
})
export class EditInfluencersComponent {
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: ServicesService) {
    this.editForm = this.formBuilder.group({
      nome: ['', Validators.required],
      quantidadeInscritos: ['', Validators.required],
      canal: ['', Validators.required],
      plataforma: ['', Validators.required],
      categoriaConteudo: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Preencha o formulário com os dados existentes da pessoa a ser editada
    this.populateForm();
  }

  populateForm() {
    const personId = 'ID_DA_PESSOA'; // Substitua pelo ID real da pessoa a ser buscada
    this.dataService.getPersonById(personId).subscribe(
      (personData) => {
        this.editForm.setValue({
          nome: personData.nome,
          quantidadeInscritos: personData.quantidadeInscritos,
          canal: personData.canal,
          plataforma: personData.plataforma,
          categoriaConteudo: personData.categoriaConteudo
        });
      },
      (error) => {
        console.error('Erro ao buscar dados da pessoa:', error);
      }
    );
  }
  

  updatePerson() {
    if (this.editForm.valid) {
      const updatedData = this.editForm.value;
      const personId = 'ID_DA_PESSOA'; // Substitua pelo ID da pessoa a ser atualizada

      this.dataService.updatePersonById(personId, updatedData).subscribe(
        (response) => {
          // Atualização bem-sucedida, faça algo com a resposta
        },
        (error) => {
          // Tratamento de erro, exiba uma mensagem de erro ou realize outras ações
          console.error('Erro ao atualizar pessoa:', error);
        }
      );
    } else {
      // O formulário é inválido, exiba uma mensagem de erro ou realize outras ações
      console.log('Formulário inválido');
    }
  }
}
