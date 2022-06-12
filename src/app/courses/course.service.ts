import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Course } from "./course";

@Injectable(
    { providedIn: 'root' }
)
export class CourseService {

    private courseURL: string = 'http://localhost:3100/api/courses';

    // Create the constructor for HttpClient from Angular
    constructor(private httpClient: HttpClient) { }

    retrieveAll(): any {
        return this.httpClient.get<Course[]>(this.courseURL);
    }

    retriveById(id: number): any {
        return this.httpClient.get<Course>(`${this.courseURL}/${id}`);
    }

    save(course: Course): Observable<Course> {
        if (course.id) {
            return this.httpClient.put<Course>(`${this.courseURL}/${course.id}`, course);
        } else {
            return this.httpClient.post<Course>(`${this.courseURL}`, course);
        }
    }
}

var COURSES: Course[] = [

    {
        id: 1,
        name: 'Angular: CLI',
        imageUrl: '/assets/images/cli.png',
        price: 99.99,
        description: 'The Complete guide to building the Angular CLI',
        code: 'A-101',
        duration: 120,
        rating: 3.4,
        releaseDate: new Date('2019-01-01')
    },
    {
        id: 2,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        description: 'The Complete guide to building the Angular Forms',
        code: 'A-102',
        duration: 120,
        rating: 4.4,
        releaseDate: new Date('2019-01-01')
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 99.99,
        description: 'The Complete guide to building the Angular HTTP',
        code: 'A-103',
        duration: 120,
        rating: 3.4,
        releaseDate: new Date('2019-01-01')
    },
    {
        id: 4,
        name: 'Angular: Router',
        imageUrl: '/assets/images/router.png',
        price: 99.99,
        description: 'The Complete guide to building the Angular Router',
        code: 'A-104',
        duration: 120,
        rating: 4.4,
        releaseDate: new Date('2019-01-01')
    },
    {
        id: 5,
        name: 'Angular: Animations',
        imageUrl: '/assets/images/animations.png',
        price: 99.99,
        description: 'The Complete guide to building the Angular Animations',
        code: 'A-105',
        duration: 120,
        rating: 4.9,
        releaseDate: new Date('2019-01-01')
    }
]