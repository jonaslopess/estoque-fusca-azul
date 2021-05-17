import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPecasComponent } from './pecas/editar-pecas/editar-pecas.component';

import { ListarPecasComponent } from './pecas/listar-pecas/listar-pecas.component';
import { NovaPecaComponent } from './pecas/nova-peca/nova-peca.component';

const routes: Routes = [
  {path:"", component:ListarPecasComponent},
  {path:"editar/:cod", component:EditarPecasComponent},
  {path:"nova-peca", component:NovaPecaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
