import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
 // Acceso al cerebro de datos
  private dataService = inject(DataService);
  
  // Exponemos la señal a la vista
   public contact = this.dataService.contact;
}
