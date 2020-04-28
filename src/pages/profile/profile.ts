import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalSettingPage } from '../modal-setting/modal-setting';
import { JobsPage } from '../jobs/jobs';
import { GroupsPage } from '../groups/groups';
import { SchoolPage } from '../school/school';
import { EventPage } from '../event/event';
import { PaymentPage } from '../payment/payment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


  url:string;
  
  url2:string;
  data:Observable<any>;
  items:any;
  queryText:string;
  data_post: Observable<any>;
  public searchBar = false;
  dev = [];
  devs = {};
  loginData = { name:'',status:'',summary:'',experience:'',skills:'',educations:'',languages:'',image:'' };
  user_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public http:HttpClient,private databaseProvider:DatabaseProvider) {
  }


  
  ionViewDidEnter() {

   
    this.databaseProvider.getUsers().then(data=>{
      this.devs = data;

    //  alert( data);
 
      if(data[0]['user_id']!=null){

        
        this.user_id = data[0]['user_id'];
        this.url = "http://mekooshar.appvilo.com/api/get_post_lost.php?user_id="+data[0]['user_id'];
        this.getData();
    
        this.url2 = "http://mekooshar.appvilo.com/api/get_info_user.php?user_id="+data[0]['user_id'];
        this.getData2();
  

      }else{
        this.url = "http://mekooshar.appvilo.com/api/get_post_lost.php?user_id="+data[0]['user_id'];
        this.getData();
    
        this.url2 = "http://mekooshar.appvilo.com/api/get_info_user.php?user_id="+data[0]['user_id'];
        this.getData2();
    
       
      }
    }).catch();

  }

  like(item){
    var url = "http://mekooshar.appvilo.com/api/like_user_post.php";
    let postData = new FormData();
    postData.append('user_id',this.user_id);
    postData.append('prod_id',item.id);
    postData.append('like','1');

    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['status']=="200 OK"){

        console.log(data);
        this.ionViewDidEnter();
/*
        this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id="+this.user_id_2+"&wish_id="+this.ids;

  

        this.data_like = this.http.get(this.url_like);
      this.data_like.subscribe(data_like => {
  
      //  this.status = data_like['status'];
  
  
      })*/


        
      }else{
        console.log(data);
      }
  console.log(data);
    });


  }

  dislike(item){

    var url = "http://mekooshar.appvilo.com/api/like_user_post.php";
    let postData = new FormData();
    postData.append('user_id',this.user_id);
    postData.append('prod_id',item.id);
    postData.append('like','2');

    this.data_post = this.http.post(url,postData);

    this.data_post.subscribe(data =>{
      if(data['status']=="200 OK"){

        console.log(data);
       this.ionViewDidEnter();
/*
        this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id="+this.user_id_2+"&wish_id="+this.ids;

  

        this.data_like = this.http.get(this.url_like);
      this.data_like.subscribe(data_like => {
  
      //  this.status = data_like['status'];
  
  
      })*/


        
      }else{
        console.log(data);
      }
  console.log(data);
    });


  }

  getData2(){
    
    this.data = this.http.get(this.url2);
    this.data.subscribe(data => {
   
       
      if(data['status']!="400 OK"){
       // this.items = data;
       this.loginData.name = data['name'];
       this.loginData.status = data['status'];
       this.loginData.image = data['image'];
       this.loginData.experience = data['history'];
       this.loginData.educations = data['education'];
       this.loginData.summary = data['education'];
       console.log(JSON.stringify(data));
       }else if(data['status']=="400 OK" || data['status']=="500 OK"){
      //  this.items = null;
        
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
      //  console.log(this.items);
       }
      
    
    })

    
  }


  setting(){
    let profileModal = this.modalCtrl.create(ModalSettingPage);
    profileModal.present();
  }

  setJob(){
    this.navCtrl.push(JobsPage);
  }

  setGroup(){
    this.navCtrl.push(GroupsPage);
  }

  setSchool(){
    this.navCtrl.push(SchoolPage);
  }

  setEvent(){
    this.navCtrl.push(EventPage);
  }

  setPayment(){
    this.navCtrl.push(PaymentPage);
  }
  
}
