import { Component } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  constructor(private weatherApiService: WeatherApiService){}
  value = '';

  getWeather(location: string){
    this.weatherApiService.getWeatherByLocation(location)
    .subscribe((res: any) => {
      console.log(res);
    })
  }
}
