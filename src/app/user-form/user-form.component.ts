import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

userSettings: UserSettings = {
  name: '',
  password: '',
  emailOffers: false,
  interfaceStyle: '',
  subscriptionType: '',
  notes: '',
  date: ''
}
  constructor() { }

  ngOnInit(): void {
  }

}
