import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HomepageComponent {
 
  portfolioVisible = false;
  
  navigateToPortfolio = ()=>{
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });

  }

  backToTop = () =>{
    document.getElementById("header")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
