import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrl = 'api/persons';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    return this.http.get<{ persons: Person[] }>(this.baseUrl)
      .pipe(
        map(response => response.persons)
      );
  }

  getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  create(person: Person): Observable<Person> {
    return this.http.post<Person>(this.baseUrl, person);
  }

  update(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/${person.id}`, person);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}