import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DonorComponent } from './donor/donor.component';
import { MaterialsModule } from './materials/materials.module';
import { AddGiveawayComponent } from './donor/add-giveaway/add-giveaway.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RecieverComponent } from './reciever/reciever.component';
import { EditGiveawayComponent } from './donor/edit-giveaway/edit-giveaway.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialsModule,
    ComponentsModule,
    RouterModule,
    SweetAlert2Module,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DonorComponent,
    AddGiveawayComponent,
    RecieverComponent,
    EditGiveawayComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
