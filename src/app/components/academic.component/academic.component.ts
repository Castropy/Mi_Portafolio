import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.scss',
})
export class Academic {
// Acceso al cerebro de datos
  private dataService = inject(DataService);
  
  // Exponemos la señal a la vista
  public info = this.dataService.academicData;
}
