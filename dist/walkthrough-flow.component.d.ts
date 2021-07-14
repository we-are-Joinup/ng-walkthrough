import { QueryList, AfterViewInit, EventEmitter } from '@angular/core';
import { WalkthroughEvent } from './walkthrough-tools';
import { WalkthroughText } from './walkthrough-text';
import { WalkthroughComponent } from './walkthrough.component';
export declare class WalkthroughFlowComponent implements AfterViewInit {
    walkthroughComponents: QueryList<WalkthroughComponent>;
    id: string;
    closed: EventEmitter<boolean>;
    finished: EventEmitter<WalkthroughEvent>;
    contentStyle: 'none' | 'draken';
    arrowColor: string;
    marginZone: string | null;
    showArrow: string | boolean;
    rootElement: string;
    closeButton: string | boolean;
    closeAnywhere: string | boolean;
    finishButton: string | boolean;
    focusBackdrop: string | boolean;
    focusGlow: string | boolean;
    radius: string;
    texts: WalkthroughText;
    private _id;
    private _uid;
    constructor();
    ngAfterViewInit(): void;
    init(): void;
    start(): void;
}
