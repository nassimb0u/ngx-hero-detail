import { TestBed } from '@angular/core/testing';

import { NgxHeroDetailService } from './ngx-hero-detail.service';

describe('NgxHeroDetailService', () => {
  let service: NgxHeroDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHeroDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
