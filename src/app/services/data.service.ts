// src/app/services/data.service.ts
import { Injectable, signal } from '@angular/core';
import { Academic, Project, Collaboration, Contact } from '../models/portafolio.models';
 
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
      name: 'Recetas App',
      description: `Aplicación móvil multiplataforma para:
• Cotizar costos de producción.
• Gestión de inventario.
• Reportes por ventas y stock.
• Guardar todas tus recetas.
• Funciona offline.
• Privacidad de datos.
`,
      techStack: ['Flutter', 'Dart', 'Drift', 'Android Studio'],
      type: 'Flutter',
      githubUrl: 'https://github.com/Castropy/recetas_app',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.castrodev.recetas',
      images: [{ url: 'assets/experience/recetas_app.jpg', alt: 'Vista principal App' },
        { url: 'assets/experience/ps.webp', alt: 'Play Store' }
      ]
    },
    {
      name: 'Login web',
      description: 'Login con auth JWT, es un login solido desarrollado para implementar en apps o webs',
      techStack: ['Angular', 'TypeScript', 'SCSS', 'Django', 'DRF'],
      type: 'Angular',
      githubUrl: 'https://github.com/Castropy/Login_frontend_with_angular',
      images: [{ url: 'assets/experience/Login.jpg', alt: 'Vista principal' }]
    }
  ]);

  readonly collaborations = signal<Collaboration[]>([
    {
      repoName: 'Connect',
      description: 'Connect App A modern task-sharing platform where users can post tasks, hire service providers, chat, manage profiles, track locations, and complete work seamlessly using a clean Flutter UI.',
      repoUrl: 'https://github.com/hassan689/connect',
      role: 'Issues',
    }
  ]);

  
readonly contact = signal<Contact>({
  email: 'castrodevsoftware@gmail.com',
  githubUrl: 'https://github.com/Castropy',
  location: 'Venezuela',
  images: [
    { url: 'assets/contact/miphoto.jpg', alt: 'Foto de contacto Ricardo Castro' }
  ]
});

  constructor() { }
}