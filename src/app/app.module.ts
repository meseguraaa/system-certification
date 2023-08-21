import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { BarTopComponent } from './bar-top/bar-top.component';
import { MenuComponent } from './menu/menu.component';
import { ColabListComponent } from './colab-list/colab-list.component';
import { CertDashComponent } from './cert-dash/cert-dash.component';
import { CertCadaColabComponent } from './cert-cada-colab/cert-cada-colab.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CetCadaEmpComponent } from './cet-cada-emp/cet-cada-emp.component';
import { CetCadaNegComponent } from './cet-cada-neg/cet-cada-neg.component';
import { CetCadaCerComponent } from './cet-cada-cer/cet-cada-cer.component';
import { CetCadaGesComponent } from './cet-cada-ges/cet-cada-ges.component';
import { CetCadaBpComponent } from './cet-cada-bp/cet-cada-bp.component';

@NgModule({
  declarations: [
    AppComponent,
    BarTopComponent,
    MenuComponent,
    BreadcrumbComponent,
    CertDashComponent,
    ColabListComponent,
    CertCadaColabComponent,
    CetCadaEmpComponent,
    CetCadaNegComponent,
    CetCadaCerComponent,
    CetCadaGesComponent,
    CetCadaBpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
