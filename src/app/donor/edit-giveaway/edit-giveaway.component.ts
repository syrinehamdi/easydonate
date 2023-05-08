import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Giveaway } from '../../services/models/giveaway.model';

@Component({
  selector: 'app-edit-giveaway',
  templateUrl: './edit-giveaway.component.html',
  styleUrls: ['./edit-giveaway.component.css']
})
export class EditGiveawayComponent {
  giveawayForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditGiveawayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Giveaway
  ) {
    this.giveawayForm = this.formBuilder.group({
      title: [data.title],
      productName: [data.productName],
      availability: [data.availability],
      pickUpLocation: [data.pickUpLocation],
      description: [data.description]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onEdit(): void {
    const updatedGiveaway: Giveaway = this.giveawayForm.value;
    updatedGiveaway.id = this.data.id;
    this.dialogRef.close(updatedGiveaway);
  }
}
