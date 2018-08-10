import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable() 
export class WorkoutService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

   
    getWorkouts() {
        return this._http.get(this.myAppUrl + 'api/Workout/GetWorkout')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getWorkoutById(id: number) {
        return this._http.get(this.myAppUrl + "api/Workout/GetWorkout/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    saveWorkout(Workout: object) {
        return this._http.post(this.myAppUrl + 'api/Workout/PostWorkout', Workout)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //updateWorkout(Workout) {
    //    return this._http.put(this.myAppUrl + 'api/Workout/Edit', Workout)
    //        .map((response: Response) => response.json())
    //        .catch(this.errorHandler);
    //}

    DeleteWorkout(id: number) {
        return this._http.delete(this.myAppUrl + "api/Workout/DeleteWorkout/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}  