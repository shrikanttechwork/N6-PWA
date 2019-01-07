import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NG6-PWAApp';
  update: boolean;
  joke: any;

  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      this.joke = res;
    });
  }

}
