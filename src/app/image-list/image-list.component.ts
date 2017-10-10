import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
  }

  searchImages(query: string) {
    return this.imageService.getImages(query)
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('Finalizo la peticion')
      );
  }

}
