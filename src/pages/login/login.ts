import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, LoadingController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ForgetPage } from '../forget/forget';
import { TabsPage } from '../tabs/tabs';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { IfObservable } from 'rxjs/observable/IfObservable';
import {Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  authForm : FormGroup;
  loginData = { email:'', password:'' };
  passwordtype:string='password';
  passeye:string ='eye';
  email: AbstractControl;
	password: AbstractControl;
  loading:any;
  data: Observable<any>;
  devs = [];
  dev = {};
  
  constructor(public navCtrl: NavController, public fb: FormBuilder,public loadingCtrl: LoadingController, public navParams: NavParams,
    public http: HttpClient,private alertCtrl: AlertController,private databaseProvider:DatabaseProvider) {

    this.authForm = this.fb.group({
      'email' : [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])],
    });

    this.email = this.authForm.controls['email'];
    this.password = this.authForm.controls['password'];
   

  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
  }
  addUser(fp_id, user_id){
        
    this.databaseProvider.addDeveloper(fp_id, user_id).then(data =>{
     
    })
    this.dev =  {};
  }

  moveToHome(){

    if(this.loginData.email.length > 0 && this.loginData.password.length > 0){
  //this.presentLoadingDefault();
  var url = "http://mekooshar.appvilo.com/api/login.php";
  let postData = new FormData();
  postData.append('email',this.loginData.email);
  postData.append('parola',this.loginData.password);
  this.data = this.http.post(url,postData);

  this.data.subscribe(data =>{

    console.log(data)

   // this.loading.dismiss();
 
  if(data['unswer']!=null){


    this.addUser(data['unswer']['id'],data['unswer']['id']);
    this.userLogin();

    
  }else{

 // this.loading.dismiss();
   this.presentUser();
  }
  

  });

}else{
  //this.loading.dismiss();
  this.presentError();

}
//this.loading.dismiss();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  moveToRegister(){

    this.navCtrl.push(RegisterPage);

  }

  forgetpassword(){
    this.navCtrl.push(ForgetPage);
  }
  
  userLogin(){
    this.navCtrl.setRoot(TabsPage);
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
      subTitle: 'This user is not registered',
      buttons: ['Ok']
      });
      alert.present();
      }
      

}
