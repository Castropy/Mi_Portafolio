// src/app/services/data.service.ts
import { Injectable, signal } from '@angular/core';
import { Academic, Project, Collaboration } from '../models/portafolio.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Usamos Signals para una reactividad moderna y eficiente
  readonly academicData = signal<Academic>({
    title: 'TSU en Análisis de Sistemas',
    university: 'Instituto universitario de tecnologia para la informatica',
    year: '2024',
    description: 'Carrera con mencion en Tecnologia Web, Graduado en DEC 2024',
    images: [
      { url: 'assets/academic/acto_grado1.JPG', alt: 'Título de TSU' },
      { url: 'assets/academic/acto_grado2.JPG', alt: 'Foto Acto de Grado' }
    ]
  });

  readonly projects = signal<Project[]>([
    {
      name: 'Recetas App)',
      description: 'Aplicación móvil multiplataforma para cotizar costos de producion',
      techStack: ['Flutter', 'Dart', 'Drift', 'Android Studio'],
      type: 'Flutter',
      githubUrl: 'https://github.com/Castropy/recetas_app',
      images: [{ url: 'assets/projects/flutter-app.jpg', alt: 'Vista principal App' }]
    },
    {
      name: 'Login web',
      description: 'Login con auth JWT, es un login solido desarrollado para implementar en apps o webs',
      techStack: ['Angular', 'TypeScript', 'SCSS', 'Django', 'DRF'],
      type: 'Angular',
      githubUrl: 'https://github.com/Castropy/Login_frontend_with_angular',
      images: [{ url: 'assets/projects/angular-web.jpg', alt: 'Vista Dashboard' }]
    }
  ]);

  readonly collaborations = signal<Collaboration[]>([
    {
      repoName: 'Connect',
      description: '',
      repoUrl: 'https://github.com/hassan689/connect',
      role: 'Issues'
    }
  ]);

  constructor() { }
}