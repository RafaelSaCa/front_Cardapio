import { Component, EventEmitter, Output } from '@angular/core';
import { Produto } from '../../models/produto';
import { Observable } from 'rxjs';
import { ProdutoService } from '../../service/produto.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';

declare var bootstrap: any;


@Component({
  selector: 'app-tabela-produto',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatIconModule,RouterModule],
  templateUrl: './tabela-produto.component.html',
  styleUrl: './tabela-produto.component.scss'
})
export class TabelaProdutoComponent {
  produtos$: Observable<Produto[]>;
  produtoExcluir!: Produto;

  constructor( private service: ProdutoService, private toastr: ToastrService, private router: Router ){
    this.produtos$ = this.service.listar();
  }

  atualizaLista(){
    this.produtos$ = this.service.listar();
  }


  abrirModalExclusao(produto: Produto) {
    this.produtoExcluir = produto;
    const modal = document.getElementById('exclusaoModal');
    const modalInstance = new bootstrap.Modal(modal!);
    modalInstance.show();
  }

  editar(produtoId : string){
    this.router.navigate(['/produtos/editar', produtoId]);
  }


  excluirProduto(){
    if(this.produtoExcluir)
    this.service.deletar(this.produtoExcluir.id).subscribe(()=>{
      this.fecharModal();
      this.showSuccess();
      this.atualizaLista();
    })
  }


  fecharModal() {
    const modal = document.getElementById('exclusaoModal');
    const modalInstance = bootstrap.Modal.getInstance(modal!);
    modalInstance?.hide();
  }


  showSuccess() {
    this.toastr.success('Removido com sucesso!', 'Sucesso');
  }

}
