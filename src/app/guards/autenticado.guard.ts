import { getLocaleMonthNames } from "@angular/common";
import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SpotifyService } from "../services/spotify.service";

@Injectable({
  providedIn: 'root'
})
export class autenticadoGuard implements CanLoad {

  constructor(
    private _router: Router,
    private _spotifyService: SpotifyService,
  ) {

  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    if(!token) {
      return this.naoAutenticado();
    }
    return new Promise(async (res) => {
      const usarioCriado = await this._spotifyService.initializeUser();
      if(usarioCriado){
        res(true);
      } 
      else {
        res(this.naoAutenticado());
      }
    });
  }

  private naoAutenticado(): boolean {
    localStorage.clear();
    this._router.navigate(['/login']);
    return false;
  }
};
