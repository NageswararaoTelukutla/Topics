import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsAddComponent } from './topics-add/topics-add.component';
import { TopicsListComponent } from './topics-list/topics-list.component';


@NgModule({
  declarations: [
    TopicsAddComponent,
    TopicsListComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TopicsModule { }
