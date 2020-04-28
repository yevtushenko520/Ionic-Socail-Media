import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the NotiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noti',
  templateUrl: 'noti.html',
})
export class NotiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotiPage');
  }

  setProfile(){
    this.navCtrl.push(UserProfilePage);
  }

  goToMes(){
    this.navCtrl.push(ContactPage);
  }

  goProfile(){
    this.navCtrl.push(ProfilePage);
  }

}
