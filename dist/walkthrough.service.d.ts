import { WalkthroughElementCoordinate, WalkthroughMargin } from './walkthrough-tools';
export declare class WalkthroughService {
    private _preventDefault;
    private _overflowRegex;
    private _preventDefaultForScrollKeys;
    retrieveCoordinates(element: HTMLElement, margin?: WalkthroughMargin): WalkthroughElementCoordinate;
    getTop(): number;
    getDocumentHeight(): number;
    scrollIntoViewIfOutOfView(element: HTMLElement, marginTop?: number): void;
    scrollToTopElement(element1: HTMLElement, element2: HTMLElement, margin: WalkthroughMargin): void;
    getScrollParent(element: HTMLElement): HTMLElement;
    getHeightOfPage(): number;
}
