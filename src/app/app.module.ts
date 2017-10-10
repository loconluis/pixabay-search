import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MasonryModule } from 'angular2-masonry';
import { MatCardModule, MatInputModule, MatButtonModule, MatProgressBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MasonryModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
