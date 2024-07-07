import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { MarcarHorarioComponent } from './componentes/marcar-horario/marcar-horario.component';
import { ContatoComponent } from './componentes/contato/contato.component';


const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'marcar-horario', component: MarcarHorarioComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
