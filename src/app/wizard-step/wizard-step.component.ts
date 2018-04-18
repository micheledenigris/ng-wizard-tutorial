import { Component, OnInit, ViewChild, AfterViewChecked, ElementRef, ChangeDetectorRef } from '@angular/core';
import { WizardStep } from './wizard-step';

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
  private positionClass: string;

  constructor(private ref: ChangeDetectorRef) {
    super();
  }

  ngAfterViewChecked() {
    if (!this.step || !this.arrow)
      return;

    if (!this.element) {
      this.setPosition();
      return;
    }

    if (this.focusOnElement)
      this.element.style.zIndex = "1060";

    this.boundingFocus = this.element.getBoundingClientRect();
    this.boundingStep = this.step.nativeElement.getBoundingClientRect();
    this.setPositionFromFocus();
    this.ref.detectChanges();
  }

  private setPosition() {
    this.step.nativeElement.style.top = this.top + "px";
    this.step.nativeElement.style.left = this.left + "px";
  }

  private setPositionFromFocus() {
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
    this.positionClass = "bs-popover-top";
    this.step.nativeElement.style.top = this.boundingFocus.top - this.boundingStep.height - 8 + "px";
    this.step.nativeElement.style.left = this.boundingFocus.left + ((this.boundingFocus.width - this.boundingStep.width) / 2) + "px";
    this.arrow.nativeElement.style.left = (this.boundingStep.width / 2) - 8 + "px";
  }

  private bottomPosition() {
    this.positionClass = "bs-popover-bottom";
    this.step.nativeElement.style.top = this.boundingFocus.top + this.boundingFocus.height + "px";
    this.step.nativeElement.style.left = this.boundingFocus.left + ((this.boundingFocus.width - this.boundingStep.width) / 2) + "px";
    this.arrow.nativeElement.style.left = (this.boundingStep.width / 2) - 8 + "px";
  }

  private leftPosition() {
    this.positionClass = "bs-popover-left";
    this.step.nativeElement.style.top = this.boundingFocus.top + ((this.boundingFocus.height - this.boundingStep.height) / 2) + "px";;
    this.step.nativeElement.style.left = this.boundingFocus.left - this.boundingStep.width - 8 + "px";
    this.arrow.nativeElement.style.top = (this.boundingStep.height / 2) - 8 + "px";
  }

  private rightPosition() {
    this.positionClass = "bs-popover-right";
    this.step.nativeElement.style.top = this.boundingFocus.top + ((this.boundingFocus.height - this.boundingStep.height) / 2) + "px";;
    this.step.nativeElement.style.left = this.boundingFocus.left + this.boundingFocus.width + "px";
    this.arrow.nativeElement.style.top = (this.boundingStep.height / 2) - 8 + "px";
  }

}
