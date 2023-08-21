import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertDashComponent } from '../app/cert-dash/cert-dash.component';
import { ColabListComponent } from '../app/colab-list/colab-list.component';
import { CertCadaColabComponent } from '../app/cert-cada-colab/cert-cada-colab.component';
import { CetCadaEmpComponent } from '../app/cet-cada-emp/cet-cada-emp.component';
import { CetCadaNegComponent } from '../app/cet-cada-neg/cet-cada-neg.component';
import { CetCadaCerComponent } from '../app/cet-cada-cer/cet-cada-cer.component';
import { CetCadaGesComponent } from '../app/cet-cada-ges/cet-cada-ges.component';
import { CetCadaBpComponent } from '../app/cet-cada-bp/cet-cada-bp.component';
 
const APP_ROUTES: Routes = [
    { path: '', component: CertDashComponent },
    { path: 'certDash', component: CertDashComponent },
    { path: 'certColabList', component: ColabListComponent },
    { path: 'certCadaColabComponent', component: CertCadaColabComponent },
    { path: 'cetCadaEmpComponent', component: CetCadaEmpComponent },
    { path: 'cetCadaNegComponent', component: CetCadaNegComponent },
    { path: 'cetCadaCerComponent', component: CetCadaCerComponent },
    { path: 'cetCadaGesComponent', component: CetCadaGesComponent },
    { path: 'cetCadaBpComponent', component: CetCadaBpComponent},  
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);