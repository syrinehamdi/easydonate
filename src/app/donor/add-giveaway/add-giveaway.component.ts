import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GiveawayService } from '../../services/giveaway.service';
import { Giveaway } from '../../services/models/giveaway.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-giveaway',
  templateUrl: './add-giveaway.component.html',
  styleUrls: ['./add-giveaway.component.css']
})
export class AddGiveawayComponent implements OnInit {

  giveawayForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddGiveawayComponent>,
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
    var giveaway: Giveaway = this.giveawayForm.value;
    //giveaway.user.id = parseInt(this.id);
    console.log("form", this.giveawayForm.value);
    
    this.giveawayService.createGiveaway(giveaway).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close(giveaway);
        Swal.fire(
          'Good job!',
          'Giveaway added successfully!',
          'success'
        );
      },
      error => {
        console.log(error);
      }
    );
  }
}
