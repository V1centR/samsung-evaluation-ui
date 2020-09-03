import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Sort} from '@angular/material/sort';
import {SamsungQuotationApiService} from '../Service/samsung-quotation-api.service';
import {SamsungQuotationApi} from '../Model/samsung-quotation-api';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: []
})

export class IndexComponent implements OnInit {

  // @ViewChild("currencyForm")
  // currencyForm: FormGroup;

  hidden = false;
  date:any;
  quotationApi:any;
  quotationItems:any[]; //const arr: Emp[] = [  
  quotationObject:any;
  frontItems:any;
  startDate;
  currency:any;
  docNumber:string;
  formInput:any;

  ngOnInit(){
    this.getCategories("full");
  }

  constructor(private apiService: SamsungQuotationApiService) {
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

currencyQuotationAction(currencyForm: NgForm){

  
  let formInput = currencyForm.value;

  //console.log("Currency selected! -> " + this.currency + " Data: " + this.startDate);

  this.getCategories(formInput);

  console.log("DOC NUMBER:: ", formInput.docNumber);
  console.log("CURRENCY CODE:: ", formInput.currency); 
  console.log("START DATE:: ", formInput.startDate);
  console.log("END DATE:: ", formInput.endDate);
}

  
  async getCategories(searchParams){


    console.log("::ARGUMENTS OK::", searchParams);

  await this.apiService.findAll().toPromise().then( res => {

    console.log("Data Received:: ", res);

    this.quotationItems = [];

    this.quotationApi = JSON.parse(JSON.stringify(res));

    this.quotationApi.forEach(element => {
//searchParams.currency

      console.log("Search Param::: ", searchParams.currency);


      if (searchParams.docNumber == element.docNumber){

        this.quotationItems.push(
          {
            docNumber: element.docNumber, 
            docDate: element.docDate, 
            currencyCode: element.currencyCode, 
            currencyDesc: element.currencyDesc, 
            docValue: element.docValue,
            valueUsd: element.valueUsd,
            valuePen: element.valuePen,
            valueBrl: element.valueBrl,
        })

      }

      if(element.currencyCode == searchParams.currency){

        this.quotationItems.push(
          {
            docNumber: element.docNumber, 
            docDate: element.docDate, 
            currencyCode: element.currencyCode, 
            currencyDesc: element.currencyDesc, 
            docValue: element.docValue,
            valueUsd: element.valueUsd,
            valuePen: element.valuePen,
            valueBrl: element.valueBrl,
        })

       // this.sortedData = this.quotationItems.slice();
      } else if (searchParams.currency == "full" || searchParams == "full"){

        this.quotationItems.push(
          {
            docNumber: element.docNumber, 
            docDate: element.docDate, 
            currencyCode: element.currencyCode, 
            currencyDesc: element.currencyDesc, 
            docValue: element.docValue,
            valueUsd: element.valueUsd,
            valuePen: element.valuePen,
            valueBrl: element.valueBrl,
        })

      }

      

      // this.quotationItems.push(
      //   {
      //     docNumber: element.docNumber, 
      //     docDate: element.docDate, 
      //     currencyCode: element.currencyCode, 
      //     currencyDesc: element.currencyDesc, 
      //     docValue: element.docValue,
      //     valueUsd: element.valueUsd,
      //     valuePen: element.valuePen,
      //     valueBrl: element.valueBrl,
      // })

    });//Close forEach###

    console.log(this.quotationItems);
    this.sortedData = this.quotationItems.slice();

  });

}

  sortedData: SamsungQuotationApi[];

  blockSearch(){

    console.log("BLOCK OK!");

  }

  releaseSearch(event: any){

    console.log("ELEMENT:: ", event.target.value.length);
    
    if(event.target.value.length > 0){
      console.log("Release NO!");
    } else {
      console.log("Release OK!");
    }
  }

  sortData(sort: Sort) {
    const data = this.quotationItems.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'docNumber': return compare(a.docNumber, b.docNumber, isAsc);
        case 'docDate': return compare(a.docDate, b.docDate, isAsc);
        case 'currencyCode': return compare(a.currencyCode, b.currencyCode, isAsc);
        case 'currencyDesc': return compare(a.currencyDesc, b.currencyDesc, isAsc);
        case 'docValue': return compare(a.docValue, b.docValue, isAsc);
        case 'valueUsd': return compare(a.valueUsd, b.valueUsd, isAsc);
        default: return 0;
      }
    });
  }///end sortData##########
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

