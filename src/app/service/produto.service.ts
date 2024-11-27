import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl= '/api/produtos';

  constructor(private http: HttpClient) { }

  cadastrar(produto: Produto){
    return this.http.post<Produto>(this.apiUrl,produto);

  }

  listar(){
    return this.http.get<Produto[]>(this.apiUrl);
  }

  editar(id: string, produto: Partial<Produto>){
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
  }

  deletar(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  buscaPorId(id: string){
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }
}
