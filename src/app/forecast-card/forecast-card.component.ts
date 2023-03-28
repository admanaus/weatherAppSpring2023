import { Component } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css']
})
export class ForecastCardComponent {

  constructor(private weatherApiService: WeatherApiService){}
  weatherResponse: string | undefined;
  locationString = '';

  getWeather(location: string){
    this.weatherApiService.getWeatherByLocation(location)
    .subscribe((res: any) => {
      this.weatherResponse = res;
      console.log(res);
    })
  }

}
