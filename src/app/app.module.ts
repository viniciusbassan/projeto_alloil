import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { MarcarHorarioComponent } from './componentes/marcar-horario/marcar-horario.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MarcarHorarioComponent,
    PaginaInicialComponent,
    RodapeComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
