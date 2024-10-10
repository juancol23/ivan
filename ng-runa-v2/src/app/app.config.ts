import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({
                              "projectId":"semilleros-ccb45",
                              "appId":"1:543478666358:web:dc0e8cff35c982faab3b57",
                              "storageBucket":"semilleros-ccb45.appspot.com",
                              "apiKey":"AIzaSyBm0T0pj1jZKBTrr0cZmx3aMpdFtV46ynU",
                              "authDomain":"semilleros-ccb45.firebaseapp.com",
                              "messagingSenderId":"543478666358",
                              "measurementId":"G-WK87KGXSWK"
                      })), 
    provideAuth(() => getAuth())
  ]
};
