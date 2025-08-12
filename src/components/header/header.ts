import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
 @Input() userName = 'MEKKA MERYEM';

  get initials(): string {
    const parts = this.userName.trim().split(/\s+/);
    return parts.map(p => p[0]).slice(0, 2).join('').toUpperCase() || 'U';
  }
  
}
