import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient) { }

  getSubscriptionTypes():Observable<string[]>{
    return of(['Monthly', 'Annual', 'Lifetime', 'Online Sub']);
      }

  postUserSettingsForm(userSettings:UserSettings) : Observable<any>{
   return this.http.post('https://putsreq.com/4lC2luKcjGn6BXpfPQgj', userSettings);
   // return of(userSettings); // fake observable not needed anymore as we are now using http
  }
}
