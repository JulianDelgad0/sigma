import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada.component';

const routes: Routes = [{ path: '', component: PaginaNoEncontradaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaNoEncontradaRoutingModule { }
