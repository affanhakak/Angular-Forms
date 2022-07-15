import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

actualUserSettings: UserSettings = {
  name: '',
  password: '',
  emailOffers: false,
  interfaceStyle: '',
  subscriptionType: '',
  notes: '',
  date: ''
}

userSettings:UserSettings = {...this.actualUserSettings}

  constructor() { }

  ngOnInit(): void {
  }

}
