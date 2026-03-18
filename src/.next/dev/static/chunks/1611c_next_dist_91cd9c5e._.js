(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
const _warnonce = (()=>{
    const e = new Error("Cannot find module '../../utils/warn-once'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function disableSmoothScrollDuringRouteTransition(fn, options = {}) {
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    if (!hasDataAttribute) {
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            (0, _warnonce.warnOnce)('Detected `scroll-behavior: smooth` on the `<html>` element. To disable smooth scrolling during route transitions, ' + 'add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
        // No smooth scrolling configured, run directly without style manipulation
        fn();
        return;
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=disable-smooth-scroll.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bfcache.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ "default", {
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _unresolvedthenable = (()=>{
    const e = new Error("Cannot find module './unresolved-thenable'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorboundary = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = (()=>{
    const e = new Error("Cannot find module './redirect-boundary'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorboundary1 = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _bfcache = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _routeparams = (()=>{
    const e = new Error("Cannot find module '../route-params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _pprnavigations = (()=>{
    const e = new Error("Cannot find module './router-reducer/ppr-navigations'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return document.getElementById(hashFragment) ?? // If the hash fragment is a name, the page has to scroll to the first element with that name.
    document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    if ("TURBOPACK compile-time truthy", 1) {
                        if (domNode.parentElement?.localName === 'head') {
                        // TODO: We enter this state when metadata was rendered as part of the page or via Next.js.
                        // This is always a bug in Next.js and caused by React hoisting metadata.
                        // We need to replace `findDOMNode` in favor of Fragment Refs (when available) so that we can skip over metadata.
                        }
                    }
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        ;
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        // Scroll into view doesn't scroll horizontally by default when not needed
                        ;
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler({ segmentPath, children }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter({ tree, segmentPath, debugNameContext, cacheNode: maybeCacheNode, params, url, isActive }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    const parentNavPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const cacheNode = maybeCacheNode !== null ? maybeCacheNode : // This should only be reachable for inactive/hidden segments, during
    // prerendering The active segment should always be consistent with the
    // CacheNode tree. Regardless, if we don't have a matching CacheNode, we
    // must suspend rather than render nothing, to prevent showing an
    // inconsistent route.
    (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    let resolvedRsc;
    if ((0, _pprnavigations.isDeferredRsc)(rsc)) {
        const unwrappedRsc = (0, _react.use)(rsc);
        if (unwrappedRsc === null) {
            // If the promise was resolved to `null`, it means the data for this
            // segment was not returned by the server. Suspend indefinitely. When this
            // happens, the router is responsible for triggering a new state update to
            // un-suspend this segment.
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = unwrappedRsc;
    } else {
        // This is not a deferred RSC promise. Don't need to unwrap it.
        if (rsc === null) {
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = rsc;
    }
    // In dev, we create a NavigationPromisesContext containing the instrumented promises that provide
    // `useSelectedLayoutSegment` and `useSelectedLayoutSegments`.
    // Promises are cached outside of render to survive suspense retries.
    let navigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createNestedLayoutNavigationPromises } = (()=>{
            const e = new Error("Cannot find module './navigation-devtools'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        navigationPromises = createNestedLayoutNavigationPromises(tree, parentNavPromises);
    }
    let children = resolvedRsc;
    if (navigationPromises) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
            value: navigationPromises,
            children: resolvedRsc
        });
    }
    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            parentParams: params,
            debugNameContext: debugNameContext,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            isActive: isActive
        },
        children: children
    });
    return children;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ name, loading, children }) {
    // If loading is a promise, unwrap it. This happens in cases where we haven't
    // yet received the loading data from the server — which includes whether or
    // not this layout has a loading component at all.
    //
    // It's OK to suspend here instead of inside the fallback because this
    // promise will resolve simultaneously with the data for the segment itself.
    // So it will never suspend for longer than it would have if we didn't use
    // a Suspense fallback at all.
    let loadingModuleData;
    if (typeof loading === 'object' && loading !== null && typeof loading.then === 'function') {
        const promiseForLoading = loading;
        loadingModuleData = (0, _react.use)(promiseForLoading);
    } else {
        loadingModuleData = loading;
    }
    if (loadingModuleData) {
        const loadingRsc = loadingModuleData[0];
        const loadingStyles = loadingModuleData[1];
        const loadingScripts = loadingModuleData[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            name: name,
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter({ parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, parentParams, url, isActive, debugNameContext } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentParallelRoutes = parentCacheNode.parallelRoutes;
    let segmentMap = parentParallelRoutes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!segmentMap) {
        segmentMap = new Map();
        parentParallelRoutes.set(parallelRouterKey, segmentMap);
    }
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const activeTree = parentTree[1][parallelRouterKey];
    if (activeTree === undefined) {
        // Could not find a matching segment. The client tree is inconsistent with
        // the server tree. Suspend indefinitely; the router will have already
        // detected the inconsistency when handling the server response, and
        // triggered a refresh of the page to recover.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    const activeSegment = activeTree[0];
    const activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcache.useRouterBFCache)(activeTree, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        // Read segment path from the parallel router cache node.
        const cacheNode = segmentMap.get(cacheKey) ?? null;
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = (()=>{
                const e = new Error("Cannot find module '../../next-devtools/userspace/app/segment-explorer-node'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        let params = parentParams;
        if (Array.isArray(segment)) {
            // This segment contains a route param. Accumulate these as we traverse
            // down the router tree. The result represents the set of params that
            // the layout/page components are permitted to access below this point.
            const paramName = segment[0];
            const paramCacheKey = segment[1];
            const paramType = segment[2];
            const paramValue = (0, _routeparams.getParamValueFromCacheKey)(paramCacheKey, paramType);
            if (paramValue !== null) {
                params = {
                    ...parentParams,
                    [paramName]: paramValue
                };
            }
        }
        const debugName = getBoundaryDebugNameFromSegment(segment);
        // `debugNameContext` represents the nearest non-"virtual" parent segment.
        // `getBoundaryDebugNameFromSegment` returns undefined for virtual segments.
        // So if `debugName` is undefined, the context is passed through unchanged.
        const childDebugNameContext = debugName ?? debugNameContext;
        // In practical terms, clicking this name in the Suspense DevTools
        // should select the child slots of that layout.
        //
        // So the name we apply to the Activity boundary is actually based on
        // the nearest parent segments.
        //
        // We skip over "virtual" parents, i.e. ones inserted by Next.js that
        // don't correspond to application-defined code.
        const isVirtual = debugName === undefined;
        const debugNameToDisplay = isVirtual ? undefined : debugNameContext;
        // TODO: The loading module data for a segment is stored on the parent, then
        // applied to each of that parent segment's parallel route slots. In the
        // simple case where there's only one parallel route (the `children` slot),
        // this is no different from if the loading module data where stored on the
        // child directly. But I'm not sure this actually makes sense when there are
        // multiple parallel routes. It's not a huge issue because you always have
        // the option to define a narrower loading boundary for a particular slot. But
        // this sort of smells like an implementation accident to me.
        const loadingModuleData = parentCacheNode.loading;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndFocusHandler, {
                segmentPath: segmentPath,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                        errorComponent: error,
                        errorStyles: errorStyles,
                        errorScripts: errorScripts,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                            name: debugNameToDisplay,
                            loading: loadingModuleData,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                                notFound: notFound,
                                forbidden: forbidden,
                                unauthorized: unauthorized,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                            url: url,
                                            tree: tree,
                                            params: params,
                                            cacheNode: cacheNode,
                                            segmentPath: segmentPath,
                                            debugNameContext: childDebugNameContext,
                                            isActive: isActive && stateKey === activeStateKey
                                        }),
                                        segmentBoundaryTriggerNode
                                    ]
                                })
                            })
                        })
                    }),
                    segmentViewStateNode
                ]
            }),
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = (()=>{
                const e = new Error("Cannot find module '../../next-devtools/userspace/app/segment-explorer-node'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
function getBoundaryDebugNameFromSegment(segment) {
    if (segment === '/') {
        // Reached the root
        return '/';
    }
    if (typeof segment === 'string') {
        if (isVirtualLayout(segment)) {
            return undefined;
        } else {
            return segment + '/';
        }
    }
    const paramCacheKey = segment[1];
    return paramCacheKey + '/';
}
function isVirtualLayout(segment) {
    return(// in a more special way instead of checking the name, to distinguish them
    // from app-defined groups.
    segment === '(slot)');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routeparams = (()=>{
    const e = new Error("Cannot find module '../route-params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
function ClientPageRoot({ Component, serverProvidedParams }) {
    let searchParams;
    let params;
    if (serverProvidedParams !== null) {
        searchParams = serverProvidedParams.searchParams;
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params as
        // props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
        // This is an intentional behavior change: when Cache Components is enabled,
        // client segments receive the "canonical" search params, not the
        // rewritten ones. Users should either call useSearchParams directly or pass
        // the rewritten ones in from a Server Component.
        // TODO: Log a deprecation error when this object is accessed
        searchParams = (0, _routeparams.urlSearchParamsToParsedUrlQuery)((0, _react.use)(_hooksclientcontextsharedruntime.SearchParamsContext));
    }
    if (typeof window === 'undefined') {
        const { workAsyncStorage } = (()=>{
            const e = new Error("Cannot find module '../../server/app-render/work-async-storage.external'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        let clientSearchParams;
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling searchParams in a client Page.'), "__NEXT_ERROR_CODE", {
                value: "E564",
                enumerable: false,
                configurable: true
            });
        }
        const { createSearchParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../../server/request/search-params'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        clientSearchParams = createSearchParamsFromClient(searchParams, store);
        const { createParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../../server/request/params'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    } else {
        const { createRenderSearchParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../request/search-params.browser'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        const clientSearchParams = createRenderSearchParamsFromClient(searchParams);
        const { createRenderParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../request/params.browser'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-page.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function ClientSegmentRoot({ Component, slots, serverProvidedParams }) {
    let params;
    if (serverProvidedParams !== null) {
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params
        // as props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
    }
    if (typeof window === 'undefined') {
        const { workAsyncStorage } = (()=>{
            const e = new Error("Cannot find module '../../server/app-render/work-async-storage.external'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling params in a client segment such as a Layout or Template.'), "__NEXT_ERROR_CODE", {
                value: "E600",
                enumerable: false,
                configurable: true
            });
        }
        const { createParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../../server/request/params'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    } else {
        const { createRenderParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../request/params.browser'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-segment.js.map
}),
]);

//# sourceMappingURL=1611c_next_dist_91cd9c5e._.js.map