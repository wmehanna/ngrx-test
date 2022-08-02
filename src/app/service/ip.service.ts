import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IpBo } from '../bo/ip.bo';
import { IpClient } from '../client/ip/ip-client.service';
import { IpModel } from '../client/ip/model/ip.model';

@Injectable({providedIn: 'root'})
export class IpService {
    constructor(private ipClient: IpClient) {
    }

    public getIp(): Observable<IpBo> {
        return this.ipClient
            .getIp()
            .pipe(map((ipModel: IpModel) => new IpBo(ipModel)))
    }
}
