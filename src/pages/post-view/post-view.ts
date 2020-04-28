import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditPostPage } from '../edit-post/edit-post';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UserProfilePage } from '../user-profile/user-profile';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the PostViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-view',
  templateUrl: 'post-view.html',
})
export class PostViewPage {

  ids:string;
  url:string;
  url2:string;
  data: Observable<any>;
  items:any;
  editorMsg:any;
  dev = [];
  devs = {};
  user_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private databaseProvider:DatabaseProvider) {

    this.ids = navParams.get('item_post');
    this.databaseProvider.getUsers().then(data=>{
      this.devs = data;

    //  alert( data);
 
      if(data[0]['user_id']!=null){

        this.user_id = data[0]['user_id'];

      }else{
       
    
       
      }
    }).catch();
  }


  sendCom(){

    if(this.editorMsg.length > 0){

  
      this.url = "http://mekooshar.appvilo.com/api/add_comment.php";
      let postData = new FormData();
      postData.append('user_id',this.user_id);
      postData.append('text',this.editorMsg);
      postData.append('post_id',this.ids['id']);
      postData.append('post_type',"2");
     
      this.data = this.http.post(this.url,postData);
  
      this.data.subscribe(data =>{
        
        this.editorMsg = "";
        this.url2 = "http://mekooshar.appvilo.com/api/get_comments.php?post_id="+this.ids['id'];
   this.getData();

      });

    }

  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad PostViewPage');
   this.url2 = "http://mekooshar.appvilo.com/api/get_comments.php?post_id="+this.ids['id'];
   this.getData();
  }

  moveToWish(item){
    this.navCtrl.push(UserProfilePage,{
      id:item['user_id']
      });
  }

  goToMes(){
    this.navCtrl.push(EditPostPage,{
      item_post:this.ids
      });
  }

  
  getData(){
    
    this.data = this.http.get(this.url2);
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

  delete(){
   
    this.url = "http://mekooshar.appvilo.com/api/delete_post.php";
    let postData = new FormData();
    postData.append('post_id',this.ids['id']);
    this.data = this.http.post(this.url,postData);

    this.data.subscribe(data =>{
      this.navCtrl.pop();
    });
  }

}
