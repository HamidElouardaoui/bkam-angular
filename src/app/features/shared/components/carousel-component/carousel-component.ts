import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, FileIcon } from 'lucide-angular';


@Component({
  selector: 'app-carousel-component',
  imports: [CommonModule,LucideAngularModule],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.scss'
})
export class CarouselComponent implements AfterViewInit, OnDestroy  {
  lucidIcons = 
    {FileIcon: FileIcon};


  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
    activeIndex = 0;
      autoSlideInterval: any;



  constructor(private ngZone: NgZone) {}


cards = [
    { icon: 'prestations-administratives/Family.svg', title: 'Situation de famille', button: 'Consulter' },
    { icon: '\prestations-administratives/CheckedDocument.svg', title: 'Bulletins', button: 'Consulter' },
    { icon: '\prestations-administratives/BooksHolder.svg', title: 'E-Attestation', button: 'Consulter' },
    { icon: '\prestations-administratives/UsersTalk.svg', title: 'Rendez-vous', button: 'Consulter' },
    { icon: '\prestations-administratives/Mosque.svg', title: 'Pèlerinage', button: 'Consulter' },
     { icon: '\prestations-administratives/UserBadge.svg', title: 'Carte', button: 'Consulter' },

  ];


  ngAfterViewInit() {
    const container = this.scrollContainer.nativeElement;

    // Start on first real card (skip clone)
    const cardWidth = container.scrollWidth / (this.cards.length + 2);
    container.scrollTo({ left: cardWidth, behavior: 'auto' });

    // Scroll listener
    container.addEventListener('scroll', () => {
      this.ngZone.run(() => this.updateActiveIndex());
    });

    // Auto-slide
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) clearInterval(this.autoSlideInterval);
  }

  updateActiveIndex() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.scrollWidth / (this.cards.length + 2);
    const index = Math.round(container.scrollLeft / cardWidth) - 1;
    this.activeIndex = (index + this.cards.length) % this.cards.length;
  }

  scrollLeft() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.scrollWidth / (this.cards.length + 2);
    let newScrollLeft = container.scrollLeft - cardWidth;

    // If at start, jump to the last real card clone
    if (newScrollLeft <= 0) {
      container.scrollTo({ left: cardWidth * this.cards.length, behavior: 'auto' });
      newScrollLeft = cardWidth * (this.cards.length - 1);
    }

    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  }

  scrollRight() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.scrollWidth / (this.cards.length + 2);
    let newScrollLeft = container.scrollLeft + cardWidth;

    // If at end, jump back to first real card
    if (newScrollLeft >= cardWidth * (this.cards.length + 1)) {
      container.scrollTo({ left: cardWidth, behavior: 'auto' });
      newScrollLeft = cardWidth * 2;
    }

    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  }

  scrollTo(index: number) {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.scrollWidth / (this.cards.length + 2);
    container.scrollTo({ left: cardWidth * (index + 1), behavior: 'smooth' });
    this.activeIndex = index;
  }

  startAutoSlide() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.scrollWidth / (this.cards.length + 2);

    this.autoSlideInterval = setInterval(() => {
      this.ngZone.run(() => {
        let newScrollLeft = container.scrollLeft + cardWidth;

        if (newScrollLeft >= cardWidth * (this.cards.length + 1)) {
          // Jump back to first real card instantly (loop)
          container.scrollTo({ left: cardWidth, behavior: 'auto' });
          newScrollLeft = cardWidth * 2;
        }

        container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      });
    }, 4000); // change slide every 4s
  }
}
