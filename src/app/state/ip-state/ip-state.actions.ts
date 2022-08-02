import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IpBo } from '../../bo/ip.bo';

export const IpStateActions = createActionGroup({
    source: 'Ip State',
    events: {
        'load Ip State': emptyProps(),
        'load Ip State success': props<{ipBo: IpBo}>(),
        'load Ip State error': props<{ error: string }>(),
    }
})
