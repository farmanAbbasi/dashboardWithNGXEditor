import { Routes } from '@angular/router';
import { DashboardRoutes } from './components/dashboard/dashboard.route';
import { ForumRoutes } from './components/forum/forum.route';


export const routes: Array<any> = [
    ...DashboardRoutes,
    ...ForumRoutes,
    {
        // fallback route
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
