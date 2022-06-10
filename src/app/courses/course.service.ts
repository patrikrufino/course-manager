import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable(
    { providedIn: 'root' }
)
export class CourseService {
    retrieveAll(): Course[] {
        return COURSES
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