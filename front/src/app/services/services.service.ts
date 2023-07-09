import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private SERVER_URL = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  // Outros métodos do serviço...

  // Rota para visualizar todas as pessoas cadastradas
  public getAllPeople(): Observable<any[]> {
    return this.http.get<any[]>(`${this.SERVER_URL}/customers`);
  }

  // Rota para visualizar uma pessoa cadastrada por ID
  public getPersonById(id: string): Observable<any> {
    return this.http.get<any>(`${this.SERVER_URL}/customers/${id}`);
  }

  // Rota para cadastrar uma pessoa
  public createPerson(personData: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_URL}/customers`, personData);
  }

  // Rota para atualizar dados de uma pessoa
  public updatePersonById(id: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_URL}/customers/${id}`, updatedData);
  }

  // Rota para excluir uma pessoa
  public deletePersonById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.SERVER_URL}/customers/${id}`);
  }

  // Rota para fazer login e obter token de autenticação
  public login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_URL}/login`, credentials);
  }

  filtrarRegistros(nome: string, categoria: string, inscritos: number): Observable<any[]> {
    // Implemente a lógica de filtragem aqui e faça a chamada HTTP adequada
    // Retorne os resultados filtrados como um Observable<any[]>
    // Exemplo:
    const params = { nome, categoria, inscritos };
    return this.http.get<any[]>(`${this.SERVER_URL}/customers/filtro`, { params });
  }
}
