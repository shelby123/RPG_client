import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  public getListById(listId: number) {
    // const url = environment.list_api_url + listId;
    // return this.http.get(url);
  }

  public createList(listName: string, userName: string) {
    const createListObject = {
      name: listName,
      user: userName
    };
    const requestHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(environment.list_api_create, createListObject, {headers: requestHeaders});
  }
}
