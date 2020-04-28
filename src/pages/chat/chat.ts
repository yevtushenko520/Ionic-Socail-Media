import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  
  url:string;
  url2:string;
  data:Observable<any>;
  items:any;
  ids:any;
  editorMsg:any;

  dev = [];
  devs = {};
  user_id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,private databaseProvider:DatabaseProvider) {

    this.ids = navParams.get('id');

  }


  ionViewDidLoad() {
    this.databaseProvider.getUsers().then(data=>{
      this.devs = data;

    //  alert( data);
 
      if(data[0]['user_id']!=null){

        this.user_id = data[0]['user_id'];

        this.url = "http://mekooshar.appvilo.com/api/get_chat.php?user_id_one="+data[0]['user_id']+"&user_id_two="+this.ids;
        this.getData();
  

      }else{
        this.url = "http://mekooshar.appvilo.com/api/get_chat.php?user_id_one="+data[0]['user_id']+"&user_id_two="+this.ids;
    this.getData();
       
      }
    }).catch();

    
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

  
  sendCom(){

    if(this.editorMsg.length > 0){

  
      this.url2 = "http://mekooshar.appvilo.com/api/send_message.php";
      let postData = new FormData();
      postData.append('user_id_one',this.user_id);
      postData.append('user_id_two', this.ids);
      postData.append('text',this.editorMsg);
     
     
      this.data = this.http.post(this.url2,postData);
  
      this.data.subscribe(data =>{
        
        this.editorMsg = "";
        this.url = "http://mekooshar.appvilo.com/api/get_chat.php?user_id_one="+this.user_id+"&user_id_two="+ this.ids;
        this.getData();

      });

    }

  }


}
