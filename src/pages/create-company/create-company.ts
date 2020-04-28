import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the CreateCompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-company',
  templateUrl: 'create-company.html',
})
export class CreateCompanyPage {

  loginData = { title:'',phone:'',email:'',location:'',text:'',weblink:'',industry:'' };
  url:string;
  data: Observable<any>;

  dev = [];
  devs = {};
  user_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private databaseProvider:DatabaseProvider) {

    this.databaseProvider.getUsers().then(data=>{
      this.devs = data;

    //  alert( data);
 
      if(data[0]['user_id']!=null){

        this.user_id = data[0]['user_id'];

      }else{
       
    
       
      }
    }).catch();
  }

  
  save(){

    if(this.loginData.title.length > 0 && this.loginData.location.length > 0
      && this.loginData.email.length > 0 && this.loginData.text.length > 0 && this.loginData.phone.length > 0
      && this.loginData.weblink.length > 0 && this.loginData.industry.length > 0){

  
      this.url = "http://mekooshar.appvilo.com/api/create_company.php";
      let postData = new FormData();
      postData.append('user_id',this.user_id);
      postData.append('text',this.loginData.title);
      postData.append('location',this.loginData.location);
      postData.append('phone',this.loginData.phone);
      postData.append('description',this.loginData.text);
      postData.append('email',this.loginData.email);
      postData.append('image',"default-user.png");
      postData.append('weblink',this.loginData.weblink);
      postData.append('industry',this.loginData.industry);
      this.data = this.http.post(this.url,postData);
  
      this.data.subscribe(data =>{
        this.navCtrl.pop();
      });

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCompanyPage');
  }

}
