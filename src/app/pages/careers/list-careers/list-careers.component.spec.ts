import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCareersComponent } from './list-careers.component';

describe('ListCareersComponent', () => {
  let component: ListCareersComponent;
  let fixture: ComponentFixture<ListCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCareersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
