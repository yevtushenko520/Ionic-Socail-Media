import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  slides = [
    {
      title: "Welcome to Mekooshar!",
      description: "Prepare for a new social networking experience with Mekooshar, the first social networking site for Hebrew speaking professionals.",
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "What are you waiting for?",
      description: "Mekooshar is a social networking site that welcomes Jewish and other cultures so whether you live in Israel or on the other side of the globe",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "Sign up or log in to Mekooshar!",
      description: "Experience Mekooshar to meet new people and remain connected. Share your ideas and insights with Mekooshar, where there is always someone to talk or collaborate with, in Hebrew or another preferred language.",
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

}
