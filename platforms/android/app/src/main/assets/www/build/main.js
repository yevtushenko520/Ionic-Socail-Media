webpackJsonp([22],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, http, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.ids = navParams.get('id');
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.user_id = data[0]['user_id'];
                _this.url = "http://mekooshar.appvilo.com/api/get_chat.php?user_id_one=" + data[0]['user_id'] + "&user_id_two=" + _this.ids;
                _this.getData();
            }
            else {
                _this.url = "http://mekooshar.appvilo.com/api/get_chat.php?user_id_one=" + data[0]['user_id'] + "&user_id_two=" + _this.ids;
                _this.getData();
            }
        }).catch();
    };
    ChatPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                console.log(JSON.stringify(_this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                console.log(_this.items);
            }
        });
    };
    ChatPage.prototype.sendCom = function () {
        var _this = this;
        if (this.editorMsg.length > 0) {
            this.url2 = "http://mekooshar.appvilo.com/api/send_message.php";
            var postData = new FormData();
            postData.append('user_id_one', this.user_id);
            postData.append('user_id_two', this.ids);
            postData.append('text', this.editorMsg);
            this.data = this.http.post(this.url2, postData);
            this.data.subscribe(function (data) {
                _this.editorMsg = "";
                _this.url = "http://mekooshar.appvilo.com/api/get_chat.php?user_id_one=" + _this.user_id + "&user_id_two=" + _this.ids;
                _this.getData();
            });
        }
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\chat\chat.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="message-wrap">\n\n    <div *ngFor="let item of items">\n    <div  class="message left" *ngIf="item.from_id != this.user_id" >\n      <img class="user-img" src="http://mekooshar.appvilo.com/public/img/{{item.from_image}}">\n    \n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>\n            {{item.from_name}} &nbsp;&nbsp;&nbsp;{{item.create}}</p>\n        </div>\n        <div class="msg-content">\n          <span class="triangle"></span>\n          <p class="line-breaker ">{{item.text}}</p>\n        </div>\n      </div>\n    </div>\n\n\n    <div  class="message right" *ngIf="item.from_id ==this.user_id">\n <img class="user-img" src="http://mekooshar.appvilo.com/public/img/{{item.from_image}}">\n \n <div class="msg-detail">\n   <div class="msg-info">\n     <p>\n      {{item.from_name}} &nbsp;&nbsp;&nbsp;{{item.create}}</p>\n   </div>\n   <div class="msg-content">\n     <span class="triangle"></span>\n     <p class="line-breaker ">{{item.text}}</p>\n   </div>\n </div>\n</div>\n\n</div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer no-border style="height:55px;">\n  <div class="input-wrap">\n \n    <textarea #chat_input\n              placeholder="Text Input"\n              [(ngModel)]="editorMsg"\n             >\n    </textarea>\n    <button ion-button clear icon-only item-right (click)="sendCom()">\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n    </button>\n  </div>\n \n</ion-footer>'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ConnectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConnectionsPage = /** @class */ (function () {
    function ConnectionsPage(navCtrl, navParams, http, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
    }
    ConnectionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.url = "http://mekooshar.appvilo.com/api/connection_list.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
            else {
                _this.url = "http://mekooshar.appvilo.com/api/connection_list.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
        }).catch();
    };
    ConnectionsPage.prototype.setProfile = function (id) {
        console.log(JSON.stringify(id) + " GNIDA 2");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile__["a" /* UserProfilePage */], {
            id: id['id']
        });
    };
    ConnectionsPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                // console.log(JSON.stringify(this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                console.log(_this.items);
            }
        });
    };
    ConnectionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connections',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\connections\connections.html"*/'<!--\n  Generated template for the ConnectionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Connections</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor="let item of items">\n    <ion-item (click)="setProfile(item)">\n        <ion-avatar item-start>\n          <img *ngIf="item.image ==null" src="http://mekooshar.appvilo.com/public/img/default-user.png">\n          <img *ngIf="item.image !=null" src="http://mekooshar.appvilo.com/public/img/{{item.image}}">\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n        <p *ngIf="item.status !=null">{{item.status}}</p>\n        <p *ngIf="item.status ==null">User Profile</p>\n   \n      </ion-item>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\connections\connections.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], ConnectionsPage);
    return ConnectionsPage;
}());

//# sourceMappingURL=connections.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite_porter__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http, sqlitePorter, storage, sqlite, platform) {
        var _this = this;
        this.http = http;
        this.sqlitePorter = sqlitePorter;
        this.storage = storage;
        this.sqlite = sqlite;
        this.platform = platform;
        this.databaseReady = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](false);
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'developers.db',
                location: 'default'
            })
                .then(function (db) {
                _this.database = db;
                _this.storage.get('database_filled').then(function (val) {
                    if (val) {
                        _this.databaseReady.next(true);
                    }
                    else {
                        _this.fillDatabase();
                    }
                });
            });
        });
    }
    DatabaseProvider.prototype.fillDatabase = function () {
        var _this = this;
        this.http.get('assets/dumy.sql')
            .map(function (res) { return res.text(); })
            .subscribe(function (sql) {
            _this.sqlitePorter.importSqlToDb(_this.database, sql)
                .then(function (data) {
                _this.databaseReady.next(true);
                _this.storage.set('database_filled', true);
            })
                .catch(function (e) { return console.error(e); });
        });
    };
    DatabaseProvider.prototype.addDeveloper = function (fp_id, user_id) {
        var data = [fp_id, user_id];
        return this.database.executeSql("INSERT INTO user (fp_id,user_id) VALUES (?,?)", data).then(function (res) {
            return res;
        });
    };
    DatabaseProvider.prototype.deleteDrop = function () {
        return this.database.executeSql("DELETE FROM user", []).then(function (res) {
            return res;
        });
    };
    DatabaseProvider.prototype.getUsers = function () {
        return this.database.executeSql("SELECT * FROM user", []).then(function (data) {
            var dev = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    dev.push({ fp_id: data.rows.item(i).fp_id, user_id: data.rows.item(i).user_id });
                }
            }
            return dev;
        }, function (err) {
            console.log("Erro", err);
            return [];
        });
    };
    DatabaseProvider.prototype.getDatabaseState = function () {
        return this.databaseReady.asObservable();
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite_porter__["a" /* SQLitePorter */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* Platform */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateGroupPage = /** @class */ (function () {
    function CreateGroupPage(navCtrl, navParams, http, databaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.loginData = { title: '', phone: '', email: '', location: '', text: '', weblink: '', industry: '' };
        this.dev = [];
        this.devs = {};
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.user_id = data[0]['user_id'];
            }
            else {
            }
        }).catch();
    }
    CreateGroupPage.prototype.save = function () {
        var _this = this;
        if (this.loginData.title.length > 0 && this.loginData.text.length > 0) {
            this.url = "http://mekooshar.appvilo.com/api/create_group.php";
            var postData = new FormData();
            postData.append('user_id', this.user_id);
            postData.append('text', this.loginData.title);
            postData.append('image', "default-user.png");
            postData.append('description', this.loginData.text);
            this.data = this.http.post(this.url, postData);
            this.data.subscribe(function (data) {
                _this.navCtrl.pop();
            });
        }
    };
    CreateGroupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateGroupPage');
    };
    CreateGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-group',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\create-group\create-group.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>Create Group</ion-title>\n  \n    \n    </ion-navbar>\n  </ion-header>\n\n  \n  \n  <ion-content >\n\n    <ion-list style="background-color: #fff;" >   \n            \n    \n    \n\n          \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Group name *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.title" ></ion-input>\n        \n      </ion-item>\n      \n     \n\n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Group text *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.text" ></ion-input>\n        \n      </ion-item>\n\n\n          <button ion-button full (click)="save()">Create</button>\n          \n\n\n              \n            \n            <ion-item>\n\n              \n            </ion-item>\n\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\create-group\create-group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], CreateGroupPage);
    return CreateGroupPage;
}());

//# sourceMappingURL=create-group.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateJobPage = /** @class */ (function () {
    function CreateJobPage(navCtrl, navParams, http, databaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.loginData = { title: '', phone: '', email: '', location: '', text: '' };
        this.dev = [];
        this.devs = {};
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.user_id = data[0]['user_id'];
            }
            else {
            }
        }).catch();
    }
    CreateJobPage.prototype.save = function () {
        var _this = this;
        if (this.loginData.title.length > 0 && this.loginData.location.length > 0
            && this.loginData.email.length > 0 && this.loginData.text.length > 0 && this.loginData.phone.length > 0) {
            this.url = "http://mekooshar.appvilo.com/api/create_job.php";
            var postData = new FormData();
            postData.append('user_id', this.user_id);
            postData.append('text', this.loginData.title);
            postData.append('location', this.loginData.location);
            postData.append('phone', this.loginData.phone);
            postData.append('description', this.loginData.text);
            postData.append('email', this.loginData.email);
            postData.append('image', "default-user.png");
            this.data = this.http.post(this.url, postData);
            this.data.subscribe(function (data) {
                _this.navCtrl.pop();
            });
        }
    };
    CreateJobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateJobPage');
    };
    CreateJobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-job',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\create-job\create-job.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>Create Job</ion-title>\n  \n    \n    </ion-navbar>\n  </ion-header>\n\n  \n  \n  <ion-content >\n\n    <ion-list style="background-color: #fff;" >   \n            \n    \n    \n\n          \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Job name *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.title" ></ion-input>\n        \n      </ion-item>\n      \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Job phone *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.phone" ></ion-input>\n        \n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Job email *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.email" ></ion-input>\n        \n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Job location *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.location" ></ion-input>\n        \n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Job text *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.text" ></ion-input>\n        \n      </ion-item>\n\n\n          <button ion-button full (click)="save()">Create</button>\n          \n\n\n              \n            \n            <ion-item>\n\n              \n            </ion-item>\n\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\create-job\create-job.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], CreateJobPage);
    return CreateJobPage;
}());

//# sourceMappingURL=create-job.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CreatePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatePostPage = /** @class */ (function () {
    function CreatePostPage(navCtrl, navParams, http, databaseProvider, alertCtrl, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.loginData = { title: '' };
        this.dev = [];
        this.devs = {};
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.user_id = data[0]['user_id'];
            }
            else {
            }
        }).catch();
    }
    CreatePostPage.prototype.openModal = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: 'Choose where to take photos',
            buttons: [
                {
                    text: 'Camera',
                    handler: function (data) {
                        _this.openCamera();
                    }
                },
                {
                    text: 'Gallery',
                    handler: function (data) {
                        _this.openGalery();
                    }
                }
            ]
        });
        alert.present();
    };
    CreatePostPage.prototype.openGalery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
        }, function (err) {
            // Handle error
        });
    };
    CreatePostPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picture_new = imageData;
            //alert(this.base64Image);
        }, function (err) {
            // Handle error
        });
    };
    CreatePostPage.prototype.save = function () {
        var _this = this;
        if (this.loginData.title.length > 0) {
            this.url = "http://mekooshar.appvilo.com/api/create_post.php";
            var postData = new FormData();
            postData.append('user_id', this.user_id);
            postData.append('text', this.loginData.title);
            this.data = this.http.post(this.url, postData);
            this.data.subscribe(function (data) {
                _this.navCtrl.pop();
            });
        }
    };
    CreatePostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePostPage');
    };
    CreatePostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-post',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\create-post\create-post.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>Create Post</ion-title>\n  \n    \n    </ion-navbar>\n  </ion-header>\n\n  \n  \n  <ion-content >\n\n    <ion-list style="background-color: #fff;" >   \n            \n    \n      <img  src = "{{base64Image}}" />\n      <ion-item>\n        <button  ion-button icon-end (click)="openModal()">\n           Image\n            <ion-icon name="cloud-download"></ion-icon>\n          </button>\n\n        </ion-item>\n          \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Post *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.title" ></ion-input>\n        \n      </ion-item>\n      \n     \n\n  \n\n\n          <button ion-button full (click)="save()">Create</button>\n          \n\n\n              \n            \n            <ion-item>\n\n              \n            </ion-item>\n\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\create-post\create-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], CreatePostPage);
    return CreatePostPage;
}());

