import { Directive, Host } from '@angular/core';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

@Directive({
    selector: '[focusOnSteps]'
})
export class FocusOnStepsDirective {

    constructor() {
        this.enableFocus();
    }

    private enableFocus() {
        let child = document.querySelectorAll("enable-focus");
        if (child.length != 0)
            return;

        this.add();
    }

    private add() {
        let container = document.createElement("div");
        container.className = "enable-focus";
        document.body.appendChild(container);
    }
}
