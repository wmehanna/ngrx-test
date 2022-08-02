import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IpStateActions } from './state/ip-state/ip-state.actions';
import { selectIpLoad } from './state/ip-state/ip-state.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  public chartLoaded$ = this.store.pipe(select(selectIpLoad));

  constructor(private store: Store) {
  }

  async ngOnInit() {
    this.store.dispatch(IpStateActions.loadIpState());

    this.chartLoaded$.subscribe({
      next: (ipState) => {
        console.log(ipState);
        // if (gaugeChartState?.status === HttpStatusEnum.success) {
        // 	this.setGaugeChartData(gaugeChartState.gaugeChart);
        // }
      }
    })
  }
}