//# sourceMappingURL=create-post.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSchoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateSchoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateSchoolPage = /** @class */ (function () {
    function CreateSchoolPage(navCtrl, navParams, http, databaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.loginData = { title: '', phone: '', email: '', location: '', text: '', weblink: '', industry: '' };
        this.dev = [];
        this.devs = {};
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.user_id = data[0]['user_id'];
            }
            else {
            }
        }).catch();
    }
    CreateSchoolPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateSchoolPage');
    };
    CreateSchoolPage.prototype.save = function () {
        var _this = this;
        if (this.loginData.title.length > 0 && this.loginData.text.length > 0) {
            this.url = "http://mekooshar.appvilo.com/api/create_school.php";
            var postData = new FormData();
            postData.append('user_id', this.user_id);
            postData.append('text', this.loginData.title);
            postData.append('location', this.loginData.location);
            postData.append('image', "default-user.png");
            postData.append('description', this.loginData.text);
            this.data = this.http.post(this.url, postData);
            this.data.subscribe(function (data) {
                _this.navCtrl.pop();
            });
        }
    };
    CreateSchoolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-school',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\create-school\create-school.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>Create School</ion-title>\n  \n    \n    </ion-navbar>\n  </ion-header>\n\n  \n  \n  <ion-content >\n\n    <ion-list style="background-color: #fff;" >   \n            \n    \n    \n\n          \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         School name *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.title" ></ion-input>\n        \n      </ion-item>\n      \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         School location *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.location" ></ion-input>\n        \n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         School text *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.text" ></ion-input>\n        \n      </ion-item>\n\n\n          <button ion-button full (click)="save()">Create</button>\n          \n\n\n              \n            \n            <ion-item>\n\n              \n            </ion-item>\n\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\create-school\create-school.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], CreateSchoolPage);
    return CreateSchoolPage;
}());

//# sourceMappingURL=create-school.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPostPage = /** @class */ (function () {
    function EditPostPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loginData = { title: '' };
        this.ids = navParams.get('item_post');
    }
    EditPostPage.prototype.ionViewDidLoad = function () {
        this.loginData.title = this.ids['text'];
    };
    EditPostPage.prototype.save = function () {
        var _this = this;
        if (this.loginData.title.length > 0) {
            this.url = "http://mekooshar.appvilo.com/api/update_post.php";
            var postData = new FormData();
            postData.append('post_id', this.ids['id']);
            postData.append('text', this.loginData.title);
            this.data = this.http.post(this.url, postData);
            this.data.subscribe(function (data) {
                _this.navCtrl.pop();
            });
        }
    };
    EditPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-post',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\edit-post\edit-post.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>Edit Post</ion-title>\n  \n    \n    </ion-navbar>\n  </ion-header>\n\n  \n  \n  <ion-content >\n\n    <ion-list style="background-color: #fff;" >   \n            \n    \n    \n\n          \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Post *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.title" ></ion-input>\n        \n      </ion-item>\n      \n     \n\n  \n\n\n          <button ion-button full (click)="save()">Update Post</button>\n          \n\n\n              \n            \n            <ion-item>\n\n              \n            </ion-item>\n\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\edit-post\edit-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], EditPostPage);
    return EditPostPage;
}());

//# sourceMappingURL=edit-post.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, navParams, http, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.searchBar = false;
        this.dev = [];
        this.devs = {};
    }
    EventPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.url = "http://mekooshar.appvilo.com/api/get_events.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
            else {
                _this.url = "http://mekooshar.appvilo.com/api/get_events.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
        }).catch();
    };
    EventPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                // console.log(JSON.stringify(this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                console.log(_this.items);
            }
        });
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\event\event.html"*/'<ion-header>\n  <ion-navbar>\n<ion-searchbar\n\n[showCancelButton]="shouldShowCancel"\n\nplaceholder="Saerch for people, jobs, and more..."\n>\n</ion-searchbar>\n\n</ion-navbar>\n</ion-header>\n\n<ion-content style="background: grey;">\n \n\n\n  <ion-list *ngIf="items == null " text-center>\n\n    \n    <button *ngIf="items == null" (click)="moveToLogin()" style=" background-color: #002d60;margin:20px;" ion-button round>Create new group</button>\n  </ion-list>\n\n  <ion-list *ngIf="items != null">\n\n    <ion-col *ngFor="let item of items"  no-padding>\n\n                    <ion-card (click)="moveToWish(item)">\n\n                        <ion-item>\n                          <ion-avatar item-start>\n                           <img src="http://mekooshar.appvilo.com/public/img/{{item.image}}">\n                          </ion-avatar>\n                    <h2>{{item.name}}</h2>\n                         <p>{{item.location}} | {{item.time}} | {{item.date}}</p>\n                        </ion-item>\n                      \n                 \n                        <ion-card-content *ngIf="item.description != null" [innerHtml]="(item.description | slice:0:150) +(item.description.length > 150 ? \'...\' : \'\') ">\n                         \n                        </ion-card-content>\n                      \n                     \n                      \n                        <ion-row>\n                            <ion-col>\n                              <button ion-button icon-start clear small>\n                                <ion-icon name="thumbs-up"></ion-icon>\n                                <div>Like</div>\n                              </button>\n                            </ion-col>\n                            <ion-col>\n                              <button ion-button icon-start clear small>\n                                  <ion-icon name="thumbs-down"></ion-icon>\n                                <div>Dislike</div>\n                              </button>\n                            </ion-col>\n                            \n                          </ion-row>\n                          \n                      </ion-card>\n\n                    </ion-col>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetPage = /** @class */ (function () {
    function ForgetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPage');
    };
    ForgetPage.prototype.moveToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\forget\forget.html"*/'\n\n<ion-content class="bg-img">\n  <div class="main-content">\n    <div padding text-center class="container-logo" margin-bottom >\n      <img src="assets/imgs/logo.png">\n    </div>\n    <div padding text-center class="form-bottom-text">\n      <h3> Reset Password</h3>\n      <label>Enter the email address associated with your account,and review your email.</label>\n    </div>\n    <div text-center class="socialLogin" padding></div>\n      <div padding style="width: 100%;">\n      <form  (ngSubmit)="forgetPassword(forgetData.email)">\n\n\n        <ion-list>\n          <ion-item >\n            <ion-label><ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n            <ion-input  id="email" type="email" required placeholder="Email *"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button type="submit" ion-button full color="dark" >Send</button>\n      </form>\n\n      <div padding text-center class="form-bottom-text">\n        <label>\n          <a href="javascript:void(0);" (click)="moveToLogin()">Back to Login</a>\n        </label>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\forget\forget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ForgetPage);
    return ForgetPage;
}());

//# sourceMappingURL=forget.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.regData = { username: '', mail: '', pass: '', password_conf: '' };
        this.authForm = this.fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            'password_conf': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
        });
        this.username = this.authForm.controls['username'];
        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];
        this.pass_conf = this.authForm.controls['password_conf'];
    }
    RegisterPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    RegisterPage.prototype.postReg = function () {
        var _this = this;
        this.presentLoadingDefault();
        if (this.regData.mail.length <= 0 || this.regData.pass.length <= 0 || this.regData.username.length <= 0) {
            this.loading.dismiss();
            this.presentError();
        }
        else {
            var url = "http://mekooshar.appvilo.com/api/register_user.php";
            var postData = new FormData();
            postData.append('email', this.regData.mail);
            postData.append('parola', this.regData.pass);
            postData.append('username', this.regData.username);
            this.data = this.http.post(url, postData);
            this.data.subscribe(function (data) {
                if (data['user']['status'] == "400 OK") {
                    _this.loading.dismiss();
                    _this.presentUser();
                }
                else {
                    //alert(JSON.stringify(data));
                    // this.addUser(data['user']['fp_id'],data['user']['user_id']);
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
            });
        }
    };
    RegisterPage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Field is empty',
            buttons: ['Ok']
        });
        alert.present();
    };
    RegisterPage.prototype.presentUser = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'This user is registered',
            buttons: ['Ok']
        });
        alert.present();
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.moveToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.doRegister = function (regData) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\register\register.html"*/'\n\n<ion-content class="bg-img">\n  <div class="main-content">\n    <div padding text-center class="container-logo">\n      <img src="assets/imgs/logo.png">\n    </div>\n\n    <div padding  style="width: 100%;">\n    <form >\n     \n      <ion-list>\n        <ion-item padding-right>\n          <ion-label><ion-icon ios="ios-person" md="md-person"></ion-icon></ion-label>\n          <ion-input  id="username" type="text" [(ngModel)]="regData.username" [formControl]="username"  placeholder="Username *"></ion-input>\n        </ion-item>\n\n         <ion-item>\n          <ion-label><ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n          <ion-input  id="email" [(ngModel)]="regData.mail" [formControl]="email" type="email"  placeholder="Email *"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><ion-icon ios="ios-unlock" md="md-unlock"></ion-icon></ion-label>\n          <ion-input  id="password" type="{{passwordtype}}"  [(ngModel)]="regData.pass" [formControl]="password"  placeholder="Password *"></ion-input>\n          <button ion-button clear class="eye-icon-btn" type="button" item-right (click)="managePassword()"><ion-icon name="{{passeye}}"></ion-icon></button>\n        </ion-item>\n\n       \n      </ion-list>\n      <button ion-button full color="dark"  (click)="doRegister(regData)">Sign up</button>\n    </form>\n    <div class="sepretor-or" padding-horizontal> <p>Or</p></div>\n    <div padding text-center class="form-bottom-text">\n        <label>Sign up with </label>\n        </div>\n    <div text-center class="socialLogin" padding>\n     \n      <button ion-button class="facebook" (click)="socialLogin(\'facebook\')"><ion-icon name="logo-facebook" style="margin-right: 12px;"></ion-icon> Facebook</button>\n    </div>\n    <div padding text-center class="form-bottom-text">\n      <label> Already have an Account? <a href="javascript:void(0);" (click)="moveToLogin()"> Sign In </a> </label>\n    </div>\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalSettingPage = /** @class */ (function () {
    function ModalSettingPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalSettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalSettingPage');
    };
    ModalSettingPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-setting',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\modal-setting\modal-setting.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Setting\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n        <ion-item>\n          <ion-avatar item-start>\n           \n            <img src="http://mekooshar.appvilo.com/public/img/1565104161.png">\n          </ion-avatar>\n         \n        </ion-item>\n  \n\n        <ion-item>\n            <ion-label color="primary" stacked>Name</ion-label>\n            <ion-input type="email" placeholder="Email Input"> Angelina Ivanskaya</ion-input>\n          </ion-item>\n          \n        <ion-item>\n            <ion-label color="primary" stacked>Email</ion-label>\n            <ion-input type="email" placeholder="Email Input">yevtushenko520@gmail.com</ion-input>\n          </ion-item>\n          \n        <ion-item>\n            <ion-label color="primary" stacked>Password</ion-label>\n            <ion-input type="email" placeholder="Email Input"></ion-input>\n          </ion-item>\n          \n        <ion-item>\n            <ion-label color="primary" stacked>Status</ion-label>\n            <ion-input type="email" placeholder="Email Input">Developer</ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>Summary</ion-label>\n              <ion-textarea>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n              </ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-label color="primary" stacked>Experience</ion-label>\n                <ion-textarea>\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                </ion-textarea>\n              </ion-item>\n              <ion-item>\n                  <ion-label color="primary" stacked>Education</ion-label>\n                  <ion-textarea>\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                  </ion-textarea>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Skills</ion-label>\n                    <ion-select [(ngModel)]="gender">\n                      <ion-option value="f">iOS</ion-option>\n                      <ion-option value="m">Android</ion-option>\n                    </ion-select>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label>Languages</ion-label>\n                      <ion-select [(ngModel)]="gender">\n                        <ion-option value="f">English</ion-option>\n                        <ion-option value="m">Germany</ion-option>\n                      </ion-select>\n                    </ion-item>\n                    <button ion-button block>Save</button>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\modal-setting\modal-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalSettingPage);
    return ModalSettingPage;
}());

