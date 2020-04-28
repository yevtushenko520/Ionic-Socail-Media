import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { ProfilePage } from '../profile/profile';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  url:string;
  data:Observable<any>;
  items:any;
  dev = [];
  devs = {};

  constructor(public navCtrl: NavController, public http:HttpClient,private databaseProvider:DatabaseProvider) {


    
  }

  ionViewDidLoad() {

    this.databaseProvider.getUsers().then(data=>{
      this.devs = data;

    //  alert( data);
 
      if(data[0]['user_id']!=null){

        this.url = "http://mekooshar.appvilo.com/api/get_log_chats.php?user_id="+data[0]['user_id'];
        this.getData();
  

      }else{
        this.url = "http://mekooshar.appvilo.com/api/get_log_chats.php?user_id="+data[0]['user_id'];
        this.getData();
    
       
      }
    }).catch();


  }

  openChat(id){
    this.navCtrl.push(ChatPage,{
      id:id
    });
  }

  getData(){
    
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
   
       
      if(data['status']!="400 OK"){
        this.items = data;
        console.log(JSON.stringify(this.items));
       }else if(data['status']=="400 OK" || data['status']=="500 OK"){
        this.items = null;
        console.log(this.items);
       }
      
    
    })

    
  }
  
  goToMes(){
    this.navCtrl.push(ContactPage);
  }

  goProfile(){
    this.navCtrl.push(ProfilePage);
  }

}
