import { Component, ViewChild } from '@angular/core';
import {sidebarService} from './side-bar.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent  {
  //Not working atm 7/20/2022
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  

  title = "title";
  courses;

  constructor(service:sidebarService) {
    //let service = new sidebarService();
    this.courses = service.returnNavBarSections();
    
    
  }
  //Not working atm 7/20/2022
  close() {
    this.sidenav.close();
  }
}
