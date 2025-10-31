import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../../../shared/components/header/header";
import { Table } from "../../../../shared/components/table/table";
import { CarouselComponent } from "../../../../shared/components/carousel-component/carousel-component";
import { StatistiquesComponent } from "../../components/statistiques-component/statistiques-component";

@Component({
  selector: 'app-prestations-administratives-page',
  imports: [RouterOutlet, Header, Table, CarouselComponent, StatistiquesComponent],
  templateUrl: './prestations-administratives-page.html',
  styleUrl: './prestations-administratives-page.scss'
})
export class PrestationsAdministrativesPage {
bannerUrl : string ="src/app/features/prestations-administratives/prestations-administratives-index/assets/images/BannerRetraite-f76b8379.jpg";

}
