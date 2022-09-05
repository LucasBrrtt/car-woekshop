import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Inventory } from "./inventory.model";


import { API } from '../app-api';
import { map, Observable } from 'rxjs';

@Injectable()
export class InventoryService {
    constructor(private http: HttpClient) { }

    getItemInventory(): Observable<Inventory[]> {
        return this.http.get(`${API}/inventory`).pipe(map((response: any) => response));
    }
} 