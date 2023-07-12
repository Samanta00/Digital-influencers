import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private SERVER_URL_AUTH = 'http://localhost:8081/auth';
  private SERVER_URL = 'http://localhost:8081';

  private token: string = '';
  private nome: string='';


  constructor(private http: HttpClient) { }

  setToken(token: string) {
    this.token = token;
  }
  // Método para recuperar o token
  getToken(): string {
    return this.token;
  }

  // Método para definir o email
  setEmail(nome: string): void {
    this.nome = nome;
  }

  // Método para recuperar o email
  getEmail(): string {
    return this.nome;
  }
  // Outros métodos do serviço...

  // Rota para visualizar todas as pessoas cadastradas
  public getAllPeople(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get<any[]>(`${this.SERVER_URL}/customers/`, { headers });
  }

  // Rota para visualizar uma pessoa cadastrada por ID
  public getPersonById(id: string): Observable<any> {
    return this.http.get<any>(`${this.SERVER_URL}/customers/${id}`);
  }

  // Rota para cadastrar uma pessoa
  public createPerson(personData: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_URL}/customers/cadastro`, personData)
      .pipe(
        catchError((error: any) => {
          console.error('Erro ao cadastrar pessoa:', error);
          throw error; // Lança o erro novamente para ser tratado pelo componente que chamou a função
        })
      );
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
    return this.http.post<any>(`${this.SERVER_URL_AUTH}/login`, credentials);
  }

  filtrarRegistros(filtro: any): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get<any[]>(`${this.SERVER_URL}/customers/filtro`, { headers, params: filtro });
  }
  
  isAuthenticated(): boolean {
    return this.token !== ''; // Verifica se o token está presente
    
  }
  getNome(): string {
    // Lógica para obter o nome de usuário autenticado
    return 'ellen.samanta@outlook.com'; // Retorne o nome de usuário real ou um valor padrão
  }
  
  getSenha(): string {
    // Lógica para obter a senha do usuário autenticado
    return '123'; // Retorne a senha real ou um valor padrão
  }
  isUserAuthorized(email: string, senha: string): boolean {
    return (email === 'ellen.samanta@outlook.com' && senha === '123');
  }
    
  
  
}
