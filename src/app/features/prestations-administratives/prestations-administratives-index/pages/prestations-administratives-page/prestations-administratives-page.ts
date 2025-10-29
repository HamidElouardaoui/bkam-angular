import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../../../../../components/header/header";
import { Table } from "../../../../../../components/table/table";

@Component({
  selector: 'app-prestations-administratives-page',
  imports: [RouterOutlet, Header, Table],
  templateUrl: './prestations-administratives-page.html',
  styleUrl: './prestations-administratives-page.scss'
})
export class PrestationsAdministrativesPage {
bannerUrl : string ="src/app/features/prestations-administratives/prestations-administratives-index/assets/images/BannerRetraite-f76b8379.jpg";

}
