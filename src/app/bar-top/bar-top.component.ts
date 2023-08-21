import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-top',
  templateUrl: './bar-top.component.html',
  styleUrls: ['./bar-top.component.css']
})

export class BarTopComponent implements OnInit {

  logo: string;

  constructor () {

    this.logo = './assets/logo.png'

  }

  ngOnInit() {
    
  }

}
