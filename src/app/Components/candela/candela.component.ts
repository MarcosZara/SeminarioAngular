import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-candela',
  templateUrl: './candela.component.html',
  styleUrls: ['./candela.component.scss']
})
export class CandelaComponent implements OnInit {

  constructor(private titulo:Title) {
    titulo.setTitle('Hamburgueseria')
  }

  ngOnInit(): void {
  }

}
