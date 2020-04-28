import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { PostViewPage } from '../post-view/post-view';
import { CreatePostPage } from '../create-post/create-post';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url:string;
  data:Observable<any>;
  items:any;
  queryText:string;

  public searchBar = false;
  data_post: Observable<any>;
  url_like:string;
  data_like:Observable<any>;

  dev = [];
  devs = {};

  user_id:any;

  constructor(public navCtrl: NavController, public http:HttpClient,private databaseProvider:DatabaseProvider) {
  }


  ionViewDidEnter() {

    this.databaseProvider.getUsers().then(data=>{
      this.devs = data;

    //  alert( data);
 
      if(data[0]['user_id']!=null){

        this.user_id = data[0]['user_id'];

        this.url = "http://mekooshar.appvilo.com/api/get_post_lost.php?user_id="+data[0]['user_id'];
    this.getData();
  

      }else{
        this.url = "http://mekooshar.appvilo.com/api/get_post_lost.php?user_id="+data[0]['user_id'];
    this.getData();
    
       
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

  updateText(ev){
 
  
    if(this.queryText.length > 0 ){
    this.url = "http://mekooshar.appvilo.com/api/search_post.php?text="+this.queryText;
    this.data = this.http.get(this.url);
    this.data.subscribe(data => {
      
  
     
      if(data['status']!="400 OK"){
        this.items = data;
       }else if(data['status']=="400 OK"){
        this.items = null;
       }
    })

  }else if(this.queryText.length <= 0){
    this.searchBar=false;
    console.log("GNIDA");
    this.ionViewDidEnter();

  }

  }

  cancelSearch(){

    this.searchBar=false;
    this.ionViewDidEnter();


  }
  

  moveToCreate(){
    this.navCtrl.push(CreatePostPage);
  }

moveToWish(item){
  this.navCtrl.push(PostViewPage,{
    item_post:item
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

  goToMes(){
    this.navCtrl.push(ContactPage);
  }

  goProfile(){
    this.navCtrl.push(ProfilePage);
  }

}
