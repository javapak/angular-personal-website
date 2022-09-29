import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

  constructor() { }
  columns: number = 2;
  defaultClass: string = "mui-container-fluid animate__animated animate__fadeInLeft"

  @ViewChild('box', {static: true}) box!: ElementRef;

  ngOnInit() {
    this.setColumns();
  }


  setColumns() {
    this.columns = Math.floor(this.box.nativeElement.clientWidth / 400)
  }

}