//# sourceMappingURL=modal-setting.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_group_create_group__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupsPage = /** @class */ (function () {
    function GroupsPage(navCtrl, navParams, http, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.searchBar = false;
        this.dev = [];
        this.devs = {};
    }
    GroupsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.url = "http://mekooshar.appvilo.com/api/get_groups.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
            else {
                _this.url = "http://mekooshar.appvilo.com/api/get_groups.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
        }).catch();
    };
    GroupsPage.prototype.create = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_group_create_group__["a" /* CreateGroupPage */]);
    };
    GroupsPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                // console.log(JSON.stringify(this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                console.log(_this.items);
            }
        });
    };
    GroupsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groups',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\groups\groups.html"*/'<ion-header>\n  <ion-navbar>\n<ion-searchbar\n\n[showCancelButton]="shouldShowCancel"\n\nplaceholder="Saerch for people, jobs, and more..."\n>\n</ion-searchbar>\n\n</ion-navbar>\n</ion-header>\n\n<ion-content style="background: grey;">\n \n\n  <ion-list *ngIf="items == null " text-center>\n\n    \n    <button *ngIf="items == null" (click)="moveToLogin()" style=" background-color: #002d60;margin:20px;" ion-button round>Create new group</button>\n  </ion-list>\n\n  <ion-list *ngIf="items != null">\n\n    <ion-col *ngFor="let item of items"  no-padding>\n\n                    <ion-card (click)="moveToWish(item)">\n\n                        <ion-item>\n                          <ion-avatar item-start>\n                           <img src="http://mekooshar.appvilo.com/public/img/{{item.image}}">\n                          </ion-avatar>\n                    <h2>{{item.name}}</h2>\n                         <p>{{item.created_at}}</p>\n                        </ion-item>\n                      \n                 \n                        <ion-card-content *ngIf="item.description != null" [innerHtml]="(item.description | slice:0:150) +(item.description.length > 150 ? \'...\' : \'\') ">\n                         \n                        </ion-card-content>\n                      \n                     \n                          \n                      </ion-card>\n\n                    </ion-col>\n\n  </ion-list>\n\n  <ion-fab bottom right edge style="margin-bottom: 50px;">\n    <button ion-fab mini (click)="create()"><ion-icon name="add"></ion-icon></button>\n  \n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\groups\groups.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], GroupsPage);
    return GroupsPage;
}());

//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_school_create_school__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SchoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchoolPage = /** @class */ (function () {
    function SchoolPage(navCtrl, navParams, http, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.searchBar = false;
        this.dev = [];
        this.devs = {};
    }
    SchoolPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.url = "http://mekooshar.appvilo.com/api/get_schools.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
            else {
                _this.url = "http://mekooshar.appvilo.com/api/get_schools.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
        }).catch();
    };
    SchoolPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                // console.log(JSON.stringify(this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                console.log(_this.items);
            }
        });
    };
    SchoolPage.prototype.create = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_school_create_school__["a" /* CreateSchoolPage */]);
    };
    SchoolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-school',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\school\school.html"*/'<ion-header>\n  <ion-navbar>\n<ion-searchbar\n\n[showCancelButton]="shouldShowCancel"\n\nplaceholder="Saerch for people, jobs, and more..."\n>\n</ion-searchbar>\n\n</ion-navbar>\n</ion-header>\n\n<ion-content style="background: grey;">\n \n\n  <ion-list *ngIf="items == null " text-center>\n\n    \n    <button *ngIf="items == null" (click)="moveToLogin()" style=" background-color: #002d60;margin:20px;" ion-button round>Create new group</button>\n  </ion-list>\n\n  <ion-list *ngIf="items != null">\n\n    <ion-col *ngFor="let item of items"  no-padding>\n\n                    <ion-card (click)="moveToWish(item)">\n\n                        <ion-item>\n                          <ion-avatar item-start>\n                           <img src="http://mekooshar.appvilo.com/public/img/{{item.image}}">\n                          </ion-avatar>\n                    <h2>{{item.name}}</h2>\n                         <p>{{item.location}}</p>\n                        </ion-item>\n                      \n                 \n                        <ion-card-content *ngIf="item.description != null" [innerHtml]="(item.description | slice:0:150) +(item.description.length > 150 ? \'...\' : \'\') ">\n                         \n                        </ion-card-content>\n                      \n                     \n                      \n                   \n                          \n                      </ion-card>\n\n                    </ion-col>\n\n  </ion-list>\n\n  <ion-fab bottom right edge style="margin-bottom: 50px;">\n    <button ion-fab mini (click)="create()"><ion-icon name="add"></ion-icon></button>\n  \n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\school\school.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], SchoolPage);
    return SchoolPage;
}());

//# sourceMappingURL=school.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="\ncolor: #fff;\n">\n  <ion-navbar style="\n  color: #fff;\n">\n    <ion-title style="\n    color: #fff;\n">Payment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background: grey;">\n\n    <ion-card>\n        \n        <ion-card-content>\n          <ion-card-title>\n              Buy Ads - $25/mo\n            </ion-card-title>\n          <p>\n              Advertising / Banner or Promoted post / 1 Month\n          </p>\n          <button ion-button color="secondary">Buy</button>\n        </ion-card-content>\n      </ion-card>\n\n\n      <ion-card>\n        \n          <ion-card-content>\n            <ion-card-title>\n                Job Post - $99/60 days\n              </ion-card-title>\n            <p>\n                60 days / Job placement / Unlimited number of posts\n            </p>\n            <button ion-button color="secondary">Buy</button>\n          </ion-card-content>\n        </ion-card>\n\n\n        <ion-card>\n        \n            <ion-card-content>\n              <ion-card-title>\n                  Gold User - $99/60 days\n                </ion-card-title>\n              <p>\n                  60 days / Send messages all users / Visible/Invisible mode\n              </p>\n              <button ion-button color="secondary">Buy</button>\n            </ion-card-content>\n          </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            List of your purchases\n        </ion-card-header>\n      \n        <ion-list>\n          <button ion-item>\n            <ion-icon name="cart" item-start></ion-icon>\n            60 days - Job\n          </button>\n      \n          <button ion-item>\n            <ion-icon name="medical" item-start></ion-icon>\n            60 days - Gold Profile \n          </button>\n      \n          <button ion-item>\n            <ion-icon name="cafe" item-start></ion-icon>\n            Ads product - Ads\n          </button>\n      \n          <button ion-item>\n            <ion-icon name="paw" item-start></ion-icon>\n            Banner Promoted - Ads\n          </button>\n      \n         \n        </ion-list>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_post_edit_post__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PostViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostViewPage = /** @class */ (function () {
    function PostViewPage(navCtrl, navParams, http, databaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        this.ids = navParams.get('item_post');
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.user_id = data[0]['user_id'];
            }
            else {
            }
        }).catch();
    }
    PostViewPage.prototype.sendCom = function () {
        var _this = this;
        if (this.editorMsg.length > 0) {
            this.url = "http://mekooshar.appvilo.com/api/add_comment.php";
            var postData = new FormData();
            postData.append('user_id', this.user_id);
            postData.append('text', this.editorMsg);
            postData.append('post_id', this.ids['id']);
            postData.append('post_type', "2");
            this.data = this.http.post(this.url, postData);
            this.data.subscribe(function (data) {
                _this.editorMsg = "";
                _this.url2 = "http://mekooshar.appvilo.com/api/get_comments.php?post_id=" + _this.ids['id'];
                _this.getData();
            });
        }
    };
    PostViewPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PostViewPage');
        this.url2 = "http://mekooshar.appvilo.com/api/get_comments.php?post_id=" + this.ids['id'];
        this.getData();
    };
    PostViewPage.prototype.moveToWish = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile__["a" /* UserProfilePage */], {
            id: item['user_id']
        });
    };
    PostViewPage.prototype.goToMes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_post_edit_post__["a" /* EditPostPage */], {
            item_post: this.ids
        });
    };
    PostViewPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url2);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                // console.log(JSON.stringify(this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                console.log(_this.items);
            }
        });
    };
    PostViewPage.prototype.delete = function () {
        var _this = this;
        this.url = "http://mekooshar.appvilo.com/api/delete_post.php";
        var postData = new FormData();
        postData.append('post_id', this.ids['id']);
        this.data = this.http.post(this.url, postData);
        this.data.subscribe(function (data) {
            _this.navCtrl.pop();
        });
    };
    PostViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-view',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\post-view\post-view.html"*/'<ion-header>\n  <ion-navbar>\n  \n    <ion-title >Post Details</ion-title>\n\n<ion-buttons end (click)="goToMes()"> <button ion-button item-right  style="color: #fff;"> <ion-icon name="build"></ion-icon></button> </ion-buttons>\n<ion-buttons end (click)="delete()"> <button ion-button item-right  style="color: #fff;"> <ion-icon name="trash"></ion-icon> </button> </ion-buttons>\n\n</ion-navbar>\n</ion-header>\n\n<ion-content style="background: grey;">\n\n\n\n  \n\n                      <ion-card>\n\n                          <ion-item>\n                            <ion-avatar item-start>\n                             <img src="http://mekooshar.appvilo.com/public/img/{{ids.user_image}}">\n                            </ion-avatar>\n                      <h2>{{ids.name}}</h2>\n                           <p>{{ids.user_status}}</p>\n                          </ion-item>\n                        \n                          <ion-item *ngIf="ids?.post_files?.length > 0" id="joj">\n                              <div *ngFor="let file of ids.post_files; ">\n                                 <div class="square" *ngIf="file.image != null">\n                                     <div class="content">\n                                     \n                                         <img class="rs" *ngIf="file.image != null" src="http://mekooshar.appvilo.com/public/images/{{file.image}}"/>\n                                        \n                                     </div>\n                                 </div>\n \n                                 <a style="white-space: normal;" *ngIf="file.file != null" href="http://mekooshar.appvilo.com/public/images/{{file.file}}">\n                                   {{file.file}}</a>\n \n                              </div>\n                            \n                         \n                         </ion-item>\n                        \n                          <ion-card-content *ngIf="ids.text != null" [innerHtml]="ids.text ">\n                           \n                          </ion-card-content>\n                        \n                       \n                       \n                        \n                            \n                        </ion-card>\n\n                        <ion-list>\n                          <ion-item>\n                            <p>Comments</p>\n                          </ion-item>\n\n                          <ion-item *ngFor="let item of items">\n                            <ion-avatar item-start (click)="moveToWish(item)">\n                              <img src="http://mekooshar.appvilo.com/public/img/{{item.image}}">\n                            </ion-avatar>\n                            \n                            <p (click)="moveToWish(item)">{{item.name}}</p>\n                            <h3>{{item.text}}</h3>\n                          </ion-item>\n                          </ion-list>\n\n                          <ion-footer no-border style="height:55px;">\n  <div class="input-wrap">\n   \n    <textarea #chat_input\n              placeholder="Write comment"\n              [(ngModel)]="editorMsg"\n             >\n    </textarea>\n    <button ion-button clear icon-only item-right (click)="sendCom()">\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n    </button>\n  </div>\n \n</ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\post-view\post-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], PostViewPage);
    return PostViewPage;
}());

