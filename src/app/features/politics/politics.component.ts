import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../../shared/components/body/body.component';
import { NoticiaComponent } from '../noticia/noticia.component';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css'],
  standalone: true,
  imports: [CommonModule, BodyComponent, NoticiaComponent]
})
export class PoliticsComponent {

}
