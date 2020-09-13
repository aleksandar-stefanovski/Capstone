import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetails, Orders } from '../../models/orders/orders.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  orders: Orders[];
  orderDetails: OrderDetails[];
  logged = localStorage.getItem('token');

  constructor(private ordersService: OrdersService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getOrders();

  }

  deleteOrder(id: string) {
    this.ordersService.deleteOrder(id).subscribe((data) => {
      const deletedContrat = this.orders.find(x => x.id === id);
      this.orders.splice(this.orders.indexOf(deletedContrat), 1);
    });
  }

  getOrders() {
    this.ordersService.getMine().subscribe((res: any) => {
      this.orders = res as Orders[];

      console.log('From Component ORDERS', this.orders);
    });
  }
}
