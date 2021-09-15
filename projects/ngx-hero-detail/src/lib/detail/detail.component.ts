import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../hero';

@Component({
  selector: 'lib-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() hero?: Hero;
  @Output() heroModifiedEvent =  new EventEmitter<Hero>();

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.heroModifiedEvent.emit(this.hero);
  }

  goBack(): void {
    this.location.back()
  }

}
