import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teachers } from '../interfaces/index.interfaces';

@Injectable({ providedIn: 'root' })

export class TeachersService {

  constructor(
    private http: HttpClient
  ) { }

  GetAllTeachers()
  {
    return this.http.get<Teachers>('http://hp-api.herokuapp.com/api/characters/staff').toPromise();
  }
}
