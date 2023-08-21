import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colab-list',
  templateUrl: './colab-list.component.html',
  styleUrls: ['./colab-list.component.css']
})

export class ColabListComponent {

  titlePage: string = 'Lista de Colaboradores';
  firstBread: string = 'Home';
  secondBread: string = 'Certificação';
  thirdBread: string = 'Lista de colaboradores'; 


}
