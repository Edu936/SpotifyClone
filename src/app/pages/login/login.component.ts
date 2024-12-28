import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _spotifyService: SpotifyService
  ) {

  }

  ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }

  verificarTokenUrlCallback() {
    const token = this._spotifyService.obterTokenUrlCallback();
    if(!!token) {
      this._spotifyService.definirAccessToken(token);
    }
  }

  public openLoginPage(): void {
    window.location.href = this._spotifyService.obterUrlLogin();
  }
}
