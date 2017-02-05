/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormserviceService } from './formservice.service';

describe('FormserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormserviceService]
    });
  });

  it('should ...', inject([FormserviceService], (service: FormserviceService) => {
    expect(service).toBeTruthy();
  }));
});
