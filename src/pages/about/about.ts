import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ConnectionsPage } from '../connections/connections';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  url:string;
  url2:string;
  data:Observable<any>;
  items:any;
  items2:any;
  queryText:string;

  public searchBar = false;
  dev = [];
  devs = {};

  user_id:any;
  constructor(public navCtrl: NavController, public http:HttpClient,private databaseProvider:DatabaseProvider) {


  }

  goConnection(){
    this.navCtrl.push(ConnectionsPage);
  }

  ionViewDidEnter() {

    this.databaseProvider.getUsers().then(data=>{
      this.devs = data;

    //  alert( data);
 
    
      if(data[0]['user_id']!=null){

        this.user_id = data[0]['user_id'];

        this.url = "http://mekooshar.appvilo.com/api/people_myk.php?user_id="+data[0]['user_id'];
        this.getData();
    
        this.url2 = "http://mekooshar.appvilo.com/api/notification.php?user_id="+data[0]['user_id'];
        this.getData2();

      }else{
        this.url = "http://mekooshar.appvilo.com/api/people_myk.php?user_id="+data[0]['user_id'];
        this.getData();
    
        this.url2 = "http://mekooshar.appvilo.com/api/notification.php?user_id="+data[0]['user_id'];
        this.getData2();
       
      }
    }).catch();
   

  }

  sendFriends(item){
  
    this.url = "http://mekooshar.appvilo.com/api/send_friend.php";
    let postData = new FormData();
    postData.append('user_id_one',this.user_id);
   
    postData.append('user_id_two',item['id']);
    postData.append('status',"1");
    this.data = this.http.post(this.url,postData);

    this.data.subscribe(data =>{
      this.ionViewDidEnter();
    });
  }
  
  getData2(){
    
    this.data = this.http.get(this.url2);
    this.data.subscribe(data => {
   
       
      if(data['status']!="400 OK"){
        this.items2 = data;
        console.log(JSON.stringify(this.items2));
       }else if(data['status']=="400 OK" || data['status']=="500 OK"){
        this.items2 = null;
        console.log(this.items2);
       }
      
    
    })

    
  }

  getData(){
    
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
   
       
      if(data['status']!="400 OK"){
        this.items = data;
       // console.log(JSON.stringify(this.items));
       }else if(data['status']=="400 OK" || data['status']=="500 OK"){
        this.items = null;
        //console.log(this.items);
       }
      
    
    })

    
  }

  setProfile2(id){

    this.navCtrl.push(UserProfilePage,{
      id:id['from_id']
    });

  }

  setProfile(id){

   
    this.navCtrl.push(UserProfilePage,{
      id:id['id']
    });

  }

  

}
