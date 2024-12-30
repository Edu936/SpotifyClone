import { Component, OnInit } from '@angular/core';
import {
  faGuitar,
  faHome,
  faMusic,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss'],
})
export class PainelEsquerdoComponent implements OnInit {
  public menuSelect = 'Home';
  public playlistSelect = '';

  public homeIcone = faHome;
  public searchIcone = faSearch;
  public artistIcone = faGuitar;
  public playListIcone = faMusic;
  public playList: IPlaylist[] = [];

  constructor(
    private _spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.buscarPlaylist();
  }

  public buttonClick(nameButton: string) {
    this.menuSelect = nameButton;
  }

  public changePlaylist(idPlaylist: string) {
    this.playlistSelect = idPlaylist;
  }

  public async buscarPlaylist() {
    this.playList = await this._spotifyService.buscarPlaylist();
  }
}
