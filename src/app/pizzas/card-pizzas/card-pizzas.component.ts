import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../service/produto.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarrinhoService } from '../../service/carrinho.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-pizzas',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './card-pizzas.component.html',
  styleUrl: './card-pizzas.component.scss'
})
export class CardPizzasComponent {
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
    this.toastr.success(`${produto.nome} adicionado ao carrinho!`,'🍔🍕🍹🍨');
  }
}
