import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {WjGridModule} from "wijmo/wijmo.angular2.grid";
import {WjInputModule} from "wijmo/wijmo.angular2.input";
import {routing} from "./app.routing";
import {UserListModule} from "./user/user-list/user-list-module";
import {UserListComponent} from "./user/user-list/user-list.component";
import {EnterpriseListModule} from "./enterprise/enterprise-list/enterprise-list-module";
@NgModule({
  imports:[UserListModule,BrowserModule,WjGridModule,WjInputModule,routing,EnterpriseListModule],
  declarations: [AppComponent],
  entryComponents:[UserListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

