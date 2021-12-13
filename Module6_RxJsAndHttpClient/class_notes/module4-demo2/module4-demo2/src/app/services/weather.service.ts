import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl : string;
  appId: string;
  units: string;
  url : string;
  forecast: any;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://api.openweathermap.org/data/2.5/';
    this.appId = 'b5ea0f92c5b8deb13ccec7d557ac6a4d';
    this.units = 'metric';
   }

   getWeatherForecast(cityName: string): Observable<any> {
     
    this.url = this.baseUrl + 'forecast?q=' + cityName + '&appid=' + this.appId + '&units=' + this.units  ;     
    return this.http.get(this.url
     // '&units=' + this.units
   )
   //return this.forecast;
     //.catch(this.handleError);
 }

 private handleError(error: any) {
   // In a real world app, we might use a remote logging infrastructure
   let errMsg: string;
   errMsg = error.message ? error.message : error.toString();
   console.error(errMsg);
   return Observable.throw(errMsg);
 }
}
