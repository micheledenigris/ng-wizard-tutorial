import { Input } from "@angular/core";

export class WizardStep {
    public current: boolean;
    public disabled: boolean;
    public close: boolean;

    @Input() top: number = 0;
    @Input() left: number = 0;

    @Input() element: HTMLElement;
    @Input() position: 'top' | 'bottom' | 'left' | 'right';

    @Input() focusOnElement: boolean = false;
}