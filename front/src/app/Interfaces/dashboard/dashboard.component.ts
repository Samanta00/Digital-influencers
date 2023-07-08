import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Influenciador {
  nome: string;
  categoria: string;
  inscritos: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cadastroForm: FormGroup;
  influenciadores: Influenciador[] = [];
  filtroNome: string = '';
  filtroCategoria: string = '';
  filtroInscritos: number | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      nome: '',
      categoria: '',
      inscritos: ''
    });
  }

  cadastrarInfluenciador() {
    const novoInfluenciador: Influenciador = {
      nome: this.cadastroForm.value.nome,
      categoria: this.cadastroForm.value.categoria,
      inscritos: this.cadastroForm.value.inscritos
    };

    this.influenciadores.push(novoInfluenciador);
    this.cadastroForm.reset();
  }

  filtrarInfluenciadores() {
    const filtroNome = this.filtroNome.toLowerCase();
    const filtroCategoria = this.filtroCategoria.toLowerCase();

    this.influenciadores = this.influenciadores.filter(influenciador => {
      const nome = influenciador.nome.toLowerCase();
      const categoria = influenciador.categoria.toLowerCase();
      const inscritos = this.filtroInscritos !== null ? influenciador.inscritos === this.filtroInscritos : true;

      return nome.includes(filtroNome) && categoria.includes(filtroCategoria) && inscritos;
    });
  }

  editarInfluenciador(influenciador: Influenciador) {
    // Implemente a lógica de edição do influenciador aqui
  }
}
