import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { CreateGroupPage } from '../create-group/create-group';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {


  url:string;
  data:Observable<any>;
  items:any;
  queryText:string;

  public searchBar = false;
  dev = [];
  devs = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,private databaseProvider:DatabaseProvider) {
  }


 ionViewDidEnter() {

  this.databaseProvider.getUsers().then(data=>{
    this.devs = data;

  //  alert( data);

    if(data[0]['user_id']!=null){

      this.url = "http://mekooshar.appvilo.com/api/get_groups.php?user_id="+data[0]['user_id'];
      this.getData();
  


    }else{
      this.url = "http://mekooshar.appvilo.com/api/get_groups.php?user_id="+data[0]['user_id'];
      this.getData();
  
  
     
    }
  }).catch();

  


  }

  
  create(){
    this.navCtrl.push(CreateGroupPage);
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
