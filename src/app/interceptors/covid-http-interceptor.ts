import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CovidHttpInterceptor implements HttpInterceptor {
   private PUBLIC_URIS = [environment.apiBaseUrl + '/doctors/sign-in'];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let isPublicUri = false;
    this.PUBLIC_URIS.forEach(url => {
      if (url.endsWith(request.url)){
        isPublicUri = true;
      }
    });
    const accessToken = localStorage.getItem('accessToken');
    if (!isPublicUri && accessToken  != null) {
      const header = {};
      header['Authorization'] = accessToken;
      const clonedRequest = request.clone({
        setHeaders: header
      });
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }

}
