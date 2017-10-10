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
  searching = false;

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
    this.searching = true;
    return this.imageService.getImages(query)
      .subscribe(
        data => this.handleData(data),
        err => this.handleError(err),
        () => this.searching = false
      );
  }

}
