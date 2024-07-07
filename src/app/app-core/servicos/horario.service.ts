import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private storageKey = 'horarios';

  constructor() {
    this.carregarHorarios();
  }

  private horarios: any[] = [];

  adicionarHorario(horario: any) {
    this.horarios.push(horario);
    this.salvarHorarios();
  }

  editarHorario(index: number, horario: any) {
    this.horarios[index] = horario;
    this.salvarHorarios();
  }

  excluirHorario(index: number) {
    this.horarios.splice(index, 1);
    this.salvarHorarios();
  }

  listarHorarios() {
    return this.horarios;
  }

  private salvarHorarios() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.horarios));
  }

  private carregarHorarios() {
    const savedHorarios = localStorage.getItem(this.storageKey);
    if (savedHorarios) {
      this.horarios = JSON.parse(savedHorarios);
    }
  }
}
