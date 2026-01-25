import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-collaborations',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './collaborations.component.html',
  styleUrl: './collaborations.component.scss',
})
export class CollaborationsComponent {
  private dataService = inject(DataService);
  
  // Obtenemos la señal de proyectos
  public collaborations = this.dataService.collaborations;

}
