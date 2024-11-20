import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../service/produto.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarrinhoService } from '../../service/carrinho.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-bebidas',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatIconModule],
  templateUrl: './card-bebidas.component.html',
  styleUrl: './card-bebidas.component.scss'
})
export class CardBebidasComponent {
  produtos$!: Observable<Produto[]>;


  constructor(private service: ProdutoService,
              private carrinhoService: CarrinhoService,
              private toastr: ToastrService
  ){
    this.produtos$ = this.service.listar();
  }

  addAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionaProduto(produto);
    this.showSuccesso(produto);
  }

  showSuccesso(produto: Produto) {
    this.toastr.success(`${produto.nome} adicionado ao carrinho!`, '🍔🍕🍹🍨');
  }
}
