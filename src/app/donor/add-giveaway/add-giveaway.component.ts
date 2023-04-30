import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-giveaway',
  templateUrl: './add-giveaway.component.html',
  styleUrls: ['./add-giveaway.component.css']
})
export class AddGiveawayComponent implements OnInit {

  giveawayForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.giveawayForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      productName: ['', Validators.required],
      availability: ['', Validators.required],
      pickupLocation: ['', Validators.required],
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.giveawayForm.get('title').value);
    formData.append('description', this.giveawayForm.get('description').value);
    formData.append('productName', this.giveawayForm.get('productName').value);
    formData.append('availability', this.giveawayForm.get('availability').value);
    formData.append('pickupLocation', this.giveawayForm.get('pickupLocation').value);

/*     this.productService.addProduct(formData).subscribe(
      response => {
        console.log(response);
        this.giveawayForm.reset();
      },
      error => {
        console.log(error);
      }
    ); */
  }

}
