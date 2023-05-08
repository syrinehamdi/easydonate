import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddGiveawayComponent } from '../donor/add-giveaway/add-giveaway.component';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Giveaway } from '../services/models/giveaway.model';
import { GiveawayService } from '../services/giveaway.service';


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
  giveaways: Giveaway[];
  constructor(private giveawayService: GiveawayService) {
    this.giveawayService.getAllGiveaways().subscribe(
      data => {
      // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  reserve(giveaway: Giveaway) {
    this.giveawayService.reserveGiveaway(giveaway.id, giveaway).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
