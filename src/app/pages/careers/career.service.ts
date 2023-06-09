import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Career } from '../../shared/interfaces/careers/career';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/shared/constants';
import { PaginationResult } from 'src/app/shared/paginationResult';
import { CreateCareer } from 'src/app/shared/interfaces/careers/createCareer';
import { CareerDetails } from 'src/app/shared/interfaces/careers/careerDetails';

@Injectable({
  providedIn: 'root',
})
export class CareerService {
  private readonly PATH = `${BASE_URL}/careers`;
  userId: string;
  constructor(private http: HttpClient) {
    this.userId = localStorage.getItem('userId') || '';
  }

  list(page: number, manager: string): Observable<PaginationResult<Career>> {
    let params = new HttpParams().set('page', page);

    if (manager.trim().length > 0) {
      params = params.set('managerName', manager);
    }
    return this.http.get<PaginationResult<Career>>(
      `${this.PATH}/user/${this.userId}`,
      {
        params,
      }
    );
  }

  create(createCareer: CreateCareer) {
    return this.http.post(this.PATH, createCareer);
  }

  delete(id: number) {
    return this.http.delete(`${this.PATH}/${id}`);
  }

  getById(id: number): Observable<CareerDetails> {
    const url = `${this.PATH}/${id}`;
    return this.http.get<CareerDetails>(url);
  }
}
