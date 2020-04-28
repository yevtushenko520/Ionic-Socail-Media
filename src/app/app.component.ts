import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../providers/database/database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  
  dev = [];
  devs = {};

  user_id_2:any;
  fp_id:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage,
    private databaseProvider:DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      storage.get('first_time').then((val) => {
        if (val !== null) {
           console.log('app isn');
          

           this.databaseProvider.getDatabaseState().subscribe(rdy=>{
            if(rdy){
              
      
              this.databaseProvider.getUsers().then(data=>{
                this.devs = data;
          
              //  alert( data);
           
                if(data[0]['user_id']!=null){
          
                  this.rootPage = TabsPage;
             
          
                }else{
          
                  this.rootPage = LoginPage;
                }
              }).catch();
      
            }
          })


        } else {
           console.log('probably the first time');
              storage.set('first_time', 'done');
              this.rootPage = TutorialPage;
        }
     });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
