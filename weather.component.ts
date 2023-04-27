import { Component, OnInit, ViewChild } from '@angular/core';
import {WeatherService } from './weather.service';
import { CityService } from './city.service';

@Component({
  selector: 'app-weather-a',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  @ViewChild('weatherForm') weatherForm: any;
  myWeather: any;
  temperature: number = 0;
  humidity: number = 0; // feuchtigkeit
  pressure: number = 0; // luftdruck
  wind: number = 0;
  summary: string = '';
  iconURL: string = '';
  city: string = '';
  units: string = 'metric';  // in Celsius
  searchCity: string = '';

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.city = this.searchCity;
    this.weatherService.getWeather(this.searchCity, this.units).subscribe({

      next: (res)=>{
        console.log(res)
        this.myWeather = res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;    
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.wind = this.myWeather.wind.speed;
        this.summary = this.myWeather.weather[0].main;
      
        this.iconURL = 'https://openweathermap.org/img/wn/'+this.myWeather.weather[0].icon+'@2x.png';
      },

      error: (error)=>console.log(error.message),
      
      complete: ()=>console.info('API call completed')
    })
}

}

