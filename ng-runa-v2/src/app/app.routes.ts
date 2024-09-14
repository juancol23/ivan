import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AnalystComponent } from './analyst/analyst.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'analyst', component: AnalystComponent },
    { path: 'dashboard', component: AnalystComponent },
    { path: 'backoffice', component: AnalystComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }