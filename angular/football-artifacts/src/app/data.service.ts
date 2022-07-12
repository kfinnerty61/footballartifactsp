import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/team";

  constructor(private httpClient: HttpClient) { }

  public GetTeamsRequest(){
    return this.httpClient.get<any[]>(this.REST_API_SERVER);
  }
}
