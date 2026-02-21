//import { provideClientHydration } from '@angular/platform-browser';//need for better page loading performance
//import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
   // provideClientHydration(),
//    provideAnimations(),
provideRouter(routes),    
provideHttpClient(),
    importProvidersFrom(FormsModule)
  
  ]
};
