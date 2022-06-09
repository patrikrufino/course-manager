import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input()
    rating: number | undefined;

    starWidth?: number;

    ngOnChanges(changes: SimpleChanges): void {
        if (this.rating) {
            this.starWidth = this.rating * 100 / 5;
        }
    }

}