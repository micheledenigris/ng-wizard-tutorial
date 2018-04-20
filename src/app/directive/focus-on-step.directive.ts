import { Directive, Host } from '@angular/core';
import { WizardStepComponent } from '../component/wizard-step/wizard-step.component';

@Directive({
    selector: '[focusOnSteps]'
})
export class FocusOnStepsDirective {

    constructor() {
        this.enableFocus();
    }

    private enableFocus() {
        let child = document.getElementById("focusOnStep");
        if (child)
            return;

        this.add();
    }

    private add() {
        let container = document.createElement("div");
        container.className = "focus-on-step";
        container.id = "focusOnStep";
        document.body.appendChild(container);
    }
}