//# sourceMappingURL=post-view.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Welcome to Mekooshar!",
                description: "Prepare for a new social networking experience with Mekooshar, the first social networking site for Hebrew speaking professionals.",
                image: "assets/imgs/ica-slidebox-img-1.png",
            },
            {
                title: "What are you waiting for?",
                description: "Mekooshar is a social networking site that welcomes Jewish and other cultures so whether you live in Israel or on the other side of the globe",
                image: "assets/imgs/ica-slidebox-img-2.png",
            },
            {
                title: "Sign up or log in to Mekooshar!",
                description: "Experience Mekooshar to meet new people and remain connected. Share your ideas and insights with Mekooshar, where there is always someone to talk or collaborate with, in Hebrew or another preferred language.",
                image: "assets/imgs/ica-slidebox-img-3.png",
            }
        ];
    }
    TutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    TutorialPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\tutorial\tutorial.html"*/'\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="login()">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to use?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="login()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\tutorial\tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		709,
		21
	],
	"../pages/connections/connections.module": [
		710,
		20
	],
	"../pages/create-company/create-company.module": [
		711,
		19
	],
	"../pages/create-group/create-group.module": [
		712,
		18
	],
	"../pages/create-job/create-job.module": [
		713,
		17
	],
	"../pages/create-post/create-post.module": [
		714,
		16
	],
	"../pages/create-school/create-school.module": [
		715,
		15
	],
	"../pages/edit-post/edit-post.module": [
		716,
		14
	],
	"../pages/event/event.module": [
		717,
		13
	],
	"../pages/forget/forget.module": [
		718,
		12
	],
	"../pages/groups/groups.module": [
		719,
		11
	],
	"../pages/jobs/jobs.module": [
		720,
		10
	],
	"../pages/login/login.module": [
		721,
		9
	],
	"../pages/modal-setting/modal-setting.module": [
		722,
		8
	],
	"../pages/noti/noti.module": [
		723,
		7
	],
	"../pages/payment/payment.module": [
		724,
		6
	],
	"../pages/post-view/post-view.module": [
		730,
		5
	],
	"../pages/profile/profile.module": [
		725,
		4
	],
	"../pages/register/register.module": [
		727,
		3
	],
	"../pages/school/school.module": [
		726,
		2
	],
	"../pages/tutorial/tutorial.module": [
		728,
		1
	],
	"../pages/user-profile/user-profile.module": [
		729,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 228;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connections_connections__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, http, databaseProvider) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.searchBar = false;
        this.dev = [];
        this.devs = {};
    }
    AboutPage.prototype.goConnection = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__connections_connections__["a" /* ConnectionsPage */]);
    };
    AboutPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.user_id = data[0]['user_id'];
                _this.url = "http://mekooshar.appvilo.com/api/people_myk.php?user_id=" + data[0]['user_id'];
                _this.getData();
                _this.url2 = "http://mekooshar.appvilo.com/api/notification.php?user_id=" + data[0]['user_id'];
                _this.getData2();
            }
            else {
                _this.url = "http://mekooshar.appvilo.com/api/people_myk.php?user_id=" + data[0]['user_id'];
                _this.getData();
                _this.url2 = "http://mekooshar.appvilo.com/api/notification.php?user_id=" + data[0]['user_id'];
                _this.getData2();
            }
        }).catch();
    };
    AboutPage.prototype.sendFriends = function (item) {
        var _this = this;
        this.url = "http://mekooshar.appvilo.com/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_one', this.user_id);
        postData.append('user_id_two', item['id']);
        postData.append('status', "1");
        this.data = this.http.post(this.url, postData);
        this.data.subscribe(function (data) {
            _this.ionViewDidEnter();
        });
    };
    AboutPage.prototype.getData2 = function () {
        var _this = this;
        this.data = this.http.get(this.url2);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items2 = data;
                console.log(JSON.stringify(_this.items2));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items2 = null;
                console.log(_this.items2);
            }
        });
    };
    AboutPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                // console.log(JSON.stringify(this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                //console.log(this.items);
            }
        });
    };
    AboutPage.prototype.setProfile2 = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile__["a" /* UserProfilePage */], {
            id: id['from_id']
        });
    };
    AboutPage.prototype.setProfile = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile__["a" /* UserProfilePage */], {
            id: id['id']
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n    \n            <ion-buttons left (click)="goProfile()"> <button ion-button item-right  style="color: #fff;">  <img src="http://mekooshar.appvilo.com/public/img/1565104161.png" style="\n              width: 30px;\n              border: solid 0.5px;\n              border-radius: 45%;\n          " class="button button-icon button-clear" menu-toggle="left"> </button> </ion-buttons>\n\n  <ion-searchbar\n \n  [showCancelButton]="shouldShowCancel"\n \n  placeholder="Saerch for people, jobs, and more..."\n  >\n</ion-searchbar>\n<!--<ion-buttons end (click)="goToMes()"> <button ion-button item-right  style="color: #fff;"> <ion-icon name=\'ios-paper-plane\'></ion-icon> </button> </ion-buttons> -->\n\n</ion-navbar>\n</ion-header>\n\n<ion-content style="background: grey;">\n    <ion-grid style="background: white;">\n        <ion-row (click)="goConnection()">\n          <ion-col style="border-right: solid 0.5px grey;">\n            <div style="text-align: center;     color: #525252;">\n              Connections\n             </div>\n          </ion-col >\n          <ion-col>\n            <div style="text-align: center;     color: #525252;"> +\n                Find connections\n               </div>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n      <!--~\n      <ion-card style="margin: 0px;width: 100%;border: 0px;">\n          <ion-card-header>\n            Received invitations\n          </ion-card-header>\n\n          <ion-item (click)="setProfile()">\n              <ion-avatar item-start>\n                <img src="assets/imgs/avatar-ben.png">\n              </ion-avatar>\n              <h2>Marty McFly</h2>\n              <p>Developer iOS</p>\n              <ion-buttons item-end style="font-size: 35px;"> <ion-icon name=\'ios-checkmark-circle-outline\'></ion-icon></ion-buttons>\n              <ion-buttons item-end style="font-size: 35px;"> <ion-icon name=\'ios-close-circle-outline\'></ion-icon></ion-buttons>\n            </ion-item>\n            <ion-item (click)="setProfile()">\n                <ion-avatar item-start>\n                  <img src="assets/imgs/avatar-ben.png">\n                </ion-avatar>\n                <h2>Marty McFly</h2>\n                <p>Developer iOS</p>\n                <ion-buttons item-end style="font-size: 35px;"> <ion-icon name=\'ios-checkmark-circle-outline\'></ion-icon></ion-buttons>\n                <ion-buttons item-end style="font-size: 35px;"> <ion-icon name=\'ios-close-circle-outline\'></ion-icon></ion-buttons>\n              </ion-item>\n              <div style="padding: 10px;text-align: center;color: blue;">\n                See all 5 invitations\n              </div>\n</ion-card>   --> \n\n<ion-card style="margin-top: 20px;width: 100%;border: 0px;margin-left: 0px;margin-right: 0px;">\n    <ion-card-header>\n      People you may know\n    </ion-card-header>\n\n    <div *ngFor="let item of items">\n    <ion-item >\n        <ion-avatar item-start (click)="setProfile(item)">\n          <img *ngIf="item.image ==null" src="http://mekooshar.appvilo.com/public/img/default-user.png">\n          <img *ngIf="item.image !=null" src="http://mekooshar.appvilo.com/public/img/{{item.image}}">\n        </ion-avatar>\n        <h2 (click)="setProfile(item)">{{item.name}}</h2>\n        <p *ngIf="item.status !=null">{{item.status}}</p>\n        <p *ngIf="item.status ==null">User Profile</p>\n        <button (click)="sendFriends(item)" item-end style=" background-color: #fff;   color: grey;font-size: 25px;"> <ion-icon  name=\'md-person-add\'></ion-icon></button>\n      </ion-item>\n    </div>\n        \n</ion-card>     \n<ion-card style="margin-top: 20px;width: 100%;border: 0px;margin-left: 0px;margin-right: 0px;">\n  <ion-card-header>\n    Notification\n  </ion-card-header>\n\n  <div *ngFor="let itemes of items2">\n\n    <ion-card>\n      <ion-card-header (click)="setProfile2(itemes)">\n        {{itemes.name}}\n      </ion-card-header>\n      <ion-card-content>\n        {{itemes.text}}\n      </ion-card-content>\n    </ion-card>\n  </div>\n      \n</ion-card> \n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_view_post_view__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_post_create_post__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, databaseProvider) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.searchBar = false;
        this.dev = [];
        this.devs = {};
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.user_id = data[0]['user_id'];
                _this.url = "http://mekooshar.appvilo.com/api/get_post_lost.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
            else {
                _this.url = "http://mekooshar.appvilo.com/api/get_post_lost.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
        }).catch();
    };
    HomePage.prototype.like = function (item) {
        var _this = this;
        var url = "http://mekooshar.appvilo.com/api/like_user_post.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id);
        postData.append('prod_id', item.id);
        postData.append('like', '1');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['status'] == "200 OK") {
                console.log(data);
                _this.ionViewDidEnter();
                /*
                        this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id="+this.user_id_2+"&wish_id="+this.ids;
                
                  
                
                        this.data_like = this.http.get(this.url_like);
                      this.data_like.subscribe(data_like => {
                  
                      //  this.status = data_like['status'];
                  
                  
                      })*/
            }
            else {
                console.log(data);
            }
            console.log(data);
        });
    };
    HomePage.prototype.dislike = function (item) {
        var _this = this;
        var url = "http://mekooshar.appvilo.com/api/like_user_post.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id);
        postData.append('prod_id', item.id);
        postData.append('like', '2');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['status'] == "200 OK") {
                console.log(data);
                _this.ionViewDidEnter();
                /*
                        this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id="+this.user_id_2+"&wish_id="+this.ids;
                
                  
                
                        this.data_like = this.http.get(this.url_like);
                      this.data_like.subscribe(data_like => {
                  
                      //  this.status = data_like['status'];
                  
                  
                      })*/
            }
            else {
                console.log(data);
            }
            console.log(data);
        });
    };
    HomePage.prototype.updateText = function (ev) {
        var _this = this;
        if (this.queryText.length > 0) {
            this.url = "http://mekooshar.appvilo.com/api/search_post.php?text=" + this.queryText;
            this.data = this.http.get(this.url);
            this.data.subscribe(function (data) {
                if (data['status'] != "400 OK") {
                    _this.items = data;
                }
                else if (data['status'] == "400 OK") {
                    _this.items = null;
                }
            });
        }
        else if (this.queryText.length <= 0) {
            this.searchBar = false;
            console.log("GNIDA");
            this.ionViewDidEnter();
        }
    };
    HomePage.prototype.cancelSearch = function () {
        this.searchBar = false;
        this.ionViewDidEnter();
    };
    HomePage.prototype.moveToCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__create_post_create_post__["a" /* CreatePostPage */]);
    };
    HomePage.prototype.moveToWish = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__post_view_post_view__["a" /* PostViewPage */], {
            item_post: item
        });
    };
    HomePage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                // console.log(JSON.stringify(this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                console.log(_this.items);
            }
        });
    };
    HomePage.prototype.goToMes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    HomePage.prototype.goProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n    \n            <ion-buttons left (click)="goProfile()"> <button ion-button item-right  style="color: #fff;">  <img src="http://mekooshar.appvilo.com/public/img/1565104161.png" style="\n              width: 30px;\n              border: solid 0.5px;\n              border-radius: 45%;\n          " class="button button-icon button-clear" menu-toggle="left"> </button> </ion-buttons>\n\n  <ion-searchbar\n \n  [showCancelButton]="shouldShowCancel"\n  (ionCancel)="cancelSearch()" [(ngModel)]="queryText"\n  (ionInput)="updateText($event)"\n  placeholder="Saerch for people, jobs, and more..."\n  >\n</ion-searchbar>\n<!--<ion-buttons end (click)="goToMes()"> <button ion-button item-right  style="color: #fff;"> <ion-icon name=\'ios-paper-plane\'></ion-icon> </button> </ion-buttons> -->\n\n</ion-navbar>\n</ion-header>\n\n\n\n<ion-content style="background: grey;">\n    <ion-grid style="background: white;">\n        <ion-row>\n          <ion-col style="border-right: solid 0.5px grey;" (click)="moveToCreate()">\n            <div style="text-align: center;     color: #525252;"><ion-icon name=\'ios-create\'></ion-icon>\n              Write Post\n             </div>\n          </ion-col >\n          <ion-col>\n            <div style="text-align: center;     color: #525252;"> <ion-icon name=\'images\'></ion-icon>\n                Photo Post\n               </div>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n\n      <ion-list *ngIf="items == null " text-center>\n\n    \n        <button *ngIf="items == null" (click)="moveToLogin()" style=" background-color: #002d60;margin:20px;" ion-button round>Create new post</button>\n      </ion-list>\n\n      <ion-list *ngIf="items != null">\n\n        <ion-col *ngFor="let item of items"  no-padding>\n\n                        <ion-card >\n\n                            <ion-item (click)="moveToWish(item)">\n                              <ion-avatar item-start>\n                               <img src="http://mekooshar.appvilo.com/public/img/{{item.user_image}}">\n                              </ion-avatar>\n                        <h2>{{item.name}}</h2>\n                             <p>{{item.user_status}}</p>\n                            </ion-item>\n                          \n                           <!-- <img src="assets/imgs/nin-live.png">-->\n                           <ion-item *ngIf="item?.post_files?.length > 0" id="joj" (click)="moveToWish(item)">\n                             <div *ngFor="let file of item.post_files; ">\n                                <div class="square" *ngIf="file.image != null">\n                                    <div class="content">\n                                    \n                                        <img class="rs" *ngIf="file.image != null" src="http://mekooshar.appvilo.com/public/images/{{file.image}}"/>\n                                       \n                                    </div>\n                                </div>\n\n                                <a style="white-space: normal;" *ngIf="file.file != null" href="http://mekooshar.appvilo.com/public/images/{{file.file}}">\n                                  {{file.file}}</a>\n\n                             </div>\n                           \n                        \n                        </ion-item>\n                          \n                            <ion-card-content *ngIf="item.text != null" [innerHtml]="(item.text | slice:0:150) +(item.text.length > 150 ? \'...\' : \'\') " (click)="moveToWish(item)">\n                             \n                            </ion-card-content>\n                          \n                        \n                          \n                           \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small (click)="like(item)">\n              <ion-icon *ngIf=" item.like ==\'1\'" name="thumbs-up" color="secondary"></ion-icon>\n              <ion-icon *ngIf=" item.like !=\'1\' || item.like==\'null\'" name="thumbs-up" ></ion-icon>\n              <div>Like</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small (click)="dislike(item)">\n                <ion-icon *ngIf=" item.like !=\'2\'" name="thumbs-down"  ></ion-icon>\n              <ion-icon *ngIf=" item.like ==\'2\' || item.like==\'null\'" name="thumbs-down"  color="danger"></ion-icon>\n              <div>Dislike</div>\n            </button>\n          </ion-col>\n         \n        </ion-row>\n                              \n                          </ion-card>\n\n                        </ion-col>\n\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateCompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateCompanyPage = /** @class */ (function () {
    function CreateCompanyPage(navCtrl, navParams, http, databaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.loginData = { title: '', phone: '', email: '', location: '', text: '', weblink: '', industry: '' };
        this.dev = [];
        this.devs = {};
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.user_id = data[0]['user_id'];
            }
            else {
            }
        }).catch();
    }
    CreateCompanyPage.prototype.save = function () {
        var _this = this;
        if (this.loginData.title.length > 0 && this.loginData.location.length > 0
            && this.loginData.email.length > 0 && this.loginData.text.length > 0 && this.loginData.phone.length > 0
            && this.loginData.weblink.length > 0 && this.loginData.industry.length > 0) {
            this.url = "http://mekooshar.appvilo.com/api/create_company.php";
            var postData = new FormData();
            postData.append('user_id', this.user_id);
            postData.append('text', this.loginData.title);
            postData.append('location', this.loginData.location);
            postData.append('phone', this.loginData.phone);
            postData.append('description', this.loginData.text);
            postData.append('email', this.loginData.email);
            postData.append('image', "default-user.png");
            postData.append('weblink', this.loginData.weblink);
            postData.append('industry', this.loginData.industry);
            this.data = this.http.post(this.url, postData);
            this.data.subscribe(function (data) {
                _this.navCtrl.pop();
            });
        }
    };
    CreateCompanyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateCompanyPage');
    };
    CreateCompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-company',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\create-company\create-company.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons >\n        \n      </ion-buttons>\n      <ion-title>Create Company</ion-title>\n  \n    \n    </ion-navbar>\n  </ion-header>\n\n  \n  \n  <ion-content >\n\n    <ion-list style="background-color: #fff;" >   \n            \n    \n    \n\n          \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Company name *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.title" ></ion-input>\n        \n      </ion-item>\n      \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Company phone *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.phone" ></ion-input>\n        \n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Company email *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.email" ></ion-input>\n        \n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Company location *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.location" ></ion-input>\n        \n      </ion-item>\n\n      \n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Company weblink *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.location" ></ion-input>\n        \n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Company industry *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.location" ></ion-input>\n        \n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="ios-person" ></ion-icon>\n        <ion-label  color="primary" stacked>\n         Company text *\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="loginData.text" ></ion-input>\n        \n      </ion-item>\n\n\n          <button ion-button full (click)="save()">Create</button>\n          \n\n\n              \n            \n            <ion-item>\n\n              \n            </ion-item>\n\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\create-company\create-company.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], CreateCompanyPage);
    return CreateCompanyPage;
}());

//# sourceMappingURL=create-company.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NotiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotiPage = /** @class */ (function () {
    function NotiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotiPage');
    };
    NotiPage.prototype.setProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile__["a" /* UserProfilePage */]);
    };
    NotiPage.prototype.goToMes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
    };
    NotiPage.prototype.goProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    NotiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noti',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\noti\noti.html"*/'<ion-header>\n    <ion-navbar>\n    \n            <ion-buttons left (click)="goProfile()"> <button ion-button item-right  style="color: #fff;">  <img src="http://mekooshar.appvilo.com/public/img/1565104161.png" style="\n              width: 30px;\n              border: solid 0.5px;\n              border-radius: 45%;\n          " class="button button-icon button-clear" menu-toggle="left"> </button> </ion-buttons>\n\n  <ion-searchbar\n \n  [showCancelButton]="shouldShowCancel"\n \n  placeholder="Saerch for people, jobs, and more..."\n  >\n</ion-searchbar>\n<!--<ion-buttons end (click)="goToMes()"> <button ion-button item-right  style="color: #fff;"> <ion-icon name=\'ios-paper-plane\'></ion-icon> </button> </ion-buttons> -->\n\n</ion-navbar>\n</ion-header>\n\n<ion-content style="background: grey;">\n  \n\n<ion-card style="margin-top: 0px;width: 100%;border: 0px;margin-left: 0px;margin-right: 0px;">\n\n    <ion-item style="border-bottom: solid 0.5px #bfbfbf;background: #dcefdc !important;" (click)="setProfile()">\n        <ion-avatar item-start >\n          <img src="assets/imgs/avatar-ben.png">\n        </ion-avatar>\n        <h2>Marty McFly</h2>\n        <p>accepted your invitation</p>\n       \n        \n      </ion-item>\n      <ion-item style="border-bottom: solid 0.5px #bfbfbf;background: #dcefdc !important;" (click)="setProfile()">\n          <ion-avatar item-start >\n            <img src="assets/imgs/avatar-ben.png">\n          </ion-avatar>\n          <h2>Marty McFly</h2>\n           <p>accepted your invitation</p>\n      \n          \n        </ion-item>\n        <ion-item style="border-bottom: solid 0.5px #bfbfbf;background: #dcefdc !important;" (click)="setProfile()">\n            <ion-avatar item-start >\n              <img src="assets/imgs/avatar-ben.png">\n            </ion-avatar>\n            <h2>Marty McFly</h2>\n             <p>accepted your invitation</p>\n        \n            \n          </ion-item>\n          <ion-item style="border-bottom: solid 0.5px #bfbfbf;background: #dcefdc !important;" (click)="setProfile()">\n              <ion-avatar item-start >\n                <img src="assets/imgs/avatar-ben.png">\n              </ion-avatar>\n              <h2>Marty McFly</h2>\n               <p>accepted your invitation</p>\n          \n              \n            </ion-item>\n            <ion-item style="border-bottom: solid 0.5px #bfbfbf;background: #dcefdc !important;" (click)="setProfile()">\n                <ion-avatar item-start >\n                  <img src="assets/imgs/avatar-ben.png">\n                </ion-avatar>\n                <h2>Marty McFly</h2>\n                 <p>accepted your invitation</p>\n            \n                \n              </ion-item>\n              <ion-item style="border-bottom: solid 0.5px #bfbfbf;background: #dcefdc !important;" (click)="setProfile()">\n                  <ion-avatar item-start >\n                    <img src="assets/imgs/avatar-ben.png">\n                  </ion-avatar>\n                  <h2>Marty McFly</h2>\n                   <p>accepted your invitation</p>\n              \n                  \n                </ion-item>\n      \n</ion-card>     \n\n<ion-card style="margin-top: 20px;width: 100%;border: 0px;margin-left: 0px;margin-right: 0px;">\n    <ion-card-header>\n      People you may know\n    </ion-card-header>\n\n    <ion-item (click)="setProfile()">\n        <ion-avatar item-start>\n          <img src="assets/imgs/avatar-ben.png">\n        </ion-avatar>\n        <h2>Marty McFly</h2>\n        <p>Developer iOS</p>\n       \n        <ion-buttons item-end style="    color: grey;font-size: 25px;"> <ion-icon name=\'md-person-add\'></ion-icon></ion-buttons>\n      </ion-item>\n      <ion-item (click)="setProfile()">\n          <ion-avatar item-start>\n            <img src="assets/imgs/avatar-ben.png">\n          </ion-avatar>\n          <h2>Marty McFly</h2>\n          <p>Developer iOS</p>\n      \n          <ion-buttons item-end style="    color: grey;font-size: 25px;"> <ion-icon name=\'md-person-add\'></ion-icon></ion-buttons>\n        </ion-item>\n        <ion-item (click)="setProfile()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/avatar-ben.png">\n            </ion-avatar>\n            <h2>Marty McFly</h2>\n            <p>Developer iOS</p>\n        \n            <ion-buttons item-end style="    color: grey;font-size: 25px;"> <ion-icon name=\'md-person-add\'></ion-icon></ion-buttons>\n          </ion-item>\n          <ion-item (click)="setProfile()">\n              <ion-avatar item-start>\n                <img src="assets/imgs/avatar-ben.png">\n              </ion-avatar>\n              <h2>Marty McFly</h2>\n              <p>Developer iOS</p>\n          \n              <ion-buttons item-end style="    color: grey;font-size: 25px;"> <ion-icon name=\'md-person-add\'></ion-icon></ion-buttons>\n            </ion-item>\n            <ion-item (click)="setProfile()">\n                <ion-avatar item-start>\n                  <img src="assets/imgs/avatar-ben.png">\n                </ion-avatar>\n                <h2>Marty McFly</h2>\n                <p>Developer iOS</p>\n            \n                <ion-buttons item-end style="    color: grey;font-size: 25px;"> <ion-icon name=\'md-person-add\'></ion-icon></ion-buttons>\n              </ion-item>\n              <ion-item (click)="setProfile()">\n                  <ion-avatar item-start>\n                    <img src="assets/imgs/avatar-ben.png">\n                  </ion-avatar>\n                  <h2>Marty McFly</h2>\n                  <p>Developer iOS</p>\n              \n                  <ion-buttons item-end style="    color: grey;font-size: 25px;"> <ion-icon name=\'md-person-add\'></ion-icon></ion-buttons>\n                </ion-item>\n      \n</ion-card> \n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\noti\noti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NotiPage);
    return NotiPage;
}());

