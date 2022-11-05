import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Part } from '../../../../inventory/parts/part.model';
import { PartService } from '../../part.service';

@Component({
  selector: 'app-detail-part',
  templateUrl: './detail-part.component.html',
  styleUrls: ['./detail-part.component.css']
})

export class DetailPartComponent implements OnInit {

  inventory: Part | undefined;

  constructor(private partService: PartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.partService.itemById(this.route.snapshot.params['id']).subscribe((res) => {
      this.inventory = res;
      console.log(this.inventory);
      
    });

  }

}
