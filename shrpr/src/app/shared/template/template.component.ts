import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { LikeService } from "../../core/like.service";
import { SearchComponent } from '../search/search.component';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  @Input('menu') menu: boolean = true;
  @Input('search') search: boolean = true;

  public pagetemp: string;
  
  constructor() {}
}

@Component({
  selector: 'app-header',
  templateUrl: './template.header.html',
  styleUrls: ['./template.header.css'],
  providers:[]
})

export class TemplateHeader implements OnInit, OnDestroy {

  @Input('menu') menu: boolean = true;
  @Input('search') search: boolean = true;

  isheaderShrunk: boolean = false;
  isBtnActive: boolean = false;
  counter: number = 0;
  subscription: Subscription;
  width = document.documentElement.clientWidth;
  pageType:string;
  
  private subscriptions = new Subscription();

  constructor(zone: NgZone, private likeService: LikeService) {

    this.pageType = this.likeService.pageTemp;
    
    
    const $resizeEvent = Observable.fromEvent(window, 'resize')
    .map(() => {
      return document.documentElement.clientWidth;
      })
      this.subscriptions.add($resizeEvent.subscribe(data => {
      this.width = data;
    }));

    
    window.onscroll = () => {
      zone.run(() => {
        if(window.pageYOffset > 0) {
             this.isheaderShrunk = true;
        } else {
             this.isheaderShrunk = false;
        }
      });
    }
    window.onresize = () => {
      zone.run(() => {
        if(this.width < 768) {
          this.isBtnActive = false;
        } 
      });
    }
  }
  

  ngOnInit() {

    this.subscription = this.likeService.getCounter().subscribe((count) => {
      this.counter = count;
    });

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  toggleMenu() {
    this.isBtnActive = !this.isBtnActive;
  }

}

@Component({
  selector: 'app-footer',
  templateUrl: './template.footer.html',
  styleUrls: ['./template.footer.css']
})
export class TemplateFooter {
  
  @Input('menu') menu: boolean = true;

  constructor() {}
}