import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-Bar/side-bar.component';
import { sidebarService } from './side-Bar/side-bar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//Stolen imports
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatSliderModule } from '@angular/material/slider';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';  
import {MatListModule} from '@angular/material/list'; 

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MenuIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule
    
  ],
  providers: [sidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
