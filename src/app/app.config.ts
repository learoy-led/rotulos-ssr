import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideCloudinaryLoader } from '@angular/common';
//import { loadingInterceptor } from './core/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
     provideRouter(routes, withInMemoryScrolling({
       scrollPositionRestoration: 'top',
     })), 
    provideClientHydration(),
    //provideHttpClient(withInterceptors([loadingInterceptor]), withFetch()),
    provideHttpClient(withFetch()),
    provideCloudinaryLoader('https://res.cloudinary.com/dxuseyfxa/'),
  ]
};
