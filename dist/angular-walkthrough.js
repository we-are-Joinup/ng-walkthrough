import { ApplicationRef, Component, ComponentFactoryResolver, ContentChildren, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Injectable, Injector, Input, NgModule, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

const booleanValue = (value) => {
    return value === 'true' || value === true;
};
class WalkthroughEvent {
    /**
     * @param {?} component
     * @param {?} focusElement
     */
    constructor(component, focusElement) {
        this.component = component;
        this.focusElement = focusElement;
    }
}
class WalkthroughMargin {
    /**
     * @param {?=} top
     * @param {?=} right
     * @param {?=} bottom
     * @param {?=} left
     */
    constructor(top = 0, right, bottom, left) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        if (right === undefined) {
            this.right = top;
        }
        if (bottom === undefined) {
            this.bottom = top;
        }
        if (left === undefined && right === undefined) {
            this.left = top;
        }
        else if (left === undefined) {
            this.left = right;
        }
    }
    /**
     * @param {?} points
     * @return {?}
     */
    static parsePoints(points) {
        let /** @type {?} */ pointsPx;
        if (points.match(/^\d+(?:\s+\d+)*$/)) {
            const /** @type {?} */ split = points.split(/\s+/).map(i => parseFloat(i));
            pointsPx = new WalkthroughMargin(split[0], split[1], split[2], split[3]);
        }
        return pointsPx || new WalkthroughMargin();
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Throws an exception when attempting to attach a null portal to a host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * \@docs-private
 * @return {?}
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * \@docs-private
 * @return {?}
 */
function throwPortalOutletAlreadyDisposedError() {
    throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * \@docs-private
 * @return {?}
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalOutletError() {
    throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * \@docs-private
 * @return {?}
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Interface that can be used to generically type a class.
 * @record
 */

/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 */
var Portal = /** @class */ (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.attach = /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        if (host == null) {
            throwNullPortalOutletError();
        }
        if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return /** @type {?} */ (host.attach(this));
    };
    /** Detach this portal from its host */
    /**
     * Detach this portal from its host
     * @return {?}
     */
    Portal.prototype.detach = /**
     * Detach this portal from its host
     * @return {?}
     */
    function () {
        var /** @type {?} */ host = this._attachedHost;
        if (host == null) {
            throwNoPortalAttachedError();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.setAttachedHost = /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = /** @class */ (function (_super) {
    __extends(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        return _this;
    }
    return ComponentPortal;
}(Portal));
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
var TemplatePortal = /** @class */ (function (_super) {
    __extends(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef, context) {
        var _this = _super.call(this) || this;
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        _this.context = context;
        return _this;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: /**
         * @return {?}
         */
        function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    TemplatePortal.prototype.attach = /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    function (host, context) {
        if (context === void 0) { context = this.context; }
        this.context = context;
        return _super.prototype.attach.call(this, host);
    };
    /**
     * @return {?}
     */
    TemplatePortal.prototype.detach = /**
     * @return {?}
     */
    function () {
        this.context = undefined;
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));
/**
 * A `PortalOutlet` is an space that can contain a single `Portal`.
 * @record
 */

/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
var BasePortalOutlet = /** @class */ (function () {
    function BasePortalOutlet() {
        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.hasAttached = /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    function () {
        return !!this._attachedPortal;
    };
    /** Attaches a portal. */
    /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    BasePortalOutlet.prototype.attach = /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        if (!portal) {
            throwNullPortalError();
        }
        if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        throwUnknownPortalTypeError();
    };
    /** Detaches a previously attached portal. */
    /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.detach = /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    };
    /** Permanently dispose of this portal host. */
    /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    BasePortalOutlet.prototype.dispose = /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    BasePortalOutlet.prototype.setDisposeFn = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._disposeFn = fn;
    };
    /**
     * @return {?}
     */
    BasePortalOutlet.prototype._invokeDisposeFn = /**
     * @return {?}
     */
    function () {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    return BasePortalOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
var DomPortalOutlet = /** @class */ (function (_super) {
    __extends(DomPortalOutlet, _super);
    function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        var _this = _super.call(this) || this;
        _this.outletElement = outletElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        _this._defaultInjector = _defaultInjector;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    DomPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    DomPortalOutlet.prototype.attachTemplatePortal = /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ viewContainer = portal.viewContainerRef;
        var /** @type {?} */ viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
        viewRef.detectChanges();
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalOutlet the view can be added everywhere in the DOM
        // (e.g Overlay Container) To move the view to the specified host element. We just
        // re-append the existing root nodes.
        viewRef.rootNodes.forEach(function (rootNode) { return _this.outletElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            var /** @type {?} */ index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return viewRef;
    };
    /**
     * Clears out a portal from the DOM.
     */
    /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    DomPortalOutlet.prototype.dispose = /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
        }
    };
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalOutlet.prototype._getComponentRootNode = /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
    };
    return DomPortalOutlet;
}(BasePortalOutlet));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
var CdkPortal = /** @class */ (function (_super) {
    __extends(CdkPortal, _super);
    function CdkPortal(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    CdkPortal.decorators = [
        { type: Directive, args: [{
                    selector: '[cdk-portal], [cdkPortal], [portal]',
                    exportAs: 'cdkPortal',
                },] },
    ];
    /** @nocollapse */
    CdkPortal.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
    ]; };
    return CdkPortal;
}(TemplatePortal));
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
var CdkPortalOutlet = /** @class */ (function (_super) {
    __extends(CdkPortalOutlet, _super);
    function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */
        _this._isInitialized = false;
        _this.attached = new EventEmitter();
        return _this;
    }
    Object.defineProperty(CdkPortalOutlet.prototype, "_deprecatedPortal", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.portal; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this.portal = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "_deprecatedPortalHost", {
        get: /**
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () { return this.portal; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this.portal = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "portal", {
        /** Portal associated with the Portal outlet. */
        get: /**
         * Portal associated with the Portal outlet.
         * @return {?}
         */
        function () {
            return this._attachedPortal;
        },
        set: /**
         * @param {?} portal
         * @return {?}
         */
        function (portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._attachedPortal = portal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "attachedRef", {
        /** Component or view reference that is attached to the portal. */
        get: /**
         * Component or view reference that is attached to the portal.
         * @return {?}
         */
        function () {
            return this._attachedRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        this._attachedPortal = null;
        this._attachedRef = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    CdkPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.
        var /** @type {?} */ viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
        _super.prototype.setDisposeFn.call(this, function () { return ref.destroy(); });
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    CdkPortalOutlet.prototype.attachTemplatePortal = /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        var /** @type {?} */ viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
        _super.prototype.setDisposeFn.call(this, function () { return _this._viewContainerRef.clear(); });
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    };
    CdkPortalOutlet.decorators = [
        { type: Directive, args: [{
                    selector: '[cdkPortalOutlet], [cdkPortalHost], [portalHost]',
                    exportAs: 'cdkPortalOutlet, cdkPortalHost',
                    inputs: ['portal: cdkPortalOutlet']
                },] },
    ];
    /** @nocollapse */
    CdkPortalOutlet.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
        { type: ViewContainerRef, },
    ]; };
    CdkPortalOutlet.propDecorators = {
        "_deprecatedPortal": [{ type: Input, args: ['portalHost',] },],
        "_deprecatedPortalHost": [{ type: Input, args: ['cdkPortalHost',] },],
        "attached": [{ type: Output, args: ['attached',] },],
    };
    return CdkPortalOutlet;
}(BasePortalOutlet));
var PortalModule = /** @class */ (function () {
    function PortalModule() {
    }
    PortalModule.decorators = [
        { type: NgModule, args: [{
                    exports: [CdkPortal, CdkPortalOutlet],
                    declarations: [CdkPortal, CdkPortalOutlet],
                },] },
    ];
    /** @nocollapse */
    PortalModule.ctorParameters = function () { return []; };
    return PortalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * \@docs-private
 */
var PortalInjector = /** @class */ (function () {
    function PortalInjector(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    PortalInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        var /** @type {?} */ value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return PortalInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WalkthroughService {
    constructor() {
        this._preventDefault = ((e) => {
            e = e || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }).bind(this);
        this._overflowRegex = /(auto|scroll)/;
        this._preventDefaultForScrollKeys = ((e) => {
            // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40
            if (e.keyCode >= 32 && e.keyCode <= 40) {
                this._preventDefault(e);
                return false;
            }
        }).bind(this);
    }
    /**
     * @param {?} element
     * @param {?=} margin
     * @return {?}
     */
    retrieveCoordinates(element, margin) {
        const /** @type {?} */ clientrect = element.getBoundingClientRect();
        const /** @type {?} */ style = window.getComputedStyle(element);
        const /** @type {?} */ coordinates = {
            top: clientrect.top - (margin ? margin.top : 0),
            height: clientrect.height,
            width: clientrect.width,
            left: clientrect.left - (margin ? margin.left : 0),
            margin: {
                top: parseFloat(style.marginTop),
                right: parseFloat(style.marginRight),
                bottom: parseFloat(style.marginBottom),
                left: parseFloat(style.marginLeft),
            }
        };
        coordinates.top += this.getTop();
        return coordinates;
    }
    /**
     * @return {?}
     */
    getTop() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
    /**
     * @return {?}
     */
    getDocumentHeight() {
        // Height of entire body : https://stackoverflow.com/a/1147768
        const /** @type {?} */ body_height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        return Math.max(this.getHeightOfPage() + this.getTop(), body_height);
    }
    /**
     * @param {?} element
     * @param {?=} marginTop
     * @return {?}
     */
    scrollIntoViewIfOutOfView(element, marginTop = 0) {
        const /** @type {?} */ topOfPage = this.getTop();
        const /** @type {?} */ heightOfPage = this.getHeightOfPage();
        let /** @type {?} */ elementY = 0;
        let /** @type {?} */ elementH = 0;
        let /** @type {?} */ parent = element;
        while (parent && parent !== document.body) {
            elementY += parent.offsetTop;
            parent = /** @type {?} */ (parent.offsetParent);
        }
        elementH = element.offsetHeight;
        if ((topOfPage + heightOfPage) < (elementY + elementH)) {
            element.scrollIntoView(false);
        }
        else if (elementY < topOfPage) {
            element.scrollIntoView(true);
            window.scrollBy(0, -30);
        }
        else {
            // test of overflow element
            let /** @type {?} */ current = element;
            while (current && current !== document.body) {
                parent = this.getScrollParent(current);
                if (current.offsetTop + current.offsetHeight - parent.scrollTop > parent.offsetHeight ||
                    current.offsetLeft + current.offsetWidth - parent.scrollLeft > parent.offsetWidth) {
                    element.scrollIntoView();
                    window.scrollBy(0, -30);
                    break;
                }
                current = parent;
            }
        }
    }
    /**
     * @param {?} element1
     * @param {?} element2
     * @param {?} margin
     * @return {?}
     */
    scrollToTopElement(element1, element2, margin) {
        if (element1 && element2) {
            const /** @type {?} */ element1Position = this.retrieveCoordinates(element1, margin);
            const /** @type {?} */ element2Position = this.retrieveCoordinates(element2, margin);
            const /** @type {?} */ minX = Math.min(element1Position.left, element2Position.left);
            const /** @type {?} */ minY = Math.min(element1Position.top, element2Position.top);
            window.scrollTo(minX - 20, minY - 20);
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getScrollParent(element) {
        let /** @type {?} */ scrollParent;
        let /** @type {?} */ style = getComputedStyle(element);
        const /** @type {?} */ excludeStaticParent = style.position === 'absolute';
        if (style.position !== 'fixed') {
            let /** @type {?} */ parent = element.parentElement;
            while (parent && parent !== document.body) {
                style = getComputedStyle(parent);
                if (!(excludeStaticParent && style.position === 'static') &&
                    this._overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
                    scrollParent = parent;
                    break;
                }
                parent = parent.parentElement;
            }
        }
        return scrollParent || document.body;
    }
    /**
     * @return {?}
     */
    getHeightOfPage() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }
}
WalkthroughService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WalkthroughText {
    constructor() {
        this.previous = 'Previous';
        this.next = 'Next';
        this.close = 'Close';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function throwWalkthroughContentAlreadyAttachedError() {
    throw Error('Attempting to attach walkthrough content after content is already attached');
}
const is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
class WalkthroughContainerComponent extends BasePortalOutlet {
    /**
     * @param {?} viewContainerRef
     * @param {?} _walkthroughService
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(viewContainerRef, _walkthroughService, _renderer, _el) {
        super();
        this.viewContainerRef = viewContainerRef;
        this._walkthroughService = _walkthroughService;
        this._renderer = _renderer;
        this._el = _el;
        this.markerUrl = 'url(#wkt-arrow)';
        this.show = false;
        this.pause = false;
        // highlight zone
        this.hasHighlightZone = false;
        this.hasHighlight = false;
        this.hasBackdrop = false;
        this.hasGlow = false;
        // navigate
        this.hasPrevious = false;
        this.hasNext = false;
        this.hasFinish = false;
        this.hasCloseButton = false;
        this.hasCloseAnywhere = true;
        // arrow
        this.hasArrow = false;
        this.arrowMarkerDist = 7;
        this.marginZonePx = new WalkthroughMargin();
        // texts change / i18n
        this.text = new WalkthroughText();
    }
    /**
     * @return {?}
     */
    get id() {
        return this.parent ? this.parent.id + '-container' : null;
    }
    /**
     * @return {?}
     */
    get hide() {
        return !this.show;
    }
    /**
     * @return {?}
     */
    get cursor() {
        return this.hasCloseAnywhere;
    }
    /**
     * @return {?}
     */
    get backdrop() {
        return !this.hasHighlightZone && this.hasBackdrop;
    }
    /**
     * @return {?}
     */
    click() {
        if (this.hasCloseAnywhere && this.show) {
            this.close();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickZone(event) {
        if (this.parent && this.hasClickable) {
            this.parent.focusClick(event, this);
        }
    }
    /**
     * Attach a ComponentPortal as content to this walkthrough container.
     * @template T
     * @param {?} portal Portal to be attached as the walkthrough content.
     * @return {?}
     */
    attachComponentPortal(portal) {
        if (this._portalHost.hasAttached()) {
            throwWalkthroughContentAlreadyAttachedError();
        }
        // this._savePreviouslyFocusedElement();
        return this._portalHost.attachComponentPortal(portal);
    }
    /**
     * Attach a TemplatePortal as content to this walkthrough container.
     * @template C
     * @param {?} portal Portal to be attached as the walkthrough content.
     * @return {?}
     */
    attachTemplatePortal(portal) {
        if (this._portalHost.hasAttached()) {
            throwWalkthroughContentAlreadyAttachedError();
        }
        // this._savePreviouslyFocusedElement();
        return this._portalHost.attachTemplatePortal(portal);
    }
    /**
     * @return {?}
     */
    setHeight() {
        this._renderer.setStyle(this._el.nativeElement, 'height', this._walkthroughService.getDocumentHeight() + 'px');
    }
    /**
     * @param {?} coordinate
     * @param {?} scrollDiff
     * @param {?} animation
     * @param {?} animationDelays
     * @param {?} continueFunction
     * @return {?}
     */
    hightlightZone(coordinate, scrollDiff, animation, animationDelays, continueFunction) {
        const /** @type {?} */ element = (/** @type {?} */ (this.zone.nativeElement));
        const /** @type {?} */ zoneStyle = element.style;
        const /** @type {?} */ style = window.getComputedStyle(element, null);
        if (animation === 'linear' && animationDelays > 0 && style.left !== 'auto') {
            this.hideOther = true;
            const /** @type {?} */ fragment = 20;
            const /** @type {?} */ intervale = animationDelays / fragment;
            const /** @type {?} */ left = parseInt(style.left, 10);
            const /** @type {?} */ top = scrollDiff + parseInt(style.top, 10);
            const /** @type {?} */ width = parseInt(style.width, 10);
            const /** @type {?} */ height = parseInt(style.height, 10);
            const /** @type {?} */ partLeft = (coordinate.left - left) / fragment;
            const /** @type {?} */ partTop = (coordinate.top - top) / fragment;
            const /** @type {?} */ partWidth = (coordinate.width - width) / fragment;
            const /** @type {?} */ partHeight = (coordinate.height - height) / fragment;
            let /** @type {?} */ count = 0;
            this.show = true;
            zoneStyle.borderRadius = '50%';
            const /** @type {?} */ timer = setInterval(() => {
                zoneStyle.left = (left + partLeft * count) + 'px';
                zoneStyle.top = (top + partTop * count) + 'px';
                zoneStyle.width = (width + partWidth * count) + 'px';
                zoneStyle.height = (height + partHeight * count) + 'px';
                if (count++ >= fragment) {
                    clearInterval(timer);
                    this.hideOther = false;
                    continueFunction();
                }
            }, intervale);
        }
        else {
            zoneStyle.left = coordinate.left + 'px';
            zoneStyle.top = coordinate.top + 'px';
            zoneStyle.width = coordinate.width + 'px';
            zoneStyle.height = coordinate.height + 'px';
            continueFunction();
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    hightlightZoneStyling(element) {
        if (element) {
            const /** @type {?} */ zoneStyle = (/** @type {?} */ (this.zone.nativeElement)).style;
            if (this.radius) {
                if (Number(this.radius) === parseFloat(this.radius)) {
                    // if is numeric, change in %
                    zoneStyle.borderRadius = this.radius + '%';
                }
                else if (this.radius === 'auto') {
                    // if mode auto
                    const /** @type {?} */ elementStyle = window.getComputedStyle(element, null);
                    // borderRadius work only on Chrome, use TopLeft, TopRight... for Firefox/Egde/IE
                    zoneStyle.borderTopLeftRadius = elementStyle.borderTopLeftRadius;
                    zoneStyle.borderTopRightRadius = elementStyle.borderTopRightRadius;
                    zoneStyle.borderBottomLeftRadius = elementStyle.borderBottomLeftRadius;
                    zoneStyle.borderBottomRightRadius = elementStyle.borderBottomRightRadius;
                }
                else {
                    // if is numeric, change in %
                    zoneStyle.borderRadius = this.radius;
                }
            }
            else {
                zoneStyle.borderRadius = '';
            }
        }
    }
    /**
     * @param {?} coordinate
     * @param {?} alignContent
     * @param {?} verticalAlignContent
     * @param {?} contentSpacing
     * @param {?} verticalContentSpacing
     * @return {?}
     */
    contentBlockPosition(coordinate, alignContent, verticalAlignContent, contentSpacing, verticalContentSpacing) {
        const /** @type {?} */ element = /** @type {?} */ (this.contentBlock.nativeElement);
        const /** @type {?} */ elementSize = this._walkthroughService.retrieveCoordinates(element);
        const /** @type {?} */ width = elementSize.width + elementSize.margin.left + elementSize.margin.right;
        const /** @type {?} */ height = elementSize.height + elementSize.margin.top + elementSize.margin.bottom;
        // check if we've got the space to respect the alignContent attribute
        let /** @type {?} */ notEnoughSpace = false;
        if (this.hasHighlightZone) {
            const /** @type {?} */ spaceLeft = coordinate.left;
            const /** @type {?} */ spaceRight = window.innerWidth - coordinate.left - coordinate.width;
            if (spaceLeft < width && spaceRight < width) {
                notEnoughSpace = true;
            }
            // if not enough space to respect the alignContent, content goes above/below
            if ((verticalAlignContent === 'top' ||
                verticalAlignContent === 'center' ||
                verticalAlignContent === 'bottom') && !notEnoughSpace) {
                // change align center to left or right if not enough space to align center
                if (alignContent === 'center') {
                    const /** @type {?} */ maxSpace = Math.max(spaceRight, spaceLeft);
                    if (maxSpace < width + ((window.innerWidth - width) / 2)) {
                        alignContent = spaceRight > spaceLeft ? 'right' : 'left';
                    }
                }
                else if (alignContent === 'left' && spaceLeft < width ||
                    alignContent === 'right' && spaceRight < width) {
                    verticalAlignContent = verticalAlignContent === 'bottom' || coordinate.top < height ? 'below' : 'above';
                }
            }
        }
        // if not enough space on screen width, we center the content
        if (notEnoughSpace) {
            alignContent = 'center';
        }
        // position of content left/center/right
        element.style.right = '';
        element.style.left = '';
        if (alignContent === 'left') {
            element.style.left = '0';
            if (this.hasHighlightZone) {
                const /** @type {?} */ space = coordinate.left - width;
                // handle contentSpacing
                if (contentSpacing && space > contentSpacing) {
                    element.style.left = (coordinate.left -
                        width -
                        contentSpacing) + 'px';
                }
            }
        }
        else if (alignContent === 'center') {
            element.style.left = (window.innerWidth / 2 - width / 2) + 'px';
        }
        else if (alignContent === 'right') {
            element.style.right = '0';
            if (this.hasHighlightZone) {
                const /** @type {?} */ space = window.innerWidth - coordinate.left - coordinate.width - width;
                // handle contentSpacing
                if (contentSpacing && space > contentSpacing) {
                    element.style.right = '';
                    element.style.left = (coordinate.left +
                        coordinate.width +
                        contentSpacing) + 'px';
                }
            }
        }
        if (this.hasHighlightZone) {
            // for arrow position
            const /** @type {?} */ startLeft = this._walkthroughService.retrieveCoordinates(element).left + width / 2;
            this._arrowPosition = startLeft > (coordinate.left - WalkthroughComponent.minimalMargin)
                && startLeft < (coordinate.left + coordinate.width + WalkthroughComponent.minimalMargin)
                ? 'topBottom' : 'leftRight';
            // if there is enough place on the left or on the right, we consider verticalAlignContent, otherwise, we ignore it
            if (verticalAlignContent && !notEnoughSpace) {
                let /** @type {?} */ space = 0;
                this._contentPosition = verticalAlignContent;
                switch (verticalAlignContent) {
                    case 'above':
                        space = coordinate.top;
                        if (space > verticalContentSpacing) {
                            element.style.top = (coordinate.top - height - verticalContentSpacing) + 'px';
                        }
                        else {
                            element.style.top = '0';
                        }
                        this._arrowPosition = 'topBottom';
                        break;
                    case 'top':
                        element.style.top = (coordinate.top) + 'px';
                        break;
                    case 'center':
                        element.style.top = (coordinate.top + (coordinate.height / 2) - (height / 2)) + 'px';
                        break;
                    case 'bottom':
                        element.style.top = (coordinate.top + coordinate.height - height) + 'px';
                        break;
                    case 'below':
                        space = this._walkthroughService.getDocumentHeight() - coordinate.top + coordinate.height;
                        if (space > verticalContentSpacing) {
                            element.style.top = (coordinate.top + coordinate.height + verticalContentSpacing) + 'px';
                        }
                        else {
                            element.style.top = (this._walkthroughService.getDocumentHeight() - height) + 'px';
                        }
                        this._arrowPosition = 'topBottom';
                        break;
                }
            }
            else {
                // position of content top/bottom
                if (verticalAlignContent === 'below' || coordinate.top < height) {
                    element.style.top = (coordinate.top + coordinate.height + WalkthroughComponent.minimalMargin) + 'px';
                    this._contentPosition = 'below';
                }
                else {
                    element.style.top = (coordinate.top - height - WalkthroughComponent.minimalMargin) + 'px';
                    this._contentPosition = 'above';
                }
            }
        }
        else {
            element.style.top = (this._walkthroughService.getHeightOfPage() / 2 - height / 2) + 'px';
        }
    }
    /**
     * @param {?} coordinate
     * @param {?} verticalContentSpacing
     * @return {?}
     */
    arrowPosition(coordinate, verticalContentSpacing) {
        const /** @type {?} */ contentBlockElement = /** @type {?} */ (this.contentBlock.nativeElement);
        const /** @type {?} */ contentBlockCoordinates = this._walkthroughService.retrieveCoordinates(contentBlockElement);
        let /** @type {?} */ startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width / 2;
        let /** @type {?} */ startTop = contentBlockCoordinates.top + contentBlockCoordinates.height;
        let /** @type {?} */ centerTop;
        let /** @type {?} */ centerLeft;
        let /** @type {?} */ endLeft = coordinate.left;
        let /** @type {?} */ endTop = coordinate.top + this.marginZonePx.top;
        switch (this._contentPosition) {
            case 'top':
            case 'center':
            case 'bottom':
                if (contentBlockCoordinates.left > coordinate.left) {
                    startLeft = contentBlockCoordinates.left;
                }
                else {
                    startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width;
                }
                startTop -= contentBlockCoordinates.height / 2;
                break;
            case 'below':
                startTop -= contentBlockCoordinates.height;
                break;
        }
        if (this._arrowPosition === 'topBottom') {
            endLeft += coordinate.width / 2;
            if (this._contentPosition === 'below') {
                endTop += coordinate.height + 6;
            }
            else {
                endTop -= 6;
            }
            centerLeft = (startLeft + endLeft) / 2;
            centerTop = (startTop + endTop) / 2;
            this.arrowPath = `M${startLeft},${startTop} Q${startLeft},${centerTop} ${centerLeft},${centerTop} `
                + `Q${endLeft},${centerTop} ${endLeft},${endTop}`;
        }
        else {
            if (startLeft > coordinate.left) {
                endLeft += coordinate.width + this.arrowMarkerDist;
            }
            else {
                endLeft -= this.arrowMarkerDist;
            }
            endTop += coordinate.height / 2;
            centerLeft = (startLeft + endLeft) / 2;
            centerTop = (startTop + endTop) / 2;
            let /** @type {?} */ directStartLeft = startLeft;
            let /** @type {?} */ directStartTop = startTop;
            if (this._contentPosition === 'top' || this._contentPosition === 'bottom') {
                directStartLeft = contentBlockCoordinates.left + (contentBlockCoordinates.width / 2);
                directStartTop = (this._contentPosition === 'top') ?
                    (contentBlockCoordinates.top + contentBlockCoordinates.height) :
                    (contentBlockCoordinates.top);
                // we use direct curve only if the arrow don't cross the content, otherwise, we use double curved
                if ((this._contentPosition === 'top' && directStartTop < (endTop - WalkthroughComponent.minimalMargin)) ||
                    (this._contentPosition === 'bottom' && directStartTop > (endTop + WalkthroughComponent.minimalMargin))) {
                    this.arrowPath = `M${directStartLeft},${directStartTop} Q${directStartLeft},${endTop} ${endLeft},${endTop}`;
                }
                else {
                    this.arrowPath = `M${startLeft},${startTop} Q${centerLeft},${startTop} ${centerLeft},${centerTop} `
                        + `Q${centerLeft},${endTop} ${endLeft},${endTop}`;
                }
            }
            else {
                this.arrowPath = `M${directStartLeft},${directStartTop} Q${directStartLeft},${endTop} ${endLeft},${endTop}`;
            }
        }
    }
    /**
     * stop the walkthrough : hide the container and change to pause at true
     * @return {?}
     */
    stop() {
        if (this.parent && !this.pause && this.show) {
            this.show = false;
            this.pause = true;
        }
    }
    /**
     * continue the walkthrough if is stopped : show the container and change to pause at false
     * @param {?=} unpause
     * @return {?}
     */
    continue(unpause = false) {
        if (this.parent && this.pause) {
            this.show = true;
            this.pause = false;
            if (unpause) {
                // if focusElement does not exist anymore, we close the walkthrough (without emiting any event)
                if (this.parent.focusElementSelector && !document.querySelector(this.parent.focusElementSelector)) {
                    this.close(false, false);
                }
                else {
                    // we update elements positioning on the current walkthrough
                    this.parent.refresh();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    open() {
        // change markerUrl on Safari
        // related to
        // https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2
        // http://stackoverflow.com/a/18265336/796152
        // http://www.w3.org/TR/SVG/linking.html
        if (is_safari) {
            this.markerUrl = 'url(' + window.location.href + '#wkt-arrow)';
        }
        this.show = true;
    }
    /**
     * @return {?}
     */
    previous() {
        this.close(false, false);
        // we check if previous walkthrough is not disabled
        let /** @type {?} */ current = this.parent;
        while (current) {
            if (current.previousStep && !current.previousStep.disabled) {
                current.loadPrevioustStep();
                return;
            }
            else {
                if (!current.previousStep) {
                    break;
                }
                current = current.previousStep;
            }
        }
        // no more previous walkthrough enabled, we quit the walkthrough
        this.parent = current;
        this.close(true, true);
    }
    /**
     * @return {?}
     */
    next() {
        this.close(false, false);
        // we check if next walkthrough is not disabled
        let /** @type {?} */ current = this.parent;
        while (current) {
            if (current.nextStep && !current.nextStep.disabled) {
                current.loadNextStep();
                return;
            }
            else {
                if (!current.nextStep) {
                    break;
                }
                current = current.nextStep;
            }
        }
        // no more next walkthrough enabled, we quit the walkthrough
        this.parent = current;
        this.close(true, true);
    }
    /**
     * @param {?=} finishLink
     * @param {?=} closeWalkthrough
     * @return {?}
     */
    close(finishLink = false, closeWalkthrough = true) {
        // remove content
        this._portalHost.dispose();
        // hide
        this.show = false;
        if (this.parent) {
            this.parent.hide(finishLink, closeWalkthrough);
        }
    }
}
WalkthroughContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'walkthrough-container',
                styles: [":host { display: block; position: absolute; z-index: 1; top: 0; left: 0; width: 99.9%; min-height: 100%; } :host.hide { display: none; } :host.cursor { cursor: pointer; } :host.backdrop { background-color: rgba(0, 0, 0, 0.6); } button { background: none; border: 0; color: #FFF; } .wkt-zone { position: absolute; } .wkt-zone.hide { display: none; } .wkt-zone.backdrop { box-shadow: 0 0 0 2200px rgba(0, 0, 0, 0.6); } .wkt-zone.glow { box-shadow: 0 0 4px 2px #FFFF66, 0 0 9px 0 #FFFF66, 0 0 36px #FFFF66; } .wkt-zone.clickable { cursor: pointer; } .wkt-zone.highlight { -webkit-animation: highlight .45s 4; animation: highlight .45s 4; } .wkt-container { position: relative; } .wkt-content-block { position: absolute; margin: 1em; padding: 6px; z-index: 1; color: #FFF; min-width: calc(320px - 2em); } .wkt-content-block.hide { display: none; } .wkt-content-block.darken { background-color: rgba(0, 0, 0, 0.6); } .wkt-close + .wkt-content { margin-top: 1.3em; } .wkt-close { position: absolute; right: 1em; cursor: pointer; } .wkt-navigate { display: flex; flex-wrap: wrap; justify-content: center; } .wkt-navigate > button { padding: 6px; font-size: 120%; } .wkt-navigate > button:hover { cursor: pointer; text-decoration: underline; } .wkt-previous-link::before { content: '<< '; } .wkt-next-link::after { content: ' >>'; } div.hide { display: none; } svg { overflow: visible; position: absolute; top: -1px; left: -1px; border: 1px solid transparent; } #wkt-arrow > path { stroke-width: 0; } .wkt-arrow-path { stroke-width: 2px; fill: none; } @-webkit-keyframes highlight { 0% { background-color: none; } 50% { background-color: rgba(255, 255, 255, 0.8); } 100% { background-color: none; } } @keyframes highlight { 0% { background-color: none; } 50% { background-color: rgba(255, 255, 255, 0.8); } 100% { background-color: none; } } @media screen and (min-width: 1920px), screen and (min-height: 1920px) { .wkt-zone.backdrop { box-shadow: 0 0 0 4400px rgba(0, 0, 0, 0.6); } } @media screen and (min-width: 3840px), screen and (min-height: 3840px) { .wkt-zone.backdrop { box-shadow: 0 0 0 8800px rgba(0, 0, 0, 0.6); } } _:default:not(:root:root), .wkt-zone.backdrop { box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.6) !important; } "],
                template: "<div class=\"wkt-container\"> <div class=\"wkt-zone\" #zone (click)=\"clickZone($event)\" [class.hide]=\"!hasHighlightZone\" [class.backdrop]=\"hasBackdrop\" [class.glow]=\"hasGlow\" [class.clickable]=\"hasClickable\" [class.highlight]=\"hasHighlight\" [style.padding]=\"marginZone\"></div> <div class=\"wkt-content-block\" [class.hide]=\"hideOther\" [class.darken]=\"contentStyle === 'draken'\" #contentBlock> <button type=\"button\" class=\"wkt-close\" *ngIf=\"hasCloseButton\" (click)=\"close()\">✖</button> <div class=\"wkt-content\"> <p *ngIf=\"contentText\">{{contentText}}</p> <ng-template cdkPortalHost></ng-template> </div> <div class=\"wkt-navigate\" *ngIf=\"hasPrevious||hasNext||hasFinish\"> <button type=\"button\" class=\"wkt-previous-link\" *ngIf=\"hasPrevious\" (click)=\"previous()\">{{text.previous}}</button> <button type=\"button\" class=\"wkt-next-link\" *ngIf=\"hasNext\" (click)=\"next()\">{{text.next}}</button> <button type=\"button\" class=\"wkt-finish-link\" *ngIf=\"hasFinish\" (click)=\"close(true)\">{{text.close}}</button> </div> </div> <div *ngIf=\"hasArrow\" [class.hide]=\"hideOther\"> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\"> <defs> <marker id=\"wkt-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerUnits=\"strokeWidth\" orient=\"auto\" markerWidth=\"10\" markerHeight=\"10\"> <polyline points=\"0,0 10,5 0,10 5,5\" stroke-width=\"0\" [attr.fill]=\"arrowColor || '#FFF'\" /> </marker> </defs> <path class=\"wkt-arrow-path\" [attr.d]=\"arrowPath\" [attr.stroke]=\"arrowColor || '#FFF'\" [attr.marker-end]=\"markerUrl\" /> </svg> </div> </div>"
            },] },
];
/** @nocollapse */
WalkthroughContainerComponent.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: WalkthroughService, },
    { type: Renderer2, },
    { type: ElementRef, },
];
WalkthroughContainerComponent.propDecorators = {
    "_portalHost": [{ type: ViewChild, args: [CdkPortalOutlet,] },],
    "content": [{ type: ViewChild, args: ['content',] },],
    "contentBlock": [{ type: ViewChild, args: ['contentBlock',] },],
    "zone": [{ type: ViewChild, args: ['zone',] },],
    "id": [{ type: HostBinding, args: ['attr.id',] },],
    "hide": [{ type: HostBinding, args: ['class.hide',] },],
    "cursor": [{ type: HostBinding, args: ['class.cursor',] },],
    "backdrop": [{ type: HostBinding, args: ['class.backdrop',] },],
    "click": [{ type: HostListener, args: ['click',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let nextUniqueId = 0;
class WalkthroughComponent {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _applicationRef
     * @param {?} _injector
     * @param {?} _renderer
     * @param {?} _walkthroughService
     */
    constructor(_componentFactoryResolver, _applicationRef, _injector, _renderer, _walkthroughService) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._renderer = _renderer;
        this._walkthroughService = _walkthroughService;
        this.closed = new EventEmitter();
        this.finished = new EventEmitter();
        this.ready = new EventEmitter();
        this.typeSelector = 'element';
        this.contentStyle = 'draken';
        this.animation = 'none';
        this.animationDelays = 0;
        this._uid = `walkthrough-${nextUniqueId++}`;
        this._readyHasBeenEmited = false;
        this._display = false;
        this._hasHighlightAnimation = false;
        this._hasBackdrop = false;
        this._hasGlow = false;
        this._hasFinish = false;
        this._hasArrow = false;
        this._hasCloseButton = false;
        this._hasCloseAnywhere = true;
        this._disabled = false;
        this._marginZonePx = new WalkthroughMargin();
        this._alignContent = 'left';
        this._verticalAlignContent = 'top';
        this._contentSpacing = 0;
        this._verticalContentSpacing = 50;
    }
    /**
     * @return {?}
     */
    get marginZone() { return this._marginZone; }
    /**
     * @param {?} points
     * @return {?}
     */
    set marginZone(points) {
        if (this._marginZone !== points) {
            if (points === null) {
                this._marginZone = null;
            }
            this._marginZonePx = WalkthroughMargin.parsePoints(points);
            if (this._marginZonePx !== null) {
                this._marginZone = points;
            }
        }
    }
    /**
     * @return {?}
     */
    get arrowColor() { return this._arrowColor; }
    /**
     * @param {?} color
     * @return {?}
     */
    set arrowColor(color) {
        if (this._arrowColor !== color) {
            this._arrowColor = color;
            if (this._getInstance()) {
                this._getInstance().arrowColor = this._arrowColor;
            }
        }
    }
    /**
     * @return {?}
     */
    get id() { return this._id; }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) { this._id = value || this._uid; }
    /**
     * @return {?}
     */
    get alignContent() {
        return this._alignContent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set alignContent(value) {
        if (this._alignContent !== value) {
            this._alignContent = value;
            this._updateElementPositions(this._getInstance());
        }
        else {
            this._alignContent = value;
        }
    }
    /**
     * @return {?}
     */
    get verticalAlignContent() {
        return this._verticalAlignContent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set verticalAlignContent(value) {
        if (this._verticalAlignContent !== value) {
            this._verticalAlignContent = value;
            this._updateElementPositions(this._getInstance());
        }
        else {
            this._verticalAlignContent = value;
        }
    }
    /**
     * @return {?}
     */
    get contentSpacing() {
        return this._contentSpacing;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set contentSpacing(value) {
        value = Math.max(WalkthroughComponent.minimalMargin, value);
        if (this._contentSpacing !== value) {
            this._contentSpacing = value * 1;
            this._updateElementPositions(this._getInstance());
        }
        else {
            this._contentSpacing = value * 1;
        }
    }
    /**
     * @return {?}
     */
    get verticalContentSpacing() {
        return this._verticalContentSpacing;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set verticalContentSpacing(value) {
        value = Math.max(WalkthroughComponent.minimalMargin, value);
        if (this._verticalContentSpacing !== value) {
            this._verticalContentSpacing = value * 1;
            this._updateElementPositions(this._getInstance());
        }
        else {
            this._verticalContentSpacing = value * 1;
        }
    }
    /**
     * @return {?}
     */
    get closeButton() {
        return this._hasCloseButton;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set closeButton(value) {
        this._hasCloseButton = booleanValue(value);
    }
    /**
     * @return {?}
     */
    get closeAnywhere() {
        return this._hasCloseAnywhere;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set closeAnywhere(value) {
        this._hasCloseAnywhere = booleanValue(value);
    }
    /**
     * @return {?}
     */
    get showArrow() {
        return this._hasArrow;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showArrow(value) {
        this._hasArrow = booleanValue(value);
    }
    /**
     * @return {?}
     */
    get finishButton() {
        return this._hasFinish;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set finishButton(value) {
        this._hasFinish = booleanValue(value);
    }
    /**
     * @return {?}
     */
    get focusHighlightAnimation() {
        return this._hasHighlightAnimation;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set focusHighlightAnimation(value) {
        this._hasHighlightAnimation = booleanValue(value);
    }
    /**
     * @return {?}
     */
    get focusBackdrop() {
        return this._hasBackdrop;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set focusBackdrop(value) {
        this._hasBackdrop = booleanValue(value);
    }
    /**
     * @return {?}
     */
    get focusGlow() {
        return this._hasGlow;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set focusGlow(value) {
        this._hasGlow = booleanValue(value);
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
        const /** @type {?} */ instance = this._getInstance();
        if (instance) {
            setTimeout(() => {
                instance.hasPrevious = this._hasPreviousStep(instance);
                instance.hasNext = this._hasNextStep(instance);
                if (!instance.hasNext) {
                    instance.hasFinish = true;
                }
                else {
                    instance.hasFinish = /** @type {?} */ (instance.parent.finishButton);
                }
            }, 50);
        }
    }
    /**
     * @return {?}
     */
    static walkthroughStop() {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.stop();
        }
    }
    /**
     * @return {?}
     */
    static walkthroughHasShow() {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance.show
            : false;
    }
    /**
     * @return {?}
     */
    static walkthroughHasPause() {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance.pause
            : false;
    }
    /**
     * @return {?}
     */
    static walkthroughContinue() {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.continue(true);
        }
    }
    /**
     * @return {?}
     */
    static walkthroughNext() {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.next();
        }
    }
    /**
     * @return {?}
     */
    static walkthroughPrevious() {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.previous();
        }
    }
    /**
     * @return {?}
     */
    resize() {
        if (this._display &&
            WalkthroughComponent._walkthroughContainer &&
            window.innerWidth !== this._windowWidth &&
            !WalkthroughComponent.walkthroughHasPause()) {
            this._elementLocations();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // init the Walkthrough element container
        if (!WalkthroughComponent._walkthroughContainer && !WalkthroughComponent._walkthroughContainerCreating) {
            WalkthroughComponent._walkthroughContainerCreating = true;
            setTimeout(() => {
                WalkthroughComponent._walkthroughContainer =
                    this._appendComponentToBody(WalkthroughContainerComponent);
            }, 0);
        }
    }
    /**
     * @param {?=} closedEvent
     * @param {?=} finishedEvent
     * @return {?}
     */
    next(closedEvent = undefined, finishedEvent = undefined) {
        if (closedEvent) {
            this.closed = closedEvent;
        }
        if (finishedEvent) {
            this.finished = finishedEvent;
        }
        this.open();
    }
    /**
     * @return {?}
     */
    refresh() {
        if (!this._getInstance().pause) {
            this._elementLocations();
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (!this._getInstance().pause) {
            this._elementLocations();
        }
        else {
            console.warn('Another walkthrough is in pause. Please close it before.');
        }
    }
    /**
     * Do not use this method outside of the library
     * @return {?}
     */
    loadPrevioustStep() {
        setTimeout(() => {
            this.previousStep._next(this.closed, this.finished);
        }, 0);
    }
    /**
     * Do not use this method outside of the library
     * @return {?}
     */
    loadNextStep() {
        setTimeout(() => {
            this.nextStep._next(this.closed, this.finished);
        }, 0);
    }
    /**
     * Do not use this method outside of the library
     * @param {?=} finishLink
     * @param {?=} closeWalkthrough
     * @return {?}
     */
    hide(finishLink = false, closeWalkthrough = true) {
        this._display = false;
        // add CSS to focusElement
        if (this.focusElementCSSClass) {
            this._renderer.removeClass(this._focusElement, this.focusElementCSSClass);
        }
        if (closeWalkthrough) {
            setTimeout(() => {
                // emit closed event
                this.closed.emit(finishLink);
                if (!this.nextStep) {
                    // emit finished event
                    this.finished.emit(new WalkthroughEvent(this, this._focusElement));
                }
            }, 20);
        }
    }
    /**
     * @return {?}
     */
    _show() {
        this._display = true;
    }
    /**
     * @param {?=} closedEvent
     * @param {?=} finishedEvent
     * @return {?}
     */
    _next(closedEvent = undefined, finishedEvent = undefined) {
        if (closedEvent) {
            this.closed = closedEvent;
        }
        if (finishedEvent) {
            this.finished = finishedEvent;
        }
        this.open();
    }
    /**
     * @return {?}
     */
    _getInstance() {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance
            : null;
    }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    _appendComponentToBody(component) {
        // create a component reference
        const /** @type {?} */ componentRef = this._componentFactoryResolver.resolveComponentFactory(component).create(this._injector);
        // attach component to the appRef so that so that it will be dirty checked.
        this._applicationRef.attachView(componentRef.hostView);
        // get DOM element from component
        const /** @type {?} */ domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
        document.body.appendChild(domElem);
        return componentRef;
    }
    /**
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} walkthroughContainer
     * @return {?}
     */
    _attachWalkthroughContent(componentOrTemplateRef, walkthroughContainer) {
        if (componentOrTemplateRef instanceof TemplateRef) {
            walkthroughContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, /** @type {?} */ ((null))));
        }
        else {
            const /** @type {?} */ injectionTokens = new WeakMap();
            injectionTokens.set(WalkthroughContainerComponent, walkthroughContainer);
            const /** @type {?} */ injector = new PortalInjector(this._injector, injectionTokens);
            walkthroughContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, undefined, injector));
        }
    }
    /**
     * @return {?}
     */
    _elementLocations() {
        this._getFocusElement();
        const /** @type {?} */ element = this._focusElement;
        if (element) {
            this._walkthroughService.scrollIntoViewIfOutOfView(element);
            // if there is a root element defined (in some cases when position fixed is used, we need to scroll on it)
            if (this.rootElement) {
                document.querySelector(this.rootElement).scrollIntoView(true);
            }
            this._offsetCoordinates = this._walkthroughService.retrieveCoordinates(element, this._marginZonePx);
            if (this.typeSelector === 'zone') {
                const /** @type {?} */ offsetEndCoordinatesEnd = this._walkthroughService.retrieveCoordinates(this._focusElementEnd, this._marginZonePx);
                this._offsetCoordinates.height = offsetEndCoordinatesEnd.top
                    - this._offsetCoordinates.top
                    + offsetEndCoordinatesEnd.height;
                this._offsetCoordinates.width = offsetEndCoordinatesEnd.left
                    - this._offsetCoordinates.left
                    + offsetEndCoordinatesEnd.width;
            }
        }
        else {
            this._offsetCoordinates = null;
        }
        this._setFocus();
        this._windowWidth = window.innerWidth;
    }
    /**
     *
     * @return {?}
     */
    _getFocusElement() {
        let /** @type {?} */ focusElements;
        try {
            focusElements = this.focusElementSelector
                ? /** @type {?} */ (document.querySelectorAll(this.focusElementSelector)) : null;
        }
        catch (/** @type {?} */ error) {
            console.error(`#${this.id}@focusElementSelector: '${this.focusElementSelector}' is not a valid selector.\n`, error);
        }
        // getting focus element
        if (focusElements && focusElements.length > 0) {
            if (focusElements.length > 1) {
                // Multiple items fit selector, displaying first visible as focus item in 'element' mode
                const /** @type {?} */ l = focusElements.length;
                for (let /** @type {?} */ i = 0; i < l; i++) {
                    // offsetHeight not of 0 means visible
                    if (focusElements[i].offsetHeight) {
                        this._focusElement = focusElements[i];
                        i = focusElements.length;
                        break;
                    }
                }
                // if typeSelector is by zone, get also the last element
                if (this.typeSelector === 'zone') {
                    for (let /** @type {?} */ i = l - 1; i >= 0; i--) {
                        // offsetHeight not of 0 means visible
                        if (focusElements[i].offsetHeight) {
                            this._focusElementEnd = focusElements[i];
                            i = focusElements.length;
                            break;
                        }
                    }
                    // this the zone this just a unique element, change mode for 'element'
                    if (this._focusElement === this._focusElementEnd) {
                        this.typeSelector = 'element';
                    }
                }
            }
            else {
                this._focusElement = focusElements[0];
                this.typeSelector = 'element';
            }
        }
        else {
            this._focusElement = null;
        }
    }
    /**
     * get instance, hightlight the focused element et show the template
     * @return {?}
     */
    _setFocus() {
        const /** @type {?} */ instance = this._getInstance();
        if (instance) {
            const /** @type {?} */ scrollY = window.pageXOffset;
            this._initStylingTemplate(instance);
            setTimeout(() => {
                if (this._focusElement && instance.zone) {
                    instance.hightlightZone(this._offsetCoordinates, scrollY - window.pageXOffset, this.animation, this.animationDelays, this._setFocusContinue.bind(this));
                }
                else {
                    this._setFocusContinue();
                }
            }, 20);
        }
    }
    /**
     * @return {?}
     */
    _setFocusContinue() {
        const /** @type {?} */ instance = this._getInstance();
        if (!this._display) {
            this._attachContentTemplate();
            this._initContentTemplate(instance);
        }
        setTimeout(() => {
            instance.hightlightZoneStyling(this._focusElement);
            this._updateElementPositions(instance);
        }, 0);
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    _updateElementPositions(instance) {
        if (WalkthroughComponent._walkthroughContainer && this._getInstance()) {
            setTimeout(() => {
                instance.contentBlockPosition(this._offsetCoordinates, this._alignContent, this._verticalAlignContent, this._contentSpacing, this._verticalContentSpacing);
                if (this._offsetCoordinates && this._focusElement !== null && this._hasArrow) {
                    instance.arrowPosition(this._offsetCoordinates, this._verticalContentSpacing);
                }
                // add CSS to focusElement
                if (this.focusElementCSSClass) {
                    this._renderer.addClass(this._focusElement, this.focusElementCSSClass);
                }
                setTimeout(() => {
                    this._getInstance().setHeight();
                    if (!this._readyHasBeenEmited) {
                        this._readyHasBeenEmited = true;
                        this.ready.emit(new WalkthroughEvent(this, this._focusElement));
                    }
                    const /** @type {?} */ contentBlockNative = /** @type {?} */ (instance.contentBlock.nativeElement);
                    let /** @type {?} */ scrollPos;
                    if (this._focusElement != null) {
                        const /** @type {?} */ coordinatesContent = this._walkthroughService.retrieveCoordinates(contentBlockNative);
                        const /** @type {?} */ coordinatesFocus = this._walkthroughService.retrieveCoordinates(this._focusElement);
                        // is content + focus higher than window ?
                        if (coordinatesContent.height + coordinatesFocus.height > window.innerHeight) {
                            // we scroll on content
                            contentBlockNative.scrollIntoView(true);
                            // we offset the window half of the content height
                            if (coordinatesContent.top > coordinatesFocus.top) {
                                // content below focusZone
                                scrollPos = -(coordinatesContent.height / 2);
                            }
                            else {
                                // content above focusZone
                                scrollPos = +(coordinatesContent.height / 2);
                            }
                        }
                        else {
                            // scroll on element higher minus minimal margin
                            if (coordinatesContent.top > coordinatesFocus.top) {
                                window.scrollTo(coordinatesFocus.left, coordinatesFocus.top);
                                scrollPos = -WalkthroughComponent.minimalMargin;
                            }
                            else {
                                contentBlockNative.scrollIntoView(true);
                                scrollPos = -WalkthroughComponent.minimalMargin;
                            }
                        }
                    }
                    else {
                        // no focus zone, scroll on content minus margin
                        contentBlockNative.scrollIntoView(true);
                        scrollPos = -WalkthroughComponent.minimalMargin;
                    }
                    window.scrollBy(0, scrollPos);
                }, 50);
            }, 0);
        }
    }
    /**
     * Attache the template in the contener, if a template is linked.
     * @return {?}
     */
    _attachContentTemplate() {
        if (this.contentTemplate) {
            this._attachWalkthroughContent(this.contentTemplate, this._getInstance());
        }
    }
    /**
     * init a partof styles of the contenaire
     * @param {?} instance
     * @return {?}
     */
    _initStylingTemplate(instance) {
        const /** @type {?} */ hasHighlightZone = this._focusElement !== null;
        instance.parent = this;
        instance.open();
        instance.hasHighlightZone = hasHighlightZone;
        instance.hasClickable = hasHighlightZone && typeof this.focusClick === 'function';
        instance.hasHighlight = hasHighlightZone && this._hasHighlightAnimation;
        instance.hasBackdrop = this._hasBackdrop;
        instance.hasGlow = hasHighlightZone && this._hasGlow;
    }
    /**
     * init all datas of the contenaire
     * @param {?} instance
     * @return {?}
     */
    _initContentTemplate(instance) {
        const /** @type {?} */ hasHighlightZone = this._focusElement !== null;
        instance.hasPrevious = this._hasPreviousStep(instance);
        instance.hasNext = this._hasNextStep(instance);
        instance.hasCloseButton = this._hasCloseButton;
        instance.hasCloseAnywhere = this._hasCloseAnywhere;
        instance.hasFinish = this._hasFinish || !instance.hasNext;
        instance.hasArrow = hasHighlightZone && this._hasArrow;
        instance.arrowColor = this.arrowColor;
        instance.radius = this.radius;
        instance.marginZone = this._marginZone ? this._marginZone.replace(/(\d+)/g, '$1px') : null;
        instance.marginZonePx = this._marginZonePx;
        instance.contentText = this.contentText;
        instance.contentStyle = this.contentStyle;
        instance.text = this.texts
            ? Object.assign({}, new WalkthroughText(), this.texts) : new WalkthroughText();
        this._show();
    }
    /**
     * check if there is a previous step enabled
     * @param {?} instance
     * @return {?}
     */
    _hasPreviousStep(instance) {
        if (instance.parent) {
            let /** @type {?} */ current = instance.parent.previousStep;
            while (current) {
                if (!current.disabled) {
                    return true;
                }
                current = current.previousStep;
            }
        }
        return false;
    }
    /**
     * check if there is a next step enabled
     * @param {?} instance
     * @return {?}
     */
    _hasNextStep(instance) {
        if (instance.parent) {
            let /** @type {?} */ current = instance.parent.nextStep;
            while (current) {
                if (!current.disabled) {
                    return true;
                }
                current = current.nextStep;
            }
        }
        return false;
    }
}
WalkthroughComponent._walkthroughContainer = null;
WalkthroughComponent._walkthroughContainerCreating = false;
WalkthroughComponent.minimalMargin = 30;
WalkthroughComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-walkthrough',
                template: ''
            },] },
];
/** @nocollapse */
WalkthroughComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: ApplicationRef, },
    { type: Injector, },
    { type: Renderer2, },
    { type: WalkthroughService, },
];
WalkthroughComponent.propDecorators = {
    "closed": [{ type: Output },],
    "finished": [{ type: Output },],
    "ready": [{ type: Output },],
    "focusElementCSSClass": [{ type: Input },],
    "rootElement": [{ type: Input },],
    "focusElementSelector": [{ type: Input },],
    "typeSelector": [{ type: Input },],
    "focusClick": [{ type: Input },],
    "radius": [{ type: Input },],
    "previousStep": [{ type: Input },],
    "nextStep": [{ type: Input },],
    "texts": [{ type: Input },],
    "contentTemplate": [{ type: Input },],
    "contentText": [{ type: Input },],
    "contentStyle": [{ type: Input },],
    "marginZone": [{ type: Input },],
    "arrowColor": [{ type: Input },],
    "animation": [{ type: Input },],
    "animationDelays": [{ type: Input },],
    "id": [{ type: Input },],
    "alignContent": [{ type: Input },],
    "verticalAlignContent": [{ type: Input },],
    "contentSpacing": [{ type: Input },],
    "verticalContentSpacing": [{ type: Input },],
    "closeButton": [{ type: Input },],
    "closeAnywhere": [{ type: Input },],
    "showArrow": [{ type: Input },],
    "finishButton": [{ type: Input },],
    "focusHighlightAnimation": [{ type: Input },],
    "focusBackdrop": [{ type: Input },],
    "focusGlow": [{ type: Input },],
    "disabled": [{ type: Input },],
    "resize": [{ type: HostListener, args: ['window:resize',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let nextUniqueId$1 = 0;
class WalkthroughFlowComponent {
    constructor() {
        this.closed = new EventEmitter();
        this.finished = new EventEmitter();
        this.contentStyle = 'draken';
        this.marginZone = null;
        this._uid = `walkthrough-flow-${nextUniqueId$1++}`;
    }
    /**
     * @return {?}
     */
    get id() { return this._id; }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) { this._id = value || this._uid; }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout(() => {
            this.init();
        }, 0);
    }
    /**
     * @return {?}
     */
    init() {
        let /** @type {?} */ prevComp = null;
        this.walkthroughComponents.forEach((walkthrough) => {
            // navigation auto (ignore previousStep/nextStep on the WalkthroughComponent)
            if (prevComp) {
                walkthrough.previousStep = prevComp;
                prevComp.nextStep = walkthrough;
            }
            prevComp = walkthrough;
            // transmition (only if different from default)
            if (this.closed) {
                walkthrough.closed = this.closed;
            }
            if (this.finished) {
                walkthrough.finished = this.finished;
            }
            if (!walkthrough.contentStyle && this.contentStyle) {
                walkthrough.contentStyle = this.contentStyle;
            }
            if (!walkthrough.arrowColor && this.arrowColor) {
                walkthrough.arrowColor = this.arrowColor;
            }
            if (!walkthrough.marginZone && this.marginZone) {
                walkthrough.marginZone = this.marginZone;
            }
            if (!walkthrough.showArrow && booleanValue(this.showArrow)) {
                walkthrough.showArrow = this.showArrow;
            }
            if (!walkthrough.rootElement && this.rootElement) {
                walkthrough.rootElement = this.rootElement;
            }
            if (!walkthrough.closeButton && booleanValue(this.closeButton)) {
                walkthrough.closeButton = this.closeButton;
            }
            if (walkthrough.closeAnywhere && !booleanValue(this.closeAnywhere)) {
                walkthrough.closeAnywhere = this.closeAnywhere;
            }
            if (!walkthrough.finishButton && booleanValue(this.finishButton)) {
                walkthrough.finishButton = this.finishButton;
            }
            if (!walkthrough.focusBackdrop && booleanValue(this.focusBackdrop)) {
                walkthrough.focusBackdrop = this.focusBackdrop;
            }
            if (!walkthrough.focusGlow && booleanValue(this.focusGlow)) {
                walkthrough.focusGlow = this.focusGlow;
            }
            if (!walkthrough.radius && this.radius) {
                walkthrough.radius = this.radius;
            }
            if (!walkthrough.texts && this.texts) {
                walkthrough.texts = this.texts;
            }
        });
        // navigation auto (close on last step)
        prevComp.finishButton = true;
    }
    /**
     * @return {?}
     */
    start() {
        this.walkthroughComponents.first.open();
    }
}
WalkthroughFlowComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-walkthrough-flow',
                template: ''
            },] },
];
/** @nocollapse */
WalkthroughFlowComponent.ctorParameters = () => [];
WalkthroughFlowComponent.propDecorators = {
    "walkthroughComponents": [{ type: ContentChildren, args: [WalkthroughComponent,] },],
    "id": [{ type: Input },],
    "closed": [{ type: Output },],
    "finished": [{ type: Output },],
    "contentStyle": [{ type: Input },],
    "arrowColor": [{ type: Input },],
    "marginZone": [{ type: Input },],
    "showArrow": [{ type: Input },],
    "rootElement": [{ type: Input },],
    "closeButton": [{ type: Input },],
    "closeAnywhere": [{ type: Input },],
    "finishButton": [{ type: Input },],
    "focusBackdrop": [{ type: Input },],
    "focusGlow": [{ type: Input },],
    "radius": [{ type: Input },],
    "texts": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WalkthroughModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: WalkthroughModule,
            providers: []
        };
    }
}
WalkthroughModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    WalkthroughFlowComponent,
                    WalkthroughComponent,
                    WalkthroughContainerComponent
                ],
                exports: [
                    WalkthroughFlowComponent,
                    WalkthroughComponent,
                    WalkthroughContainerComponent
                ],
                imports: [
                    CommonModule,
                    PortalModule
                ],
                entryComponents: [
                    WalkthroughContainerComponent
                ],
                providers: [
                    WalkthroughService
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { booleanValue, WalkthroughEvent, WalkthroughMargin, WalkthroughComponent, WalkthroughFlowComponent, throwWalkthroughContentAlreadyAttachedError, WalkthroughContainerComponent, WalkthroughText, WalkthroughModule, WalkthroughService as ɵa };
//# sourceMappingURL=angular-walkthrough.js.map
