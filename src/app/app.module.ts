import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PricesComponent } from './components/prices/prices.component';
import { DividerComponent } from './components/divider/divider.component';
import {HttpClientModule} from '@angular/common/http';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    TrainersComponent,
    ScheduleComponent,
    ProgramsComponent,
    ContactsComponent,
    PricesComponent,
    DividerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
