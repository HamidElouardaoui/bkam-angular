import { Component, Input, signal } from '@angular/core';
import { Header } from "../components/header/header";
import { CommonModule } from '@angular/common';
import { Table } from "../components/table/table";
export interface RequestRow {
  company: string;
  type: string;
  createdAt: string; // already formatted text
  status: 'Valide' | 'Retourné' | 'En cours';
}

@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, Table],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('bkam-angular');

}
