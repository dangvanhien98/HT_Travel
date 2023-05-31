import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';
import { ItemTourComponent } from './components/item-tour/item-tour.component';
import { ItemTourModule } from './components/item-tour/item-tour.module';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { FooterModule } from './components/footer/footer.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule],
  exports: [HeaderModule, ItemTourModule, FooterModule],
})
export class SharedModule {}
