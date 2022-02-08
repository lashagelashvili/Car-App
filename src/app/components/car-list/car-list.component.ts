import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Car } from '../../services/model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.apiService.getCars().subscribe(data => {
      console.log(data)
      this.cars = data;
    })
  }

  onCarClick(id: number) {
    this.router.navigateByUrl(`cars/edit/${id}`);
  }

  onDelete(id: number) {
    this.apiService.deleteCar(id).subscribe(data => this.refresh());
  }
}
