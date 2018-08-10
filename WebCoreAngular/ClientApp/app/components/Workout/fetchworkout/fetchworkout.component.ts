import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../Workout.service'

@Component({
    templateUrl: './fetchworkout.component.html'
})

export class FetchWorkoutComponent {
    public workList: WorkoutData[];

    constructor(public http: Http, private _router: Router, private _workoutService: WorkoutService) {
        this.getWorkouts();
    }

    getWorkouts() {
        this._workoutService.getWorkouts().subscribe(
            data => this.workList = data
        )
    }

    DeleteWorkout(id: number) {
        var ans = confirm("Do you want to delete workout with Id: " + id);
        if (ans) {
            this._workoutService.DeleteWorkout(id).subscribe((data) => {
                this.getWorkouts();
            }, error => console.error(error))
        }
    }
}

interface WorkoutData {
    id: number;
    distanceInMeters: number;
    dateTimeOffset: DateConstructor;
    timeInSeconds: number
    
   
} 