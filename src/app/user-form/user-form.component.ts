import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

actualUserSettings: UserSettings = {
  name: null,
  password: null,
  emailOffers: null,
  interfaceStyle: null,
  subscriptionType: null,
  notes: null,
  date: null
}

userSettings:UserSettings = {...this.actualUserSettings}

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
console.log(form.valid)
  }

}
