import { TemplateRef, ComponentFactoryResolver, ApplicationRef, Injector, AfterViewInit, Renderer2, EventEmitter } from '@angular/core';
import { WalkthroughContainerComponent } from './walkthrough-container.component';
import { WalkthroughService } from './walkthrough.service';
import { WalkthroughText } from './walkthrough-text';
import { WalkthroughEvent } from './walkthrough-tools';
export declare class WalkthroughComponent implements AfterViewInit {
    private _componentFactoryResolver;
    private _applicationRef;
    private _injector;
    private _renderer;
    private _walkthroughService;
    private static _walkthroughContainer;
    private static _walkthroughContainerCreating;
    static minimalMargin: number;
    closed: EventEmitter<boolean>;
    finished: EventEmitter<WalkthroughEvent>;
    ready: EventEmitter<WalkthroughEvent>;
    focusElementCSSClass: string;
    rootElement: string;
    focusElementSelector: string;
    typeSelector: 'element' | 'zone';
    focusClick: (event: Event, content: WalkthroughContainerComponent) => {};
    radius: string;
    previousStep: WalkthroughComponent;
    nextStep: WalkthroughComponent;
    texts: WalkthroughText;
    contentTemplate: TemplateRef<any>;
    contentText: string;
    contentStyle: 'none' | 'draken';
    marginZone: string | null;
    arrowColor: string;
    animation: 'none' | 'linear';
    animationDelays: number;
    id: string;
    alignContent: 'left' | 'center' | 'right';
    verticalAlignContent: 'above' | 'top' | 'center' | 'bottom' | 'below';
    contentSpacing: number;
    verticalContentSpacing: number;
    closeButton: string | boolean;
    closeAnywhere: string | boolean;
    showArrow: string | boolean;
    finishButton: string | boolean;
    focusHighlightAnimation: string | boolean;
    focusBackdrop: string | boolean;
    focusGlow: string | boolean;
    disabled: boolean;
    private _id;
    private _uid;
    private _readyHasBeenEmited;
    private _display;
    private _hasHighlightAnimation;
    private _hasBackdrop;
    private _hasGlow;
    private _hasFinish;
    private _hasArrow;
    private _hasCloseButton;
    private _hasCloseAnywhere;
    private _disabled;
    private _arrowColor;
    private _marginZone;
    private _marginZonePx;
    private _alignContent;
    private _verticalAlignContent;
    private _contentSpacing;
    private _verticalContentSpacing;
    private _focusElement;
    private _focusElementEnd;
    private _offsetCoordinates;
    private _windowWidth;
    static walkthroughStop(): void;
    static walkthroughHasShow(): boolean;
    static walkthroughHasPause(): boolean;
    static walkthroughContinue(): void;
    static walkthroughNext(): void;
    static walkthroughPrevious(): void;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _applicationRef: ApplicationRef, _injector: Injector, _renderer: Renderer2, _walkthroughService: WalkthroughService);
    resize(): void;
    ngAfterViewInit(): void;
    next(closedEvent?: EventEmitter<boolean>, finishedEvent?: EventEmitter<WalkthroughEvent>): void;
    refresh(): void;
    open(): void;
    /**
     * Do not use this method outside of the library
     */
    loadPrevioustStep(): void;
    /**
     * Do not use this method outside of the library
     */
    loadNextStep(): void;
    /**
     * Do not use this method outside of the library
     */
    hide(finishLink?: boolean, closeWalkthrough?: boolean): void;
    private _show();
    private _next(closedEvent?, finishedEvent?);
    private _getInstance();
    private _appendComponentToBody<T>(component);
    private _attachWalkthroughContent<T>(componentOrTemplateRef, walkthroughContainer);
    private _elementLocations();
    /**
     *
     */
    private _getFocusElement();
    /**
     * get instance, hightlight the focused element et show the template
     */
    private _setFocus();
    private _setFocusContinue();
    private _updateElementPositions(instance);
    /**
     * Attache the template in the contener, if a template is linked.
     */
    private _attachContentTemplate();
    /**
     * init a partof styles of the contenaire
     */
    private _initStylingTemplate(instance);
    /**
     * init all datas of the contenaire
     */
    private _initContentTemplate(instance);
    /**
     * check if there is a previous step enabled
     */
    private _hasPreviousStep(instance);
    /**
     * check if there is a next step enabled
     */
    private _hasNextStep(instance);
}
