import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NotiPage } from '../noti/noti';
import { ProfilePage } from '../profile/profile';
import { JobsPage } from '../jobs/jobs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab5Root = JobsPage;

  constructor() {

  }
}
