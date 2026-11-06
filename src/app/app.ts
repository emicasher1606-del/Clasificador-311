import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html'
})
export class App {
  textoReporte: string = '';
  categoria: string = '';
  agencia: string = '';
  resultadoMostrado: boolean = false;

  clasificar() {
    if (!this.textoReporte.trim()) {
      alert('Por favor escribe un reporte primero.');
      return;
    }

    const texto = this.textoReporte.toLowerCase();

    if (texto.includes('carro') || texto.includes('estacion') || texto.includes('hidrante') || texto.includes('cochera') || texto.includes('parking')) {
      this.categoria = 'Estacionamiento Ilegal';
      this.agencia = 'NYPD (Policía)';
    } else if (texto.includes('ruido') || texto.includes('música') || texto.includes('fiesta') || texto.includes('noise')) {
      this.categoria = 'Ruido Residencial';
      this.agencia = 'NYPD (Policía)';
    } else if (texto.includes('agua caliente') || texto.includes('calefacción') || texto.includes('heat') || texto.includes('hot water')) {
      this.categoria = 'HEAT/HOT WATER (Calefacción / Agua Caliente)';
      this.agencia = 'HPD (Vivienda)';
    } else if (texto.includes('moho') || texto.includes('plaga') || texto.includes('mold') || texto.includes('unsanitary')) {
      this.categoria = 'UNSANITARY CONDITION (Condición Insalubre)';
      this.agencia = 'HPD (Vivienda)';
    } else {
      this.categoria = 'Street Condition (Condición de Vialidad / Bache)';
      this.agencia = 'DOT (Transporte)';
    }

    this.resultadoMostrado = true;
  }
}