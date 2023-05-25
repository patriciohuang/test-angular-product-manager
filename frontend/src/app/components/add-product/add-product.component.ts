import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  form: FormGroup
  constructor() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      detail: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required)
    })
  }
}
