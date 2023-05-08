import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddGiveawayComponent } from './add-giveaway/add-giveaway.component';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Giveaway } from '../services/models/giveaway.model';
import { GiveawayService } from '../services/giveaway.service';
import { EditGiveawayComponent } from './edit-giveaway/edit-giveaway.component';



@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent {
  displayedColumns: string[] = ['id', 'title', 'description', 'productName', 'availability', 'pickupLocation', 'actions'];
  dataSource: MatTableDataSource<Giveaway>;
  giveaways: Giveaway[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private giveawayService: GiveawayService) {
    this.giveawayService.getAllGiveaways().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
    // Assign the data to the data source for the table to render
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(AddGiveawayComponent);
  }

  onDelete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.giveawayService.deleteGiveaway(id).subscribe(
          data => {
            console.log(data);
            this.giveawayService.getAllGiveaways().subscribe(
              data => {
                this.giveaways = data;
              },
              error => {
                console.log(error);
              }
            );
          },
          error => {
            console.log(error);
          }
        );
        Swal.fire(
          'Deleted!',
          'Your giveaway has been deleted.',
          'success'
        )
      }
    })
  }

  openEditDialog(giveaway: Giveaway): void {
    const dialogRef = this.dialog.open(EditGiveawayComponent, {
      width: '500px',
      data: giveaway
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.giveawayService.updateGiveaway(result.id, result).subscribe(
          () => {
            console.log("done !")
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }
}


