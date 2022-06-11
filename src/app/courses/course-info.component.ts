import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "./course-info.component.html"
})
export class CourseInfoComponent implements OnInit {

    courseId!: number;

    constructor(private activareRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.courseId = +this.activareRoute.snapshot.params["id"];
    }
}   