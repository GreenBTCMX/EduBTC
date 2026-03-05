import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public readonly appName: string = "Bitcoin Educación";
  public readonly primaryColor: string = "#f7931a";
}
