import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EduComponent } from './edu/edu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxCardGithubModule } from "ngx-card-github";





@NgModule({
  declarations: [
    AppComponent,
    EduComponent,
    ProjectsComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxCardGithubModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
