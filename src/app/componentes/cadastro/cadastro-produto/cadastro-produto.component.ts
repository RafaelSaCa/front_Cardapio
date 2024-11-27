import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from './../../../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent implements OnInit{
  form!: FormGroup;
  editar = false;
  produtoId : string | null = null;

  constructor( private service: ProdutoService,
               private fb: FormBuilder,
               private toastr: ToastrService,
               private route: ActivatedRoute,
               private router: Router){}


  ngOnInit(): void {
    this.form = this.fb.group({
      nome:['',[Validators.required]],
      descricao:['',[Validators.required]],
      quantidade:['',[Validators.required, Validators.min(1)]],
      valor:['',[Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,2})?$")]],
      tipo:['',[Validators.required]],
      imgUrl:['',[Validators.required]]
    });

    // Verifica se existe um parâmetro de rota 'id', indicando que é uma edição
    this.produtoId = this.route.snapshot.paramMap.get('id');
    if (this.produtoId){
      this.editar = true;
      this.preencheDadosFormulario(this.produtoId);
    }
  }


  // Carregar dados do produto para edição
  preencheDadosFormulario(id : string){
    this.service.buscaPorId(id).subscribe( resposta =>{
      this.form.patchValue({
        nome: resposta.nome,
        descricao: resposta.descricao,
        quantidade: resposta.quantidade,
        valor: resposta.valor,
        tipo: resposta.tipo,
        imgUrl: resposta.imgUrl
      });
    });

  }

  cadastrar(){
    if (this.editar){
      const produtoAtualizado = this.form.value;
      this.service.editar(this.produtoId!,produtoAtualizado).subscribe(()=>{
        this.showSuccesso();
        this.router.navigate(['/estoque']);
      });
    }else{
      this.service.cadastrar(this.form.value).subscribe(resposta =>{
        this.showSuccesso();
        this.form.reset();
        this.router.navigate(['/estoque']);
      },
      error => {
       this.showErro();
      }
    )}

  }


  showSuccesso() {
    this.toastr.success('Produto cadastrado com sucesso!', 'Sucesso');
  }

  showErro(){
    this.toastr.error('Ocorreu algum erro ao cadastrar o produto!', 'Atenção')
  }
}
