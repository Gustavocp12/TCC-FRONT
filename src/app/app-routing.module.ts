import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/gerenciadorCardapioWeb/login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./modules/gerenciadorCardapioWeb/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'cardapioConfiguracoes', loadChildren: () => import('./modules/gerenciadorCardapioWeb/cardapio/cardapio.module').then(m => m.CardapioModule) },
  { path: 'pedidos', loadChildren: () => import('./modules/gerenciadorCardapioWeb/pedidos/pedidos.module').then(m => m.PedidosModule) },
  { path: 'configuracoes', loadChildren: () => import('./modules/gerenciadorCardapioWeb/configuracoes/configuracoes.module').then(m => m.ConfiguracoesModule) },
  { path: 'cardapio', loadChildren: () => import('./modules/cardapioMobile/cardapio/cardapio.module').then(m => m.CardapioModule) },
  { path: 'pedidos', loadChildren: () => import('./modules/cardapioMobile/pedidos/pedidos.module').then(m => m.PedidosModule) },
  { path: 'mesa', loadChildren: () => import('./modules/cardapioMobile/mesa/mesa.module').then(m => m.MesaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
