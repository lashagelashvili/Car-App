import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car, CarPostRequest } from './model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getCars(): Observable<Car[]> {
        return this.http.get<Car[]>('http://localhost:3000/cars')
    }

    getCar(id: number): Observable<Car> {
        return this.http.get<Car>(`http://localhost:3000/cars/${id}`)
    }

    addCar(car: CarPostRequest): Observable<CarPostRequest> {
        return this.http.post<CarPostRequest>('http://localhost:3000/cars', car)
    }

    deleteCar(id: number): Observable<void> {
        return this.http.delete<void>(`http://localhost:3000/cars/${id}`)
    }

    updateCar(car: Car): Observable<Car> {
        return this.http.patch<Car>(`http://localhost:3000/cars/${car.id}`, car)
    }
}