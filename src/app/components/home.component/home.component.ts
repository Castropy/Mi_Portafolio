import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxParticlesModule } from "@tsparticles/angular"; // Importa el módulo
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Versión ligera

 
@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [RouterModule, NgxParticlesModule,], // Añádelo a los imports
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // Configuración de las partículas
  particlesOptions = {
    background: { opacity: 0 }, // Para que se vea tu imagen de fondo
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: { default: OutMode.out },
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  async particlesInit(engine: any): Promise<void> {
    await loadSlim(engine);
  }
}