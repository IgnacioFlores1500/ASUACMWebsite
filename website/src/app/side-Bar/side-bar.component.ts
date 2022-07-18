import { Component, OnInit } from '@angular/core';
import {sidebarService} from './side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent  {
  title = "title";
  courses;

  constructor(service:sidebarService) {
    //let service = new sidebarService();
    this.courses = service.returnNavBarSections();
  }

}
