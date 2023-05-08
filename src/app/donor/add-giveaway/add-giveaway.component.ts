import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GiveawayService } from '../../services/giveaway.service';
import { Giveaway } from '../../services/models/giveaway.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-giveaway',
  templateUrl: './add-giveaway.component.html',
  styleUrls: ['./add-giveaway.component.css']
})
export class AddGiveawayComponent implements OnInit {

  giveawayForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private giveawayService: GiveawayService
  ) { }

  ngOnInit() {
    this.giveawayForm = this.formBuilder.group({
      title: ['', Validators.required],
      productName: ['', Validators.required],
      availability: [true, Validators.required],
      pickUpLocation: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  onSubmit() {
    const giveaway: Giveaway = this.giveawayForm.value;
    console.log("form",this.giveawayForm.value);
    this.giveawayService.createGiveaway(giveaway).subscribe(
      data => {
        console.log(data);
        //this.giveawayForm.reset();
        this.router.navigate(['giveaways']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
