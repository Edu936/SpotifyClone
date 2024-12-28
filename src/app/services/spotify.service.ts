import { Injectable } from "@angular/core";
import { spotifyConfiguration } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class SpotifyService {

    obterUrlLogin(): string {
        const authEndpoint = `${spotifyConfiguration.authEndpoint}?`;
        const clientId = `client_id=${spotifyConfiguration.clientId}&`;
        const redirectUrl = `redirect_uri=${spotifyConfiguration.redirectUrl}&`;
        const scopes = `scopes=${spotifyConfiguration.scopes.join('%20')}&`;
        const responseType = `response_type=token&show_dialog=true`;
        return authEndpoint+clientId+redirectUrl+scopes+responseType;
    }
}