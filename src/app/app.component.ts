import {Component, ViewChild, ViewContainerRef, AfterContentInit, AfterViewInit} from '@angular/core';
import { EduComponent } from './edu/edu.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit{
 @ViewChild('dynamic', { read: ViewContainerRef}) viewRef!: ViewContainerRef;
  selectedPage = 'About'
  private component : any;
  title = "portfolio";


  navigate(selectedPage: string): void {
    if (selectedPage != this.selectedPage) {
      this.viewRef.clear();
      this.selectedPage = selectedPage
      switch(selectedPage) {
        case 'About':
          this.viewRef.createComponent(AboutComponent);
          break;
        case 'Education':
          this.viewRef.createComponent(EduComponent);
          break;
        case 'Projects':
          this.viewRef.createComponent(ProjectsComponent);
          break;
        
      }
    
  }
}
  
  ngAfterViewInit(): void {
    this.viewRef.createComponent(AboutComponent)
  }

}
