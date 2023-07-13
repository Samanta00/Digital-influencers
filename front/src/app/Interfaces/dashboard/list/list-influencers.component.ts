import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-list-influencers',
  templateUrl: './list-influencers.component.html',
  styleUrls: ['./list-influencers.component.css']
})
export class ListInfluencersComponent implements OnInit {
  filtroForm: FormGroup;
  registros: any[] = [];
  registrosFiltrados: any[] = [];
  mostrarRegistrosFiltrados: boolean = false;
  registroSelecionado: any;
  editForm: FormGroup;
  isEllenUser: boolean = false;
  isCarlosUser: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: ServicesService,
    private authService: ServicesService
  ) {
    this.filtroForm = this.formBuilder.group({
      nome: [''],
      categoriaConteudo: [''],
      quantidadeInscritos: ['']
    });

    this.editForm = this.formBuilder.group({
      nome: [''],
      quantidadeInscritos: [''],
      canal: [''],
      plataforma: [''],
      categoriaConteudo: ['']
    });
  }

  ngOnInit() {
    this.getRegistros();
    this.checkUser();
  }

  getRegistros() {
    this.dataService.getAllPeople().subscribe(
      (data: any[]) => {
        this.registros = data;
        this.registrosFiltrados = data;
        console.log(data); // Verifique se os dados estão sendo corretamente retornados aqui
      },
      (error: any) => {
        console.error('Erro ao obter registros:', error);
      }
    );
  }

  filtrarRegistros() {
    const filtro = this.filtroForm.value;
    const nomeFiltro = filtro.nome ? filtro.nome.toLowerCase() : '';
    const categoriaFiltro = filtro.categoriaConteudo ? filtro.categoriaConteudo.toLowerCase() : '';
    const inscritosFiltro = filtro.quantidadeInscritos;

    this.registrosFiltrados = this.registros.filter(registro => {
      const nome = registro.nome ? registro.nome.toLowerCase() : '';
      const categoria = registro.categoriaConteudo ? registro.categoriaConteudo.toLowerCase() : '';
      const inscritos = registro.quantidadeInscritos;

      const nomePassouFiltro = nome.includes(nomeFiltro);
      const categoriaPassouFiltro = categoria.includes(categoriaFiltro);
      const inscritosPassouFiltro = inscritosFiltro ? inscritos === inscritosFiltro : true;

      return nomePassouFiltro && categoriaPassouFiltro && inscritosPassouFiltro;
    });

    this.mostrarRegistrosFiltrados = this.registrosFiltrados.length > 0;

    return false;
  }

  resetFiltro() {
    this.filtroForm.reset();
    this.registrosFiltrados = this.registros;
    this.mostrarRegistrosFiltrados = false;
  }

  apagarRegistro(_id: string) {
    if (confirm('Tem certeza de que deseja apagar este registro?')) {
      this.dataService.deletePersonById(_id).subscribe(
        () => {
          console.log('Registro apagado com sucesso');
          // Atualize a lista de registros ou execute outras ações necessárias
        },
        (error: any) => {
          console.error('Erro ao apagar o registro:', error);
        }
      );
    }
  }

  editarRegistro(registro: any) {
    this.registroSelecionado = registro;
    this.scrollToEditForm();
    this.preencherFormularioEdicao();
  }

  preencherFormularioEdicao() {
    if (this.registroSelecionado) {
      this.editForm.patchValue({
        nome: this.registroSelecionado.nome,
        quantidadeInscritos: this.registroSelecionado.quantidadeInscritos,
        canal: this.registroSelecionado.canal,
        plataforma: this.registroSelecionado.plataforma,
        categoriaConteudo: this.registroSelecionado.categoriaConteudo
      });
    }
  }

  scrollToEditForm() {
    const editFormElement = document.getElementById('editForm');
    if (editFormElement) {
      editFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  updatePerson() {
    const id = this.registroSelecionado._id;
    const updatedData = this.editForm.value;

    this.dataService.updatePersonById(id, updatedData).subscribe(
      (data: any) => {
        console.log('Registro atualizado com sucesso:', data);
        // Faça o que você precisa com os dados retornados, como exibir uma mensagem de sucesso
      },
      (error: any) => {
        console.error('Erro ao atualizar o registro:', error);
        // Faça o tratamento adequado para exibir uma mensagem de erro
      }
    );
  }

  //autoriza apenas para o login em específico
  isUserAuthorized(): boolean {
    const nome = this.authService.getEmail();
    const senha = this.authService.getSenha();
    return nome === 'ellen.samanta@outlook.com' && senha === '123';
  }

  //chega os logins permitidos
  checkUser() {
    const email = this.authService.getEmail();
    this.isEllenUser = email === 'ellen.samanta@outlook.com';
    this.isCarlosUser = email === 'carlos.silva@hotmail.com';
  }
}
