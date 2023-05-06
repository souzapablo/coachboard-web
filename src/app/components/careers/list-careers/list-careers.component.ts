import { Component } from '@angular/core';
import { CareerService } from '../career.service';
import { Career } from '../interfaces/career';

@Component({
  selector: 'cb-list-careers',
  templateUrl: './list-careers.component.html',
  styleUrls: ['./list-careers.component.css'],
})
export class ListCareersComponent {
  careers: Career[] = [];

  constructor(private service: CareerService) {}

  ngOnInit(): void {
    this.service.list().subscribe((careers) => (this.careers = careers.data));
  }
}
