import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  regData = { username: '', mail: '', pass: '', password_conf: '' };
  loading:any;
  data: Observable<any>;
  authForm : FormGroup;
  username: AbstractControl;
	email: AbstractControl;
	password: AbstractControl;
  pass_conf: AbstractControl;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private alertCtrl: AlertController,
    public loadingCtrl: LoadingController, public fb: FormBuilder) {
    
      this.authForm = this.fb.group({
        'username' : [null, Validators.compose([Validators.required])],
        'email': [null, Validators.compose([Validators.required])],
        'password': [null, Validators.compose([Validators.required])],
        'password_conf': [null, Validators.compose([Validators.required])],
       
    });

      this.username = this.authForm.controls['username'];
      this.email = this.authForm.controls['email'];
      this.password = this.authForm.controls['password'];
      this.pass_conf = this.authForm.controls['password_conf'];
  

  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }


  postReg(){

    this.presentLoadingDefault();

    if(this.regData.mail.length <= 0 || this.regData.pass.length <= 0 ||  this.regData.username.length <= 0 ){

      this.loading.dismiss();
      this.presentError();

    }else{
    var url = "http://mekooshar.appvilo.com/api/register_user.php";
    let postData = new FormData();
    postData.append('email',this.regData.mail);
    postData.append('parola',this.regData.pass);
    postData.append('username',this.regData.username);
  
    this.data = this.http.post(url,postData);

    this.data.subscribe(data =>{

     if(data['user']['status']=="400 OK"){

      this.loading.dismiss();
      this.presentUser();
        
      }else {


        //alert(JSON.stringify(data));
        
       // this.addUser(data['user']['fp_id'],data['user']['user_id']);
      
        this.loading.dismiss();
          this.navCtrl.setRoot(TabsPage);

        
      }

  
    });

   
    


  }
  }

  presentError() {
    let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Field is empty',
    buttons: ['Ok']
    });
    alert.present();
    }
    
    presentUser() {
      let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'This user is registered',
      buttons: ['Ok']
      });
      alert.present();
      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  moveToLogin(){
    this.navCtrl.push(LoginPage);
  }

  doRegister(regData){
    this.navCtrl.setRoot(TabsPage);
  }

}
