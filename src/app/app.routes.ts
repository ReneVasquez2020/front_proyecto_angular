import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',loadChildren: () => import("./web/web.module").then (w=> w.WebModule)},
    {path:'',loadChildren: () => import("./auth/auth.module").then (a=> a.AuthModule)},
    {path:'',loadChildren: () => import("./admin/admin.module").then (ad=> ad.AdminModule)},
];
