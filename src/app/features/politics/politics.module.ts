// src/app/features/politics/politics.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticsComponent } from './politics.component';
import { BodyComponent } from '../../shared/components/body/body.component'; // Importando BodyComponent

@NgModule({
  declarations: [
    PoliticsComponent
  ],
  imports: [
    CommonModule,
    BodyComponent // Adicionando BodyComponent
  ]
})
export class PoliticsModule {}
