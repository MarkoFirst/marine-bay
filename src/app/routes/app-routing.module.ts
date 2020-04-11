import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {AboutUsComponent} from '../components/about-us/about-us.component';
import {ContactsComponent} from '../components/contacts/contacts.component';
import {ProgramsComponent} from '../components/programs/programs.component';
import {ScheduleComponent} from '../components/schedule/schedule.component';
import {TrainersComponent} from '../components/trainers/trainers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'programs',
    component: ProgramsComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'trainers',
    component: TrainersComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
