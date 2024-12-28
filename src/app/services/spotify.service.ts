import { Injectable } from '@angular/core';
import { spotifyConfiguration } from 'src/environments/environment';
import Spotify  from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root',
})

export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  obterUrlLogin(): string {
    const authEndpoint = `${spotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${spotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${spotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${spotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  obterTokenUrlCallback(): string {
    if(!window.location.hash) {
        return '';
    }
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  definirAccessToken( token: string ): void {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
    this.spotifyApi.skipToNext();
  }
}
