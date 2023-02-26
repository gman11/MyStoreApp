import { Injectable } from '@angular/core';
import { Items } from 'src/models/items';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http:HttpClient) { }

  getItems():Observable<Items[]>{
    const data = this.http.get<Items[]>('/assets/data/items.json');
      return data;
    
  }
  getItemById(id:number):Observable<Items | undefined>{
    const item =  this.http.get<Items[]>('/assets/data/items.json').pipe(
      map(data => data.find( i=> i.id === id))

    );
    return item;
  }  
}
