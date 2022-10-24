import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Part } from '../inventory/parts/part.model';
import { InventoryService } from '../inventory/parts/part.service';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent implements OnInit {

  inventory: Part | undefined;

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inventoryService.itemById(this.route.snapshot.params['id']).subscribe((res) => {
      this.inventory = res;
      console.log(this.inventory);
      
    });
  }

}
