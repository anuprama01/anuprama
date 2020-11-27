import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IStudent } from './student';
import { from } from 'rxjs';

@Injectable({
    providedIn :'root'
})
export class StudentService{
    private studentUrl:string ='https://localhost:44363/api/students';
    constructor(private http:HttpClient){

    }

    getStudents():Observable<IStudent[]>{
        const headers = new HttpHeaders();
        //headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');

        return this.http.get<IStudent[]>(this.studentUrl)
        .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
       
            
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }

}