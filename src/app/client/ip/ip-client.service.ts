import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IpModel } from './model/ip.model';

@Injectable({providedIn: 'root'})
export class IpClient {
  private fullUrl = 'https://api.ipify.org?format=json';

  constructor(private httpClient: HttpClient) {
  }

  public getIp(): Observable<IpModel> {
    return this.httpClient.get<IpModel>(`${this.fullUrl}`);
  }
}


