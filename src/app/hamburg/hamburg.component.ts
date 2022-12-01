import { Component, OnInit } from '@angular/core';
import { hamburg } from './hamburg';
import { HamburgDataService } from '../servicios/hamburg-data.service';

@Component({
  selector: 'app-hamburg',
  templateUrl: './hamburg.component.html',
  styleUrls: ['./hamburg.component.scss']
})
export class HamburgComponent implements OnInit {
  hamburgs : hamburg[] = [];
  constructor(private hamburgDataService : HamburgDataService ) { }

  ngOnInit(): void {
    this.hamburgDataService.getAll()
    .subscribe(hamburgs => this.hamburgs=hamburgs)
  }

}
