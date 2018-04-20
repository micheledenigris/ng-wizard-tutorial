import { TestBed, inject } from '@angular/core/testing';

import { WizardStateService } from './wizard-state.service';

describe('WizardStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WizardStateService]
    });
  });

  it('should be created', inject([WizardStateService], (service: WizardStateService) => {
    expect(service).toBeTruthy();
  }));
});
