import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss']
})
export class CheckboxListComponent implements OnInit {
  form: FormGroup;
  ordersData = [];

  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.ordersData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((checked, i) => checked ? this.ordersData[i].id : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  }

  ngOnInit(): void {
  }

}
