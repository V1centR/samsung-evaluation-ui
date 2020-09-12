import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamsungQuotationApiService {

  LC_API:string = "http://ec2-3-137-40-117.us-east-2.compute.amazonaws.com/api/evaluation";

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.LC_API}`);
  }

  findCurrency(): Observable<any> {
    return this.http.get("https://cellolatam.cellologistics.com.br/sds-devs-evaluation/evaluation/currency");
  }

}
