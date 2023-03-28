import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  getWeatherByLocation(location: string){
    return this.http.get<any>(
      `https://wttr.in/${location}?format=j1`
      )
  }

}
