(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.angularWalkthrough = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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

var booleanValue = function (value) {
    return value === 'true' || value === true;
};
var WalkthroughEvent = (function () {
    function WalkthroughEvent(component, focusElement) {
        this.component = component;
        this.focusElement = focusElement;
    }
    return WalkthroughEvent;
}());
var WalkthroughMargin = (function () {
    function WalkthroughMargin(top, right, bottom, left) {
        if (top === void 0) { top = 0; }
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
    WalkthroughMargin.parsePoints = /**
     * @param {?} points
     * @return {?}
     */
    function (points) {
        var /** @type {?} */ pointsPx;
        if (points.match(/^\d+(?:\s+\d+)*$/)) {
            var /** @type {?} */ split = points.split(/\s+/).map(function (i) { return parseFloat(i); });
            pointsPx = new WalkthroughMargin(split[0], split[1], split[2], split[3]);
        }
        return pointsPx || new WalkthroughMargin();
    };
    return WalkthroughMargin;
}());

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
        { type: core.Directive, args: [{
                    selector: '[cdk-portal], [cdkPortal], [portal]',
                    exportAs: 'cdkPortal',
                },] },
    ];
    /** @nocollapse */
    CdkPortal.ctorParameters = function () { return [
        { type: core.TemplateRef, },
        { type: core.ViewContainerRef, },
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
        _this.attached = new core.EventEmitter();
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
        { type: core.Directive, args: [{
                    selector: '[cdkPortalOutlet], [cdkPortalHost], [portalHost]',
                    exportAs: 'cdkPortalOutlet, cdkPortalHost',
                    inputs: ['portal: cdkPortalOutlet']
                },] },
    ];
    /** @nocollapse */
    CdkPortalOutlet.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver, },
        { type: core.ViewContainerRef, },
    ]; };
    CdkPortalOutlet.propDecorators = {
        "_deprecatedPortal": [{ type: core.Input, args: ['portalHost',] },],
        "_deprecatedPortalHost": [{ type: core.Input, args: ['cdkPortalHost',] },],
        "attached": [{ type: core.Output, args: ['attached',] },],
    };
    return CdkPortalOutlet;
}(BasePortalOutlet));
var PortalModule = /** @class */ (function () {
    function PortalModule() {
    }
    PortalModule.decorators = [
        { type: core.NgModule, args: [{
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
var WalkthroughService = (function () {
    function WalkthroughService() {
        var _this = this;
        this._preventDefault = (function (e) {
            e = e || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }).bind(this);
        this._overflowRegex = /(auto|scroll)/;
        this._preventDefaultForScrollKeys = (function (e) {
            // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40
            if (e.keyCode >= 32 && e.keyCode <= 40) {
                _this._preventDefault(e);
                return false;
            }
        }).bind(this);
    }
    /**
     * @param {?} element
     * @param {?=} margin
     * @return {?}
     */
    WalkthroughService.prototype.retrieveCoordinates = /**
     * @param {?} element
     * @param {?=} margin
     * @return {?}
     */
    function (element, margin) {
        var /** @type {?} */ clientrect = element.getBoundingClientRect();
        var /** @type {?} */ style = window.getComputedStyle(element);
        var /** @type {?} */ coordinates = {
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
    };
    /**
     * @return {?}
     */
    WalkthroughService.prototype.getTop = /**
     * @return {?}
     */
    function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    };
    /**
     * @return {?}
     */
    WalkthroughService.prototype.getDocumentHeight = /**
     * @return {?}
     */
    function () {
        // Height of entire body : https://stackoverflow.com/a/1147768
        var /** @type {?} */ body_height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        return Math.max(this.getHeightOfPage() + this.getTop(), body_height);
    };
    /**
     * @param {?} element
     * @param {?=} marginTop
     * @return {?}
     */
    WalkthroughService.prototype.scrollIntoViewIfOutOfView = /**
     * @param {?} element
     * @param {?=} marginTop
     * @return {?}
     */
    function (element, marginTop) {
        if (marginTop === void 0) { marginTop = 0; }
        var /** @type {?} */ topOfPage = this.getTop();
        var /** @type {?} */ heightOfPage = this.getHeightOfPage();
        var /** @type {?} */ elementY = 0;
        var /** @type {?} */ elementH = 0;
        var /** @type {?} */ parent = element;
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
            var /** @type {?} */ current = element;
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
    };
    /**
     * @param {?} element1
     * @param {?} element2
     * @param {?} margin
     * @return {?}
     */
    WalkthroughService.prototype.scrollToTopElement = /**
     * @param {?} element1
     * @param {?} element2
     * @param {?} margin
     * @return {?}
     */
    function (element1, element2, margin) {
        if (element1 && element2) {
            var /** @type {?} */ element1Position = this.retrieveCoordinates(element1, margin);
            var /** @type {?} */ element2Position = this.retrieveCoordinates(element2, margin);
            var /** @type {?} */ minX = Math.min(element1Position.left, element2Position.left);
            var /** @type {?} */ minY = Math.min(element1Position.top, element2Position.top);
            window.scrollTo(minX - 20, minY - 20);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    WalkthroughService.prototype.getScrollParent = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ scrollParent;
        var /** @type {?} */ style = getComputedStyle(element);
        var /** @type {?} */ excludeStaticParent = style.position === 'absolute';
        if (style.position !== 'fixed') {
            var /** @type {?} */ parent_1 = element.parentElement;
            while (parent_1 && parent_1 !== document.body) {
                style = getComputedStyle(parent_1);
                if (!(excludeStaticParent && style.position === 'static') &&
                    this._overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
                    scrollParent = parent_1;
                    break;
                }
                parent_1 = parent_1.parentElement;
            }
        }
        return scrollParent || document.body;
    };
    /**
     * @return {?}
     */
    WalkthroughService.prototype.getHeightOfPage = /**
     * @return {?}
     */
    function () {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    WalkthroughService.decorators = [
        { type: core.Injectable },
    ];
    return WalkthroughService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WalkthroughText = (function () {
    function WalkthroughText() {
        this.previous = 'Previous';
        this.next = 'Next';
        this.close = 'Close';
    }
    return WalkthroughText;
}());

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var WalkthroughContainerComponent = (function (_super) {
    __extends$1(WalkthroughContainerComponent, _super);
    function WalkthroughContainerComponent(viewContainerRef, _walkthroughService, _renderer, _el) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this._walkthroughService = _walkthroughService;
        _this._renderer = _renderer;
        _this._el = _el;
        _this.markerUrl = 'url(#wkt-arrow)';
        _this.show = false;
        _this.pause = false;
        // highlight zone
        _this.hasHighlightZone = false;
        _this.hasHighlight = false;
        _this.hasBackdrop = false;
        _this.hasGlow = false;
        // navigate
        _this.hasPrevious = false;
        _this.hasNext = false;
        _this.hasFinish = false;
        _this.hasCloseButton = false;
        _this.hasCloseAnywhere = true;
        // arrow
        _this.hasArrow = false;
        _this.arrowMarkerDist = 7;
        _this.marginZonePx = new WalkthroughMargin();
        // texts change / i18n
        _this.text = new WalkthroughText();
        return _this;
    }
    Object.defineProperty(WalkthroughContainerComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.id + '-container' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "hide", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.show;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "cursor", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasCloseAnywhere;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "backdrop", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.hasHighlightZone && this.hasBackdrop;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.click = /**
     * @return {?}
     */
    function () {
        if (this.hasCloseAnywhere && this.show) {
            this.close();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.clickZone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.parent && this.hasClickable) {
            this.parent.focusClick(event, this);
        }
    };
    /**
     * Attach a ComponentPortal as content to this walkthrough container.
     * @param portal Portal to be attached as the walkthrough content.
     */
    /**
     * Attach a ComponentPortal as content to this walkthrough container.
     * @template T
     * @param {?} portal Portal to be attached as the walkthrough content.
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.attachComponentPortal = /**
     * Attach a ComponentPortal as content to this walkthrough container.
     * @template T
     * @param {?} portal Portal to be attached as the walkthrough content.
     * @return {?}
     */
    function (portal) {
        if (this._portalHost.hasAttached()) {
            throwWalkthroughContentAlreadyAttachedError();
        }
        // this._savePreviouslyFocusedElement();
        return this._portalHost.attachComponentPortal(portal);
    };
    /**
     * Attach a TemplatePortal as content to this walkthrough container.
     * @param portal Portal to be attached as the walkthrough content.
     */
    /**
     * Attach a TemplatePortal as content to this walkthrough container.
     * @template C
     * @param {?} portal Portal to be attached as the walkthrough content.
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.attachTemplatePortal = /**
     * Attach a TemplatePortal as content to this walkthrough container.
     * @template C
     * @param {?} portal Portal to be attached as the walkthrough content.
     * @return {?}
     */
    function (portal) {
        if (this._portalHost.hasAttached()) {
            throwWalkthroughContentAlreadyAttachedError();
        }
        // this._savePreviouslyFocusedElement();
        return this._portalHost.attachTemplatePortal(portal);
    };
    /**
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.setHeight = /**
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._el.nativeElement, 'height', this._walkthroughService.getDocumentHeight() + 'px');
    };
    /**
     * @param {?} coordinate
     * @param {?} scrollDiff
     * @param {?} animation
     * @param {?} animationDelays
     * @param {?} continueFunction
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.hightlightZone = /**
     * @param {?} coordinate
     * @param {?} scrollDiff
     * @param {?} animation
     * @param {?} animationDelays
     * @param {?} continueFunction
     * @return {?}
     */
    function (coordinate, scrollDiff, animation, animationDelays, continueFunction) {
        var _this = this;
        var /** @type {?} */ element = (/** @type {?} */ (this.zone.nativeElement));
        var /** @type {?} */ zoneStyle = element.style;
        var /** @type {?} */ style = window.getComputedStyle(element, null);
        if (animation === 'linear' && animationDelays > 0 && style.left !== 'auto') {
            this.hideOther = true;
            var /** @type {?} */ fragment_1 = 20;
            var /** @type {?} */ intervale = animationDelays / fragment_1;
            var /** @type {?} */ left_1 = parseInt(style.left, 10);
            var /** @type {?} */ top_1 = scrollDiff + parseInt(style.top, 10);
            var /** @type {?} */ width_1 = parseInt(style.width, 10);
            var /** @type {?} */ height_1 = parseInt(style.height, 10);
            var /** @type {?} */ partLeft_1 = (coordinate.left - left_1) / fragment_1;
            var /** @type {?} */ partTop_1 = (coordinate.top - top_1) / fragment_1;
            var /** @type {?} */ partWidth_1 = (coordinate.width - width_1) / fragment_1;
            var /** @type {?} */ partHeight_1 = (coordinate.height - height_1) / fragment_1;
            var /** @type {?} */ count_1 = 0;
            this.show = true;
            zoneStyle.borderRadius = '50%';
            var /** @type {?} */ timer_1 = setInterval(function () {
                zoneStyle.left = (left_1 + partLeft_1 * count_1) + 'px';
                zoneStyle.top = (top_1 + partTop_1 * count_1) + 'px';
                zoneStyle.width = (width_1 + partWidth_1 * count_1) + 'px';
                zoneStyle.height = (height_1 + partHeight_1 * count_1) + 'px';
                if (count_1++ >= fragment_1) {
                    clearInterval(timer_1);
                    _this.hideOther = false;
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
    };
    /**
     * @param {?} element
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.hightlightZoneStyling = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element) {
            var /** @type {?} */ zoneStyle = (/** @type {?} */ (this.zone.nativeElement)).style;
            if (this.radius) {
                if (Number(this.radius) === parseFloat(this.radius)) {
                    // if is numeric, change in %
                    zoneStyle.borderRadius = this.radius + '%';
                }
                else if (this.radius === 'auto') {
                    // if mode auto
                    var /** @type {?} */ elementStyle = window.getComputedStyle(element, null);
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
    };
    /**
     * @param {?} coordinate
     * @param {?} alignContent
     * @param {?} verticalAlignContent
     * @param {?} contentSpacing
     * @param {?} verticalContentSpacing
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.contentBlockPosition = /**
     * @param {?} coordinate
     * @param {?} alignContent
     * @param {?} verticalAlignContent
     * @param {?} contentSpacing
     * @param {?} verticalContentSpacing
     * @return {?}
     */
    function (coordinate, alignContent, verticalAlignContent, contentSpacing, verticalContentSpacing) {
        var /** @type {?} */ element = /** @type {?} */ (this.contentBlock.nativeElement);
        var /** @type {?} */ elementSize = this._walkthroughService.retrieveCoordinates(element);
        var /** @type {?} */ width = elementSize.width + elementSize.margin.left + elementSize.margin.right;
        var /** @type {?} */ height = elementSize.height + elementSize.margin.top + elementSize.margin.bottom;
        // check if we've got the space to respect the alignContent attribute
        var /** @type {?} */ notEnoughSpace = false;
        if (this.hasHighlightZone) {
            var /** @type {?} */ spaceLeft = coordinate.left;
            var /** @type {?} */ spaceRight = window.innerWidth - coordinate.left - coordinate.width;
            if (spaceLeft < width && spaceRight < width) {
                notEnoughSpace = true;
            }
            // if not enough space to respect the alignContent, content goes above/below
            if ((verticalAlignContent === 'top' ||
                verticalAlignContent === 'center' ||
                verticalAlignContent === 'bottom') && !notEnoughSpace) {
                // change align center to left or right if not enough space to align center
                if (alignContent === 'center') {
                    var /** @type {?} */ maxSpace = Math.max(spaceRight, spaceLeft);
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
                var /** @type {?} */ space = coordinate.left - width;
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
                var /** @type {?} */ space = window.innerWidth - coordinate.left - coordinate.width - width;
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
            var /** @type {?} */ startLeft = this._walkthroughService.retrieveCoordinates(element).left + width / 2;
            this._arrowPosition = startLeft > (coordinate.left - WalkthroughComponent.minimalMargin)
                && startLeft < (coordinate.left + coordinate.width + WalkthroughComponent.minimalMargin)
                ? 'topBottom' : 'leftRight';
            // if there is enough place on the left or on the right, we consider verticalAlignContent, otherwise, we ignore it
            if (verticalAlignContent && !notEnoughSpace) {
                var /** @type {?} */ space = 0;
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
    };
    /**
     * @param {?} coordinate
     * @param {?} verticalContentSpacing
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.arrowPosition = /**
     * @param {?} coordinate
     * @param {?} verticalContentSpacing
     * @return {?}
     */
    function (coordinate, verticalContentSpacing) {
        var /** @type {?} */ contentBlockElement = /** @type {?} */ (this.contentBlock.nativeElement);
        var /** @type {?} */ contentBlockCoordinates = this._walkthroughService.retrieveCoordinates(contentBlockElement);
        var /** @type {?} */ startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width / 2;
        var /** @type {?} */ startTop = contentBlockCoordinates.top + contentBlockCoordinates.height;
        var /** @type {?} */ centerTop;
        var /** @type {?} */ centerLeft;
        var /** @type {?} */ endLeft = coordinate.left;
        var /** @type {?} */ endTop = coordinate.top + this.marginZonePx.top;
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
            this.arrowPath = "M" + startLeft + "," + startTop + " Q" + startLeft + "," + centerTop + " " + centerLeft + "," + centerTop + " "
                + ("Q" + endLeft + "," + centerTop + " " + endLeft + "," + endTop);
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
            var /** @type {?} */ directStartLeft = startLeft;
            var /** @type {?} */ directStartTop = startTop;
            if (this._contentPosition === 'top' || this._contentPosition === 'bottom') {
                directStartLeft = contentBlockCoordinates.left + (contentBlockCoordinates.width / 2);
                directStartTop = (this._contentPosition === 'top') ?
                    (contentBlockCoordinates.top + contentBlockCoordinates.height) :
                    (contentBlockCoordinates.top);
                // we use direct curve only if the arrow don't cross the content, otherwise, we use double curved
                if ((this._contentPosition === 'top' && directStartTop < (endTop - WalkthroughComponent.minimalMargin)) ||
                    (this._contentPosition === 'bottom' && directStartTop > (endTop + WalkthroughComponent.minimalMargin))) {
                    this.arrowPath = "M" + directStartLeft + "," + directStartTop + " Q" + directStartLeft + "," + endTop + " " + endLeft + "," + endTop;
                }
                else {
                    this.arrowPath = "M" + startLeft + "," + startTop + " Q" + centerLeft + "," + startTop + " " + centerLeft + "," + centerTop + " "
                        + ("Q" + centerLeft + "," + endTop + " " + endLeft + "," + endTop);
                }
            }
            else {
                this.arrowPath = "M" + directStartLeft + "," + directStartTop + " Q" + directStartLeft + "," + endTop + " " + endLeft + "," + endTop;
            }
        }
    };
    /**
     * stop the walkthrough : hide the container and change to pause at true
     */
    /**
     * stop the walkthrough : hide the container and change to pause at true
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.stop = /**
     * stop the walkthrough : hide the container and change to pause at true
     * @return {?}
     */
    function () {
        if (this.parent && !this.pause && this.show) {
            this.show = false;
            this.pause = true;
        }
    };
    /**
     * continue the walkthrough if is stopped : show the container and change to pause at false
     */
    /**
     * continue the walkthrough if is stopped : show the container and change to pause at false
     * @param {?=} unpause
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.continue = /**
     * continue the walkthrough if is stopped : show the container and change to pause at false
     * @param {?=} unpause
     * @return {?}
     */
    function (unpause) {
        if (unpause === void 0) { unpause = false; }
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
    };
    /**
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        // change markerUrl on Safari
        // related to
        // https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2
        // http://stackoverflow.com/a/18265336/796152
        // http://www.w3.org/TR/SVG/linking.html
        if (is_safari) {
            this.markerUrl = 'url(' + window.location.href + '#wkt-arrow)';
        }
        this.show = true;
    };
    /**
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        this.close(false, false);
        // we check if previous walkthrough is not disabled
        var /** @type {?} */ current = this.parent;
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
    };
    /**
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.close(false, false);
        // we check if next walkthrough is not disabled
        var /** @type {?} */ current = this.parent;
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
    };
    /**
     * @param {?=} finishLink
     * @param {?=} closeWalkthrough
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.close = /**
     * @param {?=} finishLink
     * @param {?=} closeWalkthrough
     * @return {?}
     */
    function (finishLink, closeWalkthrough) {
        if (finishLink === void 0) { finishLink = false; }
        if (closeWalkthrough === void 0) { closeWalkthrough = true; }
        // remove content
        this._portalHost.dispose();
        // hide
        this.show = false;
        if (this.parent) {
            this.parent.hide(finishLink, closeWalkthrough);
        }
    };
    WalkthroughContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'walkthrough-container',
                    styles: [":host { display: block; position: absolute; z-index: 1; top: 0; left: 0; width: 99.9%; min-height: 100%; } :host.hide { display: none; } :host.cursor { cursor: pointer; } :host.backdrop { background-color: rgba(0, 0, 0, 0.6); } button { background: none; border: 0; color: #FFF; } .wkt-zone { position: absolute; } .wkt-zone.hide { display: none; } .wkt-zone.backdrop { box-shadow: 0 0 0 2200px rgba(0, 0, 0, 0.6); } .wkt-zone.glow { box-shadow: 0 0 4px 2px #FFFF66, 0 0 9px 0 #FFFF66, 0 0 36px #FFFF66; } .wkt-zone.clickable { cursor: pointer; } .wkt-zone.highlight { -webkit-animation: highlight .45s 4; animation: highlight .45s 4; } .wkt-container { position: relative; } .wkt-content-block { position: absolute; margin: 1em; padding: 6px; z-index: 1; color: #FFF; min-width: calc(320px - 2em); } .wkt-content-block.hide { display: none; } .wkt-content-block.darken { background-color: rgba(0, 0, 0, 0.6); } .wkt-close + .wkt-content { margin-top: 1.3em; } .wkt-close { position: absolute; right: 1em; cursor: pointer; } .wkt-navigate { display: flex; flex-wrap: wrap; justify-content: center; } .wkt-navigate > button { padding: 6px; font-size: 120%; } .wkt-navigate > button:hover { cursor: pointer; text-decoration: underline; } .wkt-previous-link::before { content: '<< '; } .wkt-next-link::after { content: ' >>'; } div.hide { display: none; } svg { overflow: visible; position: absolute; top: -1px; left: -1px; border: 1px solid transparent; } #wkt-arrow > path { stroke-width: 0; } .wkt-arrow-path { stroke-width: 2px; fill: none; } @-webkit-keyframes highlight { 0% { background-color: none; } 50% { background-color: rgba(255, 255, 255, 0.8); } 100% { background-color: none; } } @keyframes highlight { 0% { background-color: none; } 50% { background-color: rgba(255, 255, 255, 0.8); } 100% { background-color: none; } } @media screen and (min-width: 1920px), screen and (min-height: 1920px) { .wkt-zone.backdrop { box-shadow: 0 0 0 4400px rgba(0, 0, 0, 0.6); } } @media screen and (min-width: 3840px), screen and (min-height: 3840px) { .wkt-zone.backdrop { box-shadow: 0 0 0 8800px rgba(0, 0, 0, 0.6); } } _:default:not(:root:root), .wkt-zone.backdrop { box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.6) !important; } "],
                    template: "<div class=\"wkt-container\"> <div class=\"wkt-zone\" #zone (click)=\"clickZone($event)\" [class.hide]=\"!hasHighlightZone\" [class.backdrop]=\"hasBackdrop\" [class.glow]=\"hasGlow\" [class.clickable]=\"hasClickable\" [class.highlight]=\"hasHighlight\" [style.padding]=\"marginZone\"></div> <div class=\"wkt-content-block\" [class.hide]=\"hideOther\" [class.darken]=\"contentStyle === 'draken'\" #contentBlock> <button type=\"button\" class=\"wkt-close\" *ngIf=\"hasCloseButton\" (click)=\"close()\">✖</button> <div class=\"wkt-content\"> <p *ngIf=\"contentText\">{{contentText}}</p> <ng-template cdkPortalHost></ng-template> </div> <div class=\"wkt-navigate\" *ngIf=\"hasPrevious||hasNext||hasFinish\"> <button type=\"button\" class=\"wkt-previous-link\" *ngIf=\"hasPrevious\" (click)=\"previous()\">{{text.previous}}</button> <button type=\"button\" class=\"wkt-next-link\" *ngIf=\"hasNext\" (click)=\"next()\">{{text.next}}</button> <button type=\"button\" class=\"wkt-finish-link\" *ngIf=\"hasFinish\" (click)=\"close(true)\">{{text.close}}</button> </div> </div> <div *ngIf=\"hasArrow\" [class.hide]=\"hideOther\"> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\"> <defs> <marker id=\"wkt-arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerUnits=\"strokeWidth\" orient=\"auto\" markerWidth=\"10\" markerHeight=\"10\"> <polyline points=\"0,0 10,5 0,10 5,5\" stroke-width=\"0\" [attr.fill]=\"arrowColor || '#FFF'\" /> </marker> </defs> <path class=\"wkt-arrow-path\" [attr.d]=\"arrowPath\" [attr.stroke]=\"arrowColor || '#FFF'\" [attr.marker-end]=\"markerUrl\" /> </svg> </div> </div>"
                },] },
    ];
    /** @nocollapse */
    WalkthroughContainerComponent.ctorParameters = function () { return [
        { type: core.ViewContainerRef, },
        { type: WalkthroughService, },
        { type: core.Renderer2, },
        { type: core.ElementRef, },
    ]; };
    WalkthroughContainerComponent.propDecorators = {
        "_portalHost": [{ type: core.ViewChild, args: [CdkPortalOutlet,] },],
        "content": [{ type: core.ViewChild, args: ['content',] },],
        "contentBlock": [{ type: core.ViewChild, args: ['contentBlock',] },],
        "zone": [{ type: core.ViewChild, args: ['zone',] },],
        "id": [{ type: core.HostBinding, args: ['attr.id',] },],
        "hide": [{ type: core.HostBinding, args: ['class.hide',] },],
        "cursor": [{ type: core.HostBinding, args: ['class.cursor',] },],
        "backdrop": [{ type: core.HostBinding, args: ['class.backdrop',] },],
        "click": [{ type: core.HostListener, args: ['click',] },],
    };
    return WalkthroughContainerComponent;
}(BasePortalOutlet));

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var nextUniqueId = 0;
var WalkthroughComponent = (function () {
    function WalkthroughComponent(_componentFactoryResolver, _applicationRef, _injector, _renderer, _walkthroughService) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._renderer = _renderer;
        this._walkthroughService = _walkthroughService;
        this.closed = new core.EventEmitter();
        this.finished = new core.EventEmitter();
        this.ready = new core.EventEmitter();
        this.typeSelector = 'element';
        this.contentStyle = 'draken';
        this.animation = 'none';
        this.animationDelays = 0;
        this._uid = "walkthrough-" + nextUniqueId++;
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
    Object.defineProperty(WalkthroughComponent.prototype, "marginZone", {
        get: /**
         * @return {?}
         */
        function () { return this._marginZone; },
        set: /**
         * @param {?} points
         * @return {?}
         */
        function (points) {
            if (this._marginZone !== points) {
                if (points === null) {
                    this._marginZone = null;
                }
                this._marginZonePx = WalkthroughMargin.parsePoints(points);
                if (this._marginZonePx !== null) {
                    this._marginZone = points;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "arrowColor", {
        get: /**
         * @return {?}
         */
        function () { return this._arrowColor; },
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (this._arrowColor !== color) {
                this._arrowColor = color;
                if (this._getInstance()) {
                    this._getInstance().arrowColor = this._arrowColor;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () { return this._id; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._id = value || this._uid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "alignContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._alignContent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._alignContent !== value) {
                this._alignContent = value;
                this._updateElementPositions(this._getInstance());
            }
            else {
                this._alignContent = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "verticalAlignContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._verticalAlignContent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._verticalAlignContent !== value) {
                this._verticalAlignContent = value;
                this._updateElementPositions(this._getInstance());
            }
            else {
                this._verticalAlignContent = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "contentSpacing", {
        get: /**
         * @return {?}
         */
        function () {
            return this._contentSpacing;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = Math.max(WalkthroughComponent.minimalMargin, value);
            if (this._contentSpacing !== value) {
                this._contentSpacing = value * 1;
                this._updateElementPositions(this._getInstance());
            }
            else {
                this._contentSpacing = value * 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "verticalContentSpacing", {
        get: /**
         * @return {?}
         */
        function () {
            return this._verticalContentSpacing;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = Math.max(WalkthroughComponent.minimalMargin, value);
            if (this._verticalContentSpacing !== value) {
                this._verticalContentSpacing = value * 1;
                this._updateElementPositions(this._getInstance());
            }
            else {
                this._verticalContentSpacing = value * 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "closeButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasCloseButton;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasCloseButton = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "closeAnywhere", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasCloseAnywhere;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasCloseAnywhere = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "showArrow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasArrow;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasArrow = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "finishButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasFinish;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasFinish = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusHighlightAnimation", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasHighlightAnimation;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasHighlightAnimation = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusBackdrop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasBackdrop;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasBackdrop = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusGlow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasGlow;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasGlow = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._disabled = value;
            var /** @type {?} */ instance = this._getInstance();
            if (instance) {
                setTimeout(function () {
                    instance.hasPrevious = _this._hasPreviousStep(instance);
                    instance.hasNext = _this._hasNextStep(instance);
                    if (!instance.hasNext) {
                        instance.hasFinish = true;
                    }
                    else {
                        instance.hasFinish = /** @type {?} */ (instance.parent.finishButton);
                    }
                }, 50);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughStop = /**
     * @return {?}
     */
    function () {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.stop();
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughHasShow = /**
     * @return {?}
     */
    function () {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance.show
            : false;
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughHasPause = /**
     * @return {?}
     */
    function () {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance.pause
            : false;
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughContinue = /**
     * @return {?}
     */
    function () {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.continue(true);
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughNext = /**
     * @return {?}
     */
    function () {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.next();
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughPrevious = /**
     * @return {?}
     */
    function () {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.previous();
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype.resize = /**
     * @return {?}
     */
    function () {
        if (this._display &&
            WalkthroughComponent._walkthroughContainer &&
            window.innerWidth !== this._windowWidth &&
            !WalkthroughComponent.walkthroughHasPause()) {
            this._elementLocations();
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // init the Walkthrough element container
        if (!WalkthroughComponent._walkthroughContainer && !WalkthroughComponent._walkthroughContainerCreating) {
            WalkthroughComponent._walkthroughContainerCreating = true;
            setTimeout(function () {
                WalkthroughComponent._walkthroughContainer =
                    _this._appendComponentToBody(WalkthroughContainerComponent);
            }, 0);
        }
    };
    /**
     * @param {?=} closedEvent
     * @param {?=} finishedEvent
     * @return {?}
     */
    WalkthroughComponent.prototype.next = /**
     * @param {?=} closedEvent
     * @param {?=} finishedEvent
     * @return {?}
     */
    function (closedEvent, finishedEvent) {
        if (closedEvent === void 0) { closedEvent = undefined; }
        if (finishedEvent === void 0) { finishedEvent = undefined; }
        if (closedEvent) {
            this.closed = closedEvent;
        }
        if (finishedEvent) {
            this.finished = finishedEvent;
        }
        this.open();
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        if (!this._getInstance().pause) {
            this._elementLocations();
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this._getInstance().pause) {
            this._elementLocations();
        }
        else {
            console.warn('Another walkthrough is in pause. Please close it before.');
        }
    };
    /**
     * Do not use this method outside of the library
     */
    /**
     * Do not use this method outside of the library
     * @return {?}
     */
    WalkthroughComponent.prototype.loadPrevioustStep = /**
     * Do not use this method outside of the library
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.previousStep._next(_this.closed, _this.finished);
        }, 0);
    };
    /**
     * Do not use this method outside of the library
     */
    /**
     * Do not use this method outside of the library
     * @return {?}
     */
    WalkthroughComponent.prototype.loadNextStep = /**
     * Do not use this method outside of the library
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.nextStep._next(_this.closed, _this.finished);
        }, 0);
    };
    /**
     * Do not use this method outside of the library
     */
    /**
     * Do not use this method outside of the library
     * @param {?=} finishLink
     * @param {?=} closeWalkthrough
     * @return {?}
     */
    WalkthroughComponent.prototype.hide = /**
     * Do not use this method outside of the library
     * @param {?=} finishLink
     * @param {?=} closeWalkthrough
     * @return {?}
     */
    function (finishLink, closeWalkthrough) {
        var _this = this;
        if (finishLink === void 0) { finishLink = false; }
        if (closeWalkthrough === void 0) { closeWalkthrough = true; }
        this._display = false;
        // add CSS to focusElement
        if (this.focusElementCSSClass) {
            this._renderer.removeClass(this._focusElement, this.focusElementCSSClass);
        }
        if (closeWalkthrough) {
            setTimeout(function () {
                // emit closed event
                // emit closed event
                _this.closed.emit(finishLink);
                if (!_this.nextStep) {
                    // emit finished event
                    // emit finished event
                    _this.finished.emit(new WalkthroughEvent(_this, _this._focusElement));
                }
            }, 20);
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype._show = /**
     * @return {?}
     */
    function () {
        this._display = true;
    };
    /**
     * @param {?=} closedEvent
     * @param {?=} finishedEvent
     * @return {?}
     */
    WalkthroughComponent.prototype._next = /**
     * @param {?=} closedEvent
     * @param {?=} finishedEvent
     * @return {?}
     */
    function (closedEvent, finishedEvent) {
        if (closedEvent === void 0) { closedEvent = undefined; }
        if (finishedEvent === void 0) { finishedEvent = undefined; }
        if (closedEvent) {
            this.closed = closedEvent;
        }
        if (finishedEvent) {
            this.finished = finishedEvent;
        }
        this.open();
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype._getInstance = /**
     * @return {?}
     */
    function () {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance
            : null;
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    WalkthroughComponent.prototype._appendComponentToBody = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        // create a component reference
        var /** @type {?} */ componentRef = this._componentFactoryResolver.resolveComponentFactory(component).create(this._injector);
        // attach component to the appRef so that so that it will be dirty checked.
        this._applicationRef.attachView(componentRef.hostView);
        // get DOM element from component
        var /** @type {?} */ domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
        document.body.appendChild(domElem);
        return componentRef;
    };
    /**
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} walkthroughContainer
     * @return {?}
     */
    WalkthroughComponent.prototype._attachWalkthroughContent = /**
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} walkthroughContainer
     * @return {?}
     */
    function (componentOrTemplateRef, walkthroughContainer) {
        if (componentOrTemplateRef instanceof core.TemplateRef) {
            walkthroughContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, /** @type {?} */ ((null))));
        }
        else {
            var /** @type {?} */ injectionTokens = new WeakMap();
            injectionTokens.set(WalkthroughContainerComponent, walkthroughContainer);
            var /** @type {?} */ injector = new PortalInjector(this._injector, injectionTokens);
            walkthroughContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, undefined, injector));
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype._elementLocations = /**
     * @return {?}
     */
    function () {
        this._getFocusElement();
        var /** @type {?} */ element = this._focusElement;
        if (element) {
            this._walkthroughService.scrollIntoViewIfOutOfView(element);
            // if there is a root element defined (in some cases when position fixed is used, we need to scroll on it)
            if (this.rootElement) {
                document.querySelector(this.rootElement).scrollIntoView(true);
            }
            this._offsetCoordinates = this._walkthroughService.retrieveCoordinates(element, this._marginZonePx);
            if (this.typeSelector === 'zone') {
                var /** @type {?} */ offsetEndCoordinatesEnd = this._walkthroughService.retrieveCoordinates(this._focusElementEnd, this._marginZonePx);
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
    };
    /**
     *
     * @return {?}
     */
    WalkthroughComponent.prototype._getFocusElement = /**
     *
     * @return {?}
     */
    function () {
        var /** @type {?} */ focusElements;
        try {
            focusElements = this.focusElementSelector
                ? /** @type {?} */ (document.querySelectorAll(this.focusElementSelector)) : null;
        }
        catch (/** @type {?} */ error) {
            console.error("#" + this.id + "@focusElementSelector: '" + this.focusElementSelector + "' is not a valid selector.\n", error);
        }
        // getting focus element
        if (focusElements && focusElements.length > 0) {
            if (focusElements.length > 1) {
                // Multiple items fit selector, displaying first visible as focus item in 'element' mode
                var /** @type {?} */ l = focusElements.length;
                for (var /** @type {?} */ i = 0; i < l; i++) {
                    // offsetHeight not of 0 means visible
                    if (focusElements[i].offsetHeight) {
                        this._focusElement = focusElements[i];
                        i = focusElements.length;
                        break;
                    }
                }
                // if typeSelector is by zone, get also the last element
                if (this.typeSelector === 'zone') {
                    for (var /** @type {?} */ i = l - 1; i >= 0; i--) {
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
    };
    /**
     * get instance, hightlight the focused element et show the template
     * @return {?}
     */
    WalkthroughComponent.prototype._setFocus = /**
     * get instance, hightlight the focused element et show the template
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ instance = this._getInstance();
        if (instance) {
            var /** @type {?} */ scrollY_1 = window.pageXOffset;
            this._initStylingTemplate(instance);
            setTimeout(function () {
                if (_this._focusElement && instance.zone) {
                    instance.hightlightZone(_this._offsetCoordinates, scrollY_1 - window.pageXOffset, _this.animation, _this.animationDelays, _this._setFocusContinue.bind(_this));
                }
                else {
                    _this._setFocusContinue();
                }
            }, 20);
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype._setFocusContinue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ instance = this._getInstance();
        if (!this._display) {
            this._attachContentTemplate();
            this._initContentTemplate(instance);
        }
        setTimeout(function () {
            instance.hightlightZoneStyling(_this._focusElement);
            _this._updateElementPositions(instance);
        }, 0);
    };
    /**
     * @param {?} instance
     * @return {?}
     */
    WalkthroughComponent.prototype._updateElementPositions = /**
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        var _this = this;
        if (WalkthroughComponent._walkthroughContainer && this._getInstance()) {
            setTimeout(function () {
                instance.contentBlockPosition(_this._offsetCoordinates, _this._alignContent, _this._verticalAlignContent, _this._contentSpacing, _this._verticalContentSpacing);
                if (_this._offsetCoordinates && _this._focusElement !== null && _this._hasArrow) {
                    instance.arrowPosition(_this._offsetCoordinates, _this._verticalContentSpacing);
                }
                // add CSS to focusElement
                if (_this.focusElementCSSClass) {
                    _this._renderer.addClass(_this._focusElement, _this.focusElementCSSClass);
                }
                setTimeout(function () {
                    _this._getInstance().setHeight();
                    if (!_this._readyHasBeenEmited) {
                        _this._readyHasBeenEmited = true;
                        _this.ready.emit(new WalkthroughEvent(_this, _this._focusElement));
                    }
                    var /** @type {?} */ contentBlockNative = /** @type {?} */ (instance.contentBlock.nativeElement);
                    var /** @type {?} */ scrollPos;
                    if (_this._focusElement != null) {
                        var /** @type {?} */ coordinatesContent = _this._walkthroughService.retrieveCoordinates(contentBlockNative);
                        var /** @type {?} */ coordinatesFocus = _this._walkthroughService.retrieveCoordinates(_this._focusElement);
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
    };
    /**
     * Attache the template in the contener, if a template is linked.
     * @return {?}
     */
    WalkthroughComponent.prototype._attachContentTemplate = /**
     * Attache the template in the contener, if a template is linked.
     * @return {?}
     */
    function () {
        if (this.contentTemplate) {
            this._attachWalkthroughContent(this.contentTemplate, this._getInstance());
        }
    };
    /**
     * init a partof styles of the contenaire
     * @param {?} instance
     * @return {?}
     */
    WalkthroughComponent.prototype._initStylingTemplate = /**
     * init a partof styles of the contenaire
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        var /** @type {?} */ hasHighlightZone = this._focusElement !== null;
        instance.parent = this;
        instance.open();
        instance.hasHighlightZone = hasHighlightZone;
        instance.hasClickable = hasHighlightZone && typeof this.focusClick === 'function';
        instance.hasHighlight = hasHighlightZone && this._hasHighlightAnimation;
        instance.hasBackdrop = this._hasBackdrop;
        instance.hasGlow = hasHighlightZone && this._hasGlow;
    };
    /**
     * init all datas of the contenaire
     * @param {?} instance
     * @return {?}
     */
    WalkthroughComponent.prototype._initContentTemplate = /**
     * init all datas of the contenaire
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        var /** @type {?} */ hasHighlightZone = this._focusElement !== null;
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
            ? __assign({}, new WalkthroughText(), this.texts) : new WalkthroughText();
        this._show();
    };
    /**
     * check if there is a previous step enabled
     * @param {?} instance
     * @return {?}
     */
    WalkthroughComponent.prototype._hasPreviousStep = /**
     * check if there is a previous step enabled
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        if (instance.parent) {
            var /** @type {?} */ current = instance.parent.previousStep;
            while (current) {
                if (!current.disabled) {
                    return true;
                }
                current = current.previousStep;
            }
        }
        return false;
    };
    /**
     * check if there is a next step enabled
     * @param {?} instance
     * @return {?}
     */
    WalkthroughComponent.prototype._hasNextStep = /**
     * check if there is a next step enabled
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        if (instance.parent) {
            var /** @type {?} */ current = instance.parent.nextStep;
            while (current) {
                if (!current.disabled) {
                    return true;
                }
                current = current.nextStep;
            }
        }
        return false;
    };
    WalkthroughComponent._walkthroughContainer = null;
    WalkthroughComponent._walkthroughContainerCreating = false;
    WalkthroughComponent.minimalMargin = 30;
    WalkthroughComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng-walkthrough',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    WalkthroughComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver, },
        { type: core.ApplicationRef, },
        { type: core.Injector, },
        { type: core.Renderer2, },
        { type: WalkthroughService, },
    ]; };
    WalkthroughComponent.propDecorators = {
        "closed": [{ type: core.Output },],
        "finished": [{ type: core.Output },],
        "ready": [{ type: core.Output },],
        "focusElementCSSClass": [{ type: core.Input },],
        "rootElement": [{ type: core.Input },],
        "focusElementSelector": [{ type: core.Input },],
        "typeSelector": [{ type: core.Input },],
        "focusClick": [{ type: core.Input },],
        "radius": [{ type: core.Input },],
        "previousStep": [{ type: core.Input },],
        "nextStep": [{ type: core.Input },],
        "texts": [{ type: core.Input },],
        "contentTemplate": [{ type: core.Input },],
        "contentText": [{ type: core.Input },],
        "contentStyle": [{ type: core.Input },],
        "marginZone": [{ type: core.Input },],
        "arrowColor": [{ type: core.Input },],
        "animation": [{ type: core.Input },],
        "animationDelays": [{ type: core.Input },],
        "id": [{ type: core.Input },],
        "alignContent": [{ type: core.Input },],
        "verticalAlignContent": [{ type: core.Input },],
        "contentSpacing": [{ type: core.Input },],
        "verticalContentSpacing": [{ type: core.Input },],
        "closeButton": [{ type: core.Input },],
        "closeAnywhere": [{ type: core.Input },],
        "showArrow": [{ type: core.Input },],
        "finishButton": [{ type: core.Input },],
        "focusHighlightAnimation": [{ type: core.Input },],
        "focusBackdrop": [{ type: core.Input },],
        "focusGlow": [{ type: core.Input },],
        "disabled": [{ type: core.Input },],
        "resize": [{ type: core.HostListener, args: ['window:resize',] },],
    };
    return WalkthroughComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var nextUniqueId$1 = 0;
var WalkthroughFlowComponent = (function () {
    function WalkthroughFlowComponent() {
        this.closed = new core.EventEmitter();
        this.finished = new core.EventEmitter();
        this.contentStyle = 'draken';
        this.marginZone = null;
        this._uid = "walkthrough-flow-" + nextUniqueId$1++;
    }
    Object.defineProperty(WalkthroughFlowComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () { return this._id; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._id = value || this._uid; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WalkthroughFlowComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.init();
        }, 0);
    };
    /**
     * @return {?}
     */
    WalkthroughFlowComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ prevComp = null;
        this.walkthroughComponents.forEach(function (walkthrough) {
            // navigation auto (ignore previousStep/nextStep on the WalkthroughComponent)
            if (prevComp) {
                walkthrough.previousStep = prevComp;
                prevComp.nextStep = walkthrough;
            }
            prevComp = walkthrough;
            // transmition (only if different from default)
            if (_this.closed) {
                walkthrough.closed = _this.closed;
            }
            if (_this.finished) {
                walkthrough.finished = _this.finished;
            }
            if (!walkthrough.contentStyle && _this.contentStyle) {
                walkthrough.contentStyle = _this.contentStyle;
            }
            if (!walkthrough.arrowColor && _this.arrowColor) {
                walkthrough.arrowColor = _this.arrowColor;
            }
            if (!walkthrough.marginZone && _this.marginZone) {
                walkthrough.marginZone = _this.marginZone;
            }
            if (!walkthrough.showArrow && booleanValue(_this.showArrow)) {
                walkthrough.showArrow = _this.showArrow;
            }
            if (!walkthrough.rootElement && _this.rootElement) {
                walkthrough.rootElement = _this.rootElement;
            }
            if (!walkthrough.closeButton && booleanValue(_this.closeButton)) {
                walkthrough.closeButton = _this.closeButton;
            }
            if (walkthrough.closeAnywhere && !booleanValue(_this.closeAnywhere)) {
                walkthrough.closeAnywhere = _this.closeAnywhere;
            }
            if (!walkthrough.finishButton && booleanValue(_this.finishButton)) {
                walkthrough.finishButton = _this.finishButton;
            }
            if (!walkthrough.focusBackdrop && booleanValue(_this.focusBackdrop)) {
                walkthrough.focusBackdrop = _this.focusBackdrop;
            }
            if (!walkthrough.focusGlow && booleanValue(_this.focusGlow)) {
                walkthrough.focusGlow = _this.focusGlow;
            }
            if (!walkthrough.radius && _this.radius) {
                walkthrough.radius = _this.radius;
            }
            if (!walkthrough.texts && _this.texts) {
                walkthrough.texts = _this.texts;
            }
        });
        // navigation auto (close on last step)
        prevComp.finishButton = true;
    };
    /**
     * @return {?}
     */
    WalkthroughFlowComponent.prototype.start = /**
     * @return {?}
     */
    function () {
        this.walkthroughComponents.first.open();
    };
    WalkthroughFlowComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng-walkthrough-flow',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    WalkthroughFlowComponent.ctorParameters = function () { return []; };
    WalkthroughFlowComponent.propDecorators = {
        "walkthroughComponents": [{ type: core.ContentChildren, args: [WalkthroughComponent,] },],
        "id": [{ type: core.Input },],
        "closed": [{ type: core.Output },],
        "finished": [{ type: core.Output },],
        "contentStyle": [{ type: core.Input },],
        "arrowColor": [{ type: core.Input },],
        "marginZone": [{ type: core.Input },],
        "showArrow": [{ type: core.Input },],
        "rootElement": [{ type: core.Input },],
        "closeButton": [{ type: core.Input },],
        "closeAnywhere": [{ type: core.Input },],
        "finishButton": [{ type: core.Input },],
        "focusBackdrop": [{ type: core.Input },],
        "focusGlow": [{ type: core.Input },],
        "radius": [{ type: core.Input },],
        "texts": [{ type: core.Input },],
    };
    return WalkthroughFlowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WalkthroughModule = (function () {
    function WalkthroughModule() {
    }
    /**
     * @return {?}
     */
    WalkthroughModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: WalkthroughModule,
            providers: []
        };
    };
    WalkthroughModule.decorators = [
        { type: core.NgModule, args: [{
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
                        common.CommonModule,
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
    return WalkthroughModule;
}());

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

exports.booleanValue = booleanValue;
exports.WalkthroughEvent = WalkthroughEvent;
exports.WalkthroughMargin = WalkthroughMargin;
exports.WalkthroughComponent = WalkthroughComponent;
exports.WalkthroughFlowComponent = WalkthroughFlowComponent;
exports.throwWalkthroughContentAlreadyAttachedError = throwWalkthroughContentAlreadyAttachedError;
exports.WalkthroughContainerComponent = WalkthroughContainerComponent;
exports.WalkthroughText = WalkthroughText;
exports.WalkthroughModule = WalkthroughModule;
exports.ɵa = WalkthroughService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-walkthrough.umd.js.map
