import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { WizardStateService } from './wizard-state.service';
import { CurrentDirective } from './current.directive';
import { NextStepDirective } from './next-step.directive';
import { PreviusStepDirective } from './previus-step.directive';
import { CloseDirective } from './close.directive';
import { GoToDirective } from './go-to.directive';
import { FocusOnStepsDirective } from './focus-on-step.directive';
import { ResetDirective } from './reset.directive';


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
