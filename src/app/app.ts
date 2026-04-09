import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { SiteHeader } from "./site-header/site-header";
import { Catalog } from "./catalog/catalog";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeader,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TestAngular');
}
