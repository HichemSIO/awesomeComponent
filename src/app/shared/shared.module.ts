import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CommentsComponent } from './components/comments/comments.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { SurlignerDirective } from './directives/surligner.directive';



@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipe,
    SurlignerDirective
  ],
  imports: [
    CommonModule ,
    MatCardModule ,
    MaterialModule ,
    ReactiveFormsModule ,


  ] ,
  exports:[
    CommentsComponent ,
    MaterialModule ,
    ReactiveFormsModule ,
    ShortenPipe ,
    SurlignerDirective

  ]
})
export class SharedModule { }
