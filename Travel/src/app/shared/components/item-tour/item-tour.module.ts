import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ItemTourComponent } from './item-tour.component';

@NgModule({
  declarations: [ItemTourComponent],
  imports: [BrowserModule, FormsModule],
  exports: [ItemTourComponent],
})
export class ItemTourModule {}
