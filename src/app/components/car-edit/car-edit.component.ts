import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Car } from '../../services/model';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  currentId: number;
  car: Car;

  carForm = new FormGroup({
    id: new FormControl(),
    img: new FormControl(''),
    description: new FormControl(''),
    model: new FormControl(''),
    options: new FormGroup({
      abs: new FormControl(false),
      window: new FormControl(false),
      sunroof: new FormControl(false),
      bluetooth: new FormControl(false),
      parking: new FormControl(false),
      navigation: new FormControl(false),
      computer: new FormControl(false),
      wheel: new FormControl(false),
    })
  })

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.currentId = this.route.snapshot.params.id;

    this.apiService.getCar(this.currentId).subscribe(data => this.carForm.patchValue(data));
  }

  onSubmit() {
    console.log(this.carForm.value)
    this.apiService.updateCar(this.carForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/cars')
    })
  }

}
