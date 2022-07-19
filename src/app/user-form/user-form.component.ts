import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from '../data/user-settings';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public user!: SocialUser;

  public loggedIn!:Boolean

  public fb_user!: any;

  public subscriptionTypes!:Observable<string[]>;

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

  constructor(private authService: SocialAuthService, private dataService:DataService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user = user;
    });
    this.authService.authState.subscribe((fb_user)=>{
      this.fb_user = fb_user;
      this.loggedIn = fb_user != null;
    })
    this.subscriptionTypes = this.dataService.getSubscriptionTypes()
  }

  onSubmit(form:NgForm){
   console.log(form.valid);
   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    result => console.log('success ', result),
    error => console.log('error ', error)
   );
  }

  signInWithGoogle():any {
   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut():any {
    this.authService.signOut();
  }

  signIn(){
this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }

}
