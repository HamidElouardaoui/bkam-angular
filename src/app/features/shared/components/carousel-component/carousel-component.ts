import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, FileIcon, ArrowRight, ArrowLeft } from 'lucide-angular';


@Component({
  selector: 'app-carousel-component',
  imports: [CommonModule,LucideAngularModule],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.scss'
})
export class CarouselComponent implements AfterViewInit, OnDestroy  {


  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

cards = [
    { icon: 'prestations-administratives/Family.svg', title: 'Situation de famille', button: 'Consulter' },
    { icon: 'prestations-administratives/CheckedDocument.svg', title: 'Bulletins', button: 'Consulter' },
    { icon: 'prestations-administratives/BooksHolder.svg', title: 'E-Attestation', button: 'Consulter' },
    { icon: 'prestations-administratives/UsersTalk.svg', title: 'Rendez-vous', button: 'Consulter' },
    { icon: 'prestations-administratives/Mosque.svg', title: 'Pèlerinage', button: 'Consulter' },
    { icon: 'prestations-administratives/UserBadge.svg', title: 'Carte', button: 'Consulter' },

  ];








  lucideIcons = { ArrowLeft, ArrowRight };
  activeIndex = 0;
  autoSlideInterval!: any;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    const container = this.scrollContainer.nativeElement;

    // Start at first real card (skip left clone)
    const cardWidth = container.scrollWidth / (this.cards.length + 2);
    container.scrollTo({ left: cardWidth, behavior: 'auto' });

    container.addEventListener('scroll', () => {
      this.zone.run(() => this.updateActiveIndex());
    });

  //  this.startAutoSlide();
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
    const newScrollLeft = container.scrollLeft - cardWidth;
    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });

    // Handle looping (if near start)
    if (newScrollLeft <= 0) {
      setTimeout(() => {
        container.scrollTo({ left: cardWidth * this.cards.length, behavior: 'auto' });
      }, 700);
    }
  }

  scrollRight() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.scrollWidth / (this.cards.length + 2);
    const newScrollLeft = container.scrollLeft + cardWidth;
    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });

    // Handle looping (if at end)
    if (newScrollLeft >= cardWidth * (this.cards.length + 1)) {
      setTimeout(() => {
        container.scrollTo({ left: cardWidth, behavior: 'auto' });
      }, 700);
    }
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
      this.zone.run(() => {
        const newScrollLeft = container.scrollLeft + cardWidth;
        container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });

        if (newScrollLeft >= cardWidth * (this.cards.length + 1)) {
          setTimeout(() => {
            container.scrollTo({ left: cardWidth, behavior: 'auto' });
          }, 700);
        }
      });
    }, 4000);
  }
}
