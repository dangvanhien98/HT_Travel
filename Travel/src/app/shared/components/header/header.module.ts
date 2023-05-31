import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule, FormsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
