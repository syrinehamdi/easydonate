import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly API_URL = 'http://localhost:8088'; 
  constructor(private httpClient: HttpClient) { }

  getAllTasks(){
    return this.httpClient.get(`${this.API_URL}/tasks`)
  }
  getAllTasks2(task : any){
    return this.httpClient.get(`${this.API_URL}/tasks`, task)
  }

}
