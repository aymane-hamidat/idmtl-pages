import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IdmtlService {

  constructor(private http: HttpClient) {
  }

  getDepartures() {
    return this.http.get("/api/flight?type=departure&sort=field_planned&direction=ASC&rule=24h");
  }

  getArrivals() {
    return this.http.get("/api/flight?type=arrival&sort=field_planned&direction=ASC&rule=24h");
  }
}
