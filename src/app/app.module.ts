import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPecasComponent } from './pecas/listar-pecas/listar-pecas.component';
import { EditarPecasComponent } from './pecas/editar-pecas/editar-pecas.component';
import { FormsModule } from '@angular/forms';
import { NovaPecaComponent } from './pecas/nova-peca/nova-peca.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPecasComponent,
    EditarPecasComponent,
    NovaPecaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
