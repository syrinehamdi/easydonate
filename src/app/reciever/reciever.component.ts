import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddGiveawayComponent } from '../donor/add-giveaway/add-giveaway.component';
import Swal from 'sweetalert2/dist/sweetalert2.js'


export interface Giveaway {
  id: number;
  title: string;
  description: string;
  productName: string;
  pickupLocation: string;
}

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent {
  displayedColumns: string[] = ['id', 'title', 'description', 'productName', 'pickupLocation', 'actions'];
  dataSource: MatTableDataSource<Giveaway>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    const users: Giveaway[] = [
      { id: 1, title: 'Hydrogen', description: "1.0079", productName: 'H', pickupLocation: "1.0079" },
      { id: 2, title: 'Helium', description: "4.0026", productName: 'He', pickupLocation: "1.0079" },
      { id: 3, title: 'Lithium', description: "6.941", productName: 'Li', pickupLocation: "1.0079" },
      { id: 4, title: 'Beryllium', description: " 9.0122", productName: 'Be', pickupLocation: "1.0079" },
      { id: 5, title: 'Boron', description: "10.811", productName: 'B', pickupLocation: "1.0079" },
      { id: 6, title: 'Carbon', description: "12.0107", productName: 'C', pickupLocation: "1.0079" },
      { id: 7, title: 'Nitrogen', description: "14.0067", productName: 'N', pickupLocation: "1.0079" },
      { id: 8, title: 'Oxygen', description: "15.9994", productName: 'O', pickupLocation: "1.0079" },
      { id: 9, title: 'Fluorine', description: "18.9984", productName: 'F', pickupLocation: "1.0079" },
      { id: 10, title: 'Neon', description: "20.1797", productName: 'Ne', pickupLocation: "1.0079" },
    ];
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  onDelete(id:number) {
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
        Swal.fire(
          'Deleted!',
          'Your giveaway has been deleted.',
          'success'
        )
      }
    })
  }
}
