import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamsungQuotationApiService {

  //LC_API:string = "http://192.168.1.7:8080/api/evaluation";

  //LC_API:string = "http://127.0.0.1:8080/api/evaluation";

  LC_API:string = "http://ec2-18-191-133-109.us-east-2.compute.amazonaws.com/api/evaluation";

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.LC_API}`);
  }

  findCurrency(): Observable<any> {
    return this.http.get("https://cellolatam.cellologistics.com.br/sds-devs-evaluation/evaluation/currency");
  }

}
