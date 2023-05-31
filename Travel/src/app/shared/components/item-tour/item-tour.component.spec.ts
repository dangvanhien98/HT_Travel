import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTourComponent } from './item-tour.component';

describe('ItemTourComponent', () => {
  let component: ItemTourComponent;
  let fixture: ComponentFixture<ItemTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemTourComponent]
    });
    fixture = TestBed.createComponent(ItemTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
