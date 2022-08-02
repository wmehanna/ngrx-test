import { IP_KEY, IpState } from './ip-state/ip-state.reducer';

export interface AppState {
  [IP_KEY]: IpState
}
