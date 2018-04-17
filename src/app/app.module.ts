import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { WizardStateService } from './wizard-state.service';
import { CurrentDirective } from './current.directive';
import { NextStepDirective } from './next-step.directive';
import { PreviusStepDirective } from './previus-step.directive';


@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardStepComponent,
    CurrentDirective,
    NextStepDirective,
    PreviusStepDirective
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
