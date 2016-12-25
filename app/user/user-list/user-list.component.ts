import {Component, ViewChild,EventEmitter, Inject, Input,} from "@angular/core";
import * as wjcGrid from 'wijmo/wijmo.angular2.grid';
/**
 * Created by Administrator on 2016/12/24.
 */
@Component({
  styleUrls:["app/user/user-list/user-list.sass"],
  templateUrl:"app/user/user-list/user-list.html"
})
export class UserListComponent{
 data:any[]=[{id:"123",country:"zh",product:"pingguo",color:"red",amount:"12"},{id:"123",country:"zh",product:"pingguo",color:"red",amount:"12"}];
  @ViewChild('flex') flex: wjcGrid.WjFlexGrid;
}
