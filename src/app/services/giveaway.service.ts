import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Giveaway } from './models/giveaway.model';

@Injectable({
  providedIn: 'root'
})
export class GiveawayService {

  private baseUrl = 'http://localhost:8081/giveawayItems';

  constructor(private http: HttpClient) { }

  getAllGiveaways(): Observable<Giveaway[]> {
    return this.http.get<Giveaway[]>(`${this.baseUrl}/list`);
  }

  getGiveawayById(id: number): Observable<Giveaway> {
    return this.http.get<Giveaway>(`${this.baseUrl}/findById/${id}`);
  }

  createGiveaway(giveaway: Giveaway): Observable<Giveaway> {
    return this.http.post<Giveaway>(`${this.baseUrl}/add`, giveaway);
  }

  updateGiveaway(id: number, giveaway: Giveaway): Observable<Giveaway> {
    return this.http.put<Giveaway>(`${this.baseUrl}/modify/${id}`, giveaway);
  }

  reserveGiveaway(id: number, giveaway: Giveaway): Observable<Giveaway> {
    giveaway.availability = false;
    return this.http.put<Giveaway>(`${this.baseUrl}/modify/${id}`, giveaway);
  }

  deleteGiveaway(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
