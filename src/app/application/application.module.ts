import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationRouting} from './application.routing';
import {ApplicationComponent} from './application.component';
import {BooknowComponent} from './booknow/booknow.component';
import {RouterModule} from '@angular/router';
import {SlideshowModule} from 'ng-simple-slideshow';
import {MatCardModule} from '@angular/material';
@NgModule({
  declarations: [ApplicationComponent, BooknowComponent],
  imports: [
    CommonModule,
    ApplicationRouting,
    RouterModule,
    SlideshowModule,
    MatCardModule,
  ]
})
export class ApplicationModule {
}
