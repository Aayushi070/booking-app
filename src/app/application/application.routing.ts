import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ApplicationComponent} from './application.component';
import {BooknowComponent} from './booknow/booknow.component';

const routes: Routes = [
  {
    path: '', component: ApplicationComponent,
    // children: [
    //   {path: 'book-now', component: BooknowComponent},
    //   ]
  },
  {path: 'book-now', component: BooknowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRouting {
}
