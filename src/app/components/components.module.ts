import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { NotFoundMessageComponent } from './not-found-message/not-found-message.component';

@NgModule({
  declarations: [
    SearchbarComponent,
    NotificationListComponent,
    ModalComponent,
    NotFoundMessageComponent
  ],
  exports: [
    SearchbarComponent,
    NotificationListComponent,
    ModalComponent,
    NotFoundMessageComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
