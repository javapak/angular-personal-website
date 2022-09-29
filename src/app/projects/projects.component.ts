import { OnInit, Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  onHover : String = ''
  onHoverImg : String = 'assets/GitHub-Mark-120px-plus.png'
  card : HTMLScriptElement
  constructor() {
    this.card = document.createElement("script");
    this.card.src = "https://cdn.jsdelivr.net/github-cards/latest/widget.js";
    document.body.appendChild(this.card)
  }

  ngOnInit(): void {

    
  }

  mouseEnter() {
    this.onHoverImg = 'assets/github-onhov.png'
    this.onHover = 'hover'
  }

  mouseExit() {
    this.onHoverImg = 'assets/GitHub-Mark-120px-plus.png'
    this.onHover = ''
  }


}
