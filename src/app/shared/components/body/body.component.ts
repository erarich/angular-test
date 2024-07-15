// src/app/shared/components/body/body.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  standalone: true,
  imports: [CommonModule, AsideComponent] // Importando o AsideComponent
})
export class BodyComponent {}
