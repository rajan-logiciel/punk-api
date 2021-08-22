import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

import { BeerHttpServive } from '../../services/beers-http.service'

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.less']
})

export class RandomBeerComponent implements OnInit {

  randomBeer:any = {}
  loader:string = '';

  constructor(private Beer:BeerHttpServive) {}

  ngOnInit(): void {

    // Fetch The Random Record
    this.getRandomBeer();
  }

  /**
   * @function getRandomBeer
   * @param loader[String]
   * @description  use for get the random beer 
   **/
  getRandomBeer(loader:string = '') {


    this.loader = loader;

    this
      .Beer
      .getRandomBeer()
      .subscribe( (response) => {
        this.randomBeer = response.shift();
        this.loader = '';
      })
  }

}
