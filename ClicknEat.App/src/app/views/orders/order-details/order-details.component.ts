import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../../../models/orders/orders.model';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  id: any;
  orders: Orders;
  logged = localStorage.getItem('token');

  constructor(private ordersService: OrdersService,
    private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOrder();

  }

  // deleteOrder(id: string) {
  //   this.ordersService.deleteOrder(id).subscribe((data) => {
  //     const deletedContrat = this.orders.find(x => x.id === id);
  //     this.orders.splice(this.orders.indexOf(deletedContrat), 1);
  //   });
  // }

  getOrder() {
    this.ordersService.getOrder(this.id).subscribe((res: any) => {
      this.orders = res as Orders;

      console.log('From Component ORDERS', this.orders);
    });
  }
}
