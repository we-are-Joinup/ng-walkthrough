import { TemplateRef, ElementRef, ViewContainerRef, EmbeddedViewRef, ComponentRef, Renderer2 } from '@angular/core';
import { BasePortalHost, ComponentPortal, PortalHostDirective, TemplatePortal } from '@angular/cdk/portal';
import { WalkthroughElementCoordinate, WalkthroughMargin } from './walkthrough-tools';
import { WalkthroughComponent } from './walkthrough.component';
import { WalkthroughService } from './walkthrough.service';
import { WalkthroughText } from './walkthrough-text';
export declare function throwWalkthroughContentAlreadyAttachedError(): void;
export declare class WalkthroughContainerComponent extends BasePortalHost {
    viewContainerRef: ViewContainerRef;
    private _walkthroughService;
    private _renderer;
    private _el;
    markerUrl: string;
    show: boolean;
    pause: boolean;
    parent: WalkthroughComponent;
    hasHighlightZone: boolean;
    hasHighlight: boolean;
    hasBackdrop: boolean;
    hasGlow: boolean;
    hasClickable: boolean;
    hideOther: boolean;
    hasPrevious: boolean;
    hasNext: boolean;
    hasFinish: boolean;
    hasCloseButton: boolean;
    hasCloseAnywhere: boolean;
    hasArrow: boolean;
    arrowPath: string;
    arrowMarkerDist: number;
    contentStyle: string;
    radius: string;
    arrowColor: string;
    marginZone: string | null;
    marginZonePx: WalkthroughMargin;
    contentText: string;
    text: WalkthroughText;
    _portalHost: PortalHostDirective;
    content: TemplateRef<any>;
    contentBlock: ElementRef;
    zone: ElementRef;
    readonly id: string;
    readonly hide: boolean;
    readonly cursor: boolean;
    readonly backdrop: boolean;
    private _contentPosition;
    private _arrowPosition;
    constructor(viewContainerRef: ViewContainerRef, _walkthroughService: WalkthroughService, _renderer: Renderer2, _el: ElementRef);
    click(): void;
    clickZone(event: Event): void;
    /**
     * Attach a ComponentPortal as content to this walkthrough container.
     * @param portal Portal to be attached as the walkthrough content.
     */
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    /**
     * Attach a TemplatePortal as content to this walkthrough container.
     * @param portal Portal to be attached as the walkthrough content.
     */
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    setHeight(): void;
    hightlightZone(coordinate: WalkthroughElementCoordinate, scrollDiff: number, animation: 'none' | 'linear', animationDelays: number, continueFunction: () => {}): void;
    hightlightZoneStyling(element: HTMLElement): void;
    contentBlockPosition(coordinate: WalkthroughElementCoordinate, alignContent: 'left' | 'center' | 'right', verticalAlignContent: 'above' | 'top' | 'center' | 'bottom' | 'below', contentSpacing: number, verticalContentSpacing: number): void;
    arrowPosition(coordinate: WalkthroughElementCoordinate, verticalContentSpacing: number): void;
    /**
     * stop the walkthrough : hide the container and change to pause at true
     */
    stop(): void;
    /**
     * continue the walkthrough if is stopped : show the container and change to pause at false
     */
    continue(unpause?: boolean): void;
    open(): void;
    previous(): void;
    next(): void;
    close(finishLink?: boolean, closeWalkthrough?: boolean): void;
}
