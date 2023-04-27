import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {addDoc, collection, collectionData, Firestore} 
                        from '@angular/fire/firestore'
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService{
    constructor(private fs: Firestore) { }
  
    getCity():Observable<City[]>{
      console.log(this.fs);
      const myCollection: any = collection(this.fs, 'messages');
      return collectionData(myCollection);
    }
  
    addCity(city:City){
      const myCollection = collection(this.fs, 'messages')
      addDoc(myCollection,city);
    }
  
  }
  