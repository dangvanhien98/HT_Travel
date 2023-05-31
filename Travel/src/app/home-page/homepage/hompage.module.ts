import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HomepageComponent],
  imports: [SharedModule, HttpClientModule, BrowserModule],
  exports: [HomepageComponent],
})
export class HomePageModule {}
