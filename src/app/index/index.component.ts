import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm,FormControl, Validators} from '@angular/forms';
import {Sort} from '@angular/material/sort';
import {SamsungQuotationApiService} from '../Service/samsung-quotation-api.service';
import {SamsungQuotationApi} from '../Model/samsung-quotation-api';


interface Currency {
  id: string;
  name: string;
}

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
  quotationItems:any[];
  currencyItems:any[];
  currencyItemsParse;
  quotationObject:any;
  frontItems:any;
  startDate:boolean;
  currency:boolean;
  docNumber:string;
  formInput:any;
  currencyList: Currency[];
  CurrencyListFront;

  //Get Selected Currency Code on OptionGroup
  selectedCurrency:string;

  currencyOptions = new FormControl('', Validators.required);

  ngOnInit(){
    this.getCategories("full");
    this.getCurrencyCodes();
  }

  constructor(private apiService: SamsungQuotationApiService, private apiCurrency: SamsungQuotationApiService) {
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

currencyQuotationAction(currencyForm: NgForm){

  
  let formInput = currencyForm.value;

  this.getCategories(formInput);
}

async getCurrencyCodes(){

  await this.apiService.findCurrency().toPromise().then( res => {

    this.currencyItems = [];
    this.currencyItemsParse = JSON.parse(JSON.stringify(res));

    this.currencyItemsParse.forEach(element => {

      this.currencyItems.push(
        {
          currencyId : element.currencyId,
          currencyCode: element.currencyCode,
          currencyDesc: element.currencyDesc
        }
      )
    })
  })

  this.currencyList = this.currencyItems;

}
  
  async getCategories(searchParams){

  await this.apiService.findAll().toPromise().then( res => {

    this.quotationItems = [];

    this.quotationApi = JSON.parse(JSON.stringify(res));

    this.quotationApi.forEach(element => {
//searchParams.currency

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

      if(element.currencyCode == this.selectedCurrency){

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
    });//Close forEach###
    this.sortedData = this.quotationItems.slice();

  });

}

  sortedData: SamsungQuotationApi[];

  blockSearch(event: any){

    if(event.target.value.length > 0){
      //block inputs
      this.currency = true;
      this.startDate = true;
    } else {
      //release inputs      
      //this.onMouseMove();
      this.currency = false;
      this.startDate = false;
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

