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
  currentPage: number = 1;
  hasMoreData: boolean = true;
  filter: string = '';

  constructor(private service: CareerService) {}

  ngOnInit(): void {
    this.service
      .list(this.currentPage, this.filter)
      .subscribe((careers) => (this.careers = careers.data));
  }

  loadNext() {
    this.service.list(++this.currentPage, this.filter).subscribe((careers) => {
      this.careers.push(...careers.data);
      this.hasMoreData = !careers.isLastPage;
    });
  }

  searchCareer() {
    this.hasMoreData = true;
    this.currentPage = 1;
    setTimeout(() => {
      this.service.list(this.currentPage, this.filter).subscribe((careers) => {
        this.careers = careers.data;
      });
    }, 1000);
  }
}
