import { Component, EventEmitter, Output } from '@angular/core';
import { Banner } from 'src/app/models/banner.i';
import { TitleHeader } from 'src/app/models/title-header.i';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  titles: TitleHeader[] = [
    {
      name: 'HOME',
      active: true,
    },
    {
      name: 'TOURS',
      active: false,
    },
    {
      name: 'CONTACT',
      active: false,
    },
    {
      name: 'ABOUT',
      active: false,
    },
  ];

  banners: Banner[] = [
    {
      url: 'https://vanhoadoisong.vn/wp-content/uploads/2022/05/100-hinh-nen-anh-canh-dong-lua-full-hd-cho-may-tinh-dien-thoai-13.jpg',
      active: 'active',
    },
    {
      url: 'https://thanhnienmoi.com/upload/images/canh-dong-lua-chin-o-ha-giang-01.jpg',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT691vYItIFuIJoB0_gNWaTwlOr_HThi35Oh7l3fbqA4Jpvg20IJWrjy-FHHCl27TxTK9Q&usqp=CAU',
    },
  ];

  @Output() titleHeader: EventEmitter<string> = new EventEmitter<string>();
  onCLick(name: string) {
    this.titles.forEach((item) => {
      if (item.name == name) item.active = true;
      else item.active = false;
    });
    this.titleHeader.emit(name);
    console.log(name);
  }

  textsearch: string = '';
  textSearch() {
    console.log(this.textsearch);
  }
}
