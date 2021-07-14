import { WalkthroughComponent } from './walkthrough.component';
export interface WalkthroughElementCoordinate {
    top: number;
    left: number;
    height: number;
    width: number;
    margin: Margin;
}
export interface Margin {
    top: number;
    left: number;
    right: number;
    bottom: number;
}
export declare const booleanValue: (value: string | boolean) => boolean;
export declare class WalkthroughEvent {
    component: WalkthroughComponent;
    focusElement: HTMLElement;
    constructor(component: WalkthroughComponent, focusElement: HTMLElement);
}
export declare class WalkthroughMargin {
    top: number;
    right: number;
    bottom: number;
    left: number;
    static parsePoints(points: string): WalkthroughMargin;
    constructor(top?: number, right?: number, bottom?: number, left?: number);
}
