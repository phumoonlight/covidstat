import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newRequest = request.clone({
      url: `${environment.baseApiUrl}${request.url}`,
      setHeaders: {},
    });
    return next.handle(newRequest);
  }
}

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
];
