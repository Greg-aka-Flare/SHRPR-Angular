import { Component, OnInit, OnDestroy } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { Response } from "@angular/http";
import { ActivatedRoute, Params } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

import { Course } from "../course.interface";
import { CourseService } from "../course.service";

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.css']
})
export class CoursecardComponent implements OnInit {

  private id: number;
  course: any[];
  subscription: Subscription;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
       //console.log('param id: ' + this.id);
       //console.log(this.course);
    })

   }

  ngOnInit() {
    this.courseService.getCourse(this.id)
    .subscribe(
          (response) => {
            this.course = response;   
            //console.log(this.instructors)
            },
          //(instructors: Instructor[]) =>  this.instructors = instructors,
          (error: Response) => console.log(error)
          
        );
    }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
