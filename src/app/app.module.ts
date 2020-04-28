import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgetPage } from '../pages/forget/forget';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { NotiPage } from '../pages/noti/noti';
import { ProfilePage } from '../pages/profile/profile';
import { ModalSettingPage } from '../pages/modal-setting/modal-setting';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { ChatPage } from '../pages/chat/chat';
import { JobsPage } from '../pages/jobs/jobs';
import { GroupsPage } from '../pages/groups/groups';
import { SchoolPage } from '../pages/school/school';
import { EventPage } from '../pages/event/event';
import { PaymentPage } from '../pages/payment/payment';
import { PostViewPage } from '../pages/post-view/post-view';
import { CreatePostPage } from '../pages/create-post/create-post';
import { EditPostPage } from '../pages/edit-post/edit-post';
import { CreateJobPage } from '../pages/create-job/create-job';
import { CreateCompanyPage } from '../pages/create-company/create-company';
import { CreateGroupPage } from '../pages/create-group/create-group';
import { CreateSchoolPage } from '../pages/create-school/create-school';
import { ConnectionsPage } from '../pages/connections/connections';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DatabaseProvider } from '../providers/database/database';
import { SQLite } from '@ionic-native/sqlite';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostViewPage,
    LoginPage,
    RegisterPage,
    ForgetPage,
    TutorialPage,
    NotiPage,
    ProfilePage,
    ModalSettingPage,
    UserProfilePage,
    ChatPage,
    JobsPage,
    GroupsPage,
    SchoolPage,
    EventPage,
    PaymentPage,
    CreatePostPage,
    EditPostPage,
    CreateJobPage,
    CreateCompanyPage,
    CreateGroupPage,
    CreateSchoolPage,
    ConnectionsPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    PaymentPage,
    HomePage,
    TabsPage,
    EventPage,
    LoginPage,
    PostViewPage,
    RegisterPage,
    ModalSettingPage,
    UserProfilePage,
    ForgetPage,
    TutorialPage,
    NotiPage,
    ProfilePage,
    ChatPage,
    SchoolPage,
    JobsPage,
    GroupsPage,
    CreatePostPage,
    EditPostPage,
    CreateJobPage,
    CreateCompanyPage,
    CreateGroupPage,
    CreateSchoolPage,
    ConnectionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    PhotoViewer,
    Camera,
    FileTransfer,
    SQLite,
    File
  ]
})
export class AppModule {}
