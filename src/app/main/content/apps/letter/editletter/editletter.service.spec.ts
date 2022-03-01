import { TestBed, inject } from '@angular/core/testing';

import { EditletterService } from './editletter.service';

describe('EditletterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditletterService]
    });
  });

  it('should be created', inject([EditletterService], (service: EditletterService) => {
    expect(service).toBeTruthy();
  }));
});