//# sourceMappingURL=noti.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(380);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forget_forget__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tutorial_tutorial__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_noti_noti__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modal_setting_modal_setting__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_user_profile_user_profile__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_chat_chat__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_jobs_jobs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_groups_groups__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_school_school__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_event_event__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_post_view_post_view__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_create_post_create_post__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_edit_post_edit_post__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_create_job_create_job__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_create_company_create_company__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_create_group_create_group__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_create_school_create_school__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_connections_connections__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_social_sharing__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_database_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_sqlite__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_photo_viewer__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_file_transfer__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_file__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_post_view_post_view__["a" /* PostViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forget_forget__["a" /* ForgetPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_noti_noti__["a" /* NotiPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modal_setting_modal_setting__["a" /* ModalSettingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_user_profile_user_profile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_jobs_jobs__["a" /* JobsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_school_school__["a" /* SchoolPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_create_post_create_post__["a" /* CreatePostPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_edit_post_edit_post__["a" /* EditPostPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_create_job_create_job__["a" /* CreateJobPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_create_company_create_company__["a" /* CreateCompanyPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_create_group_create_group__["a" /* CreateGroupPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_create_school_create_school__["a" /* CreateSchoolPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_connections_connections__["a" /* ConnectionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/connections/connections.module#ConnectionsPageModule', name: 'ConnectionsPage', segment: 'connections', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-company/create-company.module#CreateCompanyPageModule', name: 'CreateCompanyPage', segment: 'create-company', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-group/create-group.module#CreateGroupPageModule', name: 'CreateGroupPage', segment: 'create-group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-job/create-job.module#CreateJobPageModule', name: 'CreateJobPage', segment: 'create-job', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-post/create-post.module#CreatePostPageModule', name: 'CreatePostPage', segment: 'create-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-school/create-school.module#CreateSchoolPageModule', name: 'CreateSchoolPage', segment: 'create-school', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-post/edit-post.module#EditPostPageModule', name: 'EditPostPage', segment: 'edit-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget/forget.module#ForgetPageModule', name: 'ForgetPage', segment: 'forget', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groups/groups.module#GroupsPageModule', name: 'GroupsPage', segment: 'groups', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jobs/jobs.module#JobsPageModule', name: 'JobsPage', segment: 'jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-setting/modal-setting.module#ModalSettingPageModule', name: 'ModalSettingPage', segment: 'modal-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noti/noti.module#NotiPageModule', name: 'NotiPage', segment: 'noti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/school/school.module#SchoolPageModule', name: 'SchoolPage', segment: 'school', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-view/post-view.module#PostViewPageModule', name: 'PostViewPage', segment: 'post-view', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_post_view_post_view__["a" /* PostViewPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modal_setting_modal_setting__["a" /* ModalSettingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_user_profile_user_profile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forget_forget__["a" /* ForgetPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_noti_noti__["a" /* NotiPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_school_school__["a" /* SchoolPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_jobs_jobs__["a" /* JobsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_groups_groups__["a" /* GroupsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_create_post_create_post__["a" /* CreatePostPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_edit_post_edit_post__["a" /* EditPostPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_create_job_create_job__["a" /* CreateJobPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_create_company_create_company__["a" /* CreateCompanyPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_create_group_create_group__["a" /* CreateGroupPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_create_school_create_school__["a" /* CreateSchoolPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_connections_connections__["a" /* ConnectionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_35__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_file__["a" /* File */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(navCtrl, navParams, http, databaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.searchBar = false;
        this.dev = [];
        this.devs = {};
        this.loginData = { name: '', status: '', summary: '', experience: '', skills: '', educations: '', languages: '', image: '' };
        this.ids = navParams.get('id');
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.user_id = data[0]['user_id'];
            }
            else {
            }
        }).catch();
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.url = "http://mekooshar.appvilo.com/api/get_post_lost.php?user_id=" + this.ids;
        this.getData();
        this.url2 = "http://mekooshar.appvilo.com/api/get_info_user.php?user_id=" + this.ids;
        this.getData2();
        this.url3 = "http://mekooshar.appvilo.com/api/check_friend.php";
        var postData = new FormData();
        postData.append('user_id_one', this.user_id);
        postData.append('user_id_two', this.ids);
        this.data = this.http.post(this.url3, postData);
        this.data.subscribe(function (data) {
            // console.log(JSON.stringify(data)+" GNIDA GG");
            if (data['status'] == "400 OK") {
                _this.status = 0;
            }
            else if (data['status'] == "200 OK") {
                _this.status = 1;
            }
        });
    };
    UserProfilePage.prototype.like = function (item) {
        var _this = this;
        var url = "http://mekooshar.appvilo.com/api/like_user_post.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id);
        postData.append('prod_id', item.id);
        postData.append('like', '1');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['status'] == "200 OK") {
                console.log(data);
                _this.ionViewDidLoad();
                /*
                        this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id="+this.user_id_2+"&wish_id="+this.ids;
                
                  
                
                        this.data_like = this.http.get(this.url_like);
                      this.data_like.subscribe(data_like => {
                  
                      //  this.status = data_like['status'];
                  
                  
                      })*/
            }
            else {
                console.log(data);
            }
            console.log(data);
        });
    };
    UserProfilePage.prototype.dislike = function (item) {
        var _this = this;
        var url = "http://mekooshar.appvilo.com/api/like_user_post.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id);
        postData.append('prod_id', item.id);
        postData.append('like', '2');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['status'] == "200 OK") {
                console.log(data);
                _this.ionViewDidLoad();
                /*
                        this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id="+this.user_id_2+"&wish_id="+this.ids;
                
                  
                
                        this.data_like = this.http.get(this.url_like);
                      this.data_like.subscribe(data_like => {
                  
                      //  this.status = data_like['status'];
                  
                  
                      })*/
            }
            else {
                console.log(data);
            }
            console.log(data);
        });
    };
    UserProfilePage.prototype.delete = function (ids) {
        var _this = this;
        this.url = "http://mekooshar.appvilo.com/api/delete_friend.php";
        var postData = new FormData();
        postData.append('user_id_one', this.user_id);
        postData.append('user_id_two', ids);
        this.data = this.http.post(this.url, postData);
        this.data.subscribe(function (data) {
            _this.ionViewDidLoad();
        });
    };
    UserProfilePage.prototype.sendFriends = function (item) {
        var _this = this;
        this.url = "http://mekooshar.appvilo.com/api/send_friend.php";
        var postData = new FormData();
        postData.append('user_id_one', this.user_id);
        postData.append('user_id_two', item);
        postData.append('status', "1");
        this.data = this.http.post(this.url, postData);
        this.data.subscribe(function (data) {
            _this.ionViewDidLoad();
        });
    };
    UserProfilePage.prototype.getData2 = function () {
        var _this = this;
        this.data = this.http.get(this.url2);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                // this.items = data;
                _this.loginData.name = data['name'];
                _this.loginData.status = data['status'];
                _this.loginData.image = data['image'];
                _this.loginData.experience = data['history'];
                _this.loginData.educations = data['education'];
                _this.loginData.summary = data['education'];
                console.log(JSON.stringify(data));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                //  this.items = null;
            }
        });
    };
    UserProfilePage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                // console.log(JSON.stringify(this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                //  console.log(this.items);
            }
        });
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\user-profile\user-profile.html"*/'<ion-header>\n  <ion-navbar>\n<ion-searchbar\n\n[showCancelButton]="shouldShowCancel"\n\nplaceholder="Saerch for chats..."\n>\n</ion-searchbar>\n\n\n</ion-navbar>\n</ion-header>\n\n<ion-content style="background: grey;">\n  \n  <ion-list >\n     \n      <ion-item class="profile-item" >\n          <div class="profile-picture big-profile-picture">\n            <img src="http://mekooshar.appvilo.com/public/img/{{loginData.image}}">\n          </div>\n          <h2 class="profile-name dark">{{loginData.name}}</h2>\n          <div class="profile-info">{{loginData.status}}</div>\n\n          <ion-grid *ngIf=" status ==\'1\'">\n            <ion-row>\n              <ion-col>\n                <button ion-button (click)="delete(ids)">Delete</button>\n              </ion-col>\n              <ion-col>\n                <button ion-button color="secondary">Send message</button>\n              </ion-col>\n            </ion-row>\n\n            </ion-grid>\n            <ion-grid *ngIf=" status !=\'1\'">\n              <button ion-button (click)="sendFriends(ids)">Connection</button>\n  \n              </ion-grid>\n        </ion-item>\n          \n      \n\n        <ion-card>\n\n            <ion-card-header>\n                Summary \n            </ion-card-header>\n          \n            <ion-card-content>\n              {{loginData.summary}}\n            </ion-card-content>\n          \n          </ion-card>\n          <ion-card>\n\n              <ion-card-header>\n                  Experience \n              </ion-card-header>\n            \n              <ion-card-content>\n                {{loginData.experience}} </ion-card-content>\n            \n            </ion-card>\n\n            <ion-card>\n\n                <ion-card-header>\n                    Skills \n                </ion-card-header>\n              \n                <ion-card-content>\n                    <ion-item>\n                      User has not entered data in this field\n                      </ion-item>\n                </ion-card-content>\n              \n              </ion-card>\n\n              <ion-card>\n\n                  <ion-card-header>\n                      Educations \n                  </ion-card-header>\n                \n                  <ion-card-content>\n                    {{loginData.educations}}\n  \n                  </ion-card-content>\n                \n                </ion-card>\n\n              <ion-card>\n\n                  <ion-card-header>\n                      Languages \n                  </ion-card-header>\n                \n                  <ion-card-content>\n                      <ion-item>\n                        User has not entered data in this field\n                        </ion-item>\n                  </ion-card-content>\n                \n                </ion-card>\n    \n\n  \n                <ion-list *ngIf="items != null">\n            \n                  <ion-col *ngFor="let item of items"  no-padding>\n          \n                                  <ion-card >\n          \n                                      <ion-item (click)="moveToWish(item)">\n                                        <ion-avatar item-start>\n                                         <img src="http://mekooshar.appvilo.com/public/img/{{item.user_image}}">\n                                        </ion-avatar>\n                                  <h2>{{item.name}}</h2>\n                                       <p>{{item.user_status}}</p>\n                                      </ion-item>\n                                    \n                                     <!-- <img src="assets/imgs/nin-live.png">-->\n                                     <ion-item *ngIf="item?.post_files?.length > 0" id="joj">\n                                       <div *ngFor="let file of item.post_files; " (click)="moveToWish(item)">\n                                          <div class="square" *ngIf="file.image != null">\n                                              <div class="content">\n                                              \n                                                  <img class="rs" *ngIf="file.image != null" src="http://mekooshar.appvilo.com/public/images/{{file.image}}"/>\n                                                 \n                                              </div>\n                                          </div>\n          \n                                          <a style="white-space: normal;" *ngIf="file.file != null" href="http://mekooshar.appvilo.com/public/images/{{file.file}}">\n                                            {{file.file}}</a>\n          \n                                       </div>\n                                     \n                                  \n                                  </ion-item>\n                                    \n                                      <ion-card-content (click)="moveToWish(item)" *ngIf="item.text != null" [innerHtml]="(item.text | slice:0:150) +(item.text.length > 150 ? \'...\' : \'\') ">\n                                       \n                                      </ion-card-content>\n                                    \n                                   \n                                      <ion-row>\n                                        <ion-col>\n                                          <button ion-button icon-start clear small (click)="like(item)">\n                                            <ion-icon *ngIf=" item.like ==\'1\'" name="thumbs-up" color="secondary"></ion-icon>\n                                            <ion-icon *ngIf=" item.like !=\'1\' || item.like==\'null\'" name="thumbs-up" ></ion-icon>\n                                            <div>Like</div>\n                                          </button>\n                                        </ion-col>\n                                        <ion-col>\n                                          <button ion-button icon-start clear small (click)="dislike(item)">\n                                              <ion-icon *ngIf=" item.like !=\'2\'" name="thumbs-down"  ></ion-icon>\n                                            <ion-icon *ngIf=" item.like ==\'2\' || item.like==\'null\'" name="thumbs-down"  color="danger"></ion-icon>\n                                            <div>Dislike</div>\n                                          </button>\n                                        </ion-col>\n                                       \n                                      </ion-row>\n                                        \n                                    </ion-card>\n          \n                                  </ion-col>\n          \n                </ion-list>\n           \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forget_forget__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, fb, loadingCtrl, navParams, http, alertCtrl, databaseProvider) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.databaseProvider = databaseProvider;
        this.loginData = { email: '', password: '' };
        this.passwordtype = 'password';
        this.passeye = 'eye';
        this.devs = [];
        this.dev = {};
        this.authForm = this.fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
        });
        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];
    }
    LoginPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LoginPage.prototype.addUser = function (fp_id, user_id) {
        this.databaseProvider.addDeveloper(fp_id, user_id).then(function (data) {
        });
        this.dev = {};
    };
    LoginPage.prototype.moveToHome = function () {
        var _this = this;
        if (this.loginData.email.length > 0 && this.loginData.password.length > 0) {
            //this.presentLoadingDefault();
            var url = "http://mekooshar.appvilo.com/api/login.php";
            var postData = new FormData();
            postData.append('email', this.loginData.email);
            postData.append('parola', this.loginData.password);
            this.data = this.http.post(url, postData);
            this.data.subscribe(function (data) {
                console.log(data);
                // this.loading.dismiss();
                if (data['unswer'] != null) {
                    _this.addUser(data['unswer']['id'], data['unswer']['id']);
                    _this.userLogin();
                }
                else {
                    // this.loading.dismiss();
                    _this.presentUser();
                }
            });
        }
        else {
            //this.loading.dismiss();
            this.presentError();
        }
        //this.loading.dismiss();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.moveToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.forgetpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forget_forget__["a" /* ForgetPage */]);
    };
    LoginPage.prototype.userLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.presentError = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Field is empty',
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage.prototype.presentUser = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'This user is not registered',
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\login\login.html"*/'<!--\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>\n    <ion-icon name="md-contact"></ion-icon>\n    &nbsp;Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="bg-img">\n\n  <div class="main-content">\n    <div padding text-center class="container-logo">\n      <img src="assets/imgs/logo.png">\n    </div>\n    <div text-center class="socialLogin" padding>\n    \n      <button ion-button full class="facebook" (click)="socialLogin(\'facebook\')"><ion-icon name="logo-facebook" style="margin-right: 12px;"></ion-icon> Sign in with Facebook</button>\n    </div>\n    <div class="sepretor-or" padding-horizontal> <p>Or</p></div>\n\n    <div padding class="container-bottom" style="margin-bottom: 150px;">\n    <form   style="width: 100%;">\n\n    \n        <ion-list>\n          <ion-item padding-right>\n            <ion-label>\n              <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n            </ion-label>\n            <ion-input  [(ngModel)]="loginData.email" [formControl]="email" id="email" type="text" required placeholder="Email *"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <ion-icon ios="ios-unlock" md="md-unlock"></ion-icon>\n            </ion-label>\n              <ion-input   [(ngModel)]="loginData.password" [formControl]="password" id="password" type="{{passwordtype}}" required placeholder="Password *"></ion-input>\n         \n          </ion-item>\n        </ion-list>\n        <button type="submit" ion-button full color="dark"  (click)="moveToHome()">Sign In</button>\n    </form>\n    <div padding text-center class="form-bottom-text" ><a href="javascript:void(0);" (click)="forgetpassword()"> Forgot password?</a></div>\n        <div padding text-center class="form-bottom-text">\n          <label>Don\'t have an Account? <a href="javascript:void(0);" (click)="moveToRegister()">Sign up</a></label>\n        </div>\n\n  </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_setting_modal_setting__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobs_jobs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__groups_groups__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__school_school__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_event__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__payment_payment__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, modalCtrl, http, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.searchBar = false;
        this.dev = [];
        this.devs = {};
        this.loginData = { name: '', status: '', summary: '', experience: '', skills: '', educations: '', languages: '', image: '' };
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.user_id = data[0]['user_id'];
                _this.url = "http://mekooshar.appvilo.com/api/get_post_lost.php?user_id=" + data[0]['user_id'];
                _this.getData();
                _this.url2 = "http://mekooshar.appvilo.com/api/get_info_user.php?user_id=" + data[0]['user_id'];
                _this.getData2();
            }
            else {
                _this.url = "http://mekooshar.appvilo.com/api/get_post_lost.php?user_id=" + data[0]['user_id'];
                _this.getData();
                _this.url2 = "http://mekooshar.appvilo.com/api/get_info_user.php?user_id=" + data[0]['user_id'];
                _this.getData2();
            }
        }).catch();
    };
    ProfilePage.prototype.like = function (item) {
        var _this = this;
        var url = "http://mekooshar.appvilo.com/api/like_user_post.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id);
        postData.append('prod_id', item.id);
        postData.append('like', '1');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['status'] == "200 OK") {
                console.log(data);
                _this.ionViewDidEnter();
                /*
                        this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id="+this.user_id_2+"&wish_id="+this.ids;
                
                  
                
                        this.data_like = this.http.get(this.url_like);
                      this.data_like.subscribe(data_like => {
                  
                      //  this.status = data_like['status'];
                  
                  
                      })*/
            }
            else {
                console.log(data);
            }
            console.log(data);
        });
    };
    ProfilePage.prototype.dislike = function (item) {
        var _this = this;
        var url = "http://mekooshar.appvilo.com/api/like_user_post.php";
        var postData = new FormData();
        postData.append('user_id', this.user_id);
        postData.append('prod_id', item.id);
        postData.append('like', '2');
        this.data_post = this.http.post(url, postData);
        this.data_post.subscribe(function (data) {
            if (data['status'] == "200 OK") {
                console.log(data);
                _this.ionViewDidEnter();
                /*
                        this.url_like = " http://api.givet.co.uk/api/get_like_wish.php?user_id="+this.user_id_2+"&wish_id="+this.ids;
                
                  
                
                        this.data_like = this.http.get(this.url_like);
                      this.data_like.subscribe(data_like => {
                  
                      //  this.status = data_like['status'];
                  
                  
                      })*/
            }
            else {
                console.log(data);
            }
            console.log(data);
        });
    };
    ProfilePage.prototype.getData2 = function () {
        var _this = this;
        this.data = this.http.get(this.url2);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                // this.items = data;
                _this.loginData.name = data['name'];
                _this.loginData.status = data['status'];
                _this.loginData.image = data['image'];
                _this.loginData.experience = data['history'];
                _this.loginData.educations = data['education'];
                _this.loginData.summary = data['education'];
                console.log(JSON.stringify(data));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                //  this.items = null;
            }
        });
    };
    ProfilePage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                // console.log(JSON.stringify(this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                //  console.log(this.items);
            }
        });
    };
    ProfilePage.prototype.setting = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_setting_modal_setting__["a" /* ModalSettingPage */]);
        profileModal.present();
    };
    ProfilePage.prototype.setJob = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__jobs_jobs__["a" /* JobsPage */]);
    };
    ProfilePage.prototype.setGroup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__groups_groups__["a" /* GroupsPage */]);
    };
    ProfilePage.prototype.setSchool = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__school_school__["a" /* SchoolPage */]);
    };
    ProfilePage.prototype.setEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_event__["a" /* EventPage */]);
    };
    ProfilePage.prototype.setPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__payment_payment__["a" /* PaymentPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n    <ion-buttons end > <button ion-button item-right  style="color: #fff;    font-size: 26px;"> <ion-icon name=\'ios-cog\'></ion-icon> </button> </ion-buttons>\n  </ion-navbar>\n</ion-header>\n  \n  <ion-content style="background: grey;">\n    \n  \n    <ion-list >\n       \n        <ion-item class="profile-item" >\n            <div class="profile-picture big-profile-picture">\n              <img src="http://mekooshar.appvilo.com/public/img/{{loginData.image}}">\n            </div>\n            <h2 class="profile-name dark">{{loginData.name}}</h2>\n            <div class="profile-info">{{loginData.status}}</div>\n\n               \n              <button ion-item style="\n              padding: 0px;\n          " (click)="setGroup()"> \n                  <ion-icon name="contacts" item-start></ion-icon>\n                  Groups Page\n                </button>\n\n                <button ion-item style="\n                padding: 0px;\n            " (click)="setSchool()"> \n                    <ion-icon name="people" item-start></ion-icon>\n                    Schools Page\n                  </button>\n\n                  <button ion-item style="\n                  padding: 0px;\n              " (click)="setEvent()"> \n                      <ion-icon name="pin" item-start></ion-icon>\n                      Events Page\n                    </button>\n\n                    <button ion-item style="\n                    padding: 0px;\n                " (click)="setPayment()"> \n                        <ion-icon name="cart" item-start></ion-icon>\n                        Payment Page\n                      </button>\n          </ion-item>\n            \n        \n\n          <ion-card>\n\n              <ion-card-header>\n                  Summary \n              </ion-card-header>\n            \n              <ion-card-content>\n                {{loginData.summary}}\n              </ion-card-content>\n            \n            </ion-card>\n            <ion-card>\n\n                <ion-card-header>\n                    Experience \n                </ion-card-header>\n              \n                <ion-card-content>\n                  {{loginData.experience}}\n                </ion-card-content>\n              \n              </ion-card>\n  \n              <ion-card>\n\n                  <ion-card-header>\n                      Skills \n                  </ion-card-header>\n                \n                  <ion-card-content>\n                      <ion-item>\n                          <ion-icon name="ios-git-branch" item-start></ion-icon>\n                          ios\n                          <ion-badge item-end>0</ion-badge>\n                        </ion-item>\n                        <ion-item>\n                          <ion-icon name="ios-git-branch" item-start></ion-icon>\n                          android\n                          <ion-badge item-end>0</ion-badge>\n                        </ion-item>\n                  </ion-card-content>\n                \n                </ion-card>\n\n                <ion-card>\n\n                    <ion-card-header>\n                        Educations \n                    </ion-card-header>\n                  \n                    <ion-card-content>\n                      {{loginData.educations}}\n                    </ion-card-content>\n                  \n                  </ion-card>\n\n                <ion-card>\n\n                    <ion-card-header>\n                        Languages \n                    </ion-card-header>\n                  \n                    <ion-card-content>\n                        <ion-item>\n                            <ion-icon name="ios-globe" item-start></ion-icon>\n                            English\n                            \n                          </ion-item>\n                    </ion-card-content>\n                  \n                  </ion-card>\n    \n  \n                  <ion-list *ngIf="items == null " text-center>\n\n    \n                    <button *ngIf="items == null" (click)="moveToLogin()" style=" background-color: #002d60;margin:20px;" ion-button round>Create new post</button>\n                  </ion-list>\n            \n                  <ion-list *ngIf="items != null">\n            \n                    <ion-col *ngFor="let item of items"  no-padding>\n            \n                                    <ion-card >\n\n            \n                                        <ion-item (click)="moveToWish(item)">\n                                          <ion-avatar item-start>\n                                           <img src="http://mekooshar.appvilo.com/public/img/{{item.user_image}}">\n                                          </ion-avatar>\n                                    <h2>{{item.name}}</h2>\n                                         <p>{{item.user_status}}</p>\n                                        </ion-item>\n                                      \n                                       <!-- <img src="assets/imgs/nin-live.png">-->\n                                       <ion-item *ngIf="item?.post_files?.length > 0" id="joj">\n                                         <div *ngFor="let file of item.post_files; " (click)="moveToWish(item)">\n                                            <div class="square" *ngIf="file.image != null">\n                                                <div class="content">\n                                                \n                                                    <img class="rs" *ngIf="file.image != null" src="http://mekooshar.appvilo.com/public/images/{{file.image}}"/>\n                                                   \n                                                </div>\n                                            </div>\n            \n                                            <a style="white-space: normal;" *ngIf="file.file != null" href="http://mekooshar.appvilo.com/public/images/{{file.file}}">\n                                              {{file.file}}</a>\n            \n                                         </div>\n                                       \n                                    \n                                    </ion-item>\n                                      \n                                        <ion-card-content (click)="moveToWish(item)" *ngIf="item.text != null" [innerHtml]="(item.text | slice:0:150) +(item.text.length > 150 ? \'...\' : \'\') ">\n                                         \n                                        </ion-card-content>\n                                      \n                                     \n                                        <ion-row>\n                                            <ion-col>\n                                              <button ion-button icon-start clear small (click)="like(item)">\n                                                <ion-icon *ngIf=" item.like ==\'1\'" name="thumbs-up" color="secondary"></ion-icon>\n                                                <ion-icon *ngIf=" item.like !=\'1\' || item.like==\'null\'" name="thumbs-up" ></ion-icon>\n                                                <div>Like</div>\n                                              </button>\n                                            </ion-col>\n                                            <ion-col>\n                                              <button ion-button icon-start clear small (click)="dislike(item)">\n                                                  <ion-icon *ngIf=" item.like !=\'2\'" name="thumbs-down"  ></ion-icon>\n                                                <ion-icon *ngIf=" item.like ==\'2\' || item.like==\'null\'" name="thumbs-down"  color="danger"></ion-icon>\n                                                <div>Dislike</div>\n                                              </button>\n                                            </ion-col>\n                                           \n                                          </ion-row>\n                                          \n                                      </ion-card>\n            \n                                    </ion-col>\n            \n                  </ion-list>\n             \n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, http, databaseProvider) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
    }
    ContactPage_1 = ContactPage;
    ContactPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.url = "http://mekooshar.appvilo.com/api/get_log_chats.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
            else {
                _this.url = "http://mekooshar.appvilo.com/api/get_log_chats.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
        }).catch();
    };
    ContactPage.prototype.openChat = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], {
            id: id
        });
    };
    ContactPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                console.log(JSON.stringify(_this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                console.log(_this.items);
            }
        });
    };
    ContactPage.prototype.goToMes = function () {
        this.navCtrl.push(ContactPage_1);
    };
    ContactPage.prototype.goProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    ContactPage = ContactPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\contact\contact.html"*/'<ion-header>\n    <ion-navbar>\n    \n            <ion-buttons left (click)="goProfile()"> <button ion-button item-right  style="color: #fff;">  <img src="http://mekooshar.appvilo.com/public/img/1565104161.png" style="\n              width: 30px;\n              border: solid 0.5px;\n              border-radius: 45%;\n          " class="button button-icon button-clear" menu-toggle="left"> </button> </ion-buttons>\n\n  <ion-searchbar\n \n  [showCancelButton]="shouldShowCancel"\n \n  placeholder="Saerch for people, jobs, and more..."\n  >\n</ion-searchbar>\n<!--<ion-buttons end (click)="goToMes()"> <button ion-button item-right  style="color: #fff;"> <ion-icon name=\'ios-paper-plane\'></ion-icon> </button> </ion-buttons> -->\n\n</ion-navbar>\n</ion-header> \n\n<ion-content style="background: grey;">\n  \n\n<ion-card style="margin-top: 0px;width: 100%;border: 0px;margin-left: 0px;margin-right: 0px;">\n\n  <div *ngFor="let item of items">\n    <ion-item (click)="openChat(item.id)">\n        <ion-avatar item-start>\n          <img *ngIf="item.image ==null" src="http://mekooshar.appvilo.com/public/img/default-user.png">\n          <img *ngIf="item.image !=null" src="http://mekooshar.appvilo.com/public/img/{{item.image}}">\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n       \n       \n      <!--  <ion-badge item-end>3</ion-badge>-->\n      </ion-item>\n    \n     \n       \n\n              </div>\n      \n</ion-card>     \n\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], ContactPage);
    return ContactPage;
    var ContactPage_1;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tutorial_tutorial__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, databaseProvider) {
        var _this = this;
        this.storage = storage;
        this.databaseProvider = databaseProvider;
        this.dev = [];
        this.devs = {};
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            storage.get('first_time').then(function (val) {
                if (val !== null) {
                    console.log('app isn');
                    _this.databaseProvider.getDatabaseState().subscribe(function (rdy) {
                        if (rdy) {
                            _this.databaseProvider.getUsers().then(function (data) {
                                _this.devs = data;
                                //  alert( data);
                                if (data[0]['user_id'] != null) {
                                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                                }
                                else {
                                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                                }
                            }).catch();
                        }
                    });
                }
                else {
                    console.log('probably the first time');
                    storage.set('first_time', 'done');
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tutorial_tutorial__["a" /* TutorialPage */];
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobs_jobs__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__jobs_jobs__["a" /* JobsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root"  tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab2Root"  tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root"  tabIcon="ios-paper-plane"></ion-tab>\n  <ion-tab [root]="tab5Root"  tabIcon="briefcase"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_job_create_job__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the JobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobsPage = /** @class */ (function () {
    function JobsPage(navCtrl, navParams, http, databaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databaseProvider = databaseProvider;
        this.searchBar = false;
        this.dev = [];
        this.devs = {};
    }
    JobsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.databaseProvider.getUsers().then(function (data) {
            _this.devs = data;
            //  alert( data);
            if (data[0]['user_id'] != null) {
                _this.url = "http://mekooshar.appvilo.com/api/get_jobs.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
            else {
                _this.url = "http://mekooshar.appvilo.com/api/get_jobs.php?user_id=" + data[0]['user_id'];
                _this.getData();
            }
        }).catch();
    };
    JobsPage.prototype.create = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_job_create_job__["a" /* CreateJobPage */]);
    };
    JobsPage.prototype.getData = function () {
        var _this = this;
        this.data = this.http.get(this.url);
        this.data.subscribe(function (data) {
            if (data['status'] != "400 OK") {
                _this.items = data;
                // console.log(JSON.stringify(this.items));
            }
            else if (data['status'] == "400 OK" || data['status'] == "500 OK") {
                _this.items = null;
                console.log(_this.items);
            }
        });
    };
    JobsPage.prototype.goToMes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    JobsPage.prototype.goProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    JobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jobs',template:/*ion-inline-start:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\jobs\jobs.html"*/'<ion-header>\n    <ion-navbar>\n    \n            <ion-buttons left (click)="goProfile()"> <button ion-button item-right  style="color: #fff;">  <img src="http://mekooshar.appvilo.com/public/img/1565104161.png" style="\n              width: 30px;\n              border: solid 0.5px;\n              border-radius: 45%;\n          " class="button button-icon button-clear" menu-toggle="left"> </button> </ion-buttons>\n\n  <ion-searchbar\n \n  [showCancelButton]="shouldShowCancel"\n \n  placeholder="Saerch for people, jobs, and more..."\n  >\n</ion-searchbar>\n<!--<ion-buttons end (click)="goToMes()"> <button ion-button item-right  style="color: #fff;"> <ion-icon name=\'ios-paper-plane\'></ion-icon> </button> </ion-buttons> -->\n\n</ion-navbar>\n</ion-header>\n\n<ion-content style="background: grey;">\n \n\n  <ion-list *ngIf="items == null " text-center>\n\n    \n    <button *ngIf="items == null" (click)="moveToLogin()" style=" background-color: #002d60;margin:20px;" ion-button round>Create new post</button>\n  </ion-list>\n\n  <ion-list *ngIf="items != null">\n\n\n    <ion-col *ngFor="let item of items"  no-padding>\n                      <ion-card>\n\n                          <ion-item>\n                            <ion-avatar item-start>\n                              <img src="http://mekooshar.appvilo.com/public/img/{{item.image}}">\n                            </ion-avatar>\n                            <h2>{{item.name}}</h2>\n                            <p>{{item.location}}</p>\n                            <p>{{item.phones}}</p>\n                          </ion-item>\n                        \n                        \n                                   \n                          <ion-card-content *ngIf="item.description != null" [innerHtml]="(item.description | slice:0:150) +(item.description.length > 150 ? \'...\' : \'\') ">\n                             \n                          </ion-card-content>\n                    \n                        \n                          <ion-row>\n                            <ion-col>\n                              <button ion-button icon-start clear small>\n                                <ion-icon name="thumbs-up"></ion-icon>\n                                <div>Like</div>\n                              </button>\n                            </ion-col>\n                            <ion-col>\n                              <button ion-button icon-start clear small>\n                                  <ion-icon name="thumbs-down"></ion-icon>\n                                <div>Dislike</div>\n                              </button>\n                            </ion-col>\n                            \n                          </ion-row>\n                          \n                        </ion-card>\n\n                        </ion-col>\n\n                        \n    </ion-list>\n\n    <ion-fab bottom right edge style="margin-bottom: 50px;">\n      <button ion-fab mini (click)="create()"><ion-icon name="add"></ion-icon></button>\n    \n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"F:\AppVilo\ALL_PROJECT\Type Linkedin\mobile\mekooshar\src\pages\jobs\jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */]])
    ], JobsPage);
    return JobsPage;
}());

//# sourceMappingURL=jobs.js.map

/***/ })

},[375]);
//# sourceMappingURL=main.js.map