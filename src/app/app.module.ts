import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/gerenciadorCardapioWeb/login/login.component';
import { CardapioComponent } from './modules/gerenciadorCardapioWeb/cardapio/cardapio.component';
import { PedidosComponent } from './modules/gerenciadorCardapioWeb/pedidos/pedidos.component';
import { ConfiguracoesComponent } from './modules/gerenciadorCardapioWeb/configuracoes/configuracoes.component';
import { MesaComponent } from './modules/cardapioMobile/mesa/mesa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardapioComponent,
    PedidosComponent,
    ConfiguracoesComponent,
    MesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
