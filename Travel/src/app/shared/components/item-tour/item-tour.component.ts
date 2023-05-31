import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tour } from 'src/app/models/tour.i';

@Component({
  selector: 'app-item-tour',
  templateUrl: './item-tour.component.html',
  styleUrls: ['./item-tour.component.css'],
})
export class ItemTourComponent {
  @Input()
  tour: Tour = {
    id: 1,
    img: 'https://media.baodautu.vn/Images/honghanh/2020/05/30/khach_hang_VS_ci_voi_Tay_Nguyen.jpg',
    name: 'Tour tây nguyên 3N2Đ Khám phá BMT',
    price: 2000000,
  };
  @Output()
  idTour: EventEmitter<number> = new EventEmitter<number>();
  clickBook(id: number) {
    this.idTour.emit(id);
  }
}
