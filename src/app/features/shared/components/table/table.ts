import { Component, Input } from '@angular/core';
import { RequestRow } from '../../../../app';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
 @Input() rows: RequestRow[] = [
    { company: 'AssurNova & Trousseau', type: 'Changement de Logo/Adresse', createdAt: '07-08-2025 15:26', status: 'Retourné' },
    { company: 'Général CORPORATE',      type: 'Changement de Logo/Adresse', createdAt: '29-07-2025 17:12', status: 'Validé' },
    { company: 'Général CORPORATE',      type: "Changement d’actionnaire",    createdAt: '29-07-2025 14:57', status: 'Validé' },
    { company: 'AssurNova & Trousseau',  type: 'Changement de gouvernance',   createdAt: '28-07-2025 10:07', status: 'Validé' },
    { company: 'AssurNova & Trousseau',  type: 'Changement de gouvernance',   createdAt: '28-07-2025 10:07', status: 'Validé' },

        { company: 'AssurNova & Trousseau',  type: 'Changement de gouvernance',   createdAt: '28-07-2025 10:07', status: 'Validé' },
    { company: 'AssurNova & Trousseau',  type: 'Changement de gouvernance',   createdAt: '28-07-2025 10:07', status: 'Validé' },
    { company: 'AssurNova & Trousseau',  type: 'Changement de gouvernance',   createdAt: '28-07-2025 10:07', status: 'Validé' },
    { company: 'AssurNova & Trousseau',  type: 'Changement de gouvernance',   createdAt: '28-07-2025 10:07', status: 'Validé' },
    { company: 'AssurNova & Trousseau',  type: 'Changement de gouvernance',   createdAt: '28-07-2025 10:07', status: 'Validé' },
    { company: 'AssurNova & Trousseau',  type: 'Changement de gouvernance',   createdAt: '28-07-2025 10:07', status: 'Validé' },

  ];

  pillClasses(s: RequestRow['status']) {
    switch (s) {
      case 'Validé':
        return 'bg-green-100 text-green-700';
      case 'Retourné':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-zinc-100 text-zinc-700';
    }
  }
  dotClasses(s: RequestRow['status']) {
    switch (s) {
      case 'Validé':
        return 'bg-green-500';
      case 'Retourné':
        return 'bg-orange-500';
      default:
        return 'bg-zinc-400';
    }
  }
}
