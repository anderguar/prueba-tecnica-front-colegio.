import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherSubjectStudentService {

  url: string;
  
  constructor(private http: HttpClient) {
    console.log('Service Listo');
    this.url = environment.resources.host;
  }

  getAllTeacher(): Observable<any> {
    return this.http.get(this.url + `/api/v1/teachers`);
  }

  getTeacherHasSubjectHasStudent(idTeacher: number): Observable<any> {
    return this.http.get(this.url + `/api/v1/teachers/subjects/students/${idTeacher}`);
  }
}
