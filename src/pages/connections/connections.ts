import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserProfilePage } from '../user-profile/user-profile';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the ConnectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connections',
  templateUrl: 'connections.html',
})
export class ConnectionsPage {

  url:string;
  data:Observable<any>;
  items:any;
  dev = [];
  devs = {};


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,private databaseProvider:DatabaseProvider) {
  }


  ionViewDidLoad() {

    this.databaseProvider.getUsers().then(data=>{
      this.devs = data;

    //  alert( data);
 
      if(data[0]['user_id']!=null){

        this.url = "http://mekooshar.appvilo.com/api/connection_list.php?user_id="+data[0]['user_id'];
        this.getData();
  

      }else{
        this.url = "http://mekooshar.appvilo.com/api/connection_list.php?user_id="+data[0]['user_id'];
        this.getData();
    
       
      }
    }).catch();
   
  

  }

  setProfile(id){

    console.log(JSON.stringify(id)+" GNIDA 2");
    this.navCtrl.push(UserProfilePage,{
      id:id['id']
    });

  }

    
  getData(){
    
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
   
       
      if(data['status']!="400 OK"){
        this.items = data;
       // console.log(JSON.stringify(this.items));
       }else if(data['status']=="400 OK" || data['status']=="500 OK"){
        this.items = null;
        console.log(this.items);
       }
      
    
    })

    
  }

}
