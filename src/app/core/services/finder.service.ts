import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class FinderService {
  constructor(
    private http: HttpClient,
  ) {}

  getUser(user: string): Observable<User> {
    const url = `https://api.github.com/users/${user}`;
    return this.http.get<User>(url);
  }
}
