import { Part } from '../part.model';
import { InventoryService } from '../part.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './list-part.component.html',
  styleUrls: ['./list-part.component.css']
})
export class ListPartComponent implements OnInit {

  public inventory: Part[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getItemInventory().subscribe((list) => {
      this.inventory = list;
    });
  }

}
