import { Injectable } from '@angular/core';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { IpStateActions } from './ip-state.actions';
import { IpService } from '../../service/ip.service';

@Injectable()
export class IpStateEffects {
	public $loadIp = createEffect(() => {
		return this.actions$
			.pipe(
				ofType(IpStateActions.loadIpState),
				exhaustMap(() => {
						return this.ipService
							.getIp()
							.pipe(
								map((ipBo) =>{
									return IpStateActions.loadIpStateSuccess({ipBo})
								}),
								catchError((error) => of(IpStateActions.loadIpStateError({error})))
							)
					}
				)
			);
	});

	constructor(private actions$: Actions,
				private ipService: IpService) {
	}
}
