import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AnalystComponent } from './analyst/analyst.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { 
        path: 'analyst', 
        component: AnalystComponent, 
        ...canActivate(() => redirectUnauthorizedTo([''])) },
    { 
        path: 'dashboard', 
        component: AnalystComponent, 
        ...canActivate(() => redirectUnauthorizedTo([''])) },
    { 
        path: 'backoffice', 
        component: AnalystComponent, 
        ...canActivate(() => redirectUnauthorizedTo([''])) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }