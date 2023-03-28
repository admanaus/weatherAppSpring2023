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
  showLoading = false;
  locationString = '';
  weatherDesc = '';
  FeelsLikeF = '';


  getWeather(location: string){
    this.showLoading = true;
    this.weatherApiService.getWeatherByLocation(location)
    .subscribe((res: any) => {
      this.showLoading = false;
      this.weatherResponse = res;
      console.log(res);
      this.weatherDesc = res.current_condition[0].weatherDesc[0].value;
      this.FeelsLikeF = res.current_condition[0].FeelsLikeF
    })
  }

}
