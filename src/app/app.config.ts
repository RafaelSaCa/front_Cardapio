import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr, ToastrModule } from 'ngx-toastr';

ToastrModule.forRoot({
  timeOut: 10000,
  positionClass: 'toast-bottom-right',
  preventDuplicates: true,
});

export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideToastr(),
  ],
};
