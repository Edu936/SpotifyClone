import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _router: Router,
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }

  verificarTokenUrlCallback() {
    const token = this._spotifyService.obterTokenUrlCallback();
    if(!!token) {
      this._spotifyService.definirAccessToken(token);
      this._router.navigate(['/player']);
    }
  }

  public openLoginPage(): void {
    window.location.href = this._spotifyService.obterUrlLogin();
  }
}
