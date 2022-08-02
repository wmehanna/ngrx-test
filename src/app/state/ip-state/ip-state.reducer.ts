import { Action, createReducer, on } from '@ngrx/store';

import { HttpStatusEnum } from '../enum/http-status.enum';
import { IpStateActions } from './ip-state.actions';
import { IpBo } from '../../bo/ip.bo';

export const IP_KEY = 'ip';

export interface IpState {
	readonly [IP_KEY]: IpBo;
	readonly error: string;
	readonly status: HttpStatusEnum;
}

const ipInitialState: IpState = {
// @ts-ignore
	[IP_KEY]: null,
// @ts-ignore
	error: null,
	status: HttpStatusEnum.pending
}

export const ipStateReducer = createReducer<IpState, Action>(ipInitialState,
	on(IpStateActions.loadIpState, (state: IpState) => {
		return {
			...state,
			status: HttpStatusEnum.loading
		}
	}),
// @ts-ignore
	on(IpStateActions.loadIpStateSuccess, (state: IpState, {ipBo}) => {
    console.log('Ip fetched correctly from httpClient', ipBo);
    const data = {
			...state,
			[IP_KEY]: ipBo,
			error: null,
			status: HttpStatusEnum.success
		}
    console.log('data content', data);
    return data;
	}),
	on(IpStateActions.loadIpStateError, (state: IpState, {error}) => {
		return {
			...state,
			error: error,
			status: HttpStatusEnum.error
		}
	})
);

