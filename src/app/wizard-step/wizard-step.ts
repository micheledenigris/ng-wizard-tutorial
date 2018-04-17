import { Input } from "@angular/core";

export class WizardStep {
    public current: boolean;
    public disabled: boolean;

    @Input() top: number;
    @Input() left: number;
    @Input() focus: HTMLElement;
}