import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MedicosComponent } from './medicos/medicos.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'medicos', component: MedicosComponent },
];
