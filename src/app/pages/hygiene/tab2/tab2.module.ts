import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { Tab2Page } from './tab2.page';
import { ComponentsModule } from '../../../components/components.module';
import { HygieneModalPageModule } from '../hygiene-bitacora/hygiene-bitacora.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
    HygieneModalPageModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
