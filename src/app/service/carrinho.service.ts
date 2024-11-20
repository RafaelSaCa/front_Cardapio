import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private apiUrl= 'http://localhost:8080/api/pedidos';

  constructor (private service: HttpClient){}

  private produtosCarrinho: Produto[] =[];

  adicionaProduto( produto: Produto){
    const produtoExistente = this.produtosCarrinho.find(p=> p.id === produto.id);

    if (produtoExistente){
        produtoExistente.quantidade! += 1;
    }else{
      this.produtosCarrinho.push({...produto, quantidade:1});
    }
  }

  obterCarrinho(){
    return this.produtosCarrinho;
  }

  limparCarrinho(){
    this.produtosCarrinho = [];
  }


}
