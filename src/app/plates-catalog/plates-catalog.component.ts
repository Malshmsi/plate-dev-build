import { formatCurrency, NumberFormatStyle } from '@angular/common';
import { ForwardRefHandling } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { filter } from 'rxjs';

export interface numberPlate{
    id: number;
    code: string;
    style: string
    plateNumber: string;
    emirate: string;
    price: number;
    compareAtPrice: number;
    phoneNumber: string;
    discounted: boolean;

}


@Component({
  selector: 'app-plates-catalog',
  templateUrl: './plates-catalog.component.html',
  styleUrls: ['./plates-catalog.component.css']
})
export class PlatesCatalogComponent implements OnInit {
  plates: numberPlate[] = [
      { id: 1, code: '3', plateNumber: '2321', emirate: 'AD', style: 'ADOLD', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: false },
      { id: 2, code: '3', plateNumber: '2312', emirate: 'AD', style: 'ADNEW', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: true },
      { id: 3, code: 'A', plateNumber: '25664', emirate: 'DXB', style: 'new', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: true },
      { id: 4, code: 'G', plateNumber: '642', emirate: 'RAK', style: 'old', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: false },
      { id: 5, code: 'J', plateNumber: '9862', emirate: 'SHJ', style: 'old', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: false },
      { id: 6, code: 'B', plateNumber: '76389', emirate: 'SHJ', style: 'new', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: false },
      { id: 7, code: 'AA', plateNumber: '13094', emirate: 'DXB', style: 'DXBNEW', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: false },
      { id: 8, code: 'Z', plateNumber: '7343', emirate: 'DXB', style: 'old', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: false },
      { id: 9, code: '12', plateNumber: '9832', emirate: 'AD', style: 'ADNEW', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: false },
      { id: 10, code: '23', plateNumber: '5683', emirate: 'AD', style: 'ADOLD', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: false },
      { id: 11, code: '7', plateNumber: '98162', emirate: 'UAQ', style: 'new', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: false },
      { id: 12, code: '6', plateNumber: '91812', emirate: 'FUJ', style: 'old', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: false },
      { id: 13, code: '2', plateNumber: '91812', emirate: 'SHJ', style: 'new', price: 1234.21, compareAtPrice: 1243.65, phoneNumber: '0553343331', discounted: false },
    ];

    constructor(){}

  //filtered plates
  filteredPlates: numberPlate[] = [];


  //number searchbar
  numberSearchedList: string[] = [];


  //emirates dropdown menu
  emiratesList: any[] = [];
  selectedEmirates: any[] = [];

  updateEmiratesModel(event:any){

    if(event.target.checked){
      let findEmirate = this.emiratesList.find((e) => e == event.target.name);
      this.selectedEmirates.push(findEmirate);
    }else{
      let findEmirate = this.selectedEmirates.findIndex((e:any) => e == event.target.name);
      this.selectedEmirates.splice(findEmirate,1);
    }

    if(this.selectedEmirates.length > 0){
    }

    this.updateFilteredPlates();

  }


  //styles dropdown menu
  stylesList: any[] = [];
  selectedStyles: any[] = [];

  updateStylesModel(event:any){

    if(event.target.checked){
      let findStyle = this.stylesList.find((e) => e == event.target.name);
      this.selectedStyles.push(findStyle);
    }else{
      let findStyle = this.selectedStyles.findIndex((e:any) => e.style == event.target.name);
      this.selectedStyles.splice(findStyle,1);
    }


    this.updateFilteredPlates();

  }

  //digits dropdown menu
  digitsList: any[] = [];
  selectedDigits: any[] = [];

  updateDigitsModel(event:any){

    if(event.target.checked){
      let findDigit = this.digitsList.find((e) => parseInt(e.digit) == event.target.name.length);
      this.selectedDigits.push(findDigit);
    }else{
      let findDigit = this.selectedDigits.findIndex((e:any) => parseInt(e.digit) == event.target.name.length);
      this.selectedDigits.splice(findDigit,1);
    }

    if(this.selectedDigits.length > 0){

    }
    console.log(this.selectedDigits);

  }

  //Codes dropdown menu
  codesList: any[] = [];
  selectedCodes: any[] = [];

  updateCodesModel(event:any){

    if(event.target.checked){
      let findCode = this.codesList.find((e) => e.code == event.target.name);
      this.selectedCodes.push(findCode);
    }else{
      let findCode = this.selectedCodes.findIndex((e:any) => e.code == event.target.name);
      this.selectedCodes.splice(findCode,1);
    }

    if(this.selectedCodes.length > 0){

    }
    console.log(this.selectedCodes);

  }

  updateFilteredPlates(){
    let searchedNumbers: string[] = [];
    this.numberSearchedList.length > 0 ? searchedNumbers = [...this.numberSearchedList] : searchedNumbers = [...this.numberSearchedList];

    let emiratesSelected: any[] = [];
    this.selectedEmirates.length > 0 ? emiratesSelected = [...this.selectedEmirates] : emiratesSelected = [...this.emiratesList];

    let stylesSelected: any[] = [];
    this.selectedStyles.length > 0 ? stylesSelected = [...this.selectedStyles] : stylesSelected = [...this.stylesList];

    let codesSelected: any[] = [];
    this.selectedCodes.length > 0 ? codesSelected = [...this.selectedCodes] : codesSelected = [...this.codesList];

    let digitsSelected: any[] = [];
    this.selectedDigits.length > 0 ? digitsSelected = [...this.selectedDigits] : digitsSelected = [...this.digitsList];

    //filter filter results
    searchedNumbers.length == 0 ?
      this.filteredPlates = this.plates.filter((plate) => {
          return emiratesSelected.includes(plate.emirate) && stylesSelected.includes(plate.style) }):
            this.filteredPlates = this.plates.filter((plate) => {
              return searchedNumbers.includes(plate.plateNumber) && emiratesSelected.includes(plate.emirate) && stylesSelected.includes(plate.style) && codesSelected.includes(digitsSelected) });

   console.log(this.plates, " Plates");
   console.log(this.filteredPlates, " Filtered Plates");
   console.log(searchedNumbers, " Searched Numbers");
   console.log(emiratesSelected, " Emirates Selected");
   console.log(stylesSelected, " Styles Selected");
   console.log(codesSelected, " Codes Selected");
   console.log(digitsSelected, " Digits Selected");
  }


  ngOnInit() {
    //setFilteredPlates
    this.filteredPlates = [...this.plates];

    //set emirates list
    this.emiratesList = ["AD","DXB", "SHJ","AJ", "FUJ", "UAQ"];

    //set styles list
    this.stylesList = ["ADOLD", "DXBNEW","ADNEW", "new", "old"];

    //set digits list
    this.digitsList = [
      { digit: 2 },
      { digit: 3 },
      { digit: 4 },
      { digit: 5 },
    ];

    //set codes list
    //set digits list
    this.codesList = [
      { code: '12' },
      { code: '9' },
      { code: 'A' },
      { code: 'AA' },
    ];
  }



}


