import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingFormComponent } from '../marketing-form.component';
import { MarketingNavComponent } from '../marketing-nav.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit {
  images:Array<any> = [
    {"sType":"img","imgSrc":"../../assets/img/marketing-banner01.jpg"},
    {"sType":"img","imgSrc":"../../assets/img/marketing-banner02.jpg"},
    {"sType":"img","imgSrc":"../../assets/img/marketing-banner03.jpg"},
  ];
  wasClicked = false;
  hasClicked = false;
  hasedClicked = false;
  
      onClick() {
          this.wasClicked= true;
      }
      onhasClick() {
        this.hasClicked= true;
    }

    onhasedClick() {
      this.hasedClicked= true;
  }


  //The time to show the next photo
  public NextPhotoInterval:number = 5000;
  //Looping or not
  public noLoopSlides:boolean = false;
  //Photos
  public slides:Array<any> = [];
  public slidescontent:Array<any> = [];

  constructor() {
    this.addNewSlide();
   }

   public addNewSlide() {
    this.slides.push(
       {image:'../../assets/img/marketing-banner01.jpg',title:'Attract New Customers',detail:'Drive web traffic to your program page, teacher page or individual course offerings'},
       {image:'../../assets/img/marketing-banner02.jpg',title:'Digital Marketing Made Easy',detail:'Find new leads and customers with easy integrations'},
       {image:'../../assets/img/marketing-banner03.jpg',title:'Search Engine Optimized',detail:'Move up the Google Search Rankings and get found by people looking for your offering'},
   );
   this.slidescontent.push(
    {author:'Tina Trevino-Murphy', tagline:'Villari’s Martial Arts Cooperative', detail:'“We tend to struggle with having a consistent pace on our emails to prospective clients, and the intro offers help us move past that stage faster.” '},
    {author:'Michael Bradley', tagline:'Modo Yoga Greater Cincinnati', detail:'“[I’m] always willing to attract new clients and this is a no-brainer.”'},
    {author:'David Gray', tagline:'A Touch of Wellness', detail:'“The service has resulted in several new clients who have turned into repeat clients.”'}
);
}

public removeLastSlide() {
   this.slides.pop();
} 
  ngOnInit() {
  }

}