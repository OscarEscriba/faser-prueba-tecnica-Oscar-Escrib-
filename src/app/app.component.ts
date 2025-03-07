import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Tarea } from './tarea';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tareas: Tarea[] = [];
  nuevaTareaTitulo: string = '';
  nuevaTareaMinutos: number | null = null;
  tareasSeleccionadas: Set<number> = new Set();
  ordenAscendente: boolean = true;

  constructor(public service: AppService) {}

  ngOnInit() {
    this.obtenerTareas();
  }

  async obtenerTareas() {
    this.tareas = await this.service.obtenerTareas();
  }

  agregarTarea() {
    if (this.nuevaTareaTitulo && this.nuevaTareaMinutos !== null) {
      const nuevaTarea = new Tarea(
        this.tareas.length + 1,
        this.nuevaTareaTitulo,
        this.nuevaTareaMinutos
      );
      this.tareas.push(nuevaTarea);
      this.nuevaTareaTitulo = '';
      this.nuevaTareaMinutos = null;
    } else {
	  alert('Por favor, complete los campos de la nueva tarea.');
	}
  }

  toggleSeleccion(id: number) {
    if (this.tareasSeleccionadas.has(id)) {
      this.tareasSeleccionadas.delete(id);
    } else {
      this.tareasSeleccionadas.add(id);
    }
  }

  eliminarTareas() {
    this.tareas = this.tareas.filter(t => !this.tareasSeleccionadas.has(t.id));
    this.tareasSeleccionadas.clear();
  }

  ordenarPor(columna: 'titulo' | 'minutos') {
    this.ordenAscendente = !this.ordenAscendente;
    this.tareas.sort((a, b) => this.ordenAscendente 
      ? (a[columna] > b[columna] ? 1 : -1)
      : (a[columna] < b[columna] ? 1 : -1));
  }

  destacarTareas() {
    this.tareas.forEach(t => {
      if (this.tareasSeleccionadas.has(t.id)) {
        t.destacada = !t.destacada;
      }
    });
  }

  ordenarAleatorio() {
    this.tareas.sort(() => Math.random() - 0.5);
  }
}
