import {Component, ViewChild} from '@angular/core';
import {routeTree} from "./app.routing";





@Component({
  selector: 'my-app',
  templateUrl:'app/app.html',
  // template: `<wj-flex-grid [itemsSource]="data"></wj-flex-grid>`,
})
export class AppComponent  {
  routTree=routeTree;
  amount=100;
  data:any[]=[{country:"china",sales:"40",expenses:"贵啊",downloads:"135"}];
  name = 'Angular';
}
