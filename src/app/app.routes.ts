import { Routes } from '@angular/router';
import { CardBebidasComponent } from './bebidas/card-bebidas/card-bebidas.component';
import { CadastroProdutoComponent } from './componentes/cadastro/cadastro-produto/cadastro-produto.component';
import { LoginComponent } from './componentes/login/login.component';
import { TabelaProdutoComponent } from './componentes/tabela-produto/tabela-produto.component';
import { CardComponent } from './lanches/card/card.component';
import { CardPizzasComponent } from './pizzas/card-pizzas/card-pizzas.component';
import { CardSorvetesComponent } from './sorvetes/card-sorvetes/card-sorvetes.component';
import { authGuard } from './service/auth-guard.service';

export const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path: '',
    component: CardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'bebidas',
    component: CardBebidasComponent,
    canActivate: [authGuard]
  },
  {
    path: 'pizzas',
    component: CardPizzasComponent,
    canActivate: [authGuard]
  },

  {
    path: 'sorvetes',
    component: CardSorvetesComponent,
    canActivate: [authGuard]
  },

  {
    path: 'cadastroProduto',
    component: CadastroProdutoComponent,
    canActivate: [authGuard]
  },

  {
    path: 'estoque',
    component: TabelaProdutoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'produtos/editar/:id',
    component: CadastroProdutoComponent,
  },
];
