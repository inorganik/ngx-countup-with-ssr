import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { RouterModule } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyComponent
      }
    ]),
    CountUpModule,
    FormsModule,
  ]
})
export class LazyModule { }
