import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'my-courses',
        loadComponent: () => import('./pages/my-courses/my-courses.component').then((m) => m.MyCoursesComponent),
      },
      {
        path: 'learn',
        loadComponent: () => import('./pages/learn/learn.component').then((m) => m.LearnComponent),
      },
      {
        path: 'explore',
        loadComponent: () => import('./pages/explore/explore.component').then((m) => m.ExploreComponent),
      },
      {
        path: 'assignments',
        loadComponent: () => import('./pages/assignments/assignments.component').then((m) => m.AssignmentsComponent),
      },
    ],
  },
];
