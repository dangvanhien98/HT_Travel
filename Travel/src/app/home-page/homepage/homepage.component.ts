import { Component } from '@angular/core';
import { Tour } from 'src/app/models/tour.i';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  tours: Tour[] = [
    {
      id: 1,
      img: 'https://media.baodautu.vn/Images/honghanh/2020/05/30/khach_hang_VS_ci_voi_Tay_Nguyen.jpg',
      name: 'Tour tây nguyên 3N2Đ Khám phá BMT',
      price: 2000000,
    },
    {
      id: 2,
      img: 'https://2trip.vn/wp-content/uploads/2020/08/thanh-pho-bien-nha-trang-19-1200x900.jpg',
      name: 'Tour nha trang 3N2Đ Khám phá Nha trang',
      price: 3000000,
    },
    {
      id: 3,
      img: 'https://ik.imagekit.io/tvlk/blog/2023/01/canh-dep-da-lat-1.jpg?tr=dpr-2,w-675',
      name: 'Tour Đà lạt 3N2Đ Khám phá Đà lạt',
      price: 4000000,
    },
  ];
}
