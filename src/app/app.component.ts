import { FetchService } from './fetch.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('grid') grid:AgGridAngular;

  title = 'AgGrid';

constructor(private fs:FetchService){}
  columnDefs = [
    {headerName:'Make', field:'make',sortable:true, filter: true,checkboxSelection: true},
    {headerName:'Model', field:'model',sortable:true, filter: true},
    {headerName:'Price', field:'price',sortable:true, filter: true, editable:true}
  ];

  rowData: any;

  ngOnInit(){
    this.rowData=this.fs.getData();
  }
  public getSelect(){
const selectedNodes= this.grid.api.getSelectedNodes();
const sData=selectedNodes.map(node=>node.data );
const sRepresent=sData.map(node=> node.make + ' '+ node.model).join(', ');
alert(`Selected nodes: ${sRepresent}`);
}

}
