import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxHeroDetailComponent } from './ngx-hero-detail.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    NgxHeroDetailComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DetailComponent
  ]
})
export class NgxHeroDetailModule { }
