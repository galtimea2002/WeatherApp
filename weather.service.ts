import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

// Service for WEATHER
export class WeatherService {
  searchTermEmitter: Subject<string> = new Subject<string>();

  constructor(private http:HttpClient) { }

  getWeather(city:string, units:string): Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=4313bef314c79ff07ae4697511c9246e&units=' + units);
  }
}
