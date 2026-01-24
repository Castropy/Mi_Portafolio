import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.scss',
})
export class Academic {

}
