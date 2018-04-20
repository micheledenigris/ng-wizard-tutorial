import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/app.component';
import { WizardComponent } from './component/wizard/wizard.component';
import { WizardStepComponent } from './component/wizard-step/wizard-step.component';
import { WizardStateService } from './service/wizard-state.service';
import { CurrentDirective } from './directive/current.directive';
import { NextStepDirective } from './directive/next-step.directive';
import { PreviusStepDirective } from './directive/previus-step.directive';
import { CloseDirective } from './directive/close.directive';
import { GoToDirective } from './directive/go-to.directive';
import { FocusOnStepsDirective } from './directive/focus-on-step.directive';
import { ResetDirective } from './directive/reset.directive';



@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardStepComponent,
    CurrentDirective,
    NextStepDirective,
    PreviusStepDirective,
    CloseDirective,
    GoToDirective,
    FocusOnStepsDirective,
    ResetDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    WizardStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
