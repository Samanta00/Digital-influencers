import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  SERVER_URL = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

    //rota para visualizar lista de produtos de estoque pelo supermercado
    public getProducts(): Observable<any[]> {
      return this.http.get<any[]>(`${this.SERVER_URL}/api/products`);
    }
}
