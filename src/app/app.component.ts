import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';

import { HomeComponent } from './pages/home/home.component'
import { SupportComponent } from './pages/support/support.component'
import { AboutComponent } from './pages/about/about.component';

import { StateManager } from './PageStateManager';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
   [RouterOutlet, HeaderComponent,
    FooterComponent, HomeComponent,
    CommonModule, SupportComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = "Angular-cCrash-Course";
  
  pageStateManager = new StateManager(["home", "about", "support"]);
  
  constructor(){
    this.pageStateManager.setState("home", true);
  }

}
