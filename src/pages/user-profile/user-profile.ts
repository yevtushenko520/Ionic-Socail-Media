import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  url:string;
  
  url2:string;
  url3:string;
  data:Observable<any>;
  items:any;
  queryText:string;
  ids:any;
  public searchBar = false;
  data_post: Observable<any>;
  status:any;
  dev = [];
  devs = {};
  user_id:any;
  loginData = { name:'',status:'',summary:'',experience:'',skills:'',educations:'',languages:'',image:'' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,private databaseProvider:DatabaseProvider) {
    this.ids = navParams.get('id');
    this.databaseProvider.getUsers().then(data=>{
      this.devs = data;

    //  alert( data);
 
      if(data[0]['user_id']!=null){

        this.user_id = data[0]['user_id'];

      }else{
       
    
       
      }
    }).catch();
  }

  ionViewDidLoad() {
    
    this.url = "http://mekooshar.appvilo.com/api/get_post_lost.php?user_id="+this.ids;
    this.getData();

    this.url2 = "http://mekooshar.appvilo.com/api/get_info_user.php?user_id="+this.ids;
    this.getData2();

    this.url3 = "http://mekooshar.appvilo.com/api/check_friend.php";
    let postData = new FormData();
    postData.append('user_id_one',this.user_id);
   
    postData.append('user_id_two',this.ids);
   
    this.data = this.http.post(this.url3,postData);

    this.data.subscribe(data =>{
    // console.log(JSON.stringify(data)+" GNIDA GG");

     if(data['status']=="400 OK"){

      this.status = 0;
     }else if(data['status']=="200 OK"){
      this.status = 1;
     }
    });

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
        this.ionViewDidLoad();
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
       this.ionViewDidLoad();
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

  delete(ids){
    this.url = "http://mekooshar.appvilo.com/api/delete_friend.php";
    let postData = new FormData();
    postData.append('user_id_one',this.user_id);
   
    postData.append('user_id_two',ids);
   
    this.data = this.http.post(this.url,postData);

    this.data.subscribe(data =>{
      this.ionViewDidLoad();
    });
  }


  sendFriends(item){
  
    this.url = "http://mekooshar.appvilo.com/api/send_friend.php";
    let postData = new FormData();
    postData.append('user_id_one',this.user_id);
   
    postData.append('user_id_two',item);
    postData.append('status',"1");
    this.data = this.http.post(this.url,postData);

    this.data.subscribe(data =>{
      this.ionViewDidLoad();
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

}
