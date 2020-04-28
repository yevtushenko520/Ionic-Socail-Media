import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SQLiteObject,SQLite } from '@ionic-native/sqlite';
import {BehaviorSubject} from 'rxjs/Rx';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import {Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  database:SQLiteObject;
  private databaseReady:BehaviorSubject<boolean>;

  constructor(public http: Http,private sqlitePorter:SQLitePorter, private storage: Storage, private sqlite:SQLite,
  private platform:Platform) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(()=>{
      this.sqlite.create({
        name:'developers.db',
        location: 'default'
      })
      .then((db: SQLiteObject)=>{
        this.database = db;
        this.storage.get('database_filled').then(val =>{
          if(val){
            this.databaseReady.next(true);
          }else{
             this.fillDatabase();
          }
        })
      })
    })
  }

  fillDatabase() {
    this.http.get('assets/dumy.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }

  addDeveloper(fp_id, user_id){
    let data = [fp_id, user_id];
    return this.database.executeSql("INSERT INTO user (fp_id,user_id) VALUES (?,?)",data).then(res =>{
      return res;
    })
  }


  deleteDrop(){
    
    return this.database.executeSql("DELETE FROM user",[]).then(res =>{
      return res;
    })
  }

  getUsers(){
    return this.database.executeSql("SELECT * FROM user",[]).then(data =>{
      let dev = [];
      if(data.rows.length>0){
        for(var i =0;i <data.rows.length;i++){
          dev.push({fp_id: data.rows.item(i).fp_id, user_id: data.rows.item(i).user_id })
        }
      }
      return dev;
    },err =>{
      console.log("Erro",err);
      return [];
    })
  }


  getDatabaseState(){
    return this.databaseReady.asObservable();
  }

}
