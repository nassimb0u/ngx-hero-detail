import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'lib-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() hero?: any = { id: 20, name: 'Tornado' };

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.goBack();
  }

  goBack(): void {
    this.location.back()
  }

}
