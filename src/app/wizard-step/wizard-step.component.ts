import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { WizardStep } from './wizard-step';
import { debug } from 'util';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent extends WizardStep implements AfterViewChecked {
  @ViewChild('step') step: ElementRef;
  @ViewChild('arrow') arrow: ElementRef;

  private boundingFocus: ClientRect;
  private boundingStep: ClientRect;

  constructor(private el: ElementRef) {
    super();
  }

  ngAfterViewChecked() {
    if (!this.step || !this.arrow)
      return;
    this.boundingFocus = this.focus.getBoundingClientRect();
    this.boundingStep = this.step.nativeElement.getBoundingClientRect();
    this.setPosition();
  }

  private setPosition() {
    switch (this.position) {
      case 'top': {
        this.topPosition();
        break;
      };
      case 'bottom': {
        this.bottomPosition();
        break;
      };
      case 'left': {
        this.leftPosition();
        break;
      };
      case 'right': {
        this.rightPosition();
        break;
      };
      default: {
        this.rightPosition();
        break;
      };
    }
  }

  private topPosition() {
    this.top = this.boundingFocus.top - this.boundingStep.height;
    this.left = this.boundingFocus.left + ((this.boundingFocus.width - this.boundingStep.width) / 2);
  }

  private bottomPosition() {
    this.top = this.boundingFocus.top + this.boundingFocus.height;
    this.left = this.boundingFocus.left + ((this.boundingFocus.width - this.boundingStep.width) / 2);
  }

  private leftPosition() {
    this.top = this.boundingFocus.top + ((this.boundingFocus.height - this.boundingStep.height) / 2);
    this.left = this.boundingFocus.left - this.boundingStep.width;
  }

  private rightPosition() {
    this.top = this.boundingFocus.top + ((this.boundingFocus.height - this.boundingStep.height) / 2);
    this.left = this.boundingFocus.left + this.boundingFocus.width;
  }



}
