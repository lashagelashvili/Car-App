import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css']
})
export class CarNewComponent implements OnInit {

  carForm = new FormGroup({
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

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.addCar(this.carForm.value).subscribe(data => {
      this.router.navigateByUrl('/cars')
    })
  }
}