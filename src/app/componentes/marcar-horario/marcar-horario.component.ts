import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HorarioService } from 'src/app/app-core/servicos/horario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marcar-horario',
  templateUrl: './marcar-horario.component.html',
  styleUrls: ['./marcar-horario.component.css']
})
export class MarcarHorarioComponent implements OnInit {
  form: FormGroup;
  horarios: any[] = [];
  modalOpen = false;
  editIndex: number | null = null;

  constructor(private fb: FormBuilder, private horarioService: HorarioService) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      placa: ['', Validators.required],
      modelo: ['', Validators.required],
      data: ['', Validators.required],
      horario: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.horarios = this.horarioService.listarHorarios();
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.form.reset();
    this.editIndex = null;
  }

  salvarFormHorario() {
    if (this.form.valid) {
      const novoHorario = this.form.value;
      if (this.editIndex !== null) {
        this.horarioService.editarHorario(this.editIndex, novoHorario);
        Swal.fire('Sucesso', 'Horário editado com sucesso!', 'success');
      } else {
        this.horarioService.adicionarHorario(novoHorario);
        Swal.fire('Sucesso', 'Horário salvo com sucesso!', 'success');
      }
      this.horarios = this.horarioService.listarHorarios();
      this.closeModal();
    } else {
      Swal.fire('Erro', 'Preencha todos os campos corretamente.', 'error');
    }
  }

  editarHorario(index: number) {
    const horario = this.horarios[index];
    this.form.patchValue(horario);
    this.editIndex = index;
    this.openModal();
  }

  excluirHorario(index: number) {
    this.horarioService.excluirHorario(index);
    this.horarios = this.horarioService.listarHorarios();
    Swal.fire('Excluído', 'Horário excluído com sucesso.', 'success');
  }

  isCampoInvalido(campo: string): boolean {
    const formControl = this.form.get(campo);
    return formControl ? formControl.invalid && formControl.touched : false;
  }
}
