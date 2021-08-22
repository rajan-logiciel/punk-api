import { Component, OnInit } from '@angular/core';
import { BeerHttpServive } from '../../services/beers-http.service';

@Component({
  selector: 'app-beer-search-list',
  templateUrl: './beer-search-list.component.html',
  styleUrls: ['./beer-search-list.component.less']
})
export class BeerSearchListComponent implements OnInit {

  model:any = {
    beer_name: '',
    filterBy: 'beer_name',
    requestForFilter: '',
    showLoadMore: true
  }

  query:any = {
    page: 1,
    per_page: 10
  };



  searchLoader:string = '';

  beers:any = []

  constructor( private Beer: BeerHttpServive ) { }

  ngOnInit(): void {

    this.fetchBeerList();
  }

  /**
   * @function FetchList
   * @description use to fetch the data using filters
   **/
  fetchBeerList(params:object = {}) {

    let query = { ...this.query, ...params };

    if( query.page === 1 ) { this.beers = []; }

    this
      .Beer
      .getAll(query)
      .subscribe( (response) => {
        this.beers = [...this.beers, ...response];

        this.model.showLoadMore = true;
        if( response.length < query.per_page ) {
          this.model.showLoadMore = false;
        }

        this.searchLoader = '';
      })
  };

  /**
   * @function filderData
   * @description use to fetch data using filters & load More
   **/
  filderData(loadMore:boolean = false, queryRequest:boolean = false) {

    let formValues = {...this.model};
    let query:any = {};

    if( queryRequest === true){ this.query.page = 1 }

    this.searchLoader = 'search';

    if( loadMore === true ) {
      this.query.page += 1;
      this.searchLoader = 'loader';
    }

    this.model.requestForFilter = formValues.filterBy;

    this.model.filterName =  '';
    if( (formValues.beer_name).trim() !== '' ) {

      this.model.filterName = formValues.beer_name;
      query[formValues.filterBy] = formValues.beer_name;
    }

    this.fetchBeerList(query);
  }
}
