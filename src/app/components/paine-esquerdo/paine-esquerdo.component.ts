import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paine-esquerdo',
  templateUrl: './paine-esquerdo.component.html',
  styleUrls: ['./paine-esquerdo.component.scss']
})
export class PaineEsquerdoComponent {
  public homeIcone = faHome;
}
