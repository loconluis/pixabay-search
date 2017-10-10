import { Injectable } from '@angular/core';
import { Http,  Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { config } from './config';

@Injectable()
export class ImageService {
  query: string;
  API_KEY: string = config.PIXABAY_API_KEY;
  API_URL: string = config.PIXABAY_API_URL;

  constructor(
    private http: Http
  ) {
  }

}
