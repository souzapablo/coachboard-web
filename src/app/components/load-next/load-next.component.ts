import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-load-next',
  templateUrl: './load-next.component.html',
  styleUrls: ['./load-next.component.css'],
})
export class LoadNextComponent {
  @Input() hasMoreData: boolean = false;
}
