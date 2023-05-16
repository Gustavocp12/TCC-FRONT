import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardapioRoutingModule } from './cardapio-routing.module';
import { LayoutComponent } from './tab-Layout/layout.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { TabCategoriasComponent } from './tab-categorias/tab-categorias.component';
import { TabItensComponent } from './tab-itens/tab-itens.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TabLayoutComponent,
    TabCategoriasComponent,
    TabItensComponent
  ],
  imports: [
    CommonModule,
    CardapioRoutingModule
  ]
})
export class CardapioModule { }
