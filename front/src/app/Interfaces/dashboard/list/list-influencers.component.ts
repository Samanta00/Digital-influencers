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

  constructor(private formBuilder: FormBuilder, private dataService: ServicesService) {
    this.filtroForm = this.formBuilder.group({
      nome: [''],
      categoria: [''],
      inscritos: ['']
    });
  }

  ngOnInit() {
    this.getRegistros();
  }

  getRegistros() {
    this.dataService.getAllPeople().subscribe(
      (data: any[]) => {
        this.registros = data;
      },
      (error: any) => {
        console.error('Erro ao obter registros:', error);
      }
    );
  }

  filtrarRegistros() {
    const filtro = this.filtroForm.value;
    // Implemente a lógica de filtro aqui, usando os valores do formulário
    // Exemplo:
    const nomeFiltro = filtro.nome;
    const categoriaFiltro = filtro.categoria;
    const inscritosFiltro = filtro.inscritos;

    // Chame o serviço de filtro passando os parâmetros adequados
    this.dataService.filtrarRegistros(nomeFiltro, categoriaFiltro, inscritosFiltro).subscribe(
      (data: any[]) => {
        this.registros = data;
      },
      (error: any) => {
        console.error('Erro ao filtrar registros:', error);
      }
    );
  }

  resetFiltro() {
    this.filtroForm.reset();
    this.getRegistros();
  }
}
