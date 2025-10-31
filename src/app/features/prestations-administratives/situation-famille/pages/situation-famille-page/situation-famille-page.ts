import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../../../shared/components/header/header";

@Component({
  selector: 'app-situation-famille-page',
  imports: [RouterOutlet, Header],
  templateUrl: './situation-famille-page.html',
  styleUrls: ['./situation-famille-page.scss']
})
export class SituationFamillePage {

}
