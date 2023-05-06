import { Component, Input } from '@angular/core';
import { Career } from '../interfaces/career';

@Component({
  selector: 'cb-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent {
  @Input() career: Career = {
    id: 0,
    manager: 'Jorge Sampaoli',
    currentTeam: 'Flamengo',
    lastUpdate: new Date(),
  };
}
