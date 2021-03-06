import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsAddPageRoutingModule } from './notifications-add-routing.module';

import { NotificationsAddPage } from './notifications-add.page';

import { UserListPageModule } from '../user-list/user-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsAddPageRoutingModule,
    UserListPageModule
  ],
  declarations: [NotificationsAddPage]
})
export class NotificationsAddPageModule {}
