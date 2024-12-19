import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiodataModule } from './feature/biodata/biodata.module';
import { PokemonModule } from './feature/pokemon/pokemon.module';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { UserModule } from './feature/user/user.module';
import { AuthModule, getAuth, provideAuth } from '@angular/fire/auth';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CartComponent } from './feature/cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './state/cart/cart.reducer';
import { CartDetailComponent } from './feature/cart-detail/cart-detail.component';
import { CheckOutComponent } from './feature/check-out/check-out.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartDetailComponent,
    CheckOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BiodataModule,
    PokemonModule,
    ReactiveFormsModule,
    UserModule,
    StoreModule.forRoot(
      { cart: cartReducer },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
  ],
  providers: [
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
