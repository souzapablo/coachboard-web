import { Component } from '@angular/core';
import { CareerService } from '../career.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CareerDetails } from 'src/app/shared/interfaces/careers/careerDetails';

@Component({
  selector: 'cb-delete-career',
  templateUrl: './delete-career.component.html',
  styleUrls: ['./delete-career.component.css'],
})
export class DeleteCareerComponent {
  career: CareerDetails = {
    id: 1,
    managerName: '',
    teams: [],
    lastUpdate: new Date(),
  };

  constructor(
    private service: CareerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(parseInt(id!)).subscribe((career) => {
      this.career = career;
    });
  }
  deleteCareer() {
    if (this.career.id) {
      this.service.delete(this.career.id).subscribe(() => {
        this.router.navigate(['/list-careers']);
      });
    }
  }
  cancel() {
    this.router.navigate(['/list-careers']);
  }
}
