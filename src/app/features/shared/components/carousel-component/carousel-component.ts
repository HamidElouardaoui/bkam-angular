import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-component',
  imports: [CommonModule],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.scss'
})
export class CarouselComponent {
cards = [
    { icon: '', title: 'Situation de famille', button: 'Consulter' },
    { icon: '', title: 'Bulletins', button: 'Consulter' },
    { icon: '', title: 'E-Attestation', button: 'Consulter' },
    { icon: '', title: 'Rendez-vous', button: 'Consulter' },
    { icon: '', title: 'Pèlerinage', button: 'Consulter' },
  ];
}
