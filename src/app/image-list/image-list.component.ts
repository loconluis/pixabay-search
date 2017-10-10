import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  flagToFound = false;

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
  }

  handleData(data) {
    this.flagToFound = true;
    this.images = data.hits;
    console.log(data);
  }

  handleError(err) {
    console.log(err);
  }

  searchImages(query: string) {
    return this.imageService.getImages(query)
      .subscribe(
        data => this.handleData(data),
        err => this.handleError(err),
        () => console.log('Finalizo la peticion')
      );
  }

}
