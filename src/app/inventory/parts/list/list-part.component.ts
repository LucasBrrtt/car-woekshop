import { Part } from '../part.model';
import { PartService } from '../part.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './list-part.component.html',
  styleUrls: ['./list-part.component.css']
})
export class ListPartComponent implements OnInit {

  public inventory: Part[] = [];

  constructor(private partService: PartService) { }

  ngOnInit(): void {
    this.partService.getItemInventory().subscribe((list) => {
      this.inventory = list;
    });
  }

register(a: any){
  console.log(a);
  
}

}
