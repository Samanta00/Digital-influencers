import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-create-influencers',
  templateUrl: './create-influencers.component.html',
  styleUrls: ['./create-influencers.component.css']
})
export class CreateInfluencersComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: ServicesService
  ) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      quantidadeInscritos: ['', Validators.required],
      canal: ['', Validators.required],
      plataforma: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  ngOnInit() {}

  cadastrarPessoa() {
    if (this.cadastroForm.valid) {
      const formValue = this.cadastroForm.value;
  
      const personData = {
        nome: formValue.nome,
        canal: formValue.canal,
        categoriaConteudo: formValue.categoria,
        plataforma: formValue.plataforma,
        quantidadeInscritos: formValue.quantidadeInscritos,
        __v: 0, // Valor fixo para __v
        _id: null // Valor nulo para _id, pois a API atribuirá um valor automaticamente
      };
  
      this.cadastroService.createPerson(personData).subscribe(
        (data: any) => {
          // Sucesso no cadastro
          console.log('Cadastro realizado com sucesso:', data);
          // Faça o que você precisa com os dados retornados, como redirecionar para a página de sucesso
        },
        (error: any) => {
          // Tratamento de erro
          console.error('Erro ao cadastrar pessoa:', error);
          // Faça o tratamento adequado para exibir uma mensagem de erro ou tomar outras ações necessárias
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }
  
}
