import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginationResult } from 'src/shared/paginationResult';
import { CareerDetails } from './interfaces/careerDetails';
import { CreateCareer } from './interfaces/createCareer';
import { Career } from './interfaces/career';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CareerService {
  private readonly BASE_URL = 'https://localhost:7144/api/v1/careers';
  constructor(private http: HttpClient) {}

  list(page: number, manager: string): Observable<PaginationResult<Career>> {
    let params = new HttpParams().set('page', page);

    if (manager.trim().length > 0) {
      params = params.set('managerName', manager);
    }
    return this.http.get<PaginationResult<Career>>(`${this.BASE_URL}/user/1`, {
      params,
    });
  }

  create(createCareer: CreateCareer) {
    return this.http.post(this.BASE_URL, createCareer);
  }

  delete(id: number) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }

  getById(id: number): Observable<CareerDetails> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<CareerDetails>(url);
  }
}
