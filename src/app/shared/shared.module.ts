import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BuscadorComponent,
    SidebarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SidebarComponent,
    BuscadorComponent,
    ModalComponent,
  ]
})
export class SharedModule { }
