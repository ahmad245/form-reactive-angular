import { Overlay } from '@angular/cdk/overlay';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Sort } from '@angular/material/sort';
import { TableColumn } from './sheard/table/tableColumn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CurrencyPipe, DecimalPipe, PercentPipe]
})
export class AppComponent {
  orders: any[];
  ordersTableColumns: TableColumn[];
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  title = 'ReactiveFormReusable';
  hovered=false;
  constructor(private el: ElementRef,private overlay: Overlay,
    private currencyPipe: CurrencyPipe,
              private decimalPipe: DecimalPipe,
              private percentPipe: PercentPipe){
   
  }
  ngOnInit(): void {
    this.initializeColumns();
    this.orders = this.getOrders();
  }
  onClick(menu:MatMenu){
   
 //  console.log( menu.templateRef.elementRef.nativeElement.classList.add('mat-menu-panel'));
   
   
  //  this.trigger.closeMenu();
   this.hovered=true;
    // setTimeout(()=>{
    //   this.trigger.openMenu();
    // },400)
    
  }
  onClickBody(){
    this.hovered=false;
  }
  menuClosed(){
    this.hovered=false;
  }
  menuOpened(){
   
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  initializeColumns(): void {
    this.ordersTableColumns = [
      {
        name: 'book name',
        dataKey: 'description',
        position: 'left',
        isSortable: true
      },
      {
        name: 'ordered amount',
        dataKey: 'amount',
        position: 'right',
        isSortable: false
      },
      {
        name: 'book price',
        dataKey: 'price',
        position: 'right',
        isSortable: true
      },
      {
        name: 'book discount',
        dataKey: 'discount',
        position: 'right',
        isSortable: false
      },
    ];
  }

  sortData(sortParameters: Sort) {
    const keyName = sortParameters.active;
    if (sortParameters.direction === 'asc') {
      this.orders = this.orders.sort((a, b) => a[keyName].localeCompare(b[keyName]));
    } else if (sortParameters.direction === 'desc') {
      this.orders = this.orders.sort((a, b) => b[keyName].localeCompare(a[keyName]));
    } else {
      return this.orders = this.getOrders();
    }
  }

  removeOrder(order) {
    this.orders = this.orders.filter(item => item.id !== order.id)
  }
  getOrders(): any[] {
    return [
      {
        id: 1,
        description: 'first book',
        amount: this.decimalPipe.transform(2, '.1'),
        price: this.currencyPipe.transform(15),
        discount: this.percentPipe.transform(0, '.2')
      },
      {
        id: 2,
        description: 'second book',
        amount: this.decimalPipe.transform(1, '.1'),
        price: this.currencyPipe.transform(42.5),
        discount: this.percentPipe.transform(0.1, '.2')
      },
      {
        id: 3,
        description: 'third book',
        amount: this.decimalPipe.transform(4, '.1'),
        price: this.currencyPipe.transform(12.99),
        discount: this.percentPipe.transform(0.05, '.2')
      },
      {
        id: 4,
        description: 'fourth book',
        amount: this.decimalPipe.transform(1, '.1'),
        price: this.currencyPipe.transform(19.99),
        discount: this.percentPipe.transform(0.02, '.2')
      },
      {
        id: 5,
        description: 'fifth book',
        amount: this.decimalPipe.transform(8),
        price: this.currencyPipe.transform(10.25),
        discount: this.percentPipe.transform(0.2, '.2')
      }
    ];
  }
}
