import { Component, Input } from '@angular/core';
import { Career } from 'src/app/shared/interfaces/careers/career';

@Component({
  selector: 'cb-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent {
  @Input() career: Career = {
    id: 0,
    manager: '',
    currentTeam: '',
    lastUpdate: new Date(),
  };
}
