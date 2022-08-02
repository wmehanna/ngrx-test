import { IpModel } from '../client/ip/model/ip.model';

export class IpBo {
    ip: string

    constructor(ipModel: IpModel) {
        this.ip = ipModel.ip;
    }
}
