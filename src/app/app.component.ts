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
  modalVisible: boolean = false; // nos indica el estado del modal

  constructor(public service: AppService) {}

  ngOnInit() {
    this.obtenerTareas();
  }

  async obtenerTareas() {
    this.tareas = await this.service.obtenerTareas();
  }
  // funcion para agregar una nueva tarea
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
	  this.cerrarModal();
    } else {
	  alert('Por favor, complete los campos de la nueva tarea.'); // alerta si no se completan los campos. 
	}
  }

  // Funciones para seleccionar, eliminar y destacar tareas
  toggleSeleccion(id: number) {
    if (this.tareasSeleccionadas.has(id)) {
      this.tareasSeleccionadas.delete(id);
    } else {
      this.tareasSeleccionadas.add(id);
    }
  }
  // funcion para eliminar tareas
  eliminarTareas() {
    this.tareas = this.tareas.filter(t => !this.tareasSeleccionadas.has(t.id));
    this.tareasSeleccionadas.clear(); // limpiamos el set de tareas seleccionadas
  }
  // funcion para ordenar las tareas por titulo o minutos
  ordenarPor(columna: 'titulo' | 'minutos') { // definimos el tipo de columna
    this.ordenAscendente = !this.ordenAscendente;
    this.tareas.sort((a, b) => this.ordenAscendente 
      ? (a[columna] > b[columna] ? 1 : -1) // si es ascendente
      : (a[columna] < b[columna] ? 1 : -1)); // si es descendente
  }
  // funcion para destacar tareas
  destacarTareas() {
    this.tareas.forEach(t => {
      if (this.tareasSeleccionadas.has(t.id)) {
        t.destacada = !t.destacada; // cambiamos el estado de destacada
      }
    });
  }
  // funcion para ordenar las tareas de forma aleatoria
  ordenarAleatorio() {
    this.tareas.sort(() => Math.random() - 0.5); // ordenamos de forma aleatoria
  }
  // Funciones para abrir y cerrar el modal
  abrirModal() {
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }
}
