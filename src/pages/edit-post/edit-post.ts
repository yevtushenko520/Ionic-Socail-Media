import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the EditPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-post',
  templateUrl: 'edit-post.html',
})
export class EditPostPage {

  loginData = { title:'' };
  url:string;
  data: Observable<any>;
  ids:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {

    this.ids = navParams.get('item_post');

  }



  ionViewDidLoad() {
    this.loginData.title = this.ids['text'];
  }

  save(){
    if(this.loginData.title.length > 0 ){

  
      this.url = "http://mekooshar.appvilo.com/api/update_post.php";
      let postData = new FormData();
      postData.append('post_id',this.ids['id']);
      postData.append('text',this.loginData.title);
      this.data = this.http.post(this.url,postData);
  
      this.data.subscribe(data =>{
        this.navCtrl.pop();
      });

    }
  }

}
