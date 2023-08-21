import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cert-dash',
  templateUrl: './cert-dash.component.html',
  styleUrls: ['./cert-dash.component.css']
})

export class CertDashComponent {

  titlePage: string = 'Dashboard de Certificação';
  firstBread: string = 'Home';
  secondBread: string = 'Certificação';
  thirdBread: string = 'Dashboard';
    
}
