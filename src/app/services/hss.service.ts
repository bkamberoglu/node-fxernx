import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hss } from '../models/hss';

@Injectable({
  providedIn: "root"
})
export class HssService {

  private hssUrl = "/assets/hss/data/hss.json";

  constructor(private http: HttpClient) { }

//   getHssData() {
//     return this.http.get<any>(this.hssUrl).pipe(data => { return data;});   
// }

  getHssData() {
      return this.http.get<any>(this.hssUrl)
          .toPromise()
          .then(response => <Hss[]>response.data)
          .then(data => { return data; });
  }

}
