import { Component } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent {
  public menuSelect = 'Home';

  public homeIcone = faHome;
  public searchIcone = faSearch;
  public artistIcone = faGuitar;
  public playListIcone = faMusic;

  public buttonClick(nameButton: string) {
    this.menuSelect = nameButton;
  }

  
}
