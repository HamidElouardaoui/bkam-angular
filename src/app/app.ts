import { Component, Input, signal } from '@angular/core';
import { Header } from "./features/shared/components/header/header";
import { CommonModule } from '@angular/common';
import { Table } from "./features/shared/components/table/table";
import { RouterOutlet } from '@angular/router';
export interface RequestRow {
  company: string;
  type: string;
  createdAt: string; // already formatted text
  status: 'Validé' | 'Retourné' | 'En cours';
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('bkam-angular');

}
