import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DatabaseProvider } from '../../providers/database/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the CreatePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html',
})
export class CreatePostPage {

  loginData = { title:'' };
  url:string;
  data: Observable<any>;
  base64Image:any;
  picture_new:any;
  dev = [];
  devs = {};
  user_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private databaseProvider:DatabaseProvider,
    private alertCtrl: AlertController,private camera: Camera) {
    this.databaseProvider.getUsers().then(data=>{
      this.devs = data;

    //  alert( data);
 
      if(data[0]['user_id']!=null){

        this.user_id = data[0]['user_id'];

      }else{
       
    
       
      }
    }).catch();

  }

  openModal(){
    
    let alert = this.alertCtrl.create({
      title: 'Alert',
      message: 'Choose where to take photos',
      
      buttons: [
        {
          text: 'Camera',
          handler: data => {
            this.openCamera();
          }
        },
        {
          text: 'Gallery',
          handler: data => {
            this.openGalery();
            
          }
        }
      ]
    });
    alert.present();


}


openGalery(){
  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
  
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    saveToPhotoAlbum:false
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.base64Image = 'data:image/jpeg;base64,' + imageData;
   this.picture_new = imageData;


   

  }, (err) => {
   // Handle error
  });

}



openCamera(){

  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
   
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.base64Image = 'data:image/jpeg;base64,' + imageData;
   this.picture_new = imageData;


   //alert(this.base64Image);
    
  
  }, (err) => {
   // Handle error
  });

}


  save(){

    if(this.loginData.title.length > 0 ){

  
      this.url = "http://mekooshar.appvilo.com/api/create_post.php";
      let postData = new FormData();
      postData.append('user_id',this.user_id);
      postData.append('text',this.loginData.title);
      this.data = this.http.post(this.url,postData);
  
      this.data.subscribe(data =>{
        this.navCtrl.pop();
      });

    }

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostPage');
  }

}
