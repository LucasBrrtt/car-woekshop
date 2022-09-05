import { Inventory } from './inventory.model';
import { InventoryService } from './inventory.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public inventory: Inventory[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getItemInventory().subscribe((list) => {
      this.inventory = list;
    });
  }

}
