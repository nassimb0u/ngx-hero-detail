import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHeroDetailComponent } from './ngx-hero-detail.component';

describe('NgxHeroDetailComponent', () => {
  let component: NgxHeroDetailComponent;
  let fixture: ComponentFixture<NgxHeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxHeroDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
