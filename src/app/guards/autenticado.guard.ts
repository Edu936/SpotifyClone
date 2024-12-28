import { getLocaleMonthNames } from "@angular/common";
import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class autenticadoGuard implements CanLoad {

  constructor(
    private _router: Router
  ) {

  }

  canLoad(
    route: Route, 
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token = localStorage.getItem('token');
    
    if(!token) {
      return this.naoAutenticado();
    }

    return true; 
  }

  private naoAutenticado(): boolean {
    localStorage.clear();
    this._router.navigate(['/login']);
    return false;
  }
};
