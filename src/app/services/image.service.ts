import { Injectable } from '@angular/core';
import { Http,  Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { config } from './config';

@Injectable()
export class ImageService {
  query: string;
  API_KEY: string = config.PIXABAY_API_KEY;
  API_URL: string = config.PIXABAY_API_URL;
  URL: string = this.API_URL + this.API_KEY + '&q=';
  perPage = '&per_page=10';

  constructor(
    private http: Http
  ) {
  }

  getImages(query) {
    return this.http.get(this.URL + query + this.perPage).map(result => result.json());
  }

}
