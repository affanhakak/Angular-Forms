import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from '../data/user-settings';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user!:SocialUser;

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

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user =user;
    })
  }

  onSubmit(form:NgForm){
   console.log(form.valid);
  }

  signInWithGoogle():any {
this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut():any {
    this.authService.signOut();
  }

}
