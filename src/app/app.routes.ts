import { Routes } from '@angular/router';
import { CardBebidasComponent } from './bebidas/card-bebidas/card-bebidas.component';
import { CadastroProdutoComponent } from './componentes/cadastro/cadastro-produto/cadastro-produto.component';
import { TabelaProdutoComponent } from './componentes/tabela-produto/tabela-produto.component';
import { CardComponent } from './lanches/card/card.component';
import { CardPizzasComponent } from './pizzas/card-pizzas/card-pizzas.component';
import { CardSorvetesComponent } from './sorvetes/card-sorvetes/card-sorvetes.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path: '',
    component: CardComponent,
  },
  {
    path: 'bebidas',
    component: CardBebidasComponent,
  },
  {
    path: 'pizzas',
    component: CardPizzasComponent,
  },

  {
    path: 'sorvetes',
    component: CardSorvetesComponent,
  },

  {
    path: 'cadastroProduto',
    component: CadastroProdutoComponent,
  },

  {
    path: 'estoque',
    component: TabelaProdutoComponent,
  },
  {
    path: 'produtos/editar/:id',
    component: CadastroProdutoComponent,
  },
];
