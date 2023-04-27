import { Component, OnInit, ViewChild } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city';

@Component({
    selector: 'app-weather-b',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.css']
  })
  export class CityComponent{
    constructor(private cityService:CityService){}
  
    cityObj: City = new City();
    inputValue: String = '';
    citiesFromDB: City[] = [];
    newCityName: string = '';
    id: number = 1;
  
    ngOnInit(): void{
      this.newCityName =  '';
      this.cityObj = new City();
      this.citiesFromDB = [];
      this.getCity();
    }
  
    getCity(){
      this.cityService.getCity().subscribe(result=>
        {
          this.citiesFromDB = result;
        });
    }
  
    addCity(){
      let newCity = {cityName: this.newCityName, id:this.id};
      this.cityService.addCity(newCity);
      this.id++;
    }
  }