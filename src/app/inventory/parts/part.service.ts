import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, map, Observable } from 'rxjs';

import { Part } from "./part.model";

import { API } from '../../app-api';

@Injectable()
export class PartService {
    postId: any;
    constructor(private http: HttpClient) { }

    getItemInventory(): Observable<Part[]> {
        return this.http.get(`${API}/inventory`).pipe(map((response: any) => response));
    }

    itemById(id: string): Observable<Part> {
        return this.http.get(`${API}/inventory/${id}`).pipe(map((response: any) => response));
    }

    addItem(newPart: Part): Observable<any> {
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(newPart);

        return this.http.post(`${API}/inventory`, body, { 'headers': headers }).pipe(
            catchError((err) => {
                throw err;
            })
        );
    }

    updateItem(id: string, part: Part) {
        const body = part;
        return this.http.put<any>(`${API}/inventory/${id}`, body).pipe(
            catchError((err) => {
                throw err;
            })
        );
    }
} 