import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: CLI',
                imageUrl: '/assets/images/cli.png',
                price: 99.99,
                code: 'A101',
                duration: 120,
                rating: 3.4,
                releaseDate: new Date('2019-01-01')
            },
            {
                id: 2,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'A102',
                duration: 120,
                rating: 4.4,
                releaseDate: new Date('2019-01-01')
            },
            {
                id: 3,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 99.99,
                code: 'A103',
                duration: 120,
                rating: 3.4,
                releaseDate: new Date('2019-01-01')
            },
            {
                id: 4,
                name: 'Angular: Router',
                imageUrl: '/assets/images/router.png',
                price: 99.99,
                code: 'A104',
                duration: 120,
                rating: 4.4,
                releaseDate: new Date('2019-01-01')
            },
            {
                id: 5,
                name: 'Angular: Animations',
                imageUrl: '/assets/images/animations.png',
                price: 99.99,
                code: 'A105',
                duration: 120,
                rating: 4.9,
                releaseDate: new Date('2019-01-01')
            }
        ]
    }
}