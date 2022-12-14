import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { IpStateEffects } from './state/ip-state/ip-state.effects';
import { IP_KEY, ipStateReducer } from './state/ip-state/ip-state.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        [IP_KEY]: ipStateReducer
      },
      {
        runtimeChecks: {
          strictActionTypeUniqueness: true,
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      name: 'Ngrx-test',
      maxAge: 25,
    }),
    EffectsModule.forRoot([
      IpStateEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
