import {NgModule} from "@angular/core";
import {UserListComponent} from "./user-list.component";
import {FormsModule} from "@angular/forms";
import {WjInputModule} from "wijmo/wijmo.angular2.input";
import {WjGridModule} from "wijmo/wijmo.angular2.grid";


/**
 * Created by Administrator on 2016/12/24.
 */
@NgModule({
  imports:[FormsModule, WjGridModule, WjInputModule],
  declarations:[UserListComponent],
  exports:[UserListComponent]
})
export class UserListModule{
}
