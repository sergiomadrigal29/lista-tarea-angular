import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  listaTareas: string[] = [];
  nuevaTarea: string = '';

  private _tareaService = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareaService.getTareas();
  }

  agregarTarea() {
    this._tareaService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareaService.getTareas();
  }

  eliminarTarea(index: number) {
    this._tareaService.eliminarTarea(index);
    this.listaTareas = this._tareaService.getTareas();
  }
}
