import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: "./course-info.component.html"
})
export class CourseInfoComponent implements OnInit {

    course: any;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }


    ngOnInit(): any {

        this.course = this.courseService.retriveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: (course: Course) => this.course = course,
            error: (err: any) => console.log('Error', err)
        });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: (course: Course) => console.log('Saved successfully', course),
            error: (err: any) => console.log('Error', err)
        }); // subscribe() is used to handle the response   
    }
}   