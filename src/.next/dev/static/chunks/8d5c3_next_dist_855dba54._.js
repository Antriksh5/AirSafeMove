(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    AppRouterContext: null,
    GlobalLayoutRouterContext: null,
    LayoutRouterContext: null,
    MissingSlotContext: null,
    TemplateContext: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRouterContext: function() {
        return AppRouterContext;
    },
    GlobalLayoutRouterContext: function() {
        return GlobalLayoutRouterContext;
    },
    LayoutRouterContext: function() {
        return LayoutRouterContext;
    },
    MissingSlotContext: function() {
        return MissingSlotContext;
    },
    TemplateContext: function() {
        return TemplateContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const AppRouterContext = _react.default.createContext(null);
const LayoutRouterContext = _react.default.createContext(null);
const GlobalLayoutRouterContext = _react.default.createContext(null);
const TemplateContext = _react.default.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    AppRouterContext.displayName = 'AppRouterContext';
    LayoutRouterContext.displayName = 'LayoutRouterContext';
    GlobalLayoutRouterContext.displayName = 'GlobalLayoutRouterContext';
    TemplateContext.displayName = 'TemplateContext';
}
const MissingSlotContext = _react.default.createContext(new Set()); //# sourceMappingURL=app-router-context.shared-runtime.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Create a "Thenable" that does not resolve. This is used to suspend indefinitely when data is not available yet.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unresolvedThenable", {
    enumerable: true,
    get: function() {
        return unresolvedThenable;
    }
});
const unresolvedThenable = {
    then: ()=>{}
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unresolved-thenable.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/readonly-url-search-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function() {
        return ReadonlyURLSearchParams;
    }
});
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=readonly-url-search-params.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NavigationPromisesContext: null,
    PathParamsContext: null,
    PathnameContext: null,
    ReadonlyURLSearchParams: null,
    SearchParamsContext: null,
    createDevToolsInstrumentedPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NavigationPromisesContext: function() {
        return NavigationPromisesContext;
    },
    PathParamsContext: function() {
        return PathParamsContext;
    },
    PathnameContext: function() {
        return PathnameContext;
    },
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    SearchParamsContext: function() {
        return SearchParamsContext;
    },
    createDevToolsInstrumentedPromise: function() {
        return createDevToolsInstrumentedPromise;
    }
});
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/readonly-url-search-params.js [app-client] (ecmascript)");
const SearchParamsContext = (0, _react.createContext)(null);
const PathnameContext = (0, _react.createContext)(null);
const PathParamsContext = (0, _react.createContext)(null);
const NavigationPromisesContext = (0, _react.createContext)(null);
function createDevToolsInstrumentedPromise(displayName, value) {
    const promise = Promise.resolve(value);
    promise.status = 'fulfilled';
    promise.value = value;
    promise.displayName = `${displayName} (SSR)`;
    return promise;
}
if ("TURBOPACK compile-time truthy", 1) {
    SearchParamsContext.displayName = 'SearchParamsContext';
    PathnameContext.displayName = 'PathnameContext';
    PathParamsContext.displayName = 'PathParamsContext';
    NavigationPromisesContext.displayName = 'NavigationPromisesContext';
} //# sourceMappingURL=hooks-client-context.shared-runtime.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    bindSnapshot: null,
    createAsyncLocalStorage: null,
    createSnapshot: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bindSnapshot: function() {
        return bindSnapshot;
    },
    createAsyncLocalStorage: function() {
        return createAsyncLocalStorage;
    },
    createSnapshot: function() {
        return createSnapshot;
    }
});
const sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), "__NEXT_ERROR_CODE", {
    value: "E504",
    enumerable: false,
    configurable: true
});
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    static bind(fn) {
        return fn;
    }
}
const maybeGlobalAsyncLocalStorage = typeof globalThis !== 'undefined' && globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
function bindSnapshot(fn) {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
    }
    return FakeAsyncLocalStorage.bind(fn);
}
function createSnapshot() {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
    }
    return function(fn, ...args) {
        return fn(...args);
    };
} //# sourceMappingURL=async-local-storage.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "workUnitAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return workUnitAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=work-unit-async-storage-instance.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HEADER: null,
    FLIGHT_HEADERS: null,
    NEXT_ACTION_NOT_FOUND_HEADER: null,
    NEXT_ACTION_REVALIDATED_HEADER: null,
    NEXT_DID_POSTPONE_HEADER: null,
    NEXT_HMR_REFRESH_HASH_COOKIE: null,
    NEXT_HMR_REFRESH_HEADER: null,
    NEXT_HTML_REQUEST_ID_HEADER: null,
    NEXT_IS_PRERENDER_HEADER: null,
    NEXT_REQUEST_ID_HEADER: null,
    NEXT_REWRITTEN_PATH_HEADER: null,
    NEXT_REWRITTEN_QUERY_HEADER: null,
    NEXT_ROUTER_PREFETCH_HEADER: null,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: null,
    NEXT_ROUTER_STALE_TIME_HEADER: null,
    NEXT_ROUTER_STATE_TREE_HEADER: null,
    NEXT_RSC_UNION_QUERY: null,
    NEXT_URL: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_HEADER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
    },
    NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
    },
    NEXT_ACTION_REVALIDATED_HEADER: function() {
        return NEXT_ACTION_REVALIDATED_HEADER;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_HTML_REQUEST_ID_HEADER: function() {
        return NEXT_HTML_REQUEST_ID_HEADER;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REQUEST_ID_HEADER: function() {
        return NEXT_REQUEST_ID_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = 'rsc';
const ACTION_HEADER = 'next-action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'next-router-state-tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'next-router-prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'next-router-segment-prefetch';
const NEXT_HMR_REFRESH_HEADER = 'next-hmr-refresh';
const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
const NEXT_URL = 'next-url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
const NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';
const NEXT_REQUEST_ID_HEADER = 'x-nextjs-request-id';
const NEXT_HTML_REQUEST_ID_HEADER = 'x-nextjs-html-request-id';
const NEXT_ACTION_REVALIDATED_HEADER = 'x-action-revalidated';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getCacheSignal: null,
    getDraftModeProviderForCacheScope: null,
    getHmrRefreshHash: null,
    getPrerenderResumeDataCache: null,
    getRenderResumeDataCache: null,
    getRuntimeStagePromise: null,
    getServerComponentsHmrCache: null,
    isHmrRefresh: null,
    throwForMissingRequestStore: null,
    throwInvariantForMissingStore: null,
    workUnitAsyncStorage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getCacheSignal: function() {
        return getCacheSignal;
    },
    getDraftModeProviderForCacheScope: function() {
        return getDraftModeProviderForCacheScope;
    },
    getHmrRefreshHash: function() {
        return getHmrRefreshHash;
    },
    getPrerenderResumeDataCache: function() {
        return getPrerenderResumeDataCache;
    },
    getRenderResumeDataCache: function() {
        return getRenderResumeDataCache;
    },
    getRuntimeStagePromise: function() {
        return getRuntimeStagePromise;
    },
    getServerComponentsHmrCache: function() {
        return getServerComponentsHmrCache;
    },
    isHmrRefresh: function() {
        return isHmrRefresh;
    },
    throwForMissingRequestStore: function() {
        return throwForMissingRequestStore;
    },
    throwInvariantForMissingStore: function() {
        return throwInvariantForMissingStore;
    },
    workUnitAsyncStorage: function() {
        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
    }
});
const _workunitasyncstorageinstance = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
function throwForMissingRequestStore(callingExpression) {
    throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: false,
        configurable: true
    });
}
function throwInvariantForMissingStore() {
    throw Object.defineProperty(new _invarianterror.InvariantError('Expected workUnitAsyncStorage to have a store.'), "__NEXT_ERROR_CODE", {
        value: "E696",
        enumerable: false,
        configurable: true
    });
}
function getPrerenderResumeDataCache(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-ppr':
            return workUnitStore.prerenderResumeDataCache;
        case 'prerender-client':
            // TODO eliminate fetch caching in client scope and stop exposing this data
            // cache during SSR.
            return workUnitStore.prerenderResumeDataCache;
        case 'request':
            {
                // In dev, we might fill caches even during a dynamic request.
                if (workUnitStore.prerenderResumeDataCache) {
                    return workUnitStore.prerenderResumeDataCache;
                }
            // fallthrough
            }
        case 'prerender-legacy':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return null;
        default:
            return workUnitStore;
    }
}
function getRenderResumeDataCache(workUnitStore) {
    switch(workUnitStore.type){
        case 'request':
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-client':
            if (workUnitStore.renderResumeDataCache) {
                // If we are in a prerender, we might have a render resume data cache
                // that is used to read from prefilled caches.
                return workUnitStore.renderResumeDataCache;
            }
        // fallthrough
        case 'prerender-ppr':
            // Otherwise we return the mutable resume data cache here as an immutable
            // version of the cache as it can also be used for reading.
            return workUnitStore.prerenderResumeDataCache ?? null;
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'prerender-legacy':
            return null;
        default:
            return workUnitStore;
    }
}
function getHmrRefreshHash(workStore, workUnitStore) {
    if (workStore.dev) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'prerender':
            case 'prerender-runtime':
                return workUnitStore.hmrRefreshHash;
            case 'request':
                var _workUnitStore_cookies_get;
                return (_workUnitStore_cookies_get = workUnitStore.cookies.get(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : _workUnitStore_cookies_get.value;
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
    return undefined;
}
function isHmrRefresh(workStore, workUnitStore) {
    if (workStore.dev) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'request':
                return workUnitStore.isHmrRefresh ?? false;
            case 'prerender':
            case 'prerender-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
    return false;
}
function getServerComponentsHmrCache(workStore, workUnitStore) {
    if (workStore.dev) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'request':
                return workUnitStore.serverComponentsHmrCache;
            case 'prerender':
            case 'prerender-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
    return undefined;
}
function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
    if (workStore.isDraftMode) {
        switch(workUnitStore.type){
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
            case 'prerender-runtime':
            case 'request':
                return workUnitStore.draftMode;
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                break;
            default:
                workUnitStore;
        }
    }
    return undefined;
}
function getCacheSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-client':
        case 'prerender-runtime':
            return workUnitStore.cacheSignal;
        case 'request':
            {
                // In dev, we might fill caches even during a dynamic request.
                if (workUnitStore.cacheSignal) {
                    return workUnitStore.cacheSignal;
                }
            // fallthrough
            }
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return null;
        default:
            return workUnitStore;
    }
}
function getRuntimeStagePromise(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender-runtime':
        case 'private-cache':
            return workUnitStore.runtimeStagePromise;
        case 'prerender':
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'unstable-cache':
            return null;
        default:
            return workUnitStore;
    }
} //# sourceMappingURL=work-unit-async-storage.external.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useUntrackedPathname", {
    enumerable: true,
    get: function() {
        return useUntrackedPathname;
    }
});
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
/**
 * This checks to see if the current render has any unknown route parameters that
 * would cause the pathname to be dynamic. It's used to trigger a different
 * render path in the error boundary.
 *
 * @returns true if there are any unknown route parameters, false otherwise
 */ function hasFallbackRouteParams() {
    if (typeof window === 'undefined') {
        // AsyncLocalStorage should not be included in the client bundle.
        const { workUnitAsyncStorage } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
        const workUnitStore = workUnitAsyncStorage.getStore();
        if (!workUnitStore) return false;
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
                const fallbackParams = workUnitStore.fallbackRouteParams;
                return fallbackParams ? fallbackParams.size > 0 : false;
            case 'prerender-legacy':
            case 'request':
            case 'prerender-runtime':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
        return false;
    }
    return false;
}
function useUntrackedPathname() {
    // If there are any unknown route parameters we would typically throw
    // an error, but this internal method allows us to return a null value instead
    // for components that do not propagate the pathname to the static shell (like
    // the error boundary).
    if (hasFallbackRouteParams()) {
        return null;
    }
    // This shouldn't cause any issues related to conditional rendering because
    // the environment will be consistent for the render.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation-untracked.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createHrefFromUrl", {
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
});
function createHrefFromUrl(url, includeHash = true) {
    return url.pathname + url.search + (includeHash ? url.hash : '');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleHardNavError: null,
    useNavFailureHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleHardNavError: function() {
        return handleHardNavError;
    },
    useNavFailureHandler: function() {
        return useNavFailureHandler;
    }
});
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
function handleHardNavError(error) {
    if (error && typeof window !== 'undefined' && window.next.__pendingUrl && (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== (0, _createhreffromurl.createHrefFromUrl)(window.next.__pendingUrl)) {
        console.error(`Error occurred during navigation, falling back to hard navigation`, error);
        window.location.href = window.next.__pendingUrl.toString();
        return true;
    }
    return false;
}
function useNavFailureHandler() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=nav-failure-handler.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "workAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return workAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=work-async-storage-instance.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "workAsyncStorage", {
    enumerable: true,
    get: function() {
        return _workasyncstorageinstance.workAsyncStorageInstance;
    }
});
const _workasyncstorageinstance = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-async-storage-instance.js [app-client] (ecmascript)"); //# sourceMappingURL=work-async-storage.external.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HandleISRError", {
    enumerable: true,
    get: function() {
        return HandleISRError;
    }
});
const workAsyncStorage = typeof window === 'undefined' ? __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)").workAsyncStorage : undefined;
function HandleISRError({ error }) {
    if (workAsyncStorage) {
        const store = workAsyncStorage.getStore();
        if (store?.isStaticGeneration) {
            if (error) {
                console.error(error);
            }
            throw error;
        }
    }
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-isr-error.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/html-bots.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex contains the bots that we need to do a blocking render for and can't safely stream the response
// due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
// Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
// as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HTML_LIMITED_BOT_UA_RE", {
    enumerable: true,
    get: function() {
        return HTML_LIMITED_BOT_UA_RE;
    }
});
const HTML_LIMITED_BOT_UA_RE = /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i; //# sourceMappingURL=html-bots.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTML_LIMITED_BOT_UA_RE: null,
    HTML_LIMITED_BOT_UA_RE_STRING: null,
    getBotType: null,
    isBot: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTML_LIMITED_BOT_UA_RE: function() {
        return _htmlbots.HTML_LIMITED_BOT_UA_RE;
    },
    HTML_LIMITED_BOT_UA_RE_STRING: function() {
        return HTML_LIMITED_BOT_UA_RE_STRING;
    },
    getBotType: function() {
        return getBotType;
    },
    isBot: function() {
        return isBot;
    }
});
const _htmlbots = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/html-bots.js [app-client] (ecmascript)");
// Bot crawler that will spin up a headless browser and execute JS.
// Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
const HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
const HTML_LIMITED_BOT_UA_RE_STRING = _htmlbots.HTML_LIMITED_BOT_UA_RE.source;
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return _htmlbots.HTML_LIMITED_BOT_UA_RE.test(userAgent);
}
function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
} //# sourceMappingURL=is-bot.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorBoundary: null,
    ErrorBoundaryHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundary: function() {
        return ErrorBoundary;
    },
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigationuntracked = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _navfailurehandler = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)");
const _handleisrerror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
const _isbot = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
const isBotUserAgent = typeof window !== 'undefined' && (0, _isbot.isBot)(window.navigator.userAgent);
class ErrorBoundaryHandler extends _react.default.Component {
    constructor(props){
        super(props), this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
    static getDerivedStateFromError(error) {
        if ((0, _isnextroutererror.isNextRouterError)(error)) {
            // Re-throw if an expected internal Next.js router error occurs
            // this means it should be handled by a different boundary (such as a NotFound boundary in a parent segment)
            throw error;
        }
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { error } = state;
        // if we encounter an error while
        // a navigation is pending we shouldn't render
        // the error boundary and instead should fallback
        // to a hard navigation to attempt recovering
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        //When it's bot request, segment level error boundary will keep rendering the children,
        // the final error will be caught by the root error boundary and determine wether need to apply graceful degrade.
        if (this.state.error && !isBotUserAgent) {
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_handleisrerror.HandleISRError, {
                        error: this.state.error
                    }),
                    this.props.errorStyles,
                    this.props.errorScripts,
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(this.props.errorComponent, {
                        error: this.state.error,
                        reset: this.reset
                    })
                ]
            });
        }
        return this.props.children;
    }
}
function ErrorBoundary({ errorComponent, errorStyles, errorScripts, children }) {
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these errors can occur), we will get the correct pathname.
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    if (errorComponent) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles,
            errorScripts: errorScripts,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "matchSegment", {
    enumerable: true,
    get: function() {
        return matchSegment;
    }
});
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === 'string') {
        if (typeof segment === 'string') {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === 'string') {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "warnOnce", {
    enumerable: true,
    get: function() {
        return warnOnce;
    }
});
let warnOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const warnings = new Set();
    warnOnce = (msg)=>{
        if (!warnings.has(msg)) {
            console.warn(msg);
        }
        warnings.add(msg);
    };
} //# sourceMappingURL=warn-once.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _warnonce = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
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
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    NOT_FOUND_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    computeSelectedLayoutSegment: null,
    getSegmentValue: null,
    getSelectedLayoutSegmentPath: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    NOT_FOUND_SEGMENT_KEY: function() {
        return NOT_FOUND_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    computeSelectedLayoutSegment: function() {
        return computeSelectedLayoutSegment;
    },
    getSegmentValue: function() {
        return getSegmentValue;
    },
    getSelectedLayoutSegmentPath: function() {
        return getSelectedLayoutSegmentPath;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    const rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__';
const NOT_FOUND_SEGMENT_KEY = '/_not-found'; //# sourceMappingURL=segment.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ServerInsertedHTMLContext: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ServerInsertedHTMLContext: function() {
        return ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return useServerInsertedHTML;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const ServerInsertedHTMLContext = /*#__PURE__*/ _react.default.createContext(null);
function useServerInsertedHTML(callback) {
    const addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
    // Should have no effects on client where there's no flush effects provider
    if (addInsertedServerHTMLCallback) {
        addInsertedServerHTMLCallback(callback);
    }
} //# sourceMappingURL=server-inserted-html.shared-runtime.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/unrecognized-action-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnrecognizedActionError: null,
    unstable_isUnrecognizedActionError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnrecognizedActionError: function() {
        return UnrecognizedActionError;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    }
});
class UnrecognizedActionError extends Error {
    constructor(...args){
        super(...args);
        this.name = 'UnrecognizedActionError';
    }
}
function unstable_isUnrecognizedActionError(error) {
    return !!(error && typeof error === 'object' && error instanceof UnrecognizedActionError);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unrecognized-action-error.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/action-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "actionAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return actionAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const actionAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=action-async-storage-instance.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/action-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "actionAsyncStorage", {
    enumerable: true,
    get: function() {
        return _actionasyncstorageinstance.actionAsyncStorageInstance;
    }
});
const _actionasyncstorageinstance = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/action-async-storage-instance.js [app-client] (ecmascript)"); //# sourceMappingURL=action-async-storage.external.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
const actionAsyncStorage = typeof window === 'undefined' ? __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/action-async-storage.external.js [app-client] (ecmascript)").actionAsyncStorage : undefined;
function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= actionAsyncStorage?.getStore()?.isAction ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = _redirecterror.RedirectType.replace) {
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function notFound() {
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/unstable-rethrow.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.browser.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
} //# sourceMappingURL=dynamic-rendering-utils.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/lib/framework/boundary-constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/lib/scheduler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createRenderInBrowserAbortSignal: null,
    delayUntilRuntimeStage: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    getStaticShellDisallowedDynamicReasons: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackDynamicHoleInRuntimeShell: null,
    trackDynamicHoleInStaticShell: null,
    useDynamicRouteParams: null,
    useDynamicSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
    },
    delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    getStaticShellDisallowedDynamicReasons: function() {
        return getStaticShellDisallowedDynamicReasons;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackDynamicHoleInRuntimeShell: function() {
        return trackDynamicHoleInRuntimeShell;
    },
    trackDynamicHoleInStaticShell: function() {
        return trackDynamicHoleInStaticShell;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    },
    useDynamicSearchParams: function() {
        return useDynamicSearchParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/lib/framework/boundary-constants.js [app-client] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/lib/scheduler.js [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()));
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
function useDynamicSearchParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
    }
    switch(workUnitStore.type){
        case 'prerender-client':
            {
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E745",
                enumerable: false,
                configurable: true
            });
        case 'request':
            return;
        default:
            workUnitStore;
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data was accessed outside of ` + '<Suspense>. This delays the entire page from rendering, resulting in a ' + 'slow user experience. Learn more: ' + 'https://nextjs.org/docs/messages/blocking-route';
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function trackDynamicHoleInRuntimeShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function trackDynamicHoleInStaticShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    // TODO go back to owner stack here if available. This is temporarily using componentStack to get the right
    //
    error.stack = error.name + ': ' + message + (ownerStack || componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function getStaticShellDisallowedDynamicReasons(workStore, prelude, dynamicValidation) {
    if (dynamicValidation.hasSuspenseAboveBody) {
        // This route has opted into allowing fully dynamic rendering
        // by including a Suspense boundary above the body. In this case
        // a lack of a shell is not considered disallowed so we simply return
        return [];
    }
    if (prelude !== 0) {
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            return [
                Object.defineProperty(new _invarianterror.InvariantError(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
                    value: "E936",
                    enumerable: false,
                    configurable: true
                })
            ];
        }
    } else {
        // We have a prelude but we might still have dynamic metadata without any other dynamic access
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicErrors.length === 0 && dynamicValidation.dynamicMetadata) {
            return [
                dynamicValidation.dynamicMetadata
            ];
        }
    }
    // We had a non-empty prelude and there are no dynamic holes
    return [];
}
function delayUntilRuntimeStage(prerenderStore, result) {
    if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(()=>result);
    }
    return result;
} //# sourceMappingURL=dynamic-rendering.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/unstable-rethrow.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = typeof window === 'undefined' ? __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-client] (ecmascript)").unstable_rethrow : __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/unstable-rethrow.browser.js [app-client] (ecmascript)").unstable_rethrow;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/navigation.react-server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/readonly-url-search-params.js [app-client] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/unstable-rethrow.js [app-client] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    // We need the same class that was used to instantiate the context value
    // Otherwise instanceof checks will fail in usercode
    ReadonlyURLSearchParams: function() {
        return _hooksclientcontextsharedruntime.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js [app-client] (ecmascript)");
const _unrecognizedactionerror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/unrecognized-action-error.js [app-client] (ecmascript)");
const _navigationreactserver = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/navigation.react-server.js [app-client] (ecmascript)");
const useDynamicRouteParams = typeof window === 'undefined' ? __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)").useDynamicRouteParams : undefined;
const useDynamicSearchParams = typeof window === 'undefined' ? __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)").useDynamicSearchParams : undefined;
function useSearchParams() {
    useDynamicSearchParams?.('useSearchParams()');
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _hooksclientcontextsharedruntime.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.searchParams);
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams?.('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    const pathname = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.pathname);
        }
    }
    return pathname;
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams?.('useParams()');
    const params = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.params);
        }
    }
    return params;
}
function useSelectedLayoutSegments(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            const promise = navigationPromises.selectedLayoutSegmentsPromises?.get(parallelRouteKey);
            if (promise) {
                // We should always have a promise here, but if we don't, it's not worth erroring over.
                // We just won't be able to instrument it, but can still provide the value.
                return (0, _react.use)(promise);
            }
        }
    }
    return (0, _segment.getSelectedLayoutSegmentPath)(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegment()');
    const navigationPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && navigationPromises && 'use' in _react.default) {
        const promise = navigationPromises.selectedLayoutSegmentPromises?.get(parallelRouteKey);
        if (promise) {
            // We should always have a promise here, but if we don't, it's not worth erroring over.
            // We just won't be able to instrument it, but can still provide the value.
            return (0, _react.use)(promise);
        }
    }
    return (0, _segment.computeSelectedLayoutSegment)(selectedLayoutSegments, parallelRouteKey);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RedirectBoundary: null,
    RedirectErrorBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectBoundary: function() {
        return RedirectBoundary;
    },
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigation = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
function HandleRedirect({ redirect, reset, redirectType }) {
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        _react.default.startTransition(()=>{
            if (redirectType === _redirecterror.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
    static getDerivedStateFromError(error) {
        if ((0, _redirecterror.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            if ('handled' in error) {
                // The redirect was already handled. We'll still catch the redirect error
                // so that we can remount the subtree, but we don't actually need to trigger the
                // router.push.
                return {
                    redirect: null,
                    redirectType: null
                };
            }
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
}
function RedirectBoundary({ children }) {
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(RedirectErrorBoundary, {
        router: router,
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HTTPAccessFallbackBoundary", {
    enumerable: true,
    get: function() {
        return HTTPAccessFallbackBoundary;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigationuntracked = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
const _httpaccessfallback = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
class HTTPAccessFallbackErrorBoundary extends _react.default.Component {
    constructor(props){
        super(props);
        this.state = {
            triggeredStatus: undefined,
            previousPathname: props.pathname
        };
    }
    componentDidCatch() {
        if (("TURBOPACK compile-time value", "development") === 'development' && this.props.missingSlots && this.props.missingSlots.size > 0 && // A missing children slot is the typical not-found case, so no need to warn
        !this.props.missingSlots.has('children')) {
            let warningMessage = 'No default component was found for a parallel route rendered on this page. Falling back to nearest NotFound boundary.\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#defaultjs\n\n';
            const formattedSlots = Array.from(this.props.missingSlots).sort((a, b)=>a.localeCompare(b)).map((slot)=>`@${slot}`).join(', ');
            warningMessage += 'Missing slots: ' + formattedSlots;
            (0, _warnonce.warnOnce)(warningMessage);
        }
    }
    static getDerivedStateFromError(error) {
        if ((0, _httpaccessfallback.isHTTPAccessFallbackError)(error)) {
            const httpStatus = (0, _httpaccessfallback.getAccessFallbackHTTPStatus)(error);
            return {
                triggeredStatus: httpStatus
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.triggeredStatus) {
            return {
                triggeredStatus: undefined,
                previousPathname: props.pathname
            };
        }
        return {
            triggeredStatus: state.triggeredStatus,
            previousPathname: props.pathname
        };
    }
    render() {
        const { notFound, forbidden, unauthorized, children } = this.props;
        const { triggeredStatus } = this.state;
        const errorComponents = {
            [_httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND]: notFound,
            [_httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN]: forbidden,
            [_httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED]: unauthorized
        };
        if (triggeredStatus) {
            const isNotFound = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND && notFound;
            const isForbidden = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN && forbidden;
            const isUnauthorized = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED && unauthorized;
            // If there's no matched boundary in this layer, keep throwing the error by rendering the children
            if (!(isNotFound || isForbidden || isUnauthorized)) {
                return children;
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                        name: "robots",
                        content: "noindex"
                    }),
                    ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                        name: "boundary-next-error",
                        content: (0, _httpaccessfallback.getAccessFallbackErrorTypeByStatus)(triggeredStatus)
                    }),
                    errorComponents[triggeredStatus]
                ]
            });
        }
        return children;
    }
}
function HTTPAccessFallbackBoundary({ notFound, forbidden, unauthorized, children }) {
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these error can occur), we will get the correct pathname.
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    const missingSlots = (0, _react.useContext)(_approutercontextsharedruntime.MissingSlotContext);
    const hasErrorFallback = !!(notFound || forbidden || unauthorized);
    if (hasErrorFallback) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(HTTPAccessFallbackErrorBoundary, {
            pathname: pathname,
            notFound: notFound,
            forbidden: forbidden,
            unauthorized: unauthorized,
            missingSlots: missingSlots,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRouterCacheKey", {
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
});
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
function createRouterCacheKey(segment, withoutSearchParameters = false) {
    // if the segment is an array, it means it's a dynamic segment
    // for example, ['lang', 'en', 'd']. We need to convert it to a string to store it as a cache node key.
    if (Array.isArray(segment)) {
        return `${segment[0]}|${segment[1]}|${segment[2]}`;
    }
    // Page segments might have search parameters, ie __PAGE__?foo=bar
    // When `withoutSearchParameters` is true, we only want to return the page segment
    if (withoutSearchParameters && segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureLeadingSlash", {
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
});
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    normalizeAppPath: null,
    normalizeRscURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HEAD_REQUEST_KEY: null,
    ROOT_SEGMENT_REQUEST_KEY: null,
    appendSegmentRequestKeyPart: null,
    convertSegmentPathToStaticExportFilename: null,
    createSegmentRequestKeyPart: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HEAD_REQUEST_KEY: function() {
        return HEAD_REQUEST_KEY;
    },
    ROOT_SEGMENT_REQUEST_KEY: function() {
        return ROOT_SEGMENT_REQUEST_KEY;
    },
    appendSegmentRequestKeyPart: function() {
        return appendSegmentRequestKeyPart;
    },
    convertSegmentPathToStaticExportFilename: function() {
        return convertSegmentPathToStaticExportFilename;
    },
    createSegmentRequestKeyPart: function() {
        return createSegmentRequestKeyPart;
    }
});
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const ROOT_SEGMENT_REQUEST_KEY = '';
const HEAD_REQUEST_KEY = '/_head';
function createSegmentRequestKeyPart(segment) {
    if (typeof segment === 'string') {
        if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
            // The Flight Router State type sometimes includes the search params in
            // the page segment. However, the Segment Cache tracks this as a separate
            // key. So, we strip the search params here, and then add them back when
            // the cache entry is turned back into a FlightRouterState. This is an
            // unfortunate consequence of the FlightRouteState being used both as a
            // transport type and as a cache key; we'll address this once more of the
            // Segment Cache implementation has settled.
            // TODO: We should hoist the search params out of the FlightRouterState
            // type entirely, This is our plan for dynamic route params, too.
            return _segment.PAGE_SEGMENT_KEY;
        }
        const safeName = // But params typically don't include the leading slash. We should use
        // a different encoding to avoid this special case.
        segment === '/_not-found' ? '_not-found' : encodeToFilesystemAndURLSafeString(segment);
        // Since this is not a dynamic segment, it's fully encoded. It does not
        // need to be "hydrated" with a param value.
        return safeName;
    }
    const name = segment[0];
    const paramType = segment[2];
    const safeName = encodeToFilesystemAndURLSafeString(name);
    const encodedName = '$' + paramType + '$' + safeName;
    return encodedName;
}
function appendSegmentRequestKeyPart(parentRequestKey, parallelRouteKey, childRequestKeyPart) {
    // Aside from being filesystem safe, segment keys are also designed so that
    // each segment and parallel route creates its own subdirectory. Roughly in
    // the same shape as the source app directory. This is mostly just for easier
    // debugging (you can open up the build folder and navigate the output); if
    // we wanted to do we could just use a flat structure.
    // Omit the parallel route key for children, since this is the most
    // common case. Saves some bytes (and it's what the app directory does).
    const slotKey = parallelRouteKey === 'children' ? childRequestKeyPart : `@${encodeToFilesystemAndURLSafeString(parallelRouteKey)}/${childRequestKeyPart}`;
    return parentRequestKey + '/' + slotKey;
}
// Define a regex pattern to match the most common characters found in a route
// param. It excludes anything that might not be cross-platform filesystem
// compatible, like |. It does not need to be precise because the fallback is to
// just base64url-encode the whole parameter, which is fine; we just don't do it
// by default for compactness, and for easier debugging.
const simpleParamValueRegex = /^[a-zA-Z0-9\-_@]+$/;
function encodeToFilesystemAndURLSafeString(value) {
    if (simpleParamValueRegex.test(value)) {
        return value;
    }
    // If there are any unsafe characters, base64url-encode the entire value.
    // We also add a ! prefix so it doesn't collide with the simple case.
    const base64url = btoa(value).replace(/\+/g, '-') // Replace '+' with '-'
    .replace(/\//g, '_') // Replace '/' with '_'
    .replace(/=+$/, '') // Remove trailing '='
    ;
    return '!' + base64url;
}
function convertSegmentPathToStaticExportFilename(segmentPath) {
    return `__next${segmentPath.replace(/\//g, '.')}.txt`;
} //# sourceMappingURL=segment-value-encoding.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    doesStaticSegmentAppearInURL: null,
    getCacheKeyForDynamicParam: null,
    getParamValueFromCacheKey: null,
    getRenderedPathname: null,
    getRenderedSearch: null,
    parseDynamicParamFromURLPart: null,
    urlSearchParamsToParsedUrlQuery: null,
    urlToUrlWithoutFlightMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    doesStaticSegmentAppearInURL: function() {
        return doesStaticSegmentAppearInURL;
    },
    getCacheKeyForDynamicParam: function() {
        return getCacheKeyForDynamicParam;
    },
    getParamValueFromCacheKey: function() {
        return getParamValueFromCacheKey;
    },
    getRenderedPathname: function() {
        return getRenderedPathname;
    },
    getRenderedSearch: function() {
        return getRenderedSearch;
    },
    parseDynamicParamFromURLPart: function() {
        return parseDynamicParamFromURLPart;
    },
    urlSearchParamsToParsedUrlQuery: function() {
        return urlSearchParamsToParsedUrlQuery;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    }
});
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _segmentvalueencoding = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
function getRenderedSearch(response) {
    // If the server performed a rewrite, the search params used to render the
    // page will be different from the params in the request URL. In this case,
    // the response will include a header that gives the rewritten search query.
    const rewrittenQuery = response.headers.get(_approuterheaders.NEXT_REWRITTEN_QUERY_HEADER);
    if (rewrittenQuery !== null) {
        return rewrittenQuery === '' ? '' : '?' + rewrittenQuery;
    }
    // If the header is not present, there was no rewrite, so we use the search
    // query of the response URL.
    return urlToUrlWithoutFlightMarker(new URL(response.url)).search;
}
function getRenderedPathname(response) {
    // If the server performed a rewrite, the pathname used to render the
    // page will be different from the pathname in the request URL. In this case,
    // the response will include a header that gives the rewritten pathname.
    const rewrittenPath = response.headers.get(_approuterheaders.NEXT_REWRITTEN_PATH_HEADER);
    return rewrittenPath ?? urlToUrlWithoutFlightMarker(new URL(response.url)).pathname;
}
function parseDynamicParamFromURLPart(paramType, pathnameParts, partIndex) {
    // This needs to match the behavior in get-dynamic-param.ts.
    switch(paramType){
        // Catchalls
        case 'c':
            {
                // Catchalls receive all the remaining URL parts. If there are no
                // remaining pathname parts, return an empty array.
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map((s)=>encodeURIComponent(s)) : [];
            }
        // Catchall intercepted
        case 'ci(..)(..)':
        case 'ci(.)':
        case 'ci(..)':
        case 'ci(...)':
            {
                const prefix = paramType.length - 2;
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map((s, i)=>{
                    if (i === 0) {
                        return encodeURIComponent(s.slice(prefix));
                    }
                    return encodeURIComponent(s);
                }) : [];
            }
        // Optional catchalls
        case 'oc':
            {
                // Optional catchalls receive all the remaining URL parts, unless this is
                // the end of the pathname, in which case they return null.
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map((s)=>encodeURIComponent(s)) : null;
            }
        // Dynamic
        case 'd':
            {
                if (partIndex >= pathnameParts.length) {
                    // The route tree expected there to be more parts in the URL than there
                    // actually are. This could happen if the x-nextjs-rewritten-path header
                    // is incorrectly set, or potentially due to bug in Next.js. TODO:
                    // Should this be a hard error? During a prefetch, we can just abort.
                    // During a client navigation, we could trigger a hard refresh. But if
                    // it happens during initial render, we don't really have any
                    // recovery options.
                    return '';
                }
                return encodeURIComponent(pathnameParts[partIndex]);
            }
        // Dynamic intercepted
        case 'di(..)(..)':
        case 'di(.)':
        case 'di(..)':
        case 'di(...)':
            {
                const prefix = paramType.length - 2;
                if (partIndex >= pathnameParts.length) {
                    // The route tree expected there to be more parts in the URL than there
                    // actually are. This could happen if the x-nextjs-rewritten-path header
                    // is incorrectly set, or potentially due to bug in Next.js. TODO:
                    // Should this be a hard error? During a prefetch, we can just abort.
                    // During a client navigation, we could trigger a hard refresh. But if
                    // it happens during initial render, we don't really have any
                    // recovery options.
                    return '';
                }
                return encodeURIComponent(pathnameParts[partIndex].slice(prefix));
            }
        default:
            paramType;
            return '';
    }
}
function doesStaticSegmentAppearInURL(segment) {
    // This is not a parameterized segment; however, we need to determine
    // whether or not this segment appears in the URL. For example, this route
    // groups do not appear in the URL, so they should be skipped. Any other
    // special cases must be handled here.
    // TODO: Consider encoding this directly into the router tree instead of
    // inferring it on the client based on the segment type. Something like
    // a `doesAppearInURL` flag in FlightRouterState.
    if (segment === _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY || // For some reason, the loader tree sometimes includes extra __PAGE__
    // "layouts" when part of a parallel route. But it's not a leaf node.
    // Otherwise, we wouldn't need this special case because pages are
    // always leaf nodes.
    // TODO: Investigate why the loader produces these fake page segments.
    segment.startsWith(_segment.PAGE_SEGMENT_KEY) || // Route groups.
    segment[0] === '(' && segment.endsWith(')') || segment === _segment.DEFAULT_SEGMENT_KEY || segment === '/_not-found') {
        return false;
    } else {
        // All other segment types appear in the URL
        return true;
    }
}
function getCacheKeyForDynamicParam(paramValue, renderedSearch) {
    // This needs to match the logic in get-dynamic-param.ts, until we're able to
    // unify the various implementations so that these are always computed on
    // the client.
    if (typeof paramValue === 'string') {
        // TODO: Refactor or remove this helper function to accept a string rather
        // than the whole segment type. Also we can probably just append the
        // search string instead of turning it into JSON.
        const pageSegmentWithSearchParams = (0, _segment.addSearchParamsIfPageSegment)(paramValue, Object.fromEntries(new URLSearchParams(renderedSearch)));
        return pageSegmentWithSearchParams;
    } else if (paramValue === null) {
        return '';
    } else {
        return paramValue.join('/');
    }
}
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return urlWithoutFlightParameters;
}
function getParamValueFromCacheKey(paramCacheKey, paramType) {
    // Turn the cache key string sent by the server (as part of FlightRouterState)
    // into a value that can be passed to `useParams` and client components.
    const isCatchAll = paramType === 'c' || paramType === 'oc';
    if (isCatchAll) {
        // Catch-all param keys are a concatenation of the path segments.
        // See equivalent logic in `getSelectedParams`.
        // TODO: We should just pass the array directly, rather than concatenate
        // it to a string and then split it back to an array. It needs to be an
        // array in some places, like when passing a key React, but we can convert
        // it at runtime in those places.
        return paramCacheKey.split('/');
    }
    return paramCacheKey;
}
function urlSearchParamsToParsedUrlQuery(searchParams) {
    // Converts a URLSearchParams object to the same type used by the server when
    // creating search params props, i.e. the type returned by Node's
    // "querystring" module.
    const result = {};
    for (const [key, value] of searchParams.entries()){
        if (result[key] === undefined) {
            result[key] = value;
        } else if (Array.isArray(result[key])) {
            result[key].push(value);
        } else {
            result[key] = [
                result[key],
                value
            ];
        }
    }
    return result;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-params.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HMR_REFRESH: null,
    ACTION_NAVIGATE: null,
    ACTION_REFRESH: null,
    ACTION_RESTORE: null,
    ACTION_SERVER_ACTION: null,
    ACTION_SERVER_PATCH: null,
    PrefetchKind: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HMR_REFRESH: function() {
        return ACTION_HMR_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    }
});
const ACTION_REFRESH = 'refresh';
const ACTION_NAVIGATE = 'navigate';
const ACTION_RESTORE = 'restore';
const ACTION_SERVER_PATCH = 'server-patch';
const ACTION_HMR_REFRESH = 'hmr-refresh';
const ACTION_SERVER_ACTION = 'server-action';
var PrefetchKind = /*#__PURE__*/ function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    return PrefetchKind;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/is-thenable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isThenable", {
    enumerable: true,
    get: function() {
        return isThenable;
    }
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useAppDevRenderingIndicator", {
    enumerable: true,
    get: function() {
        return useAppDevRenderingIndicator;
    }
});
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _nextdevtools = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/next-devtools/index.js (raw)");
const useAppDevRenderingIndicator = ()=>{
    const [isPending, startTransition] = (0, _react.useTransition)();
    (0, _react.useEffect)(()=>{
        if (isPending) {
            _nextdevtools.dispatcher.renderingIndicatorShow();
        } else {
            _nextdevtools.dispatcher.renderingIndicatorHide();
        }
    }, [
        isPending
    ]);
    return startTransition;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-app-dev-rendering-indicator.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dispatchAppRouterAction: null,
    useActionQueue: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dispatchAppRouterAction: function() {
        return dispatchAppRouterAction;
    },
    useActionQueue: function() {
        return useActionQueue;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _isthenable = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/is-thenable.js [app-client] (ecmascript)");
// The app router state lives outside of React, so we can import the dispatch
// method directly wherever we need it, rather than passing it around via props
// or context.
let dispatch = null;
function dispatchAppRouterAction(action) {
    if (dispatch === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    dispatch(action);
}
const __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
const promisesWithDebugInfo = ("TURBOPACK compile-time truthy", 1) ? new WeakMap() : "TURBOPACK unreachable";
function useActionQueue(actionQueue) {
    const [state, setState] = _react.default.useState(actionQueue.state);
    // Because of a known issue that requires to decode Flight streams inside the
    // render phase, we have to be a bit clever and assign the dispatch method to
    // a module-level variable upon initialization. The useState hook in this
    // module only exists to synchronize state that lives outside of React.
    // Ideally, what we'd do instead is pass the state as a prop to root.render;
    // this is conceptually how we're modeling the app router state, despite the
    // weird implementation details.
    if ("TURBOPACK compile-time truthy", 1) {
        const { useAppDevRenderingIndicator } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-client] (ecmascript)");
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const appDevRenderingIndicator = useAppDevRenderingIndicator();
        dispatch = (action)=>{
            appDevRenderingIndicator(()=>{
                actionQueue.dispatch(action, setState);
            });
        };
    } else //TURBOPACK unreachable
    ;
    // When navigating to a non-prefetched route, then App Router state will be
    // blocked until the server responds. We need to transfer the `_debugInfo`
    // from the underlying Flight response onto the top-level promise that is
    // passed to React (via `use`) so that the latency is accurately represented
    // in the React DevTools.
    const stateWithDebugInfo = (0, _react.useMemo)(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ((0, _isthenable.isThenable)(state)) {
            // useMemo can't be used to cache a Promise since the memoized value is thrown
            // away when we suspend. So we use a WeakMap to cache the Promise with debug info.
            let promiseWithDebugInfo = promisesWithDebugInfo.get(state);
            if (promiseWithDebugInfo === undefined) {
                const debugInfo = [];
                promiseWithDebugInfo = Promise.resolve(state).then((asyncState)=>{
                    if (asyncState.debugInfo !== null) {
                        debugInfo.push(...asyncState.debugInfo);
                    }
                    return asyncState;
                });
                promiseWithDebugInfo._debugInfo = debugInfo;
                promisesWithDebugInfo.set(state, promiseWithDebugInfo);
            }
            return promiseWithDebugInfo;
        }
        return state;
    }, [
        state
    ]);
    return (0, _isthenable.isThenable)(stateWithDebugInfo) ? (0, _react.use)(stateWithDebugInfo) : stateWithDebugInfo;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-action-queue.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "callServer", {
    enumerable: true,
    get: function() {
        return callServer;
    }
});
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
async function callServer(actionId, actionArgs) {
    return new Promise((resolve, reject)=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                actionId,
                actionArgs,
                resolve,
                reject
            });
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findSourceMapURL", {
    enumerable: true,
    get: function() {
        return findSourceMapURL;
    }
});
const basePath = ("TURBOPACK compile-time value", "") || '';
const pathname = `${basePath}/__nextjs_source-map`;
const findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? function findSourceMapURL(filename) {
    if (filename === '') {
        return null;
    }
    if (filename.startsWith(document.location.origin) && filename.includes('/_next/static')) {
        // This is a request for a client chunk. This can only happen when
        // using Turbopack. In this case, since we control how those source
        // maps are generated, we can safely assume that the sourceMappingURL
        // is relative to the filename, with an added `.map` extension. The
        // browser can just request this file, and it gets served through the
        // normal dev server, without the need to route this through
        // the `/__nextjs_source-map` dev middleware.
        return `${filename}.map`;
    }
    const url = new URL(pathname, document.location.origin);
    url.searchParams.set('filename', filename);
    return url.href;
} : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-find-source-map-url.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createInitialRSCPayloadFromFallbackPrerender: null,
    getFlightDataPartsFromPath: null,
    getNextFlightSegmentPath: null,
    normalizeFlightData: null,
    prepareFlightRouterStateForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createInitialRSCPayloadFromFallbackPrerender: function() {
        return createInitialRSCPayloadFromFallbackPrerender;
    },
    getFlightDataPartsFromPath: function() {
        return getFlightDataPartsFromPath;
    },
    getNextFlightSegmentPath: function() {
        return getNextFlightSegmentPath;
    },
    normalizeFlightData: function() {
        return normalizeFlightData;
    },
    prepareFlightRouterStateForRequest: function() {
        return prepareFlightRouterStateForRequest;
    }
});
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
function getFlightDataPartsFromPath(flightDataPath) {
    // Pick the last 4 items from the `FlightDataPath` to get the [tree, seedData, viewport, isHeadPartial].
    const flightDataPathLength = 4;
    // tree, seedData, and head are *always* the last three items in the `FlightDataPath`.
    const [tree, seedData, head, isHeadPartial] = flightDataPath.slice(-flightDataPathLength);
    // The `FlightSegmentPath` is everything except the last three items. For a root render, it won't be present.
    const segmentPath = flightDataPath.slice(0, -flightDataPathLength);
    return {
        // TODO: Unify these two segment path helpers. We are inconsistently pushing an empty segment ("")
        // to the start of the segment path in some places which makes it hard to use solely the segment path.
        // Look for "// TODO-APP: remove ''" in the codebase.
        pathToSegment: segmentPath.slice(0, -1),
        segmentPath,
        // if the `FlightDataPath` corresponds with the root, there'll be no segment path,
        // in which case we default to ''.
        segment: segmentPath[segmentPath.length - 1] ?? '',
        tree,
        seedData,
        head,
        isHeadPartial,
        isRootRender: flightDataPath.length === flightDataPathLength
    };
}
function createInitialRSCPayloadFromFallbackPrerender(response, fallbackInitialRSCPayload) {
    // This is a static fallback page. In order to hydrate the page, we need to
    // parse the client params from the URL, but to account for the possibility
    // that the page was rewritten, we need to check the response headers
    // for x-nextjs-rewritten-path or x-nextjs-rewritten-query headers. Since
    // we can't access the headers of the initial document response, the client
    // performs a fetch request to the current location. Since it's possible that
    // the fetch request will be dynamically rewritten to a different path than
    // the initial document, this fetch request delivers _all_ the hydration data
    // for the page; it was not inlined into the document, like it normally
    // would be.
    //
    // TODO: Consider treating the case where fetch is rewritten to a different
    // path from the document as a special deopt case. We should optimistically
    // assume this won't happen, inline the data into the document, and perform
    // a minimal request (like a HEAD or range request) to verify that the
    // response matches. Tricky to get right because we need to account for
    // all the different deployment environments we support, like output:
    // "export" mode, where we currently don't assume that custom response
    // headers are present.
    // Patch the Flight data sent by the server with the correct params parsed
    // from the URL + response object.
    const renderedPathname = (0, _routeparams.getRenderedPathname)(response);
    const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
    const canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(new URL(location.href));
    const originalFlightDataPath = fallbackInitialRSCPayload.f[0];
    const originalFlightRouterState = originalFlightDataPath[0];
    return {
        b: fallbackInitialRSCPayload.b,
        c: canonicalUrl.split('/'),
        q: renderedSearch,
        i: fallbackInitialRSCPayload.i,
        f: [
            [
                fillInFallbackFlightRouterState(originalFlightRouterState, renderedPathname, renderedSearch),
                originalFlightDataPath[1],
                originalFlightDataPath[2],
                originalFlightDataPath[2]
            ]
        ],
        m: fallbackInitialRSCPayload.m,
        G: fallbackInitialRSCPayload.G,
        S: fallbackInitialRSCPayload.S
    };
}
function fillInFallbackFlightRouterState(flightRouterState, renderedPathname, renderedSearch) {
    const pathnameParts = renderedPathname.split('/').filter((p)=>p !== '');
    const index = 0;
    return fillInFallbackFlightRouterStateImpl(flightRouterState, renderedSearch, pathnameParts, index);
}
function fillInFallbackFlightRouterStateImpl(flightRouterState, renderedSearch, pathnameParts, pathnamePartsIndex) {
    const originalSegment = flightRouterState[0];
    let newSegment;
    let doesAppearInURL;
    if (typeof originalSegment === 'string') {
        newSegment = originalSegment;
        doesAppearInURL = (0, _routeparams.doesStaticSegmentAppearInURL)(originalSegment);
    } else {
        const paramName = originalSegment[0];
        const paramType = originalSegment[2];
        const paramValue = (0, _routeparams.parseDynamicParamFromURLPart)(paramType, pathnameParts, pathnamePartsIndex);
        const cacheKey = (0, _routeparams.getCacheKeyForDynamicParam)(paramValue, renderedSearch);
        newSegment = [
            paramName,
            cacheKey,
            paramType
        ];
        doesAppearInURL = true;
    }
    // Only increment the index if the segment appears in the URL. If it's a
    // "virtual" segment, like a route group, it remains the same.
    const childPathnamePartsIndex = doesAppearInURL ? pathnamePartsIndex + 1 : pathnamePartsIndex;
    const children = flightRouterState[1];
    const newChildren = {};
    for(let key in children){
        const childFlightRouterState = children[key];
        newChildren[key] = fillInFallbackFlightRouterStateImpl(childFlightRouterState, renderedSearch, pathnameParts, childPathnamePartsIndex);
    }
    const newState = [
        newSegment,
        newChildren,
        null,
        flightRouterState[3],
        flightRouterState[4]
    ];
    return newState;
}
function getNextFlightSegmentPath(flightSegmentPath) {
    // Since `FlightSegmentPath` is a repeated tuple of `Segment` and `ParallelRouteKey`, we slice off two items
    // to get the next segment path.
    return flightSegmentPath.slice(2);
}
function normalizeFlightData(flightData) {
    // FlightData can be a string when the server didn't respond with a proper flight response,
    // or when a redirect happens, to signal to the client that it needs to perform an MPA navigation.
    if (typeof flightData === 'string') {
        return flightData;
    }
    return flightData.map((flightDataPath)=>getFlightDataPartsFromPath(flightDataPath));
}
function prepareFlightRouterStateForRequest(flightRouterState, isHmrRefresh) {
    // HMR requests need the complete, unmodified state for proper functionality
    if (isHmrRefresh) {
        return encodeURIComponent(JSON.stringify(flightRouterState));
    }
    return encodeURIComponent(JSON.stringify(stripClientOnlyDataFromFlightRouterState(flightRouterState)));
}
/**
 * Recursively strips client-only data from FlightRouterState while preserving
 * server-needed information for proper rendering decisions.
 */ function stripClientOnlyDataFromFlightRouterState(flightRouterState) {
    const [segment, parallelRoutes, _url, refreshMarker, isRootLayout, hasLoadingBoundary] = flightRouterState;
    // __PAGE__ segments are always fetched from the server, so there's
    // no need to send them up
    const cleanedSegment = stripSearchParamsFromPageSegment(segment);
    // Recursively process parallel routes
    const cleanedParallelRoutes = {};
    for (const [key, childState] of Object.entries(parallelRoutes)){
        cleanedParallelRoutes[key] = stripClientOnlyDataFromFlightRouterState(childState);
    }
    const result = [
        cleanedSegment,
        cleanedParallelRoutes,
        null,
        shouldPreserveRefreshMarker(refreshMarker) ? refreshMarker : null
    ];
    // Append optional fields if present
    if (isRootLayout !== undefined) {
        result[4] = isRootLayout;
    }
    if (hasLoadingBoundary !== undefined) {
        result[5] = hasLoadingBoundary;
    }
    return result;
}
/**
 * Strips search parameters from __PAGE__ segments to prevent sensitive
 * client-side data from being sent to the server.
 */ function stripSearchParamsFromPageSegment(segment) {
    if (typeof segment === 'string' && segment.startsWith(_segment.PAGE_SEGMENT_KEY + '?')) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
/**
 * Determines whether the refresh marker should be sent to the server
 * Client-only markers like 'refresh' are stripped, while server-needed markers
 * like 'refetch' and 'inside-shared-layout' are preserved.
 */ function shouldPreserveRefreshMarker(refreshMarker) {
    return Boolean(refreshMarker && refreshMarker !== 'refresh');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=flight-data-helpers.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This gets assigned as a side-effect during app initialization. Because it
// represents the build used to create the JS bundle, it should never change
// after being set, so we store it in a global variable.
//
// When performing RSC requests, if the incoming data has a different build ID,
// we perform an MPA navigation/refresh to load the updated build and ensure
// that the client and server in sync.
// Starts as an empty string. In practice, because setAppBuildId is called
// during initialization before hydration starts, this will always get
// reassigned to the actual build ID before it's ever needed by a navigation.
// If for some reasons it didn't, due to a bug or race condition, then on
// navigation the build comparision would fail and trigger an MPA navigation.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getAppBuildId: null,
    setAppBuildId: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAppBuildId: function() {
        return getAppBuildId;
    },
    setAppBuildId: function() {
        return setAppBuildId;
    }
});
let globalBuildId = '';
function setAppBuildId(buildId) {
    globalBuildId = buildId;
}
function getAppBuildId() {
    return globalBuildId;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-build-id.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/hash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    djb2Hash: null,
    hexHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
} //# sourceMappingURL=hash.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/cache-busting-search-param.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "computeCacheBustingSearchParam", {
    enumerable: true,
    get: function() {
        return computeCacheBustingSearchParam;
    }
});
const _hash = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/hash.js [app-client] (ecmascript)");
function computeCacheBustingSearchParam(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    if ((prefetchHeader === undefined || prefetchHeader === '0') && segmentPrefetchHeader === undefined && stateTreeHeader === undefined && nextUrlHeader === undefined) {
        return '';
    }
    return (0, _hash.hexHash)([
        prefetchHeader || '0',
        segmentPrefetchHeader || '0',
        stateTreeHeader || '0',
        nextUrlHeader || '0'
    ].join(','));
} //# sourceMappingURL=cache-busting-search-param.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/set-cache-busting-search-param.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    setCacheBustingSearchParam: null,
    setCacheBustingSearchParamWithHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    setCacheBustingSearchParam: function() {
        return setCacheBustingSearchParam;
    },
    setCacheBustingSearchParamWithHash: function() {
        return setCacheBustingSearchParamWithHash;
    }
});
const _cachebustingsearchparam = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/cache-busting-search-param.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const setCacheBustingSearchParam = (url, headers)=>{
    const uniqueCacheKey = (0, _cachebustingsearchparam.computeCacheBustingSearchParam)(headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER], headers[_approuterheaders.NEXT_URL]);
    setCacheBustingSearchParamWithHash(url, uniqueCacheKey);
};
const setCacheBustingSearchParamWithHash = (url, hash)=>{
    /**
   * Note that we intentionally do not use `url.searchParams.set` here:
   *
   * const url = new URL('https://example.com/search?q=custom%20spacing');
   * url.searchParams.set('_rsc', 'abc123');
   * console.log(url.toString()); // Outputs: https://example.com/search?q=custom+spacing&_rsc=abc123
   *                                                                             ^ <--- this is causing confusion
   * This is in fact intended based on https://url.spec.whatwg.org/#interface-urlsearchparams, but
   * we want to preserve the %20 as %20 if that's what the user passed in, hence the custom
   * logic below.
   */ const existingSearch = url.search;
    const rawQuery = existingSearch.startsWith('?') ? existingSearch.slice(1) : existingSearch;
    // Always remove any existing cache busting param and add a fresh one to ensure
    // we have the correct value based on current request headers
    const pairs = rawQuery.split('&').filter((pair)=>pair && !pair.startsWith(`${_approuterheaders.NEXT_RSC_UNION_QUERY}=`));
    if (hash.length > 0) {
        pairs.push(`${_approuterheaders.NEXT_RSC_UNION_QUERY}=${hash}`);
    } else {
        pairs.push(`${_approuterheaders.NEXT_RSC_UNION_QUERY}`);
    }
    url.search = pairs.length ? `?${pairs.join('&')}` : '';
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-cache-busting-search-param.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// This could also be a variable instead of a function, but some unit tests want to change the ID at
// runtime. Even though that would never happen in a real deployment.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getDeploymentId: null,
    getDeploymentIdQueryOrEmptyString: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getDeploymentId: function() {
        return getDeploymentId;
    },
    getDeploymentIdQueryOrEmptyString: function() {
        return getDeploymentIdQueryOrEmptyString;
    }
});
function getDeploymentId() {
    return "TURBOPACK compile-time value", false;
}
function getDeploymentIdQueryOrEmptyString() {
    let deploymentId = getDeploymentId();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return '';
} //# sourceMappingURL=deployment-id.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createFetch: null,
    createFromNextReadableStream: null,
    fetchServerResponse: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createFetch: function() {
        return createFetch;
    },
    createFromNextReadableStream: function() {
        return createFromNextReadableStream;
    },
    fetchServerResponse: function() {
        return fetchServerResponse;
    }
});
const _client = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _appcallserver = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _appbuildid = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)");
const _setcachebustingsearchparam = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/set-cache-busting-search-param.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
const createFromReadableStream = _client.createFromReadableStream;
const createFromFetch = _client.createFromFetch;
let createDebugChannel;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function doMpaNavigation(url) {
    return (0, _routeparams.urlToUrlWithoutFlightMarker)(new URL(url, location.origin)).toString();
}
let isPageUnloading = false;
if (typeof window !== 'undefined') {
    // Track when the page is unloading, e.g. due to reloading the page or
    // performing hard navigations. This allows us to suppress error logging when
    // the browser cancels in-flight requests during page unload.
    window.addEventListener('pagehide', ()=>{
        isPageUnloading = true;
    });
    // Reset the flag on pageshow, e.g. when navigating back and the JavaScript
    // execution context is restored by the browser.
    window.addEventListener('pageshow', ()=>{
        isPageUnloading = false;
    });
}
async function fetchServerResponse(url, options) {
    const { flightRouterState, nextUrl } = options;
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC_HEADER]: '1',
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(flightRouterState, options.isHmrRefresh)
    };
    if (("TURBOPACK compile-time value", "development") === 'development' && options.isHmrRefresh) {
        headers[_approuterheaders.NEXT_HMR_REFRESH_HEADER] = '1';
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    // In static export mode, we need to modify the URL to request the .txt file,
    // but we should preserve the original URL for the canonical URL and error handling.
    const originalUrl = url;
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Typically, during a navigation, we decode the response using Flight's
        // `createFromFetch` API, which accepts a `fetch` promise.
        // TODO: Remove this check once the old PPR flag is removed
        const isLegacyPPR = ("TURBOPACK compile-time value", false) && !("TURBOPACK compile-time value", false);
        const shouldImmediatelyDecode = !isLegacyPPR;
        const res = await createFetch(url, headers, 'auto', shouldImmediatelyDecode);
        const responseUrl = (0, _routeparams.urlToUrlWithoutFlightMarker)(new URL(res.url));
        const canonicalUrl = res.redirected ? responseUrl : originalUrl;
        const contentType = res.headers.get('content-type') || '';
        const interception = !!res.headers.get('vary')?.includes(_approuterheaders.NEXT_URL);
        const postponed = !!res.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER);
        const staleTimeHeaderSeconds = res.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER);
        const staleTime = staleTimeHeaderSeconds !== null ? parseInt(staleTimeHeaderSeconds, 10) * 1000 : -1;
        let isFlightResponse = contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok || !res.body) {
            // in case the original URL came with a hash, preserve it before redirecting to the new URL
            if (url.hash) {
                responseUrl.hash = url.hash;
            }
            return doMpaNavigation(responseUrl.toString());
        }
        // We may navigate to a page that requires a different Webpack runtime.
        // In prod, every page will have the same Webpack runtime.
        // In dev, the Webpack runtime is minimal for each page.
        // We need to ensure the Webpack runtime is updated before executing client-side JS of the new page.
        // TODO: This needs to happen in the Flight Client.
        // Or Webpack needs to include the runtime update in the Flight response as
        // a blocking script.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let flightResponsePromise = res.flightResponse;
        if (flightResponsePromise === null) {
            // Typically, `createFetch` would have already started decoding the
            // Flight response. If it hasn't, though, we need to decode it now.
            // TODO: This should only be reachable if legacy PPR is enabled (i.e. PPR
            // without Cache Components). Remove this branch once legacy PPR
            // is deleted.
            const flightStream = postponed ? createUnclosingPrefetchStream(res.body) : res.body;
            flightResponsePromise = createFromNextReadableStream(flightStream, headers);
        }
        const flightResponse = await flightResponsePromise;
        if ((0, _appbuildid.getAppBuildId)() !== flightResponse.b) {
            return doMpaNavigation(res.url);
        }
        const normalizedFlightData = (0, _flightdatahelpers.normalizeFlightData)(flightResponse.f);
        if (typeof normalizedFlightData === 'string') {
            return doMpaNavigation(normalizedFlightData);
        }
        return {
            flightData: normalizedFlightData,
            canonicalUrl: canonicalUrl,
            renderedSearch: (0, _routeparams.getRenderedSearch)(res),
            couldBeIntercepted: interception,
            prerendered: flightResponse.S,
            postponed,
            staleTime,
            debugInfo: flightResponsePromise._debugInfo ?? null
        };
    } catch (err) {
        if (!isPageUnloading) {
            console.error(`Failed to fetch RSC payload for ${originalUrl}. Falling back to browser navigation.`, err);
        }
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return originalUrl.toString();
    }
}
async function createFetch(url, headers, fetchPriority, shouldImmediatelyDecode, signal) {
    // TODO: In output: "export" mode, the headers do nothing. Omit them (and the
    // cache busting search param) from the request so they're
    // maximally cacheable.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const deploymentId = (0, _deploymentid.getDeploymentId)();
    if (deploymentId) {
        headers['x-deployment-id'] = deploymentId;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (self.__next_r) {
            headers[_approuterheaders.NEXT_HTML_REQUEST_ID_HEADER] = self.__next_r;
        }
        // Create a new request ID for the server action request. The server uses
        // this to tag debug information sent via WebSocket to the client, which
        // then routes those chunks to the debug channel associated with this ID.
        headers[_approuterheaders.NEXT_REQUEST_ID_HEADER] = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
    }
    const fetchOptions = {
        // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
        credentials: 'same-origin',
        headers,
        priority: fetchPriority || undefined,
        signal
    };
    // `fetchUrl` is slightly different from `url` because we add a cache-busting
    // search param to it. This should not leak outside of this function, so we
    // track them separately.
    let fetchUrl = new URL(url);
    (0, _setcachebustingsearchparam.setCacheBustingSearchParam)(fetchUrl, headers);
    let fetchPromise = fetch(fetchUrl, fetchOptions);
    // Immediately pass the fetch promise to the Flight client so that the debug
    // info includes the latency from the client to the server. The internal timer
    // in React starts as soon as `createFromFetch` is called.
    //
    // The only case where we don't do this is during a prefetch, because we have
    // to do some extra processing of the response stream (see
    // `createUnclosingPrefetchStream`). But this is fine, because a top-level
    // prefetch response never blocks a navigation; if it hasn't already been
    // written into the cache by the time the navigation happens, the router will
    // go straight to a dynamic request.
    let flightResponsePromise = shouldImmediatelyDecode ? createFromNextFetch(fetchPromise, headers) : null;
    let browserResponse = await fetchPromise;
    // If the server responds with a redirect (e.g. 307), and the redirected
    // location does not contain the cache busting search param set in the
    // original request, the response is likely invalid — when following the
    // redirect, the browser forwards the request headers, but since the cache
    // busting search param is missing, the server will reject the request due to
    // a mismatch.
    //
    // Ideally, we would be able to intercept the redirect response and perform it
    // manually, instead of letting the browser automatically follow it, but this
    // is not allowed by the fetch API.
    //
    // So instead, we must "replay" the redirect by fetching the new location
    // again, but this time we'll append the cache busting search param to prevent
    // a mismatch.
    //
    // TODO: We can optimize Next.js's built-in middleware APIs by returning a
    // custom status code, to prevent the browser from automatically following it.
    //
    // This does not affect Server Action-based redirects; those are encoded
    // differently, as part of the Flight body. It only affects redirects that
    // occur in a middleware or a third-party proxy.
    let redirected = browserResponse.redirected;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Remove the cache busting search param from the response URL, to prevent it
    // from leaking outside of this function.
    const responseUrl = new URL(browserResponse.url, fetchUrl);
    responseUrl.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const rscResponse = {
        url: responseUrl.href,
        // This is true if any redirects occurred, either automatically by the
        // browser, or manually by us. So it's different from
        // `browserResponse.redirected`, which only tells us whether the browser
        // followed a redirect, and only for the last response in the chain.
        redirected,
        // These can be copied from the last browser response we received. We
        // intentionally only expose the subset of fields that are actually used
        // elsewhere in the codebase.
        ok: browserResponse.ok,
        headers: browserResponse.headers,
        body: browserResponse.body,
        status: browserResponse.status,
        // This is the exact promise returned by `createFromFetch`. It contains
        // debug information that we need to transfer to any derived promises that
        // are later rendered by React.
        flightResponse: flightResponsePromise
    };
    return rscResponse;
}
function createFromNextReadableStream(flightStream, requestHeaders) {
    return createFromReadableStream(flightStream, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel: createDebugChannel && createDebugChannel(requestHeaders)
    });
}
function createFromNextFetch(promiseForResponse, requestHeaders) {
    return createFromFetch(promiseForResponse, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel: createDebugChannel && createDebugChannel(requestHeaders)
    });
}
function createUnclosingPrefetchStream(originalFlightStream) {
    // When PPR is enabled, prefetch streams may contain references that never
    // resolve, because that's how we encode dynamic data access. In the decoded
    // object returned by the Flight client, these are reified into hanging
    // promises that suspend during render, which is effectively what we want.
    // The UI resolves when it switches to the dynamic data stream
    // (via useDeferredValue(dynamic, static)).
    //
    // However, the Flight implementation currently errors if the server closes
    // the response before all the references are resolved. As a cheat to work
    // around this, we wrap the original stream in a new stream that never closes,
    // and therefore doesn't error.
    const reader = originalFlightStream.getReader();
    return new ReadableStream({
        async pull (controller) {
            while(true){
                const { done, value } = await reader.read();
                if (!done) {
                    // Pass to the target stream and keep consuming the Flight response
                    // from the server.
                    controller.enqueue(value);
                    continue;
                }
                // The server stream has closed. Exit, but intentionally do not close
                // the target stream.
                return;
            }
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNavigatingToNewRootLayout", {
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
});
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    INTERCEPTION_ROUTE_MARKERS: null,
    extractInterceptionRouteInformation: null,
    isInterceptionRouteAppPath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute;
    let marker;
    let interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    computeChangedPath: null,
    extractPathFromFlightRouterState: null,
    getSelectedParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    computeChangedPath: function() {
        return computeChangedPath;
    },
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    getSelectedParams: function() {
        return getSelectedParams;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const removeLeadingSlash = (segment)=>{
    return segment[0] === '/' ? segment.slice(1) : segment;
};
const segmentToPathname = (segment)=>{
    if (typeof segment === 'string') {
        // 'children' is not a valid path -- it's technically a parallel route that corresponds with the current segment's page
        // if we don't skip it, then the computed pathname might be something like `/children` which doesn't make sense.
        if (segment === 'children') return '';
        return segment;
    }
    return segment[1];
};
function normalizeSegments(segments) {
    return segments.reduce((acc, segment)=>{
        segment = removeLeadingSlash(segment);
        if (segment === '' || (0, _segment.isGroupSegment)(segment)) {
            return acc;
        }
        return `${acc}/${segment}`;
    }, '') || '/';
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === _segment.DEFAULT_SEGMENT_KEY || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) return '';
    const segments = [
        segmentToPathname(segment)
    ];
    const parallelRoutes = flightRouterState[1] ?? {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        segments.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === 'children') continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                segments.push(childPath);
            }
        }
    }
    return normalizeSegments(segments);
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return '';
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return extractPathFromFlightRouterState(treeB) ?? '';
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return `${segmentToPathname(segmentB)}/${changedPath}`;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === '/') {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizeSegments(changedPath.split('/'));
}
function getSelectedParams(currentTree, params = {}) {
    const parallelRoutes = currentTree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === 'c' || segment[2] === 'oc');
        if (isCatchAll) {
            params[segment[0]] = segment[1].split('/');
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleMutable", {
    enumerable: true,
    get: function() {
        return handleMutable;
    }
});
const _computechangedpath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
function isNotUndefined(value) {
    return typeof value !== 'undefined';
}
function handleMutable(state, mutable) {
    // shouldScroll is true by default, can override to false.
    const shouldScroll = mutable.shouldScroll ?? true;
    let previousNextUrl = state.previousNextUrl;
    let nextUrl = state.nextUrl;
    if (isNotUndefined(mutable.patchedTree)) {
        // If we received a patched tree, we need to compute the changed path.
        const changedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree);
        if (changedPath) {
            // If the tree changed, we need to update the nextUrl
            previousNextUrl = nextUrl;
            nextUrl = changedPath;
        } else if (!nextUrl) {
            // if the tree ends up being the same (ie, no changed path), and we don't have a nextUrl, then we should use the canonicalUrl
            nextUrl = state.canonicalUrl;
        }
    // otherwise this will be a no-op and continue to use the existing nextUrl
    }
    return {
        // Set href.
        canonicalUrl: mutable.canonicalUrl ?? state.canonicalUrl,
        renderedSearch: mutable.renderedSearch ?? state.renderedSearch,
        pushRef: {
            pendingPush: isNotUndefined(mutable.pendingPush) ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: isNotUndefined(mutable.mpaNavigation) ? mutable.mpaNavigation : state.pushRef.mpaNavigation,
            preserveCustomHistoryState: isNotUndefined(mutable.preserveCustomHistoryState) ? mutable.preserveCustomHistoryState : state.pushRef.preserveCustomHistoryState
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: shouldScroll ? isNotUndefined(mutable?.scrollableSegments) ? true : state.focusAndScrollRef.apply : false,
            onlyHashChange: mutable.onlyHashChange || false,
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== '' ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? mutable?.scrollableSegments ?? state.focusAndScrollRef.segmentPaths : []
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        // Apply patched router state.
        tree: isNotUndefined(mutable.patchedTree) ? mutable.patchedTree : state.tree,
        nextUrl,
        previousNextUrl: previousNextUrl,
        debugInfo: mutable.collectedDebugInfo ?? null
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/app-router-types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * App Router types - Client-safe types for the Next.js App Router
 *
 * This file contains type definitions that can be safely imported
 * by both client-side and server-side code without circular dependencies.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HasLoadingBoundary", {
    enumerable: true,
    get: function() {
        return HasLoadingBoundary;
    }
});
var HasLoadingBoundary = /*#__PURE__*/ function(HasLoadingBoundary) {
    // There is a loading boundary in this particular segment
    HasLoadingBoundary[HasLoadingBoundary["SegmentHasLoadingBoundary"] = 1] = "SegmentHasLoadingBoundary";
    // There is a loading boundary somewhere in the subtree (but not in
    // this segment)
    HasLoadingBoundary[HasLoadingBoundary["SubtreeHasLoadingBoundary"] = 2] = "SubtreeHasLoadingBoundary";
    // There is no loading boundary in this segment or any of its descendants
    HasLoadingBoundary[HasLoadingBoundary["SubtreeHasNoLoadingBoundary"] = 3] = "SubtreeHasNoLoadingBoundary";
    return HasLoadingBoundary;
}({}); //# sourceMappingURL=app-router-types.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Shared types and constants for the Segment Cache.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    FetchStrategy: null,
    NavigationResultTag: null,
    PrefetchPriority: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FetchStrategy: function() {
        return FetchStrategy;
    },
    NavigationResultTag: function() {
        return NavigationResultTag;
    },
    PrefetchPriority: function() {
        return PrefetchPriority;
    }
});
var NavigationResultTag = /*#__PURE__*/ function(NavigationResultTag) {
    NavigationResultTag[NavigationResultTag["MPA"] = 0] = "MPA";
    NavigationResultTag[NavigationResultTag["Success"] = 1] = "Success";
    NavigationResultTag[NavigationResultTag["NoOp"] = 2] = "NoOp";
    NavigationResultTag[NavigationResultTag["Async"] = 3] = "Async";
    return NavigationResultTag;
}({});
var PrefetchPriority = /*#__PURE__*/ function(PrefetchPriority) {
    /**
   * Assigned to the most recently hovered/touched link. Special network
   * bandwidth is reserved for this task only. There's only ever one Intent-
   * priority task at a time; when a new Intent task is scheduled, the previous
   * one is bumped down to Default.
   */ PrefetchPriority[PrefetchPriority["Intent"] = 2] = "Intent";
    /**
   * The default priority for prefetch tasks.
   */ PrefetchPriority[PrefetchPriority["Default"] = 1] = "Default";
    /**
   * Assigned to tasks when they spawn non-blocking background work, like
   * revalidating a partially cached entry to see if more data is available.
   */ PrefetchPriority[PrefetchPriority["Background"] = 0] = "Background";
    return PrefetchPriority;
}({});
var FetchStrategy = /*#__PURE__*/ function(FetchStrategy) {
    // Deliberately ordered so we can easily compare two segments
    // and determine if one segment is "more specific" than another
    // (i.e. if it's likely that it contains more data)
    FetchStrategy[FetchStrategy["LoadingBoundary"] = 0] = "LoadingBoundary";
    FetchStrategy[FetchStrategy["PPR"] = 1] = "PPR";
    FetchStrategy[FetchStrategy["PPRRuntime"] = 2] = "PPRRuntime";
    FetchStrategy[FetchStrategy["Full"] = 3] = "Full";
    return FetchStrategy;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=types.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/lru.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    deleteFromLru: null,
    lruPut: null,
    updateLruSize: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    deleteFromLru: function() {
        return deleteFromLru;
    },
    lruPut: function() {
        return lruPut;
    },
    updateLruSize: function() {
        return updateLruSize;
    }
});
const _cachemap = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)");
// We use an LRU for memory management. We must update this whenever we add or
// remove a new cache entry, or when an entry changes size.
let head = null;
let didScheduleCleanup = false;
let lruSize = 0;
// TODO: I chose the max size somewhat arbitrarily. Consider setting this based
// on navigator.deviceMemory, or some other heuristic. We should make this
// customizable via the Next.js config, too.
const maxLruSize = 50 * 1024 * 1024 // 50 MB
;
function lruPut(node) {
    if (head === node) {
        // Already at the head
        return;
    }
    const prev = node.prev;
    const next = node.next;
    if (next === null || prev === null) {
        // This is an insertion
        lruSize += node.size;
        // Whenever we add an entry, we need to check if we've exceeded the
        // max size. We don't evict entries immediately; they're evicted later in
        // an asynchronous task.
        ensureCleanupIsScheduled();
    } else {
        // This is a move. Remove from its current position.
        prev.next = next;
        next.prev = prev;
    }
    // Move to the front of the list
    if (head === null) {
        // This is the first entry
        node.prev = node;
        node.next = node;
    } else {
        // Add to the front of the list
        const tail = head.prev;
        node.prev = tail;
        // In practice, this is never null, but that isn't encoded in the type
        if (tail !== null) {
            tail.next = node;
        }
        node.next = head;
        head.prev = node;
    }
    head = node;
}
function updateLruSize(node, newNodeSize) {
    // This is a separate function from `put` so that we can resize the entry
    // regardless of whether it's currently being tracked by the LRU.
    const prevNodeSize = node.size;
    node.size = newNodeSize;
    if (node.next === null) {
        // This entry is not currently being tracked by the LRU.
        return;
    }
    // Update the total LRU size
    lruSize = lruSize - prevNodeSize + newNodeSize;
    ensureCleanupIsScheduled();
}
function deleteFromLru(deleted) {
    const next = deleted.next;
    const prev = deleted.prev;
    if (next !== null && prev !== null) {
        lruSize -= deleted.size;
        deleted.next = null;
        deleted.prev = null;
        // Remove from the list
        if (head === deleted) {
            // Update the head
            if (next === head) {
                // This was the last entry
                head = null;
            } else {
                head = next;
                prev.next = next;
                next.prev = prev;
            }
        } else {
            prev.next = next;
            next.prev = prev;
        }
    } else {
    // Already deleted
    }
}
function ensureCleanupIsScheduled() {
    if (didScheduleCleanup || lruSize <= maxLruSize) {
        return;
    }
    didScheduleCleanup = true;
    requestCleanupCallback(cleanup);
}
function cleanup() {
    didScheduleCleanup = false;
    // Evict entries until we're at 90% capacity. We can assume this won't
    // infinite loop because even if `maxLruSize` were 0, eventually
    // `deleteFromLru` sets `head` to `null` when we run out entries.
    const ninetyPercentMax = maxLruSize * 0.9;
    while(lruSize > ninetyPercentMax && head !== null){
        const tail = head.prev;
        // In practice, this is never null, but that isn't encoded in the type
        if (tail !== null) {
            // Delete the entry from the map. In turn, this will remove it from
            // the LRU.
            (0, _cachemap.deleteMapEntry)(tail);
        }
    }
}
const requestCleanupCallback = typeof requestIdleCallback === 'function' ? requestIdleCallback : (cb)=>setTimeout(cb, 0);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=lru.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Fallback: null,
    createCacheMap: null,
    deleteFromCacheMap: null,
    deleteMapEntry: null,
    getFromCacheMap: null,
    isValueExpired: null,
    setInCacheMap: null,
    setSizeInCacheMap: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Fallback: function() {
        return Fallback;
    },
    createCacheMap: function() {
        return createCacheMap;
    },
    deleteFromCacheMap: function() {
        return deleteFromCacheMap;
    },
    deleteMapEntry: function() {
        return deleteMapEntry;
    },
    getFromCacheMap: function() {
        return getFromCacheMap;
    },
    isValueExpired: function() {
        return isValueExpired;
    },
    setInCacheMap: function() {
        return setInCacheMap;
    },
    setSizeInCacheMap: function() {
        return setSizeInCacheMap;
    }
});
const _lru = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/lru.js [app-client] (ecmascript)");
const Fallback = {};
// This is a special internal key that is used for "revalidation" entries. It's
// an implementation detail that shouldn't leak outside of this module.
const Revalidation = {};
function createCacheMap() {
    const cacheMap = {
        parent: null,
        key: null,
        value: null,
        map: null,
        // LRU-related fields
        prev: null,
        next: null,
        size: 0
    };
    return cacheMap;
}
function getOrInitialize(cacheMap, keys, isRevalidation) {
    // Go through each level of keys until we find the entry that matches, or
    // create a new entry if one doesn't exist.
    //
    // This function will only return entries that match the keypath _exactly_.
    // Unlike getWithFallback, it will not access fallback entries unless it's
    // explicitly part of the keypath.
    let entry = cacheMap;
    let remainingKeys = keys;
    let key = null;
    while(true){
        const previousKey = key;
        if (remainingKeys !== null) {
            key = remainingKeys.value;
            remainingKeys = remainingKeys.parent;
        } else if (isRevalidation && previousKey !== Revalidation) {
            // During a revalidation, we append an internal "Revalidation" key to
            // the end of the keypath. The "normal" entry is its parent.
            // However, if the parent entry is currently empty, we don't need to store
            // this as a revalidation entry. Just insert the revalidation into the
            // normal slot.
            if (entry.value === null) {
                return entry;
            }
            // Otheriwse, create a child entry.
            key = Revalidation;
        } else {
            break;
        }
        let map = entry.map;
        if (map !== null) {
            const existingEntry = map.get(key);
            if (existingEntry !== undefined) {
                // Found a match. Keep going.
                entry = existingEntry;
                continue;
            }
        } else {
            map = new Map();
            entry.map = map;
        }
        // No entry exists yet at this level. Create a new one.
        const newEntry = {
            parent: entry,
            key,
            value: null,
            map: null,
            // LRU-related fields
            prev: null,
            next: null,
            size: 0
        };
        map.set(key, newEntry);
        entry = newEntry;
    }
    return entry;
}
function getFromCacheMap(now, currentCacheVersion, rootEntry, keys, isRevalidation) {
    const entry = getEntryWithFallbackImpl(now, currentCacheVersion, rootEntry, keys, isRevalidation, 0);
    if (entry === null || entry.value === null) {
        return null;
    }
    // This is an LRU access. Move the entry to the front of the list.
    (0, _lru.lruPut)(entry);
    return entry.value;
}
function isValueExpired(now, currentCacheVersion, value) {
    return value.staleAt <= now || value.version < currentCacheVersion;
}
function lazilyEvictIfNeeded(now, currentCacheVersion, entry) {
    // We have a matching entry, but before we can return it, we need to check if
    // it's still fresh. Otherwise it should be treated the same as a cache miss.
    if (entry.value === null) {
        // This entry has no value, so there's nothing to evict.
        return entry;
    }
    const value = entry.value;
    if (isValueExpired(now, currentCacheVersion, value)) {
        // The value expired. Lazily evict it from the cache, and return null. This
        // is conceptually the same as a cache miss.
        deleteMapEntry(entry);
        return null;
    }
    // The matched entry has not expired. Return it.
    return entry;
}
function getEntryWithFallbackImpl(now, currentCacheVersion, entry, keys, isRevalidation, previousKey) {
    // This is similar to getExactEntry, but if an exact match is not found for
    // a key, it will return the fallback entry instead. This is recursive at
    // every level, e.g. an entry with keypath [a, Fallback, c, Fallback] is
    // valid match for [a, b, c, d].
    //
    // It will return the most specific match available.
    let key;
    let remainingKeys;
    if (keys !== null) {
        key = keys.value;
        remainingKeys = keys.parent;
    } else if (isRevalidation && previousKey !== Revalidation) {
        // During a revalidation, we append an internal "Revalidation" key to
        // the end of the keypath.
        key = Revalidation;
        remainingKeys = null;
    } else {
        // There are no more keys. This is the terminal entry.
        // TODO: When performing a lookup during a navigation, as opposed to a
        // prefetch, we may want to skip entries that are Pending if there's also
        // a Fulfilled fallback entry. Tricky to say, though, since if it's
        // already pending, it's likely to stream in soon. Maybe we could do this
        // just on slow connections and offline mode.
        return lazilyEvictIfNeeded(now, currentCacheVersion, entry);
    }
    const map = entry.map;
    if (map !== null) {
        const existingEntry = map.get(key);
        if (existingEntry !== undefined) {
            // Found an exact match for this key. Keep searching.
            const result = getEntryWithFallbackImpl(now, currentCacheVersion, existingEntry, remainingKeys, isRevalidation, key);
            if (result !== null) {
                return result;
            }
        }
        // No match found for this key. Check if there's a fallback.
        const fallbackEntry = map.get(Fallback);
        if (fallbackEntry !== undefined) {
            // Found a fallback for this key. Keep searching.
            return getEntryWithFallbackImpl(now, currentCacheVersion, fallbackEntry, remainingKeys, isRevalidation, key);
        }
    }
    return null;
}
function setInCacheMap(cacheMap, keys, value, isRevalidation) {
    // Add a value to the map at the given keypath. If the value is already
    // part of the map, it's removed from its previous keypath. (NOTE: This is
    // unlike a regular JS map, but the behavior is intentional.)
    const entry = getOrInitialize(cacheMap, keys, isRevalidation);
    setMapEntryValue(entry, value);
    // This is an LRU access. Move the entry to the front of the list.
    (0, _lru.lruPut)(entry);
    (0, _lru.updateLruSize)(entry, value.size);
}
function setMapEntryValue(entry, value) {
    if (entry.value !== null) {
        // There's already a value at the given keypath. Disconnect the old value
        // from the map. We're not calling `deleteMapEntry` here because the
        // entry itself is still in the map. We just want to overwrite its value.
        dropRef(entry.value);
        entry.value = null;
    }
    // This value may already be in the map at a different keypath.
    // Grab a reference before we overwrite it.
    const oldEntry = value.ref;
    entry.value = value;
    value.ref = entry;
    (0, _lru.updateLruSize)(entry, value.size);
    if (oldEntry !== null && oldEntry !== entry && oldEntry.value === value) {
        // This value is already in the map at a different keypath in the map.
        // Values only exist at a single keypath at a time. Remove it from the
        // previous keypath.
        //
        // Note that only the internal map entry is garbage collected; we don't
        // call `dropRef` here because it's still in the map, just
        // at a new keypath (the one we just set, above).
        deleteMapEntry(oldEntry);
    }
}
function deleteFromCacheMap(value) {
    const entry = value.ref;
    if (entry === null) {
        // This value is not a member of any map.
        return;
    }
    dropRef(value);
    deleteMapEntry(entry);
}
function dropRef(value) {
    // Drop the value from the map by setting its `ref` backpointer to
    // null. This is a separate operation from `deleteMapEntry` because when
    // re-keying a value we need to be able to delete the old, internal map
    // entry without garbage collecting the value itself.
    value.ref = null;
}
function deleteMapEntry(entry) {
    // Delete the entry from the cache.
    entry.value = null;
    (0, _lru.deleteFromLru)(entry);
    // Check if we can garbage collect the entry.
    const map = entry.map;
    if (map === null) {
        // Since this entry has no value, and also no child entries, we can
        // garbage collect it. Remove it from its parent, and keep garbage
        // collecting the parents until we reach a non-empty entry.
        let parent = entry.parent;
        let key = entry.key;
        while(parent !== null){
            const parentMap = parent.map;
            if (parentMap !== null) {
                parentMap.delete(key);
                if (parentMap.size === 0) {
                    // We just removed the last entry in the parent map.
                    parent.map = null;
                    if (parent.value === null) {
                        // The parent node has no child entries, nor does it have a value
                        // on itself. It can be garbage collected. Keep going.
                        key = parent.key;
                        parent = parent.parent;
                        continue;
                    }
                }
            }
            break;
        }
    } else {
        // Check if there's a revalidating entry. If so, promote it to a
        // "normal" entry, since the normal one was just deleted.
        const revalidatingEntry = map.get(Revalidation);
        if (revalidatingEntry !== undefined && revalidatingEntry.value !== null) {
            setMapEntryValue(entry, revalidatingEntry.value);
        }
    }
}
function setSizeInCacheMap(value, size) {
    const entry = value.ref;
    if (entry === null) {
        // This value is not a member of any map.
        return;
    }
    // Except during initialization (when the size is set to 0), this is the only
    // place the `size` field should be updated, to ensure it's in sync with the
    // the LRU.
    value.size = size;
    (0, _lru.updateLruSize)(entry, size);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=cache-map.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    appendLayoutVaryPath: null,
    clonePageVaryPathWithNewSearchParams: null,
    finalizeLayoutVaryPath: null,
    finalizeMetadataVaryPath: null,
    finalizePageVaryPath: null,
    getFulfilledRouteVaryPath: null,
    getRouteVaryPath: null,
    getSegmentVaryPathForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    appendLayoutVaryPath: function() {
        return appendLayoutVaryPath;
    },
    clonePageVaryPathWithNewSearchParams: function() {
        return clonePageVaryPathWithNewSearchParams;
    },
    finalizeLayoutVaryPath: function() {
        return finalizeLayoutVaryPath;
    },
    finalizeMetadataVaryPath: function() {
        return finalizeMetadataVaryPath;
    },
    finalizePageVaryPath: function() {
        return finalizePageVaryPath;
    },
    getFulfilledRouteVaryPath: function() {
        return getFulfilledRouteVaryPath;
    },
    getRouteVaryPath: function() {
        return getRouteVaryPath;
    },
    getSegmentVaryPathForRequest: function() {
        return getSegmentVaryPathForRequest;
    }
});
const _types = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _cachemap = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)");
const _segmentvalueencoding = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-client] (ecmascript)");
function getRouteVaryPath(pathname, search, nextUrl) {
    // requestKey -> searchParams -> nextUrl
    const varyPath = {
        value: pathname,
        parent: {
            value: search,
            parent: {
                value: nextUrl,
                parent: null
            }
        }
    };
    return varyPath;
}
function getFulfilledRouteVaryPath(pathname, search, nextUrl, couldBeIntercepted) {
    // This is called when a route's data is fulfilled. The cache entry will be
    // re-keyed based on which inputs the response varies by.
    // requestKey -> searchParams -> nextUrl
    const varyPath = {
        value: pathname,
        parent: {
            value: search,
            parent: {
                value: couldBeIntercepted ? nextUrl : _cachemap.Fallback,
                parent: null
            }
        }
    };
    return varyPath;
}
function appendLayoutVaryPath(parentPath, cacheKey) {
    const varyPathPart = {
        value: cacheKey,
        parent: parentPath
    };
    return varyPathPart;
}
function finalizeLayoutVaryPath(requestKey, varyPath) {
    const layoutVaryPath = {
        value: requestKey,
        parent: varyPath
    };
    return layoutVaryPath;
}
function finalizePageVaryPath(requestKey, renderedSearch, varyPath) {
    // Unlike layouts, a page segment's vary path also includes the search string.
    // requestKey -> searchParams -> pathParams
    const pageVaryPath = {
        value: requestKey,
        parent: {
            value: renderedSearch,
            parent: varyPath
        }
    };
    return pageVaryPath;
}
function finalizeMetadataVaryPath(pageRequestKey, renderedSearch, varyPath) {
    // The metadata "segment" is not a real segment because it doesn't exist in
    // the normal structure of the route tree, but in terms of caching, it
    // behaves like a page segment because it varies by all the same params as
    // a page.
    //
    // To keep the protocol for querying the server simple, the request key for
    // the metadata does not include any path information. It's unnecessary from
    // the server's perspective, because unlike page segments, there's only one
    // metadata response per URL, i.e. there's no need to distinguish multiple
    // parallel pages.
    //
    // However, this means the metadata request key is insufficient for
    // caching the the metadata in the client cache, because on the client we
    // use the request key to distinguish the metadata entry from all other
    // page's metadata entries.
    //
    // So instead we create a simulated request key based on the page segment.
    // Conceptually this is equivalent to the request key the server would have
    // assigned the metadata segment if it treated it as part of the actual
    // route structure.
    // If there are multiple parallel pages, we use whichever is the first one.
    // This is fine because the only difference between request keys for
    // different parallel pages are things like route groups and parallel
    // route slots. As long as it's always the same one, it doesn't matter.
    const pageVaryPath = {
        // Append the actual metadata request key to the page request key. Note
        // that we're not using a separate vary path part; it's unnecessary because
        // these are not conceptually separate inputs.
        value: pageRequestKey + _segmentvalueencoding.HEAD_REQUEST_KEY,
        parent: {
            value: renderedSearch,
            parent: varyPath
        }
    };
    return pageVaryPath;
}
function getSegmentVaryPathForRequest(fetchStrategy, tree) {
    // This is used for storing pending requests in the cache. We want to choose
    // the most generic vary path based on the strategy used to fetch it, i.e.
    // static/PPR versus runtime prefetching, so that it can be reused as much
    // as possible.
    //
    // We may be able to re-key the response to something even more generic once
    // we receive it — for example, if the server tells us that the response
    // doesn't vary on a particular param — but even before we send the request,
    // we know some params are reusable based on the fetch strategy alone. For
    // example, a static prefetch will never vary on search params.
    //
    // The original vary path with all the params filled in is stored on the
    // route tree object. We will clone this one to create a new vary path
    // where certain params are replaced with Fallback.
    //
    // This result of this function is not stored anywhere. It's only used to
    // access the cache a single time.
    //
    // TODO: Rather than create a new list object just to access the cache, the
    // plan is to add the concept of a "vary mask". This will represent all the
    // params that can be treated as Fallback. (Or perhaps the inverse.)
    const originalVaryPath = tree.varyPath;
    // Only page segments (and the special "metadata" segment, which is treated
    // like a page segment for the purposes of caching) may contain search
    // params. There's no reason to include them in the vary path otherwise.
    if (tree.isPage) {
        // Only a runtime prefetch will include search params in the vary path.
        // Static prefetches never include search params, so they can be reused
        // across all possible search param values.
        const doesVaryOnSearchParams = fetchStrategy === _types.FetchStrategy.Full || fetchStrategy === _types.FetchStrategy.PPRRuntime;
        if (!doesVaryOnSearchParams) {
            // The response from the the server will not vary on search params. Clone
            // the end of the original vary path to replace the search params
            // with Fallback.
            //
            // requestKey -> searchParams -> pathParams
            //               ^ This part gets replaced with Fallback
            const searchParamsVaryPath = originalVaryPath.parent;
            const pathParamsVaryPath = searchParamsVaryPath.parent;
            const patchedVaryPath = {
                value: originalVaryPath.value,
                parent: {
                    value: _cachemap.Fallback,
                    parent: pathParamsVaryPath
                }
            };
            return patchedVaryPath;
        }
    }
    // The request does vary on search params. We don't need to modify anything.
    return originalVaryPath;
}
function clonePageVaryPathWithNewSearchParams(originalVaryPath, newSearch) {
    // requestKey -> searchParams -> pathParams
    //               ^ This part gets replaced with newSearch
    const searchParamsVaryPath = originalVaryPath.parent;
    const clonedVaryPath = {
        value: originalVaryPath.value,
        parent: {
            value: newSearch,
            parent: searchParamsVaryPath.parent
        }
    };
    return clonedVaryPath;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=vary-path.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// TypeScript trick to simulate opaque types, like in Flow.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createCacheKey", {
    enumerable: true,
    get: function() {
        return createCacheKey;
    }
});
function createCacheKey(originalHref, nextUrl) {
    const originalUrl = new URL(originalHref);
    const cacheKey = {
        pathname: originalUrl.pathname,
        search: originalUrl.search,
        nextUrl: nextUrl
    };
    return cacheKey;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=cache-key.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelPrefetchTask: null,
    isPrefetchTaskDirty: null,
    pingPrefetchTask: null,
    reschedulePrefetchTask: null,
    schedulePrefetchTask: null,
    startRevalidationCooldown: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelPrefetchTask: function() {
        return cancelPrefetchTask;
    },
    isPrefetchTaskDirty: function() {
        return isPrefetchTaskDirty;
    },
    pingPrefetchTask: function() {
        return pingPrefetchTask;
    },
    reschedulePrefetchTask: function() {
        return reschedulePrefetchTask;
    },
    schedulePrefetchTask: function() {
        return schedulePrefetchTask;
    },
    startRevalidationCooldown: function() {
        return startRevalidationCooldown;
    }
});
const _approutertypes = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/app-router-types.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
const _varypath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-client] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const scheduleMicrotask = typeof queueMicrotask === 'function' ? queueMicrotask : (fn)=>Promise.resolve().then(fn).catch((error)=>setTimeout(()=>{
            throw error;
        }));
const taskHeap = [];
let inProgressRequests = 0;
let sortIdCounter = 0;
let didScheduleMicrotask = false;
// The most recently hovered (or touched, etc) link, i.e. the most recent task
// scheduled at Intent priority. There's only ever a single task at Intent
// priority at a time. We reserve special network bandwidth for this task only.
let mostRecentlyHoveredLink = null;
// CDN cache propagation delay after revalidation (in milliseconds)
const REVALIDATION_COOLDOWN_MS = 300;
// Timeout handle for the revalidation cooldown. When non-null, prefetch
// requests are blocked to allow CDN cache propagation.
let revalidationCooldownTimeoutHandle = null;
function startRevalidationCooldown() {
    // Clear any existing timeout in case multiple revalidations happen
    // in quick succession.
    if (revalidationCooldownTimeoutHandle !== null) {
        clearTimeout(revalidationCooldownTimeoutHandle);
    }
    // Schedule the cooldown to expire after the delay.
    revalidationCooldownTimeoutHandle = setTimeout(()=>{
        revalidationCooldownTimeoutHandle = null;
        // Retry the prefetch queue now that the cooldown has expired.
        ensureWorkIsScheduled();
    }, REVALIDATION_COOLDOWN_MS);
}
function schedulePrefetchTask(key, treeAtTimeOfPrefetch, fetchStrategy, priority, onInvalidate) {
    // Spawn a new prefetch task
    const task = {
        key,
        treeAtTimeOfPrefetch,
        cacheVersion: (0, _cache.getCurrentCacheVersion)(),
        priority,
        phase: 1,
        hasBackgroundWork: false,
        spawnedRuntimePrefetches: null,
        fetchStrategy,
        sortId: sortIdCounter++,
        isCanceled: false,
        onInvalidate,
        _heapIndex: -1
    };
    trackMostRecentlyHoveredLink(task);
    heapPush(taskHeap, task);
    // Schedule an async task to process the queue.
    //
    // The main reason we process the queue in an async task is for batching.
    // It's common for a single JS task/event to trigger multiple prefetches.
    // By deferring to a microtask, we only process the queue once per JS task.
    // If they have different priorities, it also ensures they are processed in
    // the optimal order.
    ensureWorkIsScheduled();
    return task;
}
function cancelPrefetchTask(task) {
    // Remove the prefetch task from the queue. If the task already completed,
    // then this is a no-op.
    //
    // We must also explicitly mark the task as canceled so that a blocked task
    // does not get added back to the queue when it's pinged by the network.
    task.isCanceled = true;
    heapDelete(taskHeap, task);
}
function reschedulePrefetchTask(task, treeAtTimeOfPrefetch, fetchStrategy, priority) {
    // Bump the prefetch task to the top of the queue, as if it were a fresh
    // task. This is essentially the same as canceling the task and scheduling
    // a new one, except it reuses the original object.
    //
    // The primary use case is to increase the priority of a Link-initated
    // prefetch on hover.
    // Un-cancel the task, in case it was previously canceled.
    task.isCanceled = false;
    task.phase = 1;
    // Assign a new sort ID to move it ahead of all other tasks at the same
    // priority level. (Higher sort IDs are processed first.)
    task.sortId = sortIdCounter++;
    task.priority = // Intent priority, even if the rescheduled priority is lower.
    task === mostRecentlyHoveredLink ? _types.PrefetchPriority.Intent : priority;
    task.treeAtTimeOfPrefetch = treeAtTimeOfPrefetch;
    task.fetchStrategy = fetchStrategy;
    trackMostRecentlyHoveredLink(task);
    if (task._heapIndex !== -1) {
        // The task is already in the queue.
        heapResift(taskHeap, task);
    } else {
        heapPush(taskHeap, task);
    }
    ensureWorkIsScheduled();
}
function isPrefetchTaskDirty(task, nextUrl, tree) {
    // This is used to quickly bail out of a prefetch task if the result is
    // guaranteed to not have changed since the task was initiated. This is
    // strictly an optimization — theoretically, if it always returned true, no
    // behavior should change because a full prefetch task will effectively
    // perform the same checks.
    const currentCacheVersion = (0, _cache.getCurrentCacheVersion)();
    return task.cacheVersion !== currentCacheVersion || task.treeAtTimeOfPrefetch !== tree || task.key.nextUrl !== nextUrl;
}
function trackMostRecentlyHoveredLink(task) {
    // Track the mostly recently hovered link, i.e. the most recently scheduled
    // task at Intent priority. There must only be one such task at a time.
    if (task.priority === _types.PrefetchPriority.Intent && task !== mostRecentlyHoveredLink) {
        if (mostRecentlyHoveredLink !== null) {
            // Bump the previously hovered link's priority down to Default.
            if (mostRecentlyHoveredLink.priority !== _types.PrefetchPriority.Background) {
                mostRecentlyHoveredLink.priority = _types.PrefetchPriority.Default;
                heapResift(taskHeap, mostRecentlyHoveredLink);
            }
        }
        mostRecentlyHoveredLink = task;
    }
}
function ensureWorkIsScheduled() {
    if (didScheduleMicrotask) {
        // Already scheduled a task to process the queue
        return;
    }
    didScheduleMicrotask = true;
    scheduleMicrotask(processQueueInMicrotask);
}
/**
 * Checks if we've exceeded the maximum number of concurrent prefetch requests,
 * to avoid saturating the browser's internal network queue. This is a
 * cooperative limit — prefetch tasks should check this before issuing
 * new requests.
 *
 * Also checks if we're within the revalidation cooldown window, during which
 * prefetch requests are delayed to allow CDN cache propagation.
 */ function hasNetworkBandwidth(task) {
    // Check if we're within the revalidation cooldown window
    if (revalidationCooldownTimeoutHandle !== null) {
        // We're within the cooldown window. Return false to prevent prefetching.
        // When the cooldown expires, the timeout will call ensureWorkIsScheduled()
        // to retry the queue.
        return false;
    }
    // TODO: Also check if there's an in-progress navigation. We should never
    // add prefetch requests to the network queue if an actual navigation is
    // taking place, to ensure there's sufficient bandwidth for render-blocking
    // data and resources.
    // TODO: Consider reserving some amount of bandwidth for static prefetches.
    if (task.priority === _types.PrefetchPriority.Intent) {
        // The most recently hovered link is allowed to exceed the default limit.
        //
        // The goal is to always have enough bandwidth to start a new prefetch
        // request when hovering over a link.
        //
        // However, because we don't abort in-progress requests, it's still possible
        // we'll run out of bandwidth. When links are hovered in quick succession,
        // there could be multiple hover requests running simultaneously.
        return inProgressRequests < 12;
    }
    // The default limit is lower than the limit for a hovered link.
    return inProgressRequests < 4;
}
function spawnPrefetchSubtask(prefetchSubtask) {
    // When the scheduler spawns an async task, we don't await its result.
    // Instead, the async task writes its result directly into the cache, then
    // pings the scheduler to continue.
    //
    // We process server responses streamingly, so the prefetch subtask will
    // likely resolve before we're finished receiving all the data. The subtask
    // result includes a promise that resolves once the network connection is
    // closed. The scheduler uses this to control network bandwidth by tracking
    // and limiting the number of concurrent requests.
    inProgressRequests++;
    return prefetchSubtask.then((result)=>{
        if (result === null) {
            // The prefetch task errored before it could start processing the
            // network stream. Assume the connection is closed.
            onPrefetchConnectionClosed();
            return null;
        }
        // Wait for the connection to close before freeing up more bandwidth.
        result.closed.then(onPrefetchConnectionClosed);
        return result.value;
    });
}
function onPrefetchConnectionClosed() {
    inProgressRequests--;
    // Notify the scheduler that we have more bandwidth, and can continue
    // processing tasks.
    ensureWorkIsScheduled();
}
function pingPrefetchTask(task) {
    // "Ping" a prefetch that's already in progress to notify it of new data.
    if (task.isCanceled || // Check if prefetch is already queued.
    task._heapIndex !== -1) {
        return;
    }
    // Add the task back to the queue.
    heapPush(taskHeap, task);
    ensureWorkIsScheduled();
}
function processQueueInMicrotask() {
    didScheduleMicrotask = false;
    // We aim to minimize how often we read the current time. Since nearly all
    // functions in the prefetch scheduler are synchronous, we can read the time
    // once and pass it as an argument wherever it's needed.
    const now = Date.now();
    // Process the task queue until we run out of network bandwidth.
    let task = heapPeek(taskHeap);
    while(task !== null && hasNetworkBandwidth(task)){
        task.cacheVersion = (0, _cache.getCurrentCacheVersion)();
        const exitStatus = pingRoute(now, task);
        // These fields are only valid for a single attempt. Reset them after each
        // iteration of the task queue.
        const hasBackgroundWork = task.hasBackgroundWork;
        task.hasBackgroundWork = false;
        task.spawnedRuntimePrefetches = null;
        switch(exitStatus){
            case 0:
                // The task yielded because there are too many requests in progress.
                // Stop processing tasks until we have more bandwidth.
                return;
            case 1:
                // The task is blocked. It needs more data before it can proceed.
                // Keep the task out of the queue until the server responds.
                heapPop(taskHeap);
                // Continue to the next task
                task = heapPeek(taskHeap);
                continue;
            case 2:
                if (task.phase === 1) {
                    // Finished prefetching the route tree. Proceed to prefetching
                    // the segments.
                    task.phase = 0;
                    heapResift(taskHeap, task);
                } else if (hasBackgroundWork) {
                    // The task spawned additional background work. Reschedule the task
                    // at background priority.
                    task.priority = _types.PrefetchPriority.Background;
                    heapResift(taskHeap, task);
                } else {
                    // The prefetch is complete. Continue to the next task.
                    heapPop(taskHeap);
                }
                task = heapPeek(taskHeap);
                continue;
            default:
                exitStatus;
        }
    }
}
/**
 * Check this during a prefetch task to determine if background work can be
 * performed. If so, it evaluates to `true`. Otherwise, it returns `false`,
 * while also scheduling a background task to run later. Usage:
 *
 * @example
 * if (background(task)) {
 *   // Perform background-pri work
 * }
 */ function background(task) {
    if (task.priority === _types.PrefetchPriority.Background) {
        return true;
    }
    task.hasBackgroundWork = true;
    return false;
}
function pingRoute(now, task) {
    const key = task.key;
    const route = (0, _cache.readOrCreateRouteCacheEntry)(now, task, key);
    const exitStatus = pingRootRouteTree(now, task, route);
    if (exitStatus !== 0 && key.search !== '') {
        // If the URL has a non-empty search string, also prefetch the pathname
        // without the search string. We use the searchless route tree as a base for
        // optimistic routing; see requestOptimisticRouteCacheEntry for details.
        //
        // Note that we don't need to prefetch any of the segment data. Just the
        // route tree.
        //
        // TODO: This is a temporary solution; the plan is to replace this by adding
        // a wildcard lookup method to the TupleMap implementation. This is
        // non-trivial to implement because it needs to account for things like
        // fallback route entries, hence this temporary workaround.
        const url = new URL(key.pathname, location.origin);
        const keyWithoutSearch = (0, _cachekey.createCacheKey)(url.href, key.nextUrl);
        const routeWithoutSearch = (0, _cache.readOrCreateRouteCacheEntry)(now, task, keyWithoutSearch);
        switch(routeWithoutSearch.status){
            case _cache.EntryStatus.Empty:
                {
                    if (background(task)) {
                        routeWithoutSearch.status = _cache.EntryStatus.Pending;
                        spawnPrefetchSubtask((0, _cache.fetchRouteOnCacheMiss)(routeWithoutSearch, task, keyWithoutSearch));
                    }
                    break;
                }
            case _cache.EntryStatus.Pending:
            case _cache.EntryStatus.Fulfilled:
            case _cache.EntryStatus.Rejected:
                {
                    break;
                }
            default:
                routeWithoutSearch;
        }
    }
    return exitStatus;
}
function pingRootRouteTree(now, task, route) {
    switch(route.status){
        case _cache.EntryStatus.Empty:
            {
                // Route is not yet cached, and there's no request already in progress.
                // Spawn a task to request the route, load it into the cache, and ping
                // the task to continue.
                // TODO: There are multiple strategies in the <Link> API for prefetching
                // a route. Currently we've only implemented the main one: per-segment,
                // static-data only.
                //
                // There's also `<Link prefetch={true}>`
                // which prefetch both static *and* dynamic data.
                // Similarly, we need to fallback to the old, per-page
                // behavior if PPR is disabled for a route (via the incremental opt-in).
                //
                // Those cases will be handled here.
                spawnPrefetchSubtask((0, _cache.fetchRouteOnCacheMiss)(route, task, task.key));
                // If the request takes longer than a minute, a subsequent request should
                // retry instead of waiting for this one. When the response is received,
                // this value will be replaced by a new value based on the stale time sent
                // from the server.
                // TODO: We should probably also manually abort the fetch task, to reclaim
                // server bandwidth.
                route.staleAt = now + 60 * 1000;
                // Upgrade to Pending so we know there's already a request in progress
                route.status = _cache.EntryStatus.Pending;
            // Intentional fallthrough to the Pending branch
            }
        case _cache.EntryStatus.Pending:
            {
                // Still pending. We can't start prefetching the segments until the route
                // tree has loaded. Add the task to the set of blocked tasks so that it
                // is notified when the route tree is ready.
                const blockedTasks = route.blockedTasks;
                if (blockedTasks === null) {
                    route.blockedTasks = new Set([
                        task
                    ]);
                } else {
                    blockedTasks.add(task);
                }
                return 1;
            }
        case _cache.EntryStatus.Rejected:
            {
                // Route tree failed to load. Treat as a 404.
                return 2;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                if (task.phase !== 0) {
                    // Do not prefetch segment data until we've entered the segment phase.
                    return 2;
                }
                // Recursively fill in the segment tree.
                if (!hasNetworkBandwidth(task)) {
                    // Stop prefetching segments until there's more bandwidth.
                    return 0;
                }
                const tree = route.tree;
                // A task's fetch strategy gets set to `PPR` for any "auto" prefetch.
                // If it turned out that the route isn't PPR-enabled, we need to use `LoadingBoundary` instead.
                // We don't need to do this for runtime prefetches, because those are only available in
                // `cacheComponents`, where every route is PPR.
                const fetchStrategy = task.fetchStrategy === _types.FetchStrategy.PPR ? route.isPPREnabled ? _types.FetchStrategy.PPR : _types.FetchStrategy.LoadingBoundary : task.fetchStrategy;
                switch(fetchStrategy){
                    case _types.FetchStrategy.PPR:
                        {
                            // For Cache Components pages, each segment may be prefetched
                            // statically or using a runtime request, based on various
                            // configurations and heuristics. We'll do this in two passes: first
                            // traverse the tree and perform all the static prefetches.
                            //
                            // Then, if there are any segments that need a runtime request,
                            // do another pass to perform a runtime prefetch.
                            pingStaticHead(now, task, route);
                            const exitStatus = pingSharedPartOfCacheComponentsTree(now, task, route, task.treeAtTimeOfPrefetch, tree);
                            if (exitStatus === 0) {
                                // Child yielded without finishing.
                                return 0;
                            }
                            const spawnedRuntimePrefetches = task.spawnedRuntimePrefetches;
                            if (spawnedRuntimePrefetches !== null) {
                                // During the first pass, we discovered segments that require a
                                // runtime prefetch. Do a second pass to construct a request tree.
                                const spawnedEntries = new Map();
                                pingRuntimeHead(now, task, route, spawnedEntries, _types.FetchStrategy.PPRRuntime);
                                const requestTree = pingRuntimePrefetches(now, task, route, tree, spawnedRuntimePrefetches, spawnedEntries);
                                let needsDynamicRequest = spawnedEntries.size > 0;
                                if (needsDynamicRequest) {
                                    // Perform a dynamic prefetch request and populate the cache with
                                    // the result.
                                    spawnPrefetchSubtask((0, _cache.fetchSegmentPrefetchesUsingDynamicRequest)(task, route, _types.FetchStrategy.PPRRuntime, requestTree, spawnedEntries));
                                }
                            }
                            return 2;
                        }
                    case _types.FetchStrategy.Full:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.LoadingBoundary:
                        {
                            // Prefetch multiple segments using a single dynamic request.
                            // TODO: We can consolidate this branch with previous one by modeling
                            // it as if the first segment in the new tree has runtime prefetching
                            // enabled. Will do this as a follow-up refactor. Might want to remove
                            // the special metatdata case below first. In the meantime, it's not
                            // really that much duplication, just would be nice to remove one of
                            // these codepaths.
                            const spawnedEntries = new Map();
                            pingRuntimeHead(now, task, route, spawnedEntries, fetchStrategy);
                            const dynamicRequestTree = diffRouteTreeAgainstCurrent(now, task, route, task.treeAtTimeOfPrefetch, tree, spawnedEntries, fetchStrategy);
                            let needsDynamicRequest = spawnedEntries.size > 0;
                            if (needsDynamicRequest) {
                                spawnPrefetchSubtask((0, _cache.fetchSegmentPrefetchesUsingDynamicRequest)(task, route, fetchStrategy, dynamicRequestTree, spawnedEntries));
                            }
                            return 2;
                        }
                    default:
                        fetchStrategy;
                }
                break;
            }
        default:
            {
                route;
            }
    }
    return 2;
}
function pingStaticHead(now, task, route) {
    // The Head data for a page (metadata, viewport) is not really a route
    // segment, in the sense that it doesn't appear in the route tree. But we
    // store it in the cache as if it were, using a special key.
    pingStaticSegmentData(now, task, route, (0, _cache.readOrCreateSegmentCacheEntry)(now, _types.FetchStrategy.PPR, route, route.metadata), task.key, route.metadata);
}
function pingRuntimeHead(now, task, route, spawnedEntries, fetchStrategy) {
    pingRouteTreeAndIncludeDynamicData(now, task, route, route.metadata, false, spawnedEntries, // and LoadingBoundary
    fetchStrategy === _types.FetchStrategy.LoadingBoundary ? _types.FetchStrategy.Full : fetchStrategy);
}
// TODO: Rename dynamic -> runtime throughout this module
function pingSharedPartOfCacheComponentsTree(now, task, route, oldTree, newTree) {
    // When Cache Components is enabled (or PPR, or a fully static route when PPR
    // is disabled; those cases are treated equivalently to Cache Components), we
    // start by prefetching each segment individually. Once we reach the "new"
    // part of the tree — the part that doesn't exist on the current page — we
    // may choose to switch to a runtime prefetch instead, based on the
    // information sent by the server in the route tree.
    //
    // The traversal starts in the "shared" part of the tree. Once we reach the
    // "new" part of the tree, we switch to a different traversal,
    // pingNewPartOfCacheComponentsTree.
    // Prefetch this segment's static data.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, route, newTree);
    pingStaticSegmentData(now, task, route, segment, task.key, newTree);
    // Recursively ping the children.
    const oldTreeChildren = oldTree[1];
    const newTreeChildren = newTree.slots;
    if (newTreeChildren !== null) {
        for(const parallelRouteKey in newTreeChildren){
            if (!hasNetworkBandwidth(task)) {
                // Stop prefetching segments until there's more bandwidth.
                return 0;
            }
            const newTreeChild = newTreeChildren[parallelRouteKey];
            const newTreeChildSegment = newTreeChild.segment;
            const oldTreeChild = oldTreeChildren[parallelRouteKey];
            const oldTreeChildSegment = oldTreeChild?.[0];
            let childExitStatus;
            if (oldTreeChildSegment !== undefined && doesCurrentSegmentMatchCachedSegment(route, newTreeChildSegment, oldTreeChildSegment)) {
                // We're still in the "shared" part of the tree.
                childExitStatus = pingSharedPartOfCacheComponentsTree(now, task, route, oldTreeChild, newTreeChild);
            } else {
                // We've entered the "new" part of the tree. Switch
                // traversal functions.
                childExitStatus = pingNewPartOfCacheComponentsTree(now, task, route, newTreeChild);
            }
            if (childExitStatus === 0) {
                // Child yielded without finishing.
                return 0;
            }
        }
    }
    return 2;
}
function pingNewPartOfCacheComponentsTree(now, task, route, tree) {
    // We're now prefetching in the "new" part of the tree, the part that doesn't
    // exist on the current page. (In other words, we're deeper than the
    // shared layouts.) Segments in here default to being prefetched statically.
    // However, if the server instructs us to, we may switch to a runtime
    // prefetch instead. Traverse the tree and check at each segment.
    if (tree.hasRuntimePrefetch) {
        // This route has a runtime prefetch response. Since we're below the shared
        // layout, everything from this point should be prefetched using a single,
        // combined runtime request, rather than using per-segment static requests.
        // This is true even if some of the child segments are known to be fully
        // static — once we've decided to perform a runtime prefetch, we might as
        // well respond with the static segments in the same roundtrip. (That's how
        // regular navigations work, too.) We'll still skip over segments that are
        // already cached, though.
        //
        // It's the server's responsibility to set a reasonable value of
        // `hasRuntimePrefetch`. Currently it's user-defined, but eventually, the
        // server may send a value of `false` even if the user opts in, if it
        // determines during build that the route is always fully static. There are
        // more optimizations we can do once we implement fallback param
        // tracking, too.
        //
        // Use the task object to collect the segments that need a runtime prefetch.
        // This will signal to the outer task queue that a second traversal is
        // required to construct a request tree.
        if (task.spawnedRuntimePrefetches === null) {
            task.spawnedRuntimePrefetches = new Set([
                tree.requestKey
            ]);
        } else {
            task.spawnedRuntimePrefetches.add(tree.requestKey);
        }
        // Then exit the traversal without prefetching anything further.
        return 2;
    }
    // This segment should not be runtime prefetched. Prefetch its static data.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, route, tree);
    pingStaticSegmentData(now, task, route, segment, task.key, tree);
    if (tree.slots !== null) {
        if (!hasNetworkBandwidth(task)) {
            // Stop prefetching segments until there's more bandwidth.
            return 0;
        }
        // Recursively ping the children.
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            const childExitStatus = pingNewPartOfCacheComponentsTree(now, task, route, childTree);
            if (childExitStatus === 0) {
                // Child yielded without finishing.
                return 0;
            }
        }
    }
    // This segment and all its children have finished prefetching.
    return 2;
}
function diffRouteTreeAgainstCurrent(now, task, route, oldTree, newTree, spawnedEntries, fetchStrategy) {
    // This is a single recursive traversal that does multiple things:
    // - Finds the parts of the target route (newTree) that are not part of
    //   of the current page (oldTree) by diffing them, using the same algorithm
    //   as a real navigation.
    // - Constructs a request tree (FlightRouterState) that describes which
    //   segments need to be prefetched and which ones are already cached.
    // - Creates a set of pending cache entries for the segments that need to
    //   be prefetched, so that a subsequent prefetch task does not request the
    //   same segments again.
    const oldTreeChildren = oldTree[1];
    const newTreeChildren = newTree.slots;
    let requestTreeChildren = {};
    if (newTreeChildren !== null) {
        for(const parallelRouteKey in newTreeChildren){
            const newTreeChild = newTreeChildren[parallelRouteKey];
            const newTreeChildSegment = newTreeChild.segment;
            const oldTreeChild = oldTreeChildren[parallelRouteKey];
            const oldTreeChildSegment = oldTreeChild?.[0];
            if (oldTreeChildSegment !== undefined && doesCurrentSegmentMatchCachedSegment(route, newTreeChildSegment, oldTreeChildSegment)) {
                // This segment is already part of the current route. Keep traversing.
                const requestTreeChild = diffRouteTreeAgainstCurrent(now, task, route, oldTreeChild, newTreeChild, spawnedEntries, fetchStrategy);
                requestTreeChildren[parallelRouteKey] = requestTreeChild;
            } else {
                // This segment is not part of the current route. We're entering a
                // part of the tree that we need to prefetch (unless everything is
                // already cached).
                switch(fetchStrategy){
                    case _types.FetchStrategy.LoadingBoundary:
                        {
                            // When PPR is disabled, we can't prefetch per segment. We must
                            // fallback to the old prefetch behavior and send a dynamic request.
                            // Only routes that include a loading boundary can be prefetched in
                            // this way.
                            //
                            // This is simlar to a "full" prefetch, but we're much more
                            // conservative about which segments to include in the request.
                            //
                            // The server will only render up to the first loading boundary
                            // inside new part of the tree. If there's no loading boundary
                            // anywhere in the tree, the server will never return any data, so
                            // we can skip the request.
                            const subtreeHasLoadingBoundary = newTreeChild.hasLoadingBoundary !== _approutertypes.HasLoadingBoundary.SubtreeHasNoLoadingBoundary;
                            const requestTreeChild = subtreeHasLoadingBoundary ? pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, newTreeChild, null, spawnedEntries) : (0, _cache.convertRouteTreeToFlightRouterState)(newTreeChild);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    case _types.FetchStrategy.PPRRuntime:
                        {
                            // This is a runtime prefetch. Fetch all cacheable data in the tree,
                            // not just the static PPR shell.
                            const requestTreeChild = pingRouteTreeAndIncludeDynamicData(now, task, route, newTreeChild, false, spawnedEntries, fetchStrategy);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    case _types.FetchStrategy.Full:
                        {
                            // This is a "full" prefetch. Fetch all the data in the tree, both
                            // static and dynamic. We issue roughly the same request that we
                            // would during a real navigation. The goal is that once the
                            // navigation occurs, the router should not have to fetch any
                            // additional data.
                            //
                            // Although the response will include dynamic data, opting into a
                            // Full prefetch — via <Link prefetch={true}> — implicitly
                            // instructs the cache to treat the response as "static", or non-
                            // dynamic, since the whole point is to cache it for
                            // future navigations.
                            //
                            // Construct a tree (currently a FlightRouterState) that represents
                            // which segments need to be prefetched and which ones are already
                            // cached. If the tree is empty, then we can exit. Otherwise, we'll
                            // send the request tree to the server and use the response to
                            // populate the segment cache.
                            const requestTreeChild = pingRouteTreeAndIncludeDynamicData(now, task, route, newTreeChild, false, spawnedEntries, fetchStrategy);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    default:
                        fetchStrategy;
                }
            }
        }
    }
    const requestTree = [
        newTree.segment,
        requestTreeChildren,
        null,
        null,
        newTree.isRootLayout
    ];
    return requestTree;
}
function pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, tree, refetchMarkerContext, spawnedEntries) {
    // This function is similar to pingRouteTreeAndIncludeDynamicData, except the
    // server is only going to return a minimal loading state — it will stop
    // rendering at the first loading boundary. Whereas a Full prefetch is
    // intentionally aggressive and tries to pretfetch all the data that will be
    // needed for a navigation, a LoadingBoundary prefetch is much more
    // conservative. For example, it will omit from the request tree any segment
    // that is already cached, regardles of whether it's partial or full. By
    // contrast, a Full prefetch will refetch partial segments.
    // "inside-shared-layout" tells the server where to start looking for a
    // loading boundary.
    let refetchMarker = refetchMarkerContext === null ? 'inside-shared-layout' : null;
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, route, tree);
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            {
                // This segment is not cached. Add a refetch marker so the server knows
                // to start rendering here.
                // TODO: Instead of a "refetch" marker, we could just omit this subtree's
                // FlightRouterState from the request tree. I think this would probably
                // already work even without any updates to the server. For consistency,
                // though, I'll send the full tree and we'll look into this later as part
                // of a larger redesign of the request protocol.
                // Add the pending cache entry to the result map.
                spawnedEntries.set(tree.requestKey, (0, _cache.upgradeToPendingSegment)(segment, // might not include it in the pending response. If another route is able
                // to issue a per-segment request, we'll do that in the background.
                _types.FetchStrategy.LoadingBoundary));
                if (refetchMarkerContext !== 'refetch') {
                    refetchMarker = refetchMarkerContext = 'refetch';
                } else {
                // There's already a parent with a refetch marker, so we don't need
                // to add another one.
                }
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // The segment is already cached.
                const segmentHasLoadingBoundary = tree.hasLoadingBoundary === _approutertypes.HasLoadingBoundary.SegmentHasLoadingBoundary;
                if (segmentHasLoadingBoundary) {
                    // This segment has a loading boundary, which means the server won't
                    // render its children. So there's nothing left to prefetch along this
                    // path. We can bail out.
                    return (0, _cache.convertRouteTreeToFlightRouterState)(tree);
                }
                break;
            }
        case _cache.EntryStatus.Pending:
            {
                break;
            }
        case _cache.EntryStatus.Rejected:
            {
                break;
            }
        default:
            segment;
    }
    const requestTreeChildren = {};
    if (tree.slots !== null) {
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, childTree, refetchMarkerContext, spawnedEntries);
        }
    }
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        refetchMarker,
        tree.isRootLayout
    ];
    return requestTree;
}
function pingRouteTreeAndIncludeDynamicData(now, task, route, tree, isInsideRefetchingParent, spawnedEntries, fetchStrategy) {
    // The tree we're constructing is the same shape as the tree we're navigating
    // to. But even though this is a "new" tree, some of the individual segments
    // may be cached as a result of other route prefetches.
    //
    // So we need to find the first uncached segment along each path add an
    // explicit "refetch" marker so the server knows where to start rendering.
    // Once the server starts rendering along a path, it keeps rendering the
    // entire subtree.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, // and we have to use the former here.
    // We can have a task with `FetchStrategy.PPR` where some of its segments are configured to
    // always use runtime prefetching (via `export const prefetch`), and those should check for
    // entries that include search params.
    fetchStrategy, route, tree);
    let spawnedSegment = null;
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            {
                // This segment is not cached. Include it in the request.
                spawnedSegment = (0, _cache.upgradeToPendingSegment)(segment, fetchStrategy);
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // The segment is already cached.
                if (segment.isPartial && (0, _cache.canNewFetchStrategyProvideMoreContent)(segment.fetchStrategy, fetchStrategy)) {
                    // The cached segment contains dynamic holes, and was prefetched using a less specific strategy than the current one.
                    // This means we're in one of these cases:
                    //   - we have a static prefetch, and we're doing a runtime prefetch
                    //   - we have a static or runtime prefetch, and we're doing a Full prefetch (or a navigation).
                    // In either case, we need to include it in the request to get a more specific (or full) version.
                    spawnedSegment = pingFullSegmentRevalidation(now, route, tree, fetchStrategy);
                }
                break;
            }
        case _cache.EntryStatus.Pending:
        case _cache.EntryStatus.Rejected:
            {
                // There's either another prefetch currently in progress, or the previous
                // attempt failed. If the new strategy can provide more content, fetch it again.
                if ((0, _cache.canNewFetchStrategyProvideMoreContent)(segment.fetchStrategy, fetchStrategy)) {
                    spawnedSegment = pingFullSegmentRevalidation(now, route, tree, fetchStrategy);
                }
                break;
            }
        default:
            segment;
    }
    const requestTreeChildren = {};
    if (tree.slots !== null) {
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingRouteTreeAndIncludeDynamicData(now, task, route, childTree, isInsideRefetchingParent || spawnedSegment !== null, spawnedEntries, fetchStrategy);
        }
    }
    if (spawnedSegment !== null) {
        // Add the pending entry to the result map.
        spawnedEntries.set(tree.requestKey, spawnedSegment);
    }
    // Don't bother to add a refetch marker if one is already present in a parent.
    const refetchMarker = !isInsideRefetchingParent && spawnedSegment !== null ? 'refetch' : null;
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        refetchMarker,
        tree.isRootLayout
    ];
    return requestTree;
}
function pingRuntimePrefetches(now, task, route, tree, spawnedRuntimePrefetches, spawnedEntries) {
    // Construct a request tree (FlightRouterState) for a runtime prefetch. If
    // a segment is part of the runtime prefetch, the tree is constructed by
    // diffing against what's already in the prefetch cache. Otherwise, we send
    // a regular FlightRouterState with no special markers.
    //
    // See pingRouteTreeAndIncludeDynamicData for details.
    if (spawnedRuntimePrefetches.has(tree.requestKey)) {
        // This segment needs a runtime prefetch.
        return pingRouteTreeAndIncludeDynamicData(now, task, route, tree, false, spawnedEntries, _types.FetchStrategy.PPRRuntime);
    }
    let requestTreeChildren = {};
    const slots = tree.slots;
    if (slots !== null) {
        for(const parallelRouteKey in slots){
            const childTree = slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingRuntimePrefetches(now, task, route, childTree, spawnedRuntimePrefetches, spawnedEntries);
        }
    }
    // This segment is not part of the runtime prefetch. Clone the base tree.
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        null
    ];
    return requestTree;
}
function pingStaticSegmentData(now, task, route, segment, routeKey, tree) {
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            // Upgrade to Pending so we know there's already a request in progress
            spawnPrefetchSubtask((0, _cache.fetchSegmentOnCacheMiss)(route, (0, _cache.upgradeToPendingSegment)(segment, _types.FetchStrategy.PPR), routeKey, tree));
            break;
        case _cache.EntryStatus.Pending:
            {
                // There's already a request in progress. Depending on what kind of
                // request it is, we may want to revalidate it.
                switch(segment.fetchStrategy){
                    case _types.FetchStrategy.PPR:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.Full:
                        break;
                    case _types.FetchStrategy.LoadingBoundary:
                        // There's a pending request, but because it's using the old
                        // prefetching strategy, we can't be sure if it will be fulfilled by
                        // the response — it might be inside the loading boundary. Perform
                        // a revalidation, but because it's speculative, wait to do it at
                        // background priority.
                        if (background(task)) {
                            // TODO: Instead of speculatively revalidating, consider including
                            // `hasLoading` in the route tree prefetch response.
                            pingPPRSegmentRevalidation(now, route, routeKey, tree);
                        }
                        break;
                    default:
                        segment.fetchStrategy;
                }
                break;
            }
        case _cache.EntryStatus.Rejected:
            {
                // The existing entry in the cache was rejected. Depending on how it
                // was originally fetched, we may or may not want to revalidate it.
                switch(segment.fetchStrategy){
                    case _types.FetchStrategy.PPR:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.Full:
                        break;
                    case _types.FetchStrategy.LoadingBoundary:
                        // There's a rejected entry, but it was fetched using the loading
                        // boundary strategy. So the reason it wasn't returned by the server
                        // might just be because it was inside a loading boundary. Or because
                        // there was a dynamic rewrite. Revalidate it using the per-
                        // segment strategy.
                        //
                        // Because a rejected segment will definitely prevent the segment (and
                        // all of its children) from rendering, we perform this revalidation
                        // immediately instead of deferring it to a background task.
                        pingPPRSegmentRevalidation(now, route, routeKey, tree);
                        break;
                    default:
                        segment.fetchStrategy;
                }
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            break;
        default:
            segment;
    }
// Segments do not have dependent tasks, so once the prefetch is initiated,
// there's nothing else for us to do (except write the server data into the
// entry, which is handled by `fetchSegmentOnCacheMiss`).
}
function pingPPRSegmentRevalidation(now, route, routeKey, tree) {
    const revalidatingSegment = (0, _cache.readOrCreateRevalidatingSegmentEntry)(now, _types.FetchStrategy.PPR, route, tree);
    switch(revalidatingSegment.status){
        case _cache.EntryStatus.Empty:
            // Spawn a prefetch request and upsert the segment into the cache
            // upon completion.
            upsertSegmentOnCompletion(spawnPrefetchSubtask((0, _cache.fetchSegmentOnCacheMiss)(route, (0, _cache.upgradeToPendingSegment)(revalidatingSegment, _types.FetchStrategy.PPR), routeKey, tree)), (0, _varypath.getSegmentVaryPathForRequest)(_types.FetchStrategy.PPR, tree));
            break;
        case _cache.EntryStatus.Pending:
            break;
        case _cache.EntryStatus.Fulfilled:
        case _cache.EntryStatus.Rejected:
            break;
        default:
            revalidatingSegment;
    }
}
function pingFullSegmentRevalidation(now, route, tree, fetchStrategy) {
    const revalidatingSegment = (0, _cache.readOrCreateRevalidatingSegmentEntry)(now, fetchStrategy, route, tree);
    if (revalidatingSegment.status === _cache.EntryStatus.Empty) {
        // During a Full/PPRRuntime prefetch, a single dynamic request is made for all the
        // segments that we need. So we don't initiate a request here directly. By
        // returning a pending entry from this function, it signals to the caller
        // that this segment should be included in the request that's sent to
        // the server.
        const pendingSegment = (0, _cache.upgradeToPendingSegment)(revalidatingSegment, fetchStrategy);
        upsertSegmentOnCompletion((0, _cache.waitForSegmentCacheEntry)(pendingSegment), (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree));
        return pendingSegment;
    } else {
        // There's already a revalidation in progress.
        const nonEmptyRevalidatingSegment = revalidatingSegment;
        if ((0, _cache.canNewFetchStrategyProvideMoreContent)(nonEmptyRevalidatingSegment.fetchStrategy, fetchStrategy)) {
            // The existing revalidation was fetched using a less specific strategy.
            // Reset it and start a new revalidation.
            const emptySegment = (0, _cache.overwriteRevalidatingSegmentCacheEntry)(fetchStrategy, route, tree);
            const pendingSegment = (0, _cache.upgradeToPendingSegment)(emptySegment, fetchStrategy);
            upsertSegmentOnCompletion((0, _cache.waitForSegmentCacheEntry)(pendingSegment), (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree));
            return pendingSegment;
        }
        switch(nonEmptyRevalidatingSegment.status){
            case _cache.EntryStatus.Pending:
                // There's already an in-progress prefetch that includes this segment.
                return null;
            case _cache.EntryStatus.Fulfilled:
            case _cache.EntryStatus.Rejected:
                // A previous revalidation attempt finished, but we chose not to replace
                // the existing entry in the cache. Don't try again until or unless the
                // revalidation entry expires.
                return null;
            default:
                nonEmptyRevalidatingSegment;
                return null;
        }
    }
}
const noop = ()=>{};
function upsertSegmentOnCompletion(promise, varyPath) {
    // Wait for a segment to finish loading, then upsert it into the cache
    promise.then((fulfilled)=>{
        if (fulfilled !== null) {
            // Received new data. Attempt to replace the existing entry in the cache.
            (0, _cache.upsertSegmentEntry)(Date.now(), varyPath, fulfilled);
        }
    }, noop);
}
function doesCurrentSegmentMatchCachedSegment(route, currentSegment, cachedSegment) {
    if (cachedSegment === _segment.PAGE_SEGMENT_KEY) {
        // In the FlightRouterState stored by the router, the page segment has the
        // rendered search params appended to the name of the segment. In the
        // prefetch cache, however, this is stored separately. So, when comparing
        // the router's current FlightRouterState to the cached FlightRouterState,
        // we need to make sure we compare both parts of the segment.
        // TODO: This is not modeled clearly. We use the same type,
        // FlightRouterState, for both the CacheNode tree _and_ the prefetch cache
        // _and_ the server response format, when conceptually those are three
        // different things and treated in different ways. We should encode more of
        // this information into the type design so mistakes are less likely.
        return currentSegment === (0, _segment.addSearchParamsIfPageSegment)(_segment.PAGE_SEGMENT_KEY, Object.fromEntries(new URLSearchParams(route.renderedSearch)));
    }
    // Non-page segments are compared using the same function as the server
    return (0, _matchsegments.matchSegment)(cachedSegment, currentSegment);
}
// -----------------------------------------------------------------------------
// The remainder of the module is a MinHeap implementation. Try not to put any
// logic below here unless it's related to the heap algorithm. We can extract
// this to a separate module if/when we need multiple kinds of heaps.
// -----------------------------------------------------------------------------
function compareQueuePriority(a, b) {
    // Since the queue is a MinHeap, this should return a positive number if b is
    // higher priority than a, and a negative number if a is higher priority
    // than b.
    // `priority` is an integer, where higher numbers are higher priority.
    const priorityDiff = b.priority - a.priority;
    if (priorityDiff !== 0) {
        return priorityDiff;
    }
    // If the priority is the same, check which phase the prefetch is in — is it
    // prefetching the route tree, or the segments? Route trees are prioritized.
    const phaseDiff = b.phase - a.phase;
    if (phaseDiff !== 0) {
        return phaseDiff;
    }
    // Finally, check the insertion order. `sortId` is an incrementing counter
    // assigned to prefetches. We want to process the newest prefetches first.
    return b.sortId - a.sortId;
}
function heapPush(heap, node) {
    const index = heap.length;
    heap.push(node);
    node._heapIndex = index;
    heapSiftUp(heap, node, index);
}
function heapPeek(heap) {
    return heap.length === 0 ? null : heap[0];
}
function heapPop(heap) {
    if (heap.length === 0) {
        return null;
    }
    const first = heap[0];
    first._heapIndex = -1;
    const last = heap.pop();
    if (last !== first) {
        heap[0] = last;
        last._heapIndex = 0;
        heapSiftDown(heap, last, 0);
    }
    return first;
}
function heapDelete(heap, node) {
    const index = node._heapIndex;
    if (index !== -1) {
        node._heapIndex = -1;
        if (heap.length !== 0) {
            const last = heap.pop();
            if (last !== node) {
                heap[index] = last;
                last._heapIndex = index;
                heapSiftDown(heap, last, index);
            }
        }
    }
}
function heapResift(heap, node) {
    const index = node._heapIndex;
    if (index !== -1) {
        if (index === 0) {
            heapSiftDown(heap, node, 0);
        } else {
            const parentIndex = index - 1 >>> 1;
            const parent = heap[parentIndex];
            if (compareQueuePriority(parent, node) > 0) {
                // The parent is larger. Sift up.
                heapSiftUp(heap, node, index);
            } else {
                // The parent is smaller (or equal). Sift down.
                heapSiftDown(heap, node, index);
            }
        }
    }
}
function heapSiftUp(heap, node, i) {
    let index = i;
    while(index > 0){
        const parentIndex = index - 1 >>> 1;
        const parent = heap[parentIndex];
        if (compareQueuePriority(parent, node) > 0) {
            // The parent is larger. Swap positions.
            heap[parentIndex] = node;
            node._heapIndex = parentIndex;
            heap[index] = parent;
            parent._heapIndex = index;
            index = parentIndex;
        } else {
            // The parent is smaller. Exit.
            return;
        }
    }
}
function heapSiftDown(heap, node, i) {
    let index = i;
    const length = heap.length;
    const halfLength = length >>> 1;
    while(index < halfLength){
        const leftIndex = (index + 1) * 2 - 1;
        const left = heap[leftIndex];
        const rightIndex = leftIndex + 1;
        const right = heap[rightIndex];
        // If the left or right node is smaller, swap with the smaller of those.
        if (compareQueuePriority(left, node) < 0) {
            if (rightIndex < length && compareQueuePriority(right, left) < 0) {
                heap[index] = right;
                right._heapIndex = index;
                heap[rightIndex] = node;
                node._heapIndex = rightIndex;
                index = rightIndex;
            } else {
                heap[index] = left;
                left._heapIndex = index;
                heap[leftIndex] = node;
                node._heapIndex = leftIndex;
                index = leftIndex;
            }
        } else if (rightIndex < length && compareQueuePriority(right, node) < 0) {
            heap[index] = right;
            right._heapIndex = index;
            heap[rightIndex] = node;
            node._heapIndex = rightIndex;
            index = rightIndex;
        } else {
            // Neither child is smaller. Exit.
            return;
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parsePath", {
    enumerable: true,
    get: function() {
        return parsePath;
    }
});
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
} //# sourceMappingURL=parse-path.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathPrefix", {
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
});
const _parsepath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)");
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return `${prefix}${pathname}${query}${hash}`;
} //# sourceMappingURL=add-path-prefix.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeTrailingSlash", {
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-client] (ecmascript)");
const _parsepath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith('/') || ("TURBOPACK compile-time value", void 0)) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return `${(0, _removetrailingslash.removeTrailingSlash)(pathname)}${query}${hash}`;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-client] (ecmascript)");
const _normalizetrailingslash = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createPrefetchURL: null,
    isExternalURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrefetchURL: function() {
        return createPrefetchURL;
    },
    isExternalURL: function() {
        return isExternalURL;
    }
});
const _isbot = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function createPrefetchURL(href) {
    // Don't prefetch for bots as they don't navigate.
    if ((0, _isbot.isBot)(window.navigator.userAgent)) {
        return null;
    }
    let url;
    try {
        url = new URL((0, _addbasepath.addBasePath)(href), window.location.href);
    } catch (_) {
        // TODO: Does this need to throw or can we just console.error instead? Does
        // anyone rely on this throwing? (Seems unlikely.)
        throw Object.defineProperty(new Error(`Cannot prefetch '${href}' because it cannot be converted to a URL.`), "__NEXT_ERROR_CODE", {
            value: "E234",
            enumerable: false,
            configurable: true
        });
    }
    // Don't prefetch during development (improves compilation performance)
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-utils.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasInterceptionRouteInCurrentTree", {
    enumerable: true,
    get: function() {
        return hasInterceptionRouteInCurrentTree;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
function hasInterceptionRouteInCurrentTree([segment, parallelRoutes]) {
    // If we have a dynamic segment, it's marked as an interception route by the presence of the `i` suffix.
    if (Array.isArray(segment) && (segment[2] === 'di(..)(..)' || segment[2] === 'ci(..)(..)' || segment[2] === 'di(.)' || segment[2] === 'ci(.)' || segment[2] === 'di(..)' || segment[2] === 'ci(..)' || segment[2] === 'di(...)' || segment[2] === 'ci(...)')) {
        return true;
    }
    // If segment is not an array, apply the existing string-based check
    if (typeof segment === 'string' && (0, _interceptionroutes.isInterceptionRouteAppPath)(segment)) {
        return true;
    }
    // Iterate through parallelRoutes if they exist
    if (parallelRoutes) {
        for(const key in parallelRoutes){
            if (hasInterceptionRouteInCurrentTree(parallelRoutes[key])) {
                return true;
            }
        }
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-interception-route-in-current-tree.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    refreshDynamicData: null,
    refreshReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    refreshDynamicData: function() {
        return refreshDynamicData;
    },
    refreshReducer: function() {
        return refreshReducer;
    }
});
const _navigatereducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _navigation = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
const _hasinterceptionrouteincurrenttree = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
function refreshReducer(state) {
    // TODO: Currently, all refreshes purge the prefetch cache. In the future,
    // only client-side refreshes will have this behavior; the server-side
    // `refresh` should send new data without purging the prefetch cache.
    const currentNextUrl = state.nextUrl;
    const currentRouterState = state.tree;
    (0, _cache.revalidateEntireCache)(currentNextUrl, currentRouterState);
    return refreshDynamicData(state, _pprnavigations.FreshnessPolicy.RefreshAll);
}
function refreshDynamicData(state, freshnessPolicy) {
    const currentNextUrl = state.nextUrl;
    // We always send the last next-url, not the current when performing a dynamic
    // request. This is because we update the next-url after a navigation, but we
    // want the same interception route to be matched that used the last next-url.
    const nextUrlForRefresh = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree) ? state.previousNextUrl || currentNextUrl : null;
    // A refresh is modeled as a navigation to the current URL, but where any
    // existing dynamic data (including in shared layouts) is re-fetched.
    const currentCanonicalUrl = state.canonicalUrl;
    const currentUrl = new URL(currentCanonicalUrl, location.origin);
    const currentFlightRouterState = state.tree;
    const shouldScroll = true;
    const navigationSeed = {
        tree: state.tree,
        renderedSearch: state.renderedSearch,
        data: null,
        head: null
    };
    const now = Date.now();
    const result = (0, _navigation.navigateToSeededRoute)(now, currentUrl, currentCanonicalUrl, navigationSeed, currentUrl, state.cache, currentFlightRouterState, freshnessPolicy, nextUrlForRefresh, shouldScroll);
    const mutable = {};
    mutable.preserveCustomHistoryState = false;
    return (0, _navigatereducer.handleNavigationResult)(currentUrl, state, mutable, false, result);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverPatchReducer", {
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
});
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _navigation = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
const _refreshreducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
function serverPatchReducer(state, action) {
    const mutable = {};
    mutable.preserveCustomHistoryState = false;
    // A "retry" is a navigation that happens due to a route mismatch. It's
    // similar to a refresh, because we will omit any existing dynamic data on
    // the page. But we seed the retry navigation with the exact tree that the
    // server just responded with.
    const retryMpa = action.mpa;
    const retryUrl = new URL(action.url, location.origin);
    const retrySeed = action.seed;
    if (retryMpa || retrySeed === null) {
        // If the server did not send back data during the mismatch, fall back to
        // an MPA navigation.
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, retryUrl.href, false);
    }
    const currentUrl = new URL(state.canonicalUrl, location.origin);
    if (action.previousTree !== state.tree) {
        // There was another, more recent navigation since the once that
        // mismatched. We can abort the retry, but we still need to refresh the
        // page to evict any stale dynamic data.
        return (0, _refreshreducer.refreshReducer)(state);
    }
    // There have been no new navigations since the mismatched one. Refresh,
    // using the tree we just received from the server.
    const retryCanonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(retryUrl);
    const retryNextUrl = action.nextUrl;
    // A retry should not create a new history entry.
    const pendingPush = false;
    const shouldScroll = true;
    const now = Date.now();
    const result = (0, _navigation.navigateToSeededRoute)(now, retryUrl, retryCanonicalUrl, retrySeed, currentUrl, state.cache, state.tree, _pprnavigations.FreshnessPolicy.RefreshAll, retryNextUrl, shouldScroll);
    return (0, _navigatereducer.handleNavigationResult)(retryUrl, state, mutable, pendingPush, result);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "restoreReducer", {
    enumerable: true,
    get: function() {
        return restoreReducer;
    }
});
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _computechangedpath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
function restoreReducer(state, action) {
    // This action is used to restore the router state from the history state.
    // However, it's possible that the history state no longer contains the `FlightRouterState`.
    // We will copy over the internal state on pushState/replaceState events, but if a history entry
    // occurred before hydration, or if the user navigated to a hash using a regular anchor link,
    // the history state will not contain the `FlightRouterState`.
    // In this case, we'll continue to use the existing tree so the router doesn't get into an invalid state.
    let treeToRestore;
    let renderedSearch;
    const historyState = action.historyState;
    if (historyState) {
        treeToRestore = historyState.tree;
        renderedSearch = historyState.renderedSearch;
    } else {
        treeToRestore = state.tree;
        renderedSearch = state.renderedSearch;
    }
    const currentUrl = new URL(state.canonicalUrl, location.origin);
    const restoredUrl = action.url;
    const restoredCanonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(restoredUrl);
    const restoredNextUrl = (0, _computechangedpath.extractPathFromFlightRouterState)(treeToRestore) ?? restoredUrl.pathname;
    const now = Date.now();
    const accumulation = {
        scrollableSegments: null,
        separateRefreshUrls: null
    };
    const task = (0, _pprnavigations.startPPRNavigation)(now, currentUrl, state.cache, state.tree, treeToRestore, _pprnavigations.FreshnessPolicy.HistoryTraversal, null, null, null, null, false, false, accumulation);
    if (task === null) {
        const mutable = {
            preserveCustomHistoryState: true
        };
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, restoredCanonicalUrl, false);
    }
    (0, _pprnavigations.spawnDynamicRequests)(task, restoredUrl, restoredNextUrl, _pprnavigations.FreshnessPolicy.HistoryTraversal, accumulation);
    return {
        // Set canonical url
        canonicalUrl: restoredCanonicalUrl,
        renderedSearch,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // Ensures that the custom history state that was set is preserved when applying this update.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: state.focusAndScrollRef,
        cache: task.node,
        // Restore provided tree
        tree: treeToRestore,
        nextUrl: restoredNextUrl,
        // TODO: We need to restore previousNextUrl, too, which represents the
        // Next-Url that was used to fetch the data. Anywhere we fetch using the
        // canonical URL, there should be a corresponding Next-Url.
        previousNextUrl: null,
        debugInfo: null
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/hmr-refresh-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hmrRefreshReducer", {
    enumerable: true,
    get: function() {
        return hmrRefreshReducer;
    }
});
const _refreshreducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
function hmrRefreshReducer(state) {
    return (0, _refreshreducer.refreshDynamicData)(state, _pprnavigations.FreshnessPolicy.HMRRefresh);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hmr-refresh-reducer.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/assign-location.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "assignLocation", {
    enumerable: true,
    get: function() {
        return assignLocation;
    }
});
const _addbasepath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
function assignLocation(location, url) {
    if (location.startsWith('.')) {
        const urlBase = url.origin + url.pathname;
        return new URL(// new URL('./relative', 'https://example.com/subdir').href -> 'https://example.com/relative'
        // new URL('./relative', 'https://example.com/subdir/').href -> 'https://example.com/subdir/relative'
        (urlBase.endsWith('/') ? urlBase : urlBase + '/') + location);
    }
    return new URL((0, _addbasepath.addBasePath)(location), url.href);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=assign-location.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pathHasPrefix", {
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
});
const _parsepath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)");
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + '/');
} //# sourceMappingURL=path-has-prefix.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
});
const _pathhasprefix = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeBasePath", {
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
});
const _hasbasepath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function removeBasePath(path) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith('/')) path = `/${path}`;
    return path;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/server-reference-info.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    extractInfoFromServerReferenceId: null,
    omitUnusedArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    extractInfoFromServerReferenceId: function() {
        return extractInfoFromServerReferenceId;
    },
    omitUnusedArgs: function() {
        return omitUnusedArgs;
    }
});
function extractInfoFromServerReferenceId(id) {
    const infoByte = parseInt(id.slice(0, 2), 16);
    const typeBit = infoByte >> 7 & 0x1;
    const argMask = infoByte >> 1 & 0x3f;
    const restArgs = infoByte & 0x1;
    const usedArgs = Array(6);
    for(let index = 0; index < 6; index++){
        const bitPosition = 5 - index;
        const bit = argMask >> bitPosition & 0x1;
        usedArgs[index] = bit === 1;
    }
    return {
        type: typeBit === 1 ? 'use-cache' : 'server-action',
        usedArgs: usedArgs,
        hasRestArgs: restArgs === 1
    };
}
function omitUnusedArgs(args, info) {
    const filteredArgs = new Array(args.length);
    for(let index = 0; index < args.length; index++){
        if (index < 6 && info.usedArgs[index] || // This assumes that the server reference info byte has the restArgs bit
        // set to 1 if there are more than 6 args.
        index >= 6 && info.hasRestArgs) {
            filteredArgs[index] = args[index];
        }
    }
    return filteredArgs;
} //# sourceMappingURL=server-reference-info.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/action-revalidation-kind.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ActionDidNotRevalidate: null,
    ActionDidRevalidateDynamicOnly: null,
    ActionDidRevalidateStaticAndDynamic: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ActionDidNotRevalidate: function() {
        return ActionDidNotRevalidate;
    },
    ActionDidRevalidateDynamicOnly: function() {
        return ActionDidRevalidateDynamicOnly;
    },
    ActionDidRevalidateStaticAndDynamic: function() {
        return ActionDidRevalidateStaticAndDynamic;
    }
});
const ActionDidNotRevalidate = 0;
const ActionDidRevalidateStaticAndDynamic = 1;
const ActionDidRevalidateDynamicOnly = 2; //# sourceMappingURL=action-revalidation-kind.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverActionReducer", {
    enumerable: true,
    get: function() {
        return serverActionReducer;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _unrecognizedactionerror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/unrecognized-action-error.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
const _assignlocation = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/assign-location.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _hasinterceptionrouteincurrenttree = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
const _removebasepath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
const _serverreferenceinfo = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/server-reference-info.js [app-client] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
const _navigation = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
const _actionrevalidationkind = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/action-revalidation-kind.js [app-client] (ecmascript)");
const _approuterutils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const createFromFetch = _client.createFromFetch;
let createDebugChannel;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
async function fetchServerAction(state, nextUrl, { actionId, actionArgs }) {
    const temporaryReferences = (0, _client.createTemporaryReferenceSet)();
    const info = (0, _serverreferenceinfo.extractInfoFromServerReferenceId)(actionId);
    // TODO: Currently, we're only omitting unused args for the experimental "use
    // cache" functions. Once the server reference info byte feature is stable, we
    // should apply this to server actions as well.
    const usedArgs = info.type === 'use-cache' ? (0, _serverreferenceinfo.omitUnusedArgs)(actionArgs, info) : actionArgs;
    const body = await (0, _client.encodeReply)(usedArgs, {
        temporaryReferences
    });
    const headers = {
        Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER,
        [_approuterheaders.ACTION_HEADER]: actionId,
        [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(state.tree)
    };
    const deploymentId = (0, _deploymentid.getDeploymentId)();
    if (deploymentId) {
        headers['x-deployment-id'] = deploymentId;
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (self.__next_r) {
            headers[_approuterheaders.NEXT_HTML_REQUEST_ID_HEADER] = self.__next_r;
        }
        // Create a new request ID for the server action request. The server uses
        // this to tag debug information sent via WebSocket to the client, which
        // then routes those chunks to the debug channel associated with this ID.
        headers[_approuterheaders.NEXT_REQUEST_ID_HEADER] = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
    }
    const res = await fetch(state.canonicalUrl, {
        method: 'POST',
        headers,
        body
    });
    // Handle server actions that the server didn't recognize.
    const unrecognizedActionHeader = res.headers.get(_approuterheaders.NEXT_ACTION_NOT_FOUND_HEADER);
    if (unrecognizedActionHeader === '1') {
        throw Object.defineProperty(new _unrecognizedactionerror.UnrecognizedActionError(`Server Action "${actionId}" was not found on the server. \nRead more: https://nextjs.org/docs/messages/failed-to-find-server-action`), "__NEXT_ERROR_CODE", {
            value: "E715",
            enumerable: false,
            configurable: true
        });
    }
    const redirectHeader = res.headers.get('x-action-redirect');
    const [location1, _redirectType] = redirectHeader?.split(';') || [];
    let redirectType;
    switch(_redirectType){
        case 'push':
            redirectType = _redirecterror.RedirectType.push;
            break;
        case 'replace':
            redirectType = _redirecterror.RedirectType.replace;
            break;
        default:
            redirectType = undefined;
    }
    const isPrerender = !!res.headers.get(_approuterheaders.NEXT_IS_PRERENDER_HEADER);
    let revalidationKind = _actionrevalidationkind.ActionDidNotRevalidate;
    try {
        const revalidationHeader = res.headers.get('x-action-revalidated');
        if (revalidationHeader) {
            const parsedKind = JSON.parse(revalidationHeader);
            if (parsedKind === _actionrevalidationkind.ActionDidRevalidateStaticAndDynamic || parsedKind === _actionrevalidationkind.ActionDidRevalidateDynamicOnly) {
                revalidationKind = parsedKind;
            }
        }
    } catch  {}
    const redirectLocation = location1 ? (0, _assignlocation.assignLocation)(location1, new URL(state.canonicalUrl, window.location.href)) : undefined;
    const contentType = res.headers.get('content-type');
    const isRscResponse = !!(contentType && contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER));
    // Handle invalid server action responses.
    // A valid response must have `content-type: text/x-component`, unless it's an external redirect.
    // (external redirects have an 'x-action-redirect' header, but the body is an empty 'text/plain')
    if (!isRscResponse && !redirectLocation) {
        // The server can respond with a text/plain error message, but we'll fallback to something generic
        // if there isn't one.
        const message = res.status >= 400 && contentType === 'text/plain' ? await res.text() : 'An unexpected response was received from the server.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    let actionResult;
    let actionFlightData;
    let actionFlightDataRenderedSearch;
    let actionFlightDataCouldBeIntercepted;
    if (isRscResponse) {
        const response = await createFromFetch(Promise.resolve(res), {
            callServer: _appcallserver.callServer,
            findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
            temporaryReferences,
            debugChannel: createDebugChannel && createDebugChannel(headers)
        });
        // An internal redirect can send an RSC response, but does not have a useful `actionResult`.
        actionResult = redirectLocation ? undefined : response.a;
        const maybeFlightData = (0, _flightdatahelpers.normalizeFlightData)(response.f);
        if (maybeFlightData !== '') {
            actionFlightData = maybeFlightData;
            actionFlightDataRenderedSearch = response.q;
            actionFlightDataCouldBeIntercepted = response.i;
        }
    } else {
        // An external redirect doesn't contain RSC data.
        actionResult = undefined;
        actionFlightData = undefined;
        actionFlightDataRenderedSearch = undefined;
        actionFlightDataCouldBeIntercepted = undefined;
    }
    return {
        actionResult,
        actionFlightData,
        actionFlightDataRenderedSearch,
        actionFlightDataCouldBeIntercepted,
        redirectLocation,
        redirectType,
        revalidationKind,
        isPrerender
    };
}
function serverActionReducer(state, action) {
    const { resolve, reject } = action;
    const mutable = {};
    mutable.preserveCustomHistoryState = false;
    // only pass along the `nextUrl` param (used for interception routes) if the current route was intercepted.
    // If the route has been intercepted, the action should be as well.
    // Otherwise the server action might be intercepted with the wrong action id
    // (ie, one that corresponds with the intercepted route)
    const nextUrl = // performing a dynamic request. This is because we update
    // the next-url after a navigation, but we want the same
    // interception route to be matched that used the last
    // next-url.
    (state.previousNextUrl || state.nextUrl) && (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree) ? state.previousNextUrl || state.nextUrl : null;
    return fetchServerAction(state, nextUrl, action).then(async ({ revalidationKind, actionResult, actionFlightData: flightData, actionFlightDataRenderedSearch: flightDataRenderedSearch, actionFlightDataCouldBeIntercepted: flightDataCouldBeIntercepted, redirectLocation, redirectType })=>{
        if (revalidationKind !== _actionrevalidationkind.ActionDidNotRevalidate) {
            // Store whether this action triggered any revalidation
            // The action queue will use this information to potentially
            // trigger a refresh action if the action was discarded
            // (ie, due to a navigation, before the action completed)
            action.didRevalidate = true;
            // If there was a revalidation, evict the entire prefetch cache.
            // TODO: Evict only segments with matching tags and/or paths.
            if (revalidationKind === _actionrevalidationkind.ActionDidRevalidateStaticAndDynamic) {
                (0, _cache.revalidateEntireCache)(nextUrl, state.tree);
            }
        }
        const pendingPush = redirectType !== _redirecterror.RedirectType.replace;
        state.pushRef.pendingPush = pendingPush;
        mutable.pendingPush = pendingPush;
        if (redirectLocation !== undefined) {
            // If the action triggered a redirect, the action promise will be rejected with
            // a redirect so that it's handled by RedirectBoundary as we won't have a valid
            // action result to resolve the promise with. This will effectively reset the state of
            // the component that called the action as the error boundary will remount the tree.
            // The status code doesn't matter here as the action handler will have already sent
            // a response with the correct status code.
            const resolvedRedirectType = redirectType || _redirecterror.RedirectType.push;
            if ((0, _approuterutils.isExternalURL)(redirectLocation)) {
                // External redirect. Triggers an MPA navigation.
                const redirectHref = redirectLocation.href;
                const redirectError = createRedirectErrorForAction(redirectHref, resolvedRedirectType);
                reject(redirectError);
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, redirectHref, pendingPush);
            } else {
                // Internal redirect. Triggers an SPA navigation.
                const redirectWithBasepath = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
                const redirectHref = (0, _hasbasepath.hasBasePath)(redirectWithBasepath) ? (0, _removebasepath.removeBasePath)(redirectWithBasepath) : redirectWithBasepath;
                const redirectError = createRedirectErrorForAction(redirectHref, resolvedRedirectType);
                reject(redirectError);
            }
        } else {
            // If there's no redirect, resolve the action with the result.
            resolve(actionResult);
        }
        // Check if we can bail out without updating any state.
        if (redirectLocation === undefined && // Did the action revalidate any data?
        revalidationKind === _actionrevalidationkind.ActionDidNotRevalidate && // Did the server render new data?
        flightData === undefined) {
            // The action did not trigger any revalidations or redirects. No
            // navigation is required.
            return state;
        }
        if (flightData === undefined && redirectLocation !== undefined) {
            // The server redirected, but did not send any Flight data. This implies
            // an external redirect.
            // TODO: We should refactor the action response type to be more explicit
            // about the various response types.
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, redirectLocation.href, pendingPush);
        }
        if (typeof flightData === 'string') {
            // If the flight data is just a string, something earlier in the
            // response handling triggered an external redirect.
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, pendingPush);
        }
        // The action triggered a navigation — either a redirect, a revalidation,
        // or both.
        // If there was no redirect, then the target URL is the same as the
        // current URL.
        const currentUrl = new URL(state.canonicalUrl, location.origin);
        const redirectUrl = redirectLocation !== undefined ? redirectLocation : currentUrl;
        const currentFlightRouterState = state.tree;
        const shouldScroll = true;
        // If the action triggered a revalidation of the cache, we should also
        // refresh all the dynamic data.
        const freshnessPolicy = revalidationKind === _actionrevalidationkind.ActionDidNotRevalidate ? _pprnavigations.FreshnessPolicy.Default : _pprnavigations.FreshnessPolicy.RefreshAll;
        // The server may have sent back new data. If so, we will perform a
        // "seeded" navigation that uses the data from the response.
        if (flightData !== undefined) {
            const normalizedFlightData = flightData[0];
            if (normalizedFlightData !== undefined && // TODO: Currently the server always renders from the root in
            // response to a Server Action. In the case of a normal redirect
            // with no revalidation, it should skip over the shared layouts.
            normalizedFlightData.isRootRender && flightDataRenderedSearch !== undefined && flightDataCouldBeIntercepted !== undefined) {
                // The server sent back new route data as part of the response. We
                // will use this to render the new page. If this happens to be only a
                // subset of the data needed to render the new page, we'll initiate a
                // new fetch, like we would for a normal navigation.
                const redirectCanonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(redirectUrl);
                const navigationSeed = {
                    tree: normalizedFlightData.tree,
                    renderedSearch: flightDataRenderedSearch,
                    data: normalizedFlightData.seedData,
                    head: normalizedFlightData.head
                };
                const now = Date.now();
                const result = (0, _navigation.navigateToSeededRoute)(now, redirectUrl, redirectCanonicalUrl, navigationSeed, currentUrl, state.cache, currentFlightRouterState, freshnessPolicy, nextUrl, shouldScroll);
                return (0, _navigatereducer.handleNavigationResult)(redirectUrl, state, mutable, pendingPush, result);
            }
        }
        // The server did not send back new data. We'll perform a regular, non-
        // seeded navigation — effectively the same as <Link> or router.push().
        const result = (0, _navigation.navigate)(redirectUrl, currentUrl, state.cache, currentFlightRouterState, nextUrl, freshnessPolicy, shouldScroll, mutable);
        return (0, _navigatereducer.handleNavigationResult)(redirectUrl, state, mutable, pendingPush, result);
    }, (e)=>{
        // When the server action is rejected we don't update the state and instead call the reject handler of the promise.
        reject(e);
        return state;
    });
}
function createRedirectErrorForAction(redirectHref, resolvedRedirectType) {
    const redirectError = (0, _redirect.getRedirectError)(redirectHref, resolvedRedirectType);
    redirectError.handled = true;
    return redirectError;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-action-reducer.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/router-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reducer", {
    enumerable: true,
    get: function() {
        return reducer;
    }
});
const _routerreducertypes = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _serverpatchreducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js [app-client] (ecmascript)");
const _restorereducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)");
const _refreshreducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)");
const _hmrrefreshreducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/hmr-refresh-reducer.js [app-client] (ecmascript)");
const _serveractionreducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)");
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state);
            }
        case _routerreducertypes.ACTION_HMR_REFRESH:
            {
                return (0, _hmrrefreshreducer.hmrRefreshReducer)(state);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw Object.defineProperty(new Error('Unknown action'), "__NEXT_ERROR_CODE", {
                value: "E295",
                enumerable: false,
                configurable: true
            });
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer = typeof window === 'undefined' ? serverReducer : clientReducer;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/prefetch.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "prefetch", {
    enumerable: true,
    get: function() {
        return prefetch;
    }
});
const _approuterutils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function prefetch(href, nextUrl, treeAtTimeOfPrefetch, fetchStrategy, onInvalidate) {
    const url = (0, _approuterutils.createPrefetchURL)(href);
    if (url === null) {
        // This href should not be prefetched.
        return;
    }
    const cacheKey = (0, _cachekey.createCacheKey)(url.href, nextUrl);
    (0, _scheduler.schedulePrefetchTask)(cacheKey, treeAtTimeOfPrefetch, fetchStrategy, _types.PrefetchPriority.Default, onInvalidate);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createMutableActionQueue: null,
    dispatchNavigateAction: null,
    dispatchTraverseAction: null,
    getCurrentAppRouterState: null,
    publicAppRouterInstance: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createMutableActionQueue: function() {
        return createMutableActionQueue;
    },
    dispatchNavigateAction: function() {
        return dispatchNavigateAction;
    },
    dispatchTraverseAction: function() {
        return dispatchTraverseAction;
    },
    getCurrentAppRouterState: function() {
        return getCurrentAppRouterState;
    },
    publicAppRouterInstance: function() {
        return publicAppRouterInstance;
    }
});
const _routerreducertypes = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _routerreducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/router-reducer.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _isthenable = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/is-thenable.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _prefetch = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/prefetch.js [app-client] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _approuterutils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
function runRemainingActions(actionQueue, setState) {
    if (actionQueue.pending !== null) {
        actionQueue.pending = actionQueue.pending.next;
        if (actionQueue.pending !== null) {
            runAction({
                actionQueue,
                action: actionQueue.pending,
                setState
            });
        }
    } else {
        // Check for refresh when pending is already null
        // This handles the case where a discarded server action completes
        // after the navigation has already finished and the queue is empty
        if (actionQueue.needsRefresh) {
            actionQueue.needsRefresh = false;
            actionQueue.dispatch({
                type: _routerreducertypes.ACTION_REFRESH
            }, setState);
        }
    }
}
async function runAction({ actionQueue, action, setState }) {
    const prevState = actionQueue.state;
    actionQueue.pending = action;
    const payload = action.payload;
    const actionResult = actionQueue.action(prevState, payload);
    function handleResult(nextState) {
        // if we discarded this action, the state should also be discarded
        if (action.discarded) {
            // Check if the discarded server action revalidated data
            if (action.payload.type === _routerreducertypes.ACTION_SERVER_ACTION && action.payload.didRevalidate) {
                // The server action was discarded but it revalidated data,
                // mark that we need to refresh after all actions complete
                actionQueue.needsRefresh = true;
            }
            // Still need to run remaining actions even for discarded actions
            // to potentially trigger the refresh
            runRemainingActions(actionQueue, setState);
            return;
        }
        actionQueue.state = nextState;
        runRemainingActions(actionQueue, setState);
        action.resolve(nextState);
    }
    // if the action is a promise, set up a callback to resolve it
    if ((0, _isthenable.isThenable)(actionResult)) {
        actionResult.then(handleResult, (err)=>{
            runRemainingActions(actionQueue, setState);
            action.reject(err);
        });
    } else {
        handleResult(actionResult);
    }
}
function dispatchAction(actionQueue, payload, setState) {
    let resolvers = {
        resolve: setState,
        reject: ()=>{}
    };
    // most of the action types are async with the exception of restore
    // it's important that restore is handled quickly since it's fired on the popstate event
    // and we don't want to add any delay on a back/forward nav
    // this only creates a promise for the async actions
    if (payload.type !== _routerreducertypes.ACTION_RESTORE) {
        // Create the promise and assign the resolvers to the object.
        const deferredPromise = new Promise((resolve, reject)=>{
            resolvers = {
                resolve,
                reject
            };
        });
        (0, _react.startTransition)(()=>{
            // we immediately notify React of the pending promise -- the resolver is attached to the action node
            // and will be called when the associated action promise resolves
            setState(deferredPromise);
        });
    }
    const newAction = {
        payload,
        next: null,
        resolve: resolvers.resolve,
        reject: resolvers.reject
    };
    // Check if the queue is empty
    if (actionQueue.pending === null) {
        // The queue is empty, so add the action and start it immediately
        // Mark this action as the last in the queue
        actionQueue.last = newAction;
        runAction({
            actionQueue,
            action: newAction,
            setState
        });
    } else if (payload.type === _routerreducertypes.ACTION_NAVIGATE || payload.type === _routerreducertypes.ACTION_RESTORE) {
        // Navigations (including back/forward) take priority over any pending actions.
        // Mark the pending action as discarded (so the state is never applied) and start the navigation action immediately.
        actionQueue.pending.discarded = true;
        // The rest of the current queue should still execute after this navigation.
        // (Note that it can't contain any earlier navigations, because we always put those into `actionQueue.pending` by calling `runAction`)
        newAction.next = actionQueue.pending.next;
        runAction({
            actionQueue,
            action: newAction,
            setState
        });
    } else {
        // The queue is not empty, so add the action to the end of the queue
        // It will be started by runRemainingActions after the previous action finishes
        if (actionQueue.last !== null) {
            actionQueue.last.next = newAction;
        }
        actionQueue.last = newAction;
    }
}
let globalActionQueue = null;
function createMutableActionQueue(initialState, instrumentationHooks) {
    const actionQueue = {
        state: initialState,
        dispatch: (payload, setState)=>dispatchAction(actionQueue, payload, setState),
        action: async (state, action)=>{
            const result = (0, _routerreducer.reducer)(state, action);
            return result;
        },
        pending: null,
        last: null,
        onRouterTransitionStart: instrumentationHooks !== null && typeof instrumentationHooks.onRouterTransitionStart === 'function' ? instrumentationHooks.onRouterTransitionStart : null
    };
    if (typeof window !== 'undefined') {
        // The action queue is lazily created on hydration, but after that point
        // it doesn't change. So we can store it in a global rather than pass
        // it around everywhere via props/context.
        if (globalActionQueue !== null) {
            throw Object.defineProperty(new Error('Internal Next.js Error: createMutableActionQueue was called more ' + 'than once'), "__NEXT_ERROR_CODE", {
                value: "E624",
                enumerable: false,
                configurable: true
            });
        }
        globalActionQueue = actionQueue;
    }
    return actionQueue;
}
function getCurrentAppRouterState() {
    return globalActionQueue !== null ? globalActionQueue.state : null;
}
function getAppRouterActionQueue() {
    if (globalActionQueue === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    return globalActionQueue;
}
function getProfilingHookForOnNavigationStart() {
    if (globalActionQueue !== null) {
        return globalActionQueue.onRouterTransitionStart;
    }
    return null;
}
function dispatchNavigateAction(href, navigateType, shouldScroll, linkInstanceRef) {
    // TODO: This stuff could just go into the reducer. Leaving as-is for now
    // since we're about to rewrite all the router reducer stuff anyway.
    const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    (0, _links.setLinkForCurrentNavigation)(linkInstanceRef);
    const onRouterTransitionStart = getProfilingHookForOnNavigationStart();
    if (onRouterTransitionStart !== null) {
        onRouterTransitionStart(href, navigateType);
    }
    (0, _useactionqueue.dispatchAppRouterAction)({
        type: _routerreducertypes.ACTION_NAVIGATE,
        url,
        isExternalUrl: (0, _approuterutils.isExternalURL)(url),
        locationSearch: location.search,
        shouldScroll,
        navigateType
    });
}
function dispatchTraverseAction(href, historyState) {
    const onRouterTransitionStart = getProfilingHookForOnNavigationStart();
    if (onRouterTransitionStart !== null) {
        onRouterTransitionStart(href, 'traverse');
    }
    (0, _useactionqueue.dispatchAppRouterAction)({
        type: _routerreducertypes.ACTION_RESTORE,
        url: new URL(href),
        historyState
    });
}
const publicAppRouterInstance = {
    back: ()=>window.history.back(),
    forward: ()=>window.history.forward(),
    prefetch: // data in the router reducer state; it writes into a global mutable
    // cache. So we don't need to dispatch an action.
    (href, options)=>{
        const actionQueue = getAppRouterActionQueue();
        const prefetchKind = options?.kind ?? _routerreducertypes.PrefetchKind.AUTO;
        // We don't currently offer a way to issue a runtime prefetch via `router.prefetch()`.
        // This will be possible when we update its API to not take a PrefetchKind.
        let fetchStrategy;
        switch(prefetchKind){
            case _routerreducertypes.PrefetchKind.AUTO:
                {
                    // We default to PPR. We'll discover whether or not the route supports it with the initial prefetch.
                    fetchStrategy = _types.FetchStrategy.PPR;
                    break;
                }
            case _routerreducertypes.PrefetchKind.FULL:
                {
                    fetchStrategy = _types.FetchStrategy.Full;
                    break;
                }
            default:
                {
                    prefetchKind;
                    // Despite typescript thinking that this can't happen,
                    // we might get an unexpected value from user code.
                    // We don't know what they want, but we know they want a prefetch,
                    // so use the default.
                    fetchStrategy = _types.FetchStrategy.PPR;
                }
        }
        (0, _prefetch.prefetch)(href, actionQueue.state.nextUrl, actionQueue.state.tree, fetchStrategy, options?.onInvalidate ?? null);
    },
    replace: (href, options)=>{
        (0, _react.startTransition)(()=>{
            dispatchNavigateAction(href, 'replace', options?.scroll ?? true, null);
        });
    },
    push: (href, options)=>{
        (0, _react.startTransition)(()=>{
            dispatchNavigateAction(href, 'push', options?.scroll ?? true, null);
        });
    },
    refresh: ()=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_REFRESH
            });
        });
    },
    hmrRefresh: ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            (0, _react.startTransition)(()=>{
                (0, _useactionqueue.dispatchAppRouterAction)({
                    type: _routerreducertypes.ACTION_HMR_REFRESH
                });
            });
        }
    }
};
// Exists for debugging purposes. Don't use in application code.
if (typeof window !== 'undefined' && window.next) {
    window.next.router = publicAppRouterInstance;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-instance.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    IDLE_LINK_STATUS: null,
    PENDING_LINK_STATUS: null,
    mountFormInstance: null,
    mountLinkInstance: null,
    onLinkVisibilityChanged: null,
    onNavigationIntent: null,
    pingVisibleLinks: null,
    setLinkForCurrentNavigation: null,
    unmountLinkForCurrentNavigation: null,
    unmountPrefetchableInstance: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    IDLE_LINK_STATUS: function() {
        return IDLE_LINK_STATUS;
    },
    PENDING_LINK_STATUS: function() {
        return PENDING_LINK_STATUS;
    },
    mountFormInstance: function() {
        return mountFormInstance;
    },
    mountLinkInstance: function() {
        return mountLinkInstance;
    },
    onLinkVisibilityChanged: function() {
        return onLinkVisibilityChanged;
    },
    onNavigationIntent: function() {
        return onNavigationIntent;
    },
    pingVisibleLinks: function() {
        return pingVisibleLinks;
    },
    setLinkForCurrentNavigation: function() {
        return setLinkForCurrentNavigation;
    },
    unmountLinkForCurrentNavigation: function() {
        return unmountLinkForCurrentNavigation;
    },
    unmountPrefetchableInstance: function() {
        return unmountPrefetchableInstance;
    }
});
const _types = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Tracks the most recently navigated link instance. When null, indicates
// the current navigation was not initiated by a link click.
let linkForMostRecentNavigation = null;
const PENDING_LINK_STATUS = {
    pending: true
};
const IDLE_LINK_STATUS = {
    pending: false
};
function setLinkForCurrentNavigation(link) {
    (0, _react.startTransition)(()=>{
        linkForMostRecentNavigation?.setOptimisticLinkStatus(IDLE_LINK_STATUS);
        link?.setOptimisticLinkStatus(PENDING_LINK_STATUS);
        linkForMostRecentNavigation = link;
    });
}
function unmountLinkForCurrentNavigation(link) {
    if (linkForMostRecentNavigation === link) {
        linkForMostRecentNavigation = null;
    }
}
// Use a WeakMap to associate a Link instance with its DOM element. This is
// used by the IntersectionObserver to track the link's visibility.
const prefetchable = typeof WeakMap === 'function' ? new WeakMap() : new Map();
// A Set of the currently visible links. We re-prefetch visible links after a
// cache invalidation, or when the current URL changes. It's a separate data
// structure from the WeakMap above because only the visible links need to
// be enumerated.
const prefetchableAndVisible = new Set();
// A single IntersectionObserver instance shared by all <Link> components.
const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(handleIntersect, {
    rootMargin: '200px'
}) : null;
function observeVisibility(element, instance) {
    const existingInstance = prefetchable.get(element);
    if (existingInstance !== undefined) {
        // This shouldn't happen because each <Link> component should have its own
        // anchor tag instance, but it's defensive coding to avoid a memory leak in
        // case there's a logical error somewhere else.
        unmountPrefetchableInstance(element);
    }
    // Only track prefetchable links that have a valid prefetch URL
    prefetchable.set(element, instance);
    if (observer !== null) {
        observer.observe(element);
    }
}
function coercePrefetchableUrl(href) {
    if (typeof window !== 'undefined') {
        const { createPrefetchURL } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)");
        try {
            return createPrefetchURL(href);
        } catch  {
            // createPrefetchURL sometimes throws an error if an invalid URL is
            // provided, though I'm not sure if it's actually necessary.
            // TODO: Consider removing the throw from the inner function, or change it
            // to reportError. Or maybe the error isn't even necessary for automatic
            // prefetches, just navigations.
            const reportErrorFn = typeof reportError === 'function' ? reportError : console.error;
            reportErrorFn(`Cannot prefetch '${href}' because it cannot be converted to a URL.`);
            return null;
        }
    } else {
        return null;
    }
}
function mountLinkInstance(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus) {
    if (prefetchEnabled) {
        const prefetchURL = coercePrefetchableUrl(href);
        if (prefetchURL !== null) {
            const instance = {
                router,
                fetchStrategy,
                isVisible: false,
                prefetchTask: null,
                prefetchHref: prefetchURL.href,
                setOptimisticLinkStatus
            };
            // We only observe the link's visibility if it's prefetchable. For
            // example, this excludes links to external URLs.
            observeVisibility(element, instance);
            return instance;
        }
    }
    // If the link is not prefetchable, we still create an instance so we can
    // track its optimistic state (i.e. useLinkStatus).
    const instance = {
        router,
        fetchStrategy,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: null,
        setOptimisticLinkStatus
    };
    return instance;
}
function mountFormInstance(element, href, router, fetchStrategy) {
    const prefetchURL = coercePrefetchableUrl(href);
    if (prefetchURL === null) {
        // This href is not prefetchable, so we don't track it.
        // TODO: We currently observe/unobserve a form every time its href changes.
        // For Links, this isn't a big deal because the href doesn't usually change,
        // but for forms it's extremely common. We should optimize this.
        return;
    }
    const instance = {
        router,
        fetchStrategy,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: prefetchURL.href,
        setOptimisticLinkStatus: null
    };
    observeVisibility(element, instance);
}
function unmountPrefetchableInstance(element) {
    const instance = prefetchable.get(element);
    if (instance !== undefined) {
        prefetchable.delete(element);
        prefetchableAndVisible.delete(instance);
        const prefetchTask = instance.prefetchTask;
        if (prefetchTask !== null) {
            (0, _scheduler.cancelPrefetchTask)(prefetchTask);
        }
    }
    if (observer !== null) {
        observer.unobserve(element);
    }
}
function handleIntersect(entries) {
    for (const entry of entries){
        // Some extremely old browsers or polyfills don't reliably support
        // isIntersecting so we check intersectionRatio instead. (Do we care? Not
        // really. But whatever this is fine.)
        const isVisible = entry.intersectionRatio > 0;
        onLinkVisibilityChanged(entry.target, isVisible);
    }
}
function onLinkVisibilityChanged(element, isVisible) {
    if ("TURBOPACK compile-time truthy", 1) {
        // Prefetching on viewport is disabled in development for performance
        // reasons, because it requires compiling the target page.
        // TODO: Investigate re-enabling this.
        return;
    }
    //TURBOPACK unreachable
    ;
    const instance = undefined;
}
function onNavigationIntent(element, unstable_upgradeToDynamicPrefetch) {
    const instance = prefetchable.get(element);
    if (instance === undefined) {
        return;
    }
    // Prefetch the link on hover/touchstart.
    if (instance !== undefined) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        rescheduleLinkPrefetch(instance, _types.PrefetchPriority.Intent);
    }
}
function rescheduleLinkPrefetch(instance, priority) {
    // Ensures that app-router-instance is not compiled in the server bundle
    if (typeof window !== 'undefined') {
        const existingPrefetchTask = instance.prefetchTask;
        if (!instance.isVisible) {
            // Cancel any in-progress prefetch task. (If it already finished then this
            // is a no-op.)
            if (existingPrefetchTask !== null) {
                (0, _scheduler.cancelPrefetchTask)(existingPrefetchTask);
            }
            // We don't need to reset the prefetchTask to null upon cancellation; an
            // old task object can be rescheduled with reschedulePrefetchTask. This is a
            // micro-optimization but also makes the code simpler (don't need to
            // worry about whether an old task object is stale).
            return;
        }
        const { getCurrentAppRouterState } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        const appRouterState = getCurrentAppRouterState();
        if (appRouterState !== null) {
            const treeAtTimeOfPrefetch = appRouterState.tree;
            if (existingPrefetchTask === null) {
                // Initiate a prefetch task.
                const nextUrl = appRouterState.nextUrl;
                const cacheKey = (0, _cachekey.createCacheKey)(instance.prefetchHref, nextUrl);
                instance.prefetchTask = (0, _scheduler.schedulePrefetchTask)(cacheKey, treeAtTimeOfPrefetch, instance.fetchStrategy, priority, null);
            } else {
                // We already have an old task object that we can reschedule. This is
                // effectively the same as canceling the old task and creating a new one.
                (0, _scheduler.reschedulePrefetchTask)(existingPrefetchTask, treeAtTimeOfPrefetch, instance.fetchStrategy, priority);
            }
        }
    }
}
function pingVisibleLinks(nextUrl, tree) {
    // For each currently visible link, cancel the existing prefetch task (if it
    // exists) and schedule a new one. This is effectively the same as if all the
    // visible links left and then re-entered the viewport.
    //
    // This is called when the Next-Url or the base tree changes, since those
    // may affect the result of a prefetch task. It's also called after a
    // cache invalidation.
    for (const instance of prefetchableAndVisible){
        const task = instance.prefetchTask;
        if (task !== null && !(0, _scheduler.isPrefetchTaskDirty)(task, nextUrl, tree)) {
            continue;
        }
        // Something changed. Cancel the existing prefetch task and schedule a
        // new one.
        if (task !== null) {
            (0, _scheduler.cancelPrefetchTask)(task);
        }
        const cacheKey = (0, _cachekey.createCacheKey)(instance.prefetchHref, nextUrl);
        instance.prefetchTask = (0, _scheduler.schedulePrefetchTask)(cacheKey, tree, instance.fetchStrategy, _types.PrefetchPriority.Default, null);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=links.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
    enumerable: true,
    get: function() {
        return createPromiseWithResolvers;
    }
});
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
} //# sourceMappingURL=promise-with-resolvers.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    EntryStatus: null,
    canNewFetchStrategyProvideMoreContent: null,
    convertRouteTreeToFlightRouterState: null,
    createDetachedSegmentCacheEntry: null,
    fetchRouteOnCacheMiss: null,
    fetchSegmentOnCacheMiss: null,
    fetchSegmentPrefetchesUsingDynamicRequest: null,
    getCurrentCacheVersion: null,
    getStaleTimeMs: null,
    overwriteRevalidatingSegmentCacheEntry: null,
    pingInvalidationListeners: null,
    readOrCreateRevalidatingSegmentEntry: null,
    readOrCreateRouteCacheEntry: null,
    readOrCreateSegmentCacheEntry: null,
    readRouteCacheEntry: null,
    readSegmentCacheEntry: null,
    requestOptimisticRouteCacheEntry: null,
    revalidateEntireCache: null,
    upgradeToPendingSegment: null,
    upsertSegmentEntry: null,
    waitForSegmentCacheEntry: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    EntryStatus: function() {
        return EntryStatus;
    },
    canNewFetchStrategyProvideMoreContent: function() {
        return canNewFetchStrategyProvideMoreContent;
    },
    convertRouteTreeToFlightRouterState: function() {
        return convertRouteTreeToFlightRouterState;
    },
    createDetachedSegmentCacheEntry: function() {
        return createDetachedSegmentCacheEntry;
    },
    fetchRouteOnCacheMiss: function() {
        return fetchRouteOnCacheMiss;
    },
    fetchSegmentOnCacheMiss: function() {
        return fetchSegmentOnCacheMiss;
    },
    fetchSegmentPrefetchesUsingDynamicRequest: function() {
        return fetchSegmentPrefetchesUsingDynamicRequest;
    },
    getCurrentCacheVersion: function() {
        return getCurrentCacheVersion;
    },
    getStaleTimeMs: function() {
        return getStaleTimeMs;
    },
    overwriteRevalidatingSegmentCacheEntry: function() {
        return overwriteRevalidatingSegmentCacheEntry;
    },
    pingInvalidationListeners: function() {
        return pingInvalidationListeners;
    },
    readOrCreateRevalidatingSegmentEntry: function() {
        return readOrCreateRevalidatingSegmentEntry;
    },
    readOrCreateRouteCacheEntry: function() {
        return readOrCreateRouteCacheEntry;
    },
    readOrCreateSegmentCacheEntry: function() {
        return readOrCreateSegmentCacheEntry;
    },
    readRouteCacheEntry: function() {
        return readRouteCacheEntry;
    },
    readSegmentCacheEntry: function() {
        return readSegmentCacheEntry;
    },
    requestOptimisticRouteCacheEntry: function() {
        return requestOptimisticRouteCacheEntry;
    },
    revalidateEntireCache: function() {
        return revalidateEntireCache;
    },
    upgradeToPendingSegment: function() {
        return upgradeToPendingSegment;
    },
    upsertSegmentEntry: function() {
        return upsertSegmentEntry;
    },
    waitForSegmentCacheEntry: function() {
        return waitForSegmentCacheEntry;
    }
});
const _approutertypes = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/app-router-types.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _fetchserverresponse = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
const _varypath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-client] (ecmascript)");
const _appbuildid = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _cachemap = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-client] (ecmascript)");
const _segmentvalueencoding = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-client] (ecmascript)");
function getStaleTimeMs(staleTimeSeconds) {
    return Math.max(staleTimeSeconds, 30) * 1000;
}
var EntryStatus = /*#__PURE__*/ function(EntryStatus) {
    EntryStatus[EntryStatus["Empty"] = 0] = "Empty";
    EntryStatus[EntryStatus["Pending"] = 1] = "Pending";
    EntryStatus[EntryStatus["Fulfilled"] = 2] = "Fulfilled";
    EntryStatus[EntryStatus["Rejected"] = 3] = "Rejected";
    return EntryStatus;
}({});
const isOutputExportMode = ("TURBOPACK compile-time value", "development") === 'production' && ("TURBOPACK compile-time value", void 0) === 'export';
const MetadataOnlyRequestTree = [
    '',
    {},
    null,
    'metadata-only'
];
let routeCacheMap = (0, _cachemap.createCacheMap)();
let segmentCacheMap = (0, _cachemap.createCacheMap)();
// All invalidation listeners for the whole cache are tracked in single set.
// Since we don't yet support tag or path-based invalidation, there's no point
// tracking them any more granularly than this. Once we add granular
// invalidation, that may change, though generally the model is to just notify
// the listeners and allow the caller to poll the prefetch cache with a new
// prefetch task if desired.
let invalidationListeners = null;
// Incrementing counter used to track cache invalidations.
let currentCacheVersion = 0;
function getCurrentCacheVersion() {
    return currentCacheVersion;
}
function revalidateEntireCache(nextUrl, tree) {
    // Increment the current cache version. This does not eagerly evict anything
    // from the cache, but because all the entries are versioned, and we check
    // the version when reading from the cache, this effectively causes all
    // entries to be evicted lazily. We do it lazily because in the future,
    // actions like revalidateTag or refresh will not evict the entire cache,
    // but rather some subset of the entries.
    currentCacheVersion++;
    // Start a cooldown before re-prefetching to allow CDN cache propagation.
    (0, _scheduler.startRevalidationCooldown)();
    // Prefetch all the currently visible links again, to re-fill the cache.
    (0, _links.pingVisibleLinks)(nextUrl, tree);
    // Similarly, notify all invalidation listeners (i.e. those passed to
    // `router.prefetch(onInvalidate)`), so they can trigger a new prefetch
    // if needed.
    pingInvalidationListeners(nextUrl, tree);
}
function attachInvalidationListener(task) {
    // This function is called whenever a prefetch task reads a cache entry. If
    // the task has an onInvalidate function associated with it — i.e. the one
    // optionally passed to router.prefetch(onInvalidate) — then we attach that
    // listener to the every cache entry that the task reads. Then, if an entry
    // is invalidated, we call the function.
    if (task.onInvalidate !== null) {
        if (invalidationListeners === null) {
            invalidationListeners = new Set([
                task
            ]);
        } else {
            invalidationListeners.add(task);
        }
    }
}
function notifyInvalidationListener(task) {
    const onInvalidate = task.onInvalidate;
    if (onInvalidate !== null) {
        // Clear the callback from the task object to guarantee it's not called more
        // than once.
        task.onInvalidate = null;
        // This is a user-space function, so we must wrap in try/catch.
        try {
            onInvalidate();
        } catch (error) {
            if (typeof reportError === 'function') {
                reportError(error);
            } else {
                console.error(error);
            }
        }
    }
}
function pingInvalidationListeners(nextUrl, tree) {
    // The rough equivalent of pingVisibleLinks, but for onInvalidate callbacks.
    // This is called when the Next-Url or the base tree changes, since those
    // may affect the result of a prefetch task. It's also called after a
    // cache invalidation.
    if (invalidationListeners !== null) {
        const tasks = invalidationListeners;
        invalidationListeners = null;
        for (const task of tasks){
            if ((0, _scheduler.isPrefetchTaskDirty)(task, nextUrl, tree)) {
                notifyInvalidationListener(task);
            }
        }
    }
}
function readRouteCacheEntry(now, key) {
    const varyPath = (0, _varypath.getRouteVaryPath)(key.pathname, key.search, key.nextUrl);
    const isRevalidation = false;
    return (0, _cachemap.getFromCacheMap)(now, getCurrentCacheVersion(), routeCacheMap, varyPath, isRevalidation);
}
function readSegmentCacheEntry(now, varyPath) {
    const isRevalidation = false;
    return (0, _cachemap.getFromCacheMap)(now, getCurrentCacheVersion(), segmentCacheMap, varyPath, isRevalidation);
}
function readRevalidatingSegmentCacheEntry(now, varyPath) {
    const isRevalidation = true;
    return (0, _cachemap.getFromCacheMap)(now, getCurrentCacheVersion(), segmentCacheMap, varyPath, isRevalidation);
}
function waitForSegmentCacheEntry(pendingEntry) {
    // Because the entry is pending, there's already a in-progress request.
    // Attach a promise to the entry that will resolve when the server responds.
    let promiseWithResolvers = pendingEntry.promise;
    if (promiseWithResolvers === null) {
        promiseWithResolvers = pendingEntry.promise = (0, _promisewithresolvers.createPromiseWithResolvers)();
    } else {
    // There's already a promise we can use
    }
    return promiseWithResolvers.promise;
}
function readOrCreateRouteCacheEntry(now, task, key) {
    attachInvalidationListener(task);
    const existingEntry = readRouteCacheEntry(now, key);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache.
    const pendingEntry = {
        canonicalUrl: null,
        status: 0,
        blockedTasks: null,
        tree: null,
        metadata: null,
        // This is initialized to true because we don't know yet whether the route
        // could be intercepted. It's only set to false once we receive a response
        // from the server.
        couldBeIntercepted: true,
        // Similarly, we don't yet know if the route supports PPR.
        isPPREnabled: false,
        renderedSearch: null,
        // Map-related fields
        ref: null,
        size: 0,
        // Since this is an empty entry, there's no reason to ever evict it. It will
        // be updated when the data is populated.
        staleAt: Infinity,
        version: getCurrentCacheVersion()
    };
    const varyPath = (0, _varypath.getRouteVaryPath)(key.pathname, key.search, key.nextUrl);
    const isRevalidation = false;
    (0, _cachemap.setInCacheMap)(routeCacheMap, varyPath, pendingEntry, isRevalidation);
    return pendingEntry;
}
function requestOptimisticRouteCacheEntry(now, requestedUrl, nextUrl) {
    // This function is called during a navigation when there was no matching
    // route tree in the prefetch cache. Before de-opting to a blocking,
    // unprefetched navigation, we will first attempt to construct an "optimistic"
    // route tree by checking the cache for similar routes.
    //
    // Check if there's a route with the same pathname, but with different
    // search params. We can then base our optimistic route tree on this entry.
    //
    // Conceptually, we are simulating what would happen if we did perform a
    // prefetch the requested URL, under the assumption that the server will
    // not redirect or rewrite the request in a different manner than the
    // base route tree. This assumption might not hold, in which case we'll have
    // to recover when we perform the dynamic navigation request. However, this
    // is what would happen if a route were dynamically rewritten/redirected
    // in between the prefetch and the navigation. So the logic needs to exist
    // to handle this case regardless.
    // Look for a route with the same pathname, but with an empty search string.
    // TODO: There's nothing inherently special about the empty search string;
    // it's chosen somewhat arbitrarily, with the rationale that it's the most
    // likely one to exist. But we should update this to match _any_ search
    // string. The plan is to generalize this logic alongside other improvements
    // related to "fallback" cache entries.
    const requestedSearch = requestedUrl.search;
    if (requestedSearch === '') {
        // The caller would have already checked if a route with an empty search
        // string is in the cache. So we can bail out here.
        return null;
    }
    const urlWithoutSearchParams = new URL(requestedUrl);
    urlWithoutSearchParams.search = '';
    const routeWithNoSearchParams = readRouteCacheEntry(now, (0, _cachekey.createCacheKey)(urlWithoutSearchParams.href, nextUrl));
    if (routeWithNoSearchParams === null || routeWithNoSearchParams.status !== 2) {
        // Bail out of constructing an optimistic route tree. This will result in
        // a blocking, unprefetched navigation.
        return null;
    }
    // Now we have a base route tree we can "patch" with our optimistic values.
    // Optimistically assume that redirects for the requested pathname do
    // not vary on the search string. Therefore, if the base route was
    // redirected to a different search string, then the optimistic route
    // should be redirected to the same search string. Otherwise, we use
    // the requested search string.
    const canonicalUrlForRouteWithNoSearchParams = new URL(routeWithNoSearchParams.canonicalUrl, requestedUrl.origin);
    const optimisticCanonicalSearch = canonicalUrlForRouteWithNoSearchParams.search !== '' ? canonicalUrlForRouteWithNoSearchParams.search : requestedSearch;
    // Similarly, optimistically assume that rewrites for the requested
    // pathname do not vary on the search string. Therefore, if the base
    // route was rewritten to a different search string, then the optimistic
    // route should be rewritten to the same search string. Otherwise, we use
    // the requested search string.
    const optimisticRenderedSearch = routeWithNoSearchParams.renderedSearch !== '' ? routeWithNoSearchParams.renderedSearch : requestedSearch;
    const optimisticUrl = new URL(routeWithNoSearchParams.canonicalUrl, location.origin);
    optimisticUrl.search = optimisticCanonicalSearch;
    const optimisticCanonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(optimisticUrl);
    const optimisticRouteTree = createOptimisticRouteTree(routeWithNoSearchParams.tree, optimisticRenderedSearch);
    const optimisticMetadataTree = createOptimisticRouteTree(routeWithNoSearchParams.metadata, optimisticRenderedSearch);
    // Clone the base route tree, and override the relevant fields with our
    // optimistic values.
    const optimisticEntry = {
        canonicalUrl: optimisticCanonicalUrl,
        status: 2,
        // This isn't cloned because it's instance-specific
        blockedTasks: null,
        tree: optimisticRouteTree,
        metadata: optimisticMetadataTree,
        couldBeIntercepted: routeWithNoSearchParams.couldBeIntercepted,
        isPPREnabled: routeWithNoSearchParams.isPPREnabled,
        // Override the rendered search with the optimistic value.
        renderedSearch: optimisticRenderedSearch,
        // Map-related fields
        ref: null,
        size: 0,
        staleAt: routeWithNoSearchParams.staleAt,
        version: routeWithNoSearchParams.version
    };
    // Do not insert this entry into the cache. It only exists so we can
    // perform the current navigation. Just return it to the caller.
    return optimisticEntry;
}
function createOptimisticRouteTree(tree, newRenderedSearch) {
    // Create a new route tree that identical to the original one except for
    // the rendered search string, which is contained in the vary path.
    let clonedSlots = null;
    const originalSlots = tree.slots;
    if (originalSlots !== null) {
        clonedSlots = {};
        for(const parallelRouteKey in originalSlots){
            const childTree = originalSlots[parallelRouteKey];
            clonedSlots[parallelRouteKey] = createOptimisticRouteTree(childTree, newRenderedSearch);
        }
    }
    // We only need to clone the vary path if the route is a page.
    if (tree.isPage) {
        return {
            requestKey: tree.requestKey,
            segment: tree.segment,
            varyPath: (0, _varypath.clonePageVaryPathWithNewSearchParams)(tree.varyPath, newRenderedSearch),
            isPage: true,
            slots: clonedSlots,
            isRootLayout: tree.isRootLayout,
            hasLoadingBoundary: tree.hasLoadingBoundary,
            hasRuntimePrefetch: tree.hasRuntimePrefetch
        };
    }
    return {
        requestKey: tree.requestKey,
        segment: tree.segment,
        varyPath: tree.varyPath,
        isPage: false,
        slots: clonedSlots,
        isRootLayout: tree.isRootLayout,
        hasLoadingBoundary: tree.hasLoadingBoundary,
        hasRuntimePrefetch: tree.hasRuntimePrefetch
    };
}
function readOrCreateSegmentCacheEntry(now, fetchStrategy, route, tree) {
    const existingEntry = readSegmentCacheEntry(now, tree.varyPath);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache.
    const varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    const pendingEntry = createDetachedSegmentCacheEntry(route.staleAt);
    const isRevalidation = false;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function readOrCreateRevalidatingSegmentEntry(now, fetchStrategy, route, tree) {
    // This function is called when we've already confirmed that a particular
    // segment is cached, but we want to perform another request anyway in case it
    // returns more complete and/or fresher data than we already have. The logic
    // for deciding whether to replace the existing entry is handled elsewhere;
    // this function just handles retrieving a cache entry that we can use to
    // track the revalidation.
    //
    // The reason revalidations are stored in the cache is because we need to be
    // able to dedupe multiple revalidation requests. The reason they have to be
    // handled specially is because we shouldn't overwrite a "normal" entry if
    // one exists at the same keypath. So, for each internal cache location, there
    // is a special "revalidation" slot that is used solely for this purpose.
    //
    // You can think of it as if all the revalidation entries were stored in a
    // separate cache map from the canonical entries, and then transfered to the
    // canonical cache map once the request is complete — this isn't how it's
    // actually implemented, since it's more efficient to store them in the same
    // data structure as the normal entries, but that's how it's modeled
    // conceptually.
    // TODO: Once we implement Fallback behavior for params, where an entry is
    // re-keyed based on response information, we'll need to account for the
    // possibility that the keypath of the previous entry is more generic than
    // the keypath of the revalidating entry. In other words, the server could
    // return a less generic entry upon revalidation. For now, though, this isn't
    // a concern because the keypath is based solely on the prefetch strategy,
    // not on data contained in the response.
    const existingEntry = readRevalidatingSegmentCacheEntry(now, tree.varyPath);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache.
    const varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    const pendingEntry = createDetachedSegmentCacheEntry(route.staleAt);
    const isRevalidation = true;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function overwriteRevalidatingSegmentCacheEntry(fetchStrategy, route, tree) {
    // This function is called when we've already decided to replace an existing
    // revalidation entry. Create a new entry and write it into the cache,
    // overwriting the previous value.
    const varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    const pendingEntry = createDetachedSegmentCacheEntry(route.staleAt);
    const isRevalidation = true;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function upsertSegmentEntry(now, varyPath, candidateEntry) {
    // We have a new entry that has not yet been inserted into the cache. Before
    // we do so, we need to confirm whether it takes precedence over the existing
    // entry (if one exists).
    // TODO: We should not upsert an entry if its key was invalidated in the time
    // since the request was made. We can do that by passing the "owner" entry to
    // this function and confirming it's the same as `existingEntry`.
    if ((0, _cachemap.isValueExpired)(now, getCurrentCacheVersion(), candidateEntry)) {
        // The entry is expired. We cannot upsert it.
        return null;
    }
    const existingEntry = readSegmentCacheEntry(now, varyPath);
    if (existingEntry !== null) {
        // Don't replace a more specific segment with a less-specific one. A case where this
        // might happen is if the existing segment was fetched via
        // `<Link prefetch={true}>`.
        if (// than the segment we already have in the cache, so it can't have more content.
        candidateEntry.fetchStrategy !== existingEntry.fetchStrategy && !canNewFetchStrategyProvideMoreContent(existingEntry.fetchStrategy, candidateEntry.fetchStrategy) || // The existing entry isn't partial, but the new one is.
        // (TODO: can this be true if `candidateEntry.fetchStrategy >= existingEntry.fetchStrategy`?)
        !existingEntry.isPartial && candidateEntry.isPartial) {
            // We're going to leave revalidating entry in the cache so that it doesn't
            // get revalidated again unnecessarily. Downgrade the Fulfilled entry to
            // Rejected and null out the data so it can be garbage collected. We leave
            // `staleAt` intact to prevent subsequent revalidation attempts only until
            // the entry expires.
            const rejectedEntry = candidateEntry;
            rejectedEntry.status = 3;
            rejectedEntry.loading = null;
            rejectedEntry.rsc = null;
            return null;
        }
        // Evict the existing entry from the cache.
        (0, _cachemap.deleteFromCacheMap)(existingEntry);
    }
    const isRevalidation = false;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPath, candidateEntry, isRevalidation);
    return candidateEntry;
}
function createDetachedSegmentCacheEntry(staleAt) {
    const emptyEntry = {
        status: 0,
        // Default to assuming the fetch strategy will be PPR. This will be updated
        // when a fetch is actually initiated.
        fetchStrategy: _types.FetchStrategy.PPR,
        rsc: null,
        loading: null,
        isPartial: true,
        promise: null,
        // Map-related fields
        ref: null,
        size: 0,
        staleAt,
        version: 0
    };
    return emptyEntry;
}
function upgradeToPendingSegment(emptyEntry, fetchStrategy) {
    const pendingEntry = emptyEntry;
    pendingEntry.status = 1;
    pendingEntry.fetchStrategy = fetchStrategy;
    if (fetchStrategy === _types.FetchStrategy.Full) {
        // We can assume the response will contain the full segment data. Set this
        // to false so we know it's OK to omit this segment from any navigation
        // requests that may happen while the data is still pending.
        pendingEntry.isPartial = false;
    }
    // Set the version here, since this is right before the request is initiated.
    // The next time the global cache version is incremented, the entry will
    // effectively be evicted. This happens before initiating the request, rather
    // than when receiving the response, because it's guaranteed to happen
    // before the data is read on the server.
    pendingEntry.version = getCurrentCacheVersion();
    return pendingEntry;
}
function pingBlockedTasks(entry) {
    const blockedTasks = entry.blockedTasks;
    if (blockedTasks !== null) {
        for (const task of blockedTasks){
            (0, _scheduler.pingPrefetchTask)(task);
        }
        entry.blockedTasks = null;
    }
}
function fulfillRouteCacheEntry(entry, tree, metadataVaryPath, staleAt, couldBeIntercepted, canonicalUrl, renderedSearch, isPPREnabled) {
    // The Head is not actually part of the route tree, but other than that, it's
    // fetched and cached like a segment. Some functions expect a RouteTree
    // object, so rather than fork the logic in all those places, we use this
    // "fake" one.
    const metadata = {
        requestKey: _segmentvalueencoding.HEAD_REQUEST_KEY,
        segment: _segmentvalueencoding.HEAD_REQUEST_KEY,
        varyPath: metadataVaryPath,
        // The metadata isn't really a "page" (though it isn't really a "segment"
        // either) but for the purposes of how this field is used, it behaves like
        // one. If this logic ever gets more complex we can change this to an enum.
        isPage: true,
        slots: null,
        isRootLayout: false,
        hasLoadingBoundary: _approutertypes.HasLoadingBoundary.SubtreeHasNoLoadingBoundary,
        hasRuntimePrefetch: false
    };
    const fulfilledEntry = entry;
    fulfilledEntry.status = 2;
    fulfilledEntry.tree = tree;
    fulfilledEntry.metadata = metadata;
    fulfilledEntry.staleAt = staleAt;
    fulfilledEntry.couldBeIntercepted = couldBeIntercepted;
    fulfilledEntry.canonicalUrl = canonicalUrl;
    fulfilledEntry.renderedSearch = renderedSearch;
    fulfilledEntry.isPPREnabled = isPPREnabled;
    pingBlockedTasks(entry);
    return fulfilledEntry;
}
function fulfillSegmentCacheEntry(segmentCacheEntry, rsc, loading, staleAt, isPartial) {
    const fulfilledEntry = segmentCacheEntry;
    fulfilledEntry.status = 2;
    fulfilledEntry.rsc = rsc;
    fulfilledEntry.loading = loading;
    fulfilledEntry.staleAt = staleAt;
    fulfilledEntry.isPartial = isPartial;
    // Resolve any listeners that were waiting for this data.
    if (segmentCacheEntry.promise !== null) {
        segmentCacheEntry.promise.resolve(fulfilledEntry);
        // Free the promise for garbage collection.
        fulfilledEntry.promise = null;
    }
    return fulfilledEntry;
}
function rejectRouteCacheEntry(entry, staleAt) {
    const rejectedEntry = entry;
    rejectedEntry.status = 3;
    rejectedEntry.staleAt = staleAt;
    pingBlockedTasks(entry);
}
function rejectSegmentCacheEntry(entry, staleAt) {
    const rejectedEntry = entry;
    rejectedEntry.status = 3;
    rejectedEntry.staleAt = staleAt;
    if (entry.promise !== null) {
        // NOTE: We don't currently propagate the reason the prefetch was canceled
        // but we could by accepting a `reason` argument.
        entry.promise.resolve(null);
        entry.promise = null;
    }
}
function convertRootTreePrefetchToRouteTree(rootTree, renderedPathname, renderedSearch, acc) {
    // Remove trailing and leading slashes
    const pathnameParts = renderedPathname.split('/').filter((p)=>p !== '');
    const index = 0;
    const rootSegment = _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY;
    return convertTreePrefetchToRouteTree(rootTree.tree, rootSegment, null, _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY, pathnameParts, index, renderedSearch, acc);
}
function convertTreePrefetchToRouteTree(prefetch, segment, partialVaryPath, requestKey, pathnameParts, pathnamePartsIndex, renderedSearch, acc) {
    // Converts the route tree sent by the server into the format used by the
    // cache. The cached version of the tree includes additional fields, such as a
    // cache key for each segment. Since this is frequently accessed, we compute
    // it once instead of on every access. This same cache key is also used to
    // request the segment from the server.
    let slots = null;
    let isPage;
    let varyPath;
    const prefetchSlots = prefetch.slots;
    if (prefetchSlots !== null) {
        isPage = false;
        varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        slots = {};
        for(let parallelRouteKey in prefetchSlots){
            const childPrefetch = prefetchSlots[parallelRouteKey];
            const childParamName = childPrefetch.name;
            const childParamType = childPrefetch.paramType;
            const childServerSentParamKey = childPrefetch.paramKey;
            let childDoesAppearInURL;
            let childSegment;
            let childPartialVaryPath;
            if (childParamType !== null) {
                // This segment is parameterized. Get the param from the pathname.
                const childParamValue = (0, _routeparams.parseDynamicParamFromURLPart)(childParamType, pathnameParts, pathnamePartsIndex);
                // Assign a cache key to the segment, based on the param value. In the
                // pre-Segment Cache implementation, the server computes this and sends
                // it in the body of the response. In the Segment Cache implementation,
                // the server sends an empty string and we fill it in here.
                // TODO: We're intentionally not adding the search param to page
                // segments here; it's tracked separately and added back during a read.
                // This would clearer if we waited to construct the segment until it's
                // read from the cache, since that's effectively what we're
                // doing anyway.
                const childParamKey = // cacheComponents is enabled.
                childServerSentParamKey !== null ? childServerSentParamKey : (0, _routeparams.getCacheKeyForDynamicParam)(childParamValue, '');
                childPartialVaryPath = (0, _varypath.appendLayoutVaryPath)(partialVaryPath, childParamKey);
                childSegment = [
                    childParamName,
                    childParamKey,
                    childParamType
                ];
                childDoesAppearInURL = true;
            } else {
                // This segment does not have a param. Inherit the partial vary path of
                // the parent.
                childPartialVaryPath = partialVaryPath;
                childSegment = childParamName;
                childDoesAppearInURL = (0, _routeparams.doesStaticSegmentAppearInURL)(childParamName);
            }
            // Only increment the index if the segment appears in the URL. If it's a
            // "virtual" segment, like a route group, it remains the same.
            const childPathnamePartsIndex = childDoesAppearInURL ? pathnamePartsIndex + 1 : pathnamePartsIndex;
            const childRequestKeyPart = (0, _segmentvalueencoding.createSegmentRequestKeyPart)(childSegment);
            const childRequestKey = (0, _segmentvalueencoding.appendSegmentRequestKeyPart)(requestKey, parallelRouteKey, childRequestKeyPart);
            slots[parallelRouteKey] = convertTreePrefetchToRouteTree(childPrefetch, childSegment, childPartialVaryPath, childRequestKey, pathnameParts, childPathnamePartsIndex, renderedSearch, acc);
        }
    } else {
        if (requestKey.endsWith(_segment.PAGE_SEGMENT_KEY)) {
            // This is a page segment.
            isPage = true;
            varyPath = (0, _varypath.finalizePageVaryPath)(requestKey, renderedSearch, partialVaryPath);
            // The metadata "segment" is not part the route tree, but it has the same
            // conceptual params as a page segment. Write the vary path into the
            // accumulator object. If there are multiple parallel pages, we use the
            // first one. Which page we choose is arbitrary as long as it's
            // consistently the same one every time every time. See
            // finalizeMetadataVaryPath for more details.
            if (acc.metadataVaryPath === null) {
                acc.metadataVaryPath = (0, _varypath.finalizeMetadataVaryPath)(requestKey, renderedSearch, partialVaryPath);
            }
        } else {
            // This is a layout segment.
            isPage = false;
            varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        }
    }
    return {
        requestKey,
        segment,
        varyPath,
        // TODO: Cheating the type system here a bit because TypeScript can't tell
        // that the type of isPage and varyPath are consistent. The fix would be to
        // create separate constructors and call the appropriate one from each of
        // the branches above. Just seems a bit overkill only for one field so I'll
        // leave it as-is for now. If isPage were wrong it would break the behavior
        // and we'd catch it quickly, anyway.
        isPage: isPage,
        slots,
        isRootLayout: prefetch.isRootLayout,
        // This field is only relevant to dynamic routes. For a PPR/static route,
        // there's always some partial loading state we can fetch.
        hasLoadingBoundary: _approutertypes.HasLoadingBoundary.SegmentHasLoadingBoundary,
        hasRuntimePrefetch: prefetch.hasRuntimePrefetch
    };
}
function convertRootFlightRouterStateToRouteTree(flightRouterState, renderedSearch, acc) {
    return convertFlightRouterStateToRouteTree(flightRouterState, _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY, null, renderedSearch, acc);
}
function convertFlightRouterStateToRouteTree(flightRouterState, requestKey, parentPartialVaryPath, renderedSearch, acc) {
    const originalSegment = flightRouterState[0];
    let segment;
    let partialVaryPath;
    let isPage;
    let varyPath;
    if (Array.isArray(originalSegment)) {
        isPage = false;
        const paramCacheKey = originalSegment[1];
        partialVaryPath = (0, _varypath.appendLayoutVaryPath)(parentPartialVaryPath, paramCacheKey);
        varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        segment = originalSegment;
    } else {
        // This segment does not have a param. Inherit the partial vary path of
        // the parent.
        partialVaryPath = parentPartialVaryPath;
        if (requestKey.endsWith(_segment.PAGE_SEGMENT_KEY)) {
            // This is a page segment.
            isPage = true;
            // The navigation implementation expects the search params to be included
            // in the segment. However, in the case of a static response, the search
            // params are omitted. So the client needs to add them back in when reading
            // from the Segment Cache.
            //
            // For consistency, we'll do this for dynamic responses, too.
            //
            // TODO: We should move search params out of FlightRouterState and handle
            // them entirely on the client, similar to our plan for dynamic params.
            segment = _segment.PAGE_SEGMENT_KEY;
            varyPath = (0, _varypath.finalizePageVaryPath)(requestKey, renderedSearch, partialVaryPath);
            // The metadata "segment" is not part the route tree, but it has the same
            // conceptual params as a page segment. Write the vary path into the
            // accumulator object. If there are multiple parallel pages, we use the
            // first one. Which page we choose is arbitrary as long as it's
            // consistently the same one every time every time. See
            // finalizeMetadataVaryPath for more details.
            if (acc.metadataVaryPath === null) {
                acc.metadataVaryPath = (0, _varypath.finalizeMetadataVaryPath)(requestKey, renderedSearch, partialVaryPath);
            }
        } else {
            // This is a layout segment.
            isPage = false;
            segment = originalSegment;
            varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        }
    }
    let slots = null;
    const parallelRoutes = flightRouterState[1];
    for(let parallelRouteKey in parallelRoutes){
        const childRouterState = parallelRoutes[parallelRouteKey];
        const childSegment = childRouterState[0];
        // TODO: Eventually, the param values will not be included in the response
        // from the server. We'll instead fill them in on the client by parsing
        // the URL. This is where we'll do that.
        const childRequestKeyPart = (0, _segmentvalueencoding.createSegmentRequestKeyPart)(childSegment);
        const childRequestKey = (0, _segmentvalueencoding.appendSegmentRequestKeyPart)(requestKey, parallelRouteKey, childRequestKeyPart);
        const childTree = convertFlightRouterStateToRouteTree(childRouterState, childRequestKey, partialVaryPath, renderedSearch, acc);
        if (slots === null) {
            slots = {
                [parallelRouteKey]: childTree
            };
        } else {
            slots[parallelRouteKey] = childTree;
        }
    }
    return {
        requestKey,
        segment,
        varyPath,
        // TODO: Cheating the type system here a bit because TypeScript can't tell
        // that the type of isPage and varyPath are consistent. The fix would be to
        // create separate constructors and call the appropriate one from each of
        // the branches above. Just seems a bit overkill only for one field so I'll
        // leave it as-is for now. If isPage were wrong it would break the behavior
        // and we'd catch it quickly, anyway.
        isPage: isPage,
        slots,
        isRootLayout: flightRouterState[4] === true,
        hasLoadingBoundary: flightRouterState[5] !== undefined ? flightRouterState[5] : _approutertypes.HasLoadingBoundary.SubtreeHasNoLoadingBoundary,
        // Non-static tree responses are only used by apps that haven't adopted
        // Cache Components. So this is always false.
        hasRuntimePrefetch: false
    };
}
function convertRouteTreeToFlightRouterState(routeTree) {
    const parallelRoutes = {};
    if (routeTree.slots !== null) {
        for(const parallelRouteKey in routeTree.slots){
            parallelRoutes[parallelRouteKey] = convertRouteTreeToFlightRouterState(routeTree.slots[parallelRouteKey]);
        }
    }
    const flightRouterState = [
        routeTree.segment,
        parallelRoutes,
        null,
        null,
        routeTree.isRootLayout
    ];
    return flightRouterState;
}
async function fetchRouteOnCacheMiss(entry, task, key) {
    // This function is allowed to use async/await because it contains the actual
    // fetch that gets issued on a cache miss. Notice it writes the result to the
    // cache entry directly, rather than return data that is then written by
    // the caller.
    const pathname = key.pathname;
    const search = key.search;
    const nextUrl = key.nextUrl;
    const segmentPath = '/_tree';
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: segmentPath
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    try {
        const url = new URL(pathname + search, location.origin);
        let response;
        let urlAfterRedirects;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // "Server" mode. We can use request headers instead of the pathname.
            // TODO: The eventual plan is to get rid of our custom request headers and
            // encode everything into the URL, using a similar strategy to the
            // "output: export" block above.
            response = await fetchPrefetchResponse(url, headers);
            urlAfterRedirects = response !== null && response.redirected ? new URL(response.url) : url;
        }
        if (!response || !response.ok || // 204 is a Cache miss. Though theoretically this shouldn't happen when
        // PPR is enabled, because we always respond to route tree requests, even
        // if it needs to be blockingly generated on demand.
        response.status === 204 || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
            return null;
        }
        // TODO: The canonical URL is the href without the origin. I think
        // historically the reason for this is because the initial canonical URL
        // gets passed as a prop to the top-level React component, which means it
        // needs to be computed during SSR. If it were to include the origin, it
        // would need to always be same as location.origin on the client, to prevent
        // a hydration mismatch. To sidestep this complexity, we omit the origin.
        //
        // However, since this is neither a native URL object nor a fully qualified
        // URL string, we need to be careful about how we use it. To prevent subtle
        // mistakes, we should create a special type for it, instead of just string.
        // Or, we should just use a (readonly) URL object instead. The type of the
        // prop that we pass to seed the initial state does not need to be the same
        // type as the state itself.
        const canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(urlAfterRedirects);
        // Check whether the response varies based on the Next-Url header.
        const varyHeader = response.headers.get('vary');
        const couldBeIntercepted = varyHeader !== null && varyHeader.includes(_approuterheaders.NEXT_URL);
        // Track when the network connection closes.
        const closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
        // This checks whether the response was served from the per-segment cache,
        // rather than the old prefetching flow. If it fails, it implies that PPR
        // is disabled on this route.
        const routeIsPPREnabled = response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) === '2' || // In output: "export" mode, we can't rely on response headers. But if we
        // receive a well-formed response, we can assume it's a static response,
        // because all data is static in this mode.
        isOutputExportMode;
        if (routeIsPPREnabled) {
            const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(size) {
                (0, _cachemap.setSizeInCacheMap)(entry, size);
            });
            const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers);
            if (serverData.buildId !== (0, _appbuildid.getAppBuildId)()) {
                // The server build does not match the client. Treat as a 404. During
                // an actual navigation, the router will trigger an MPA navigation.
                // TODO: Consider moving the build ID to a response header so we can check
                // it before decoding the response, and so there's one way of checking
                // across all response types.
                // TODO: We should cache the fact that this is an MPA navigation.
                rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                return null;
            }
            // Get the params that were used to render the target page. These may
            // be different from the params in the request URL, if the page
            // was rewritten.
            const renderedPathname = (0, _routeparams.getRenderedPathname)(response);
            const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
            // Convert the server-sent data into the RouteTree format used by the
            // client cache.
            //
            // During this traversal, we accumulate additional data into this
            // "accumulator" object.
            const acc = {
                metadataVaryPath: null
            };
            const routeTree = convertRootTreePrefetchToRouteTree(serverData, renderedPathname, renderedSearch, acc);
            const metadataVaryPath = acc.metadataVaryPath;
            if (metadataVaryPath === null) {
                rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                return null;
            }
            const staleTimeMs = getStaleTimeMs(serverData.staleTime);
            fulfillRouteCacheEntry(entry, routeTree, metadataVaryPath, Date.now() + staleTimeMs, couldBeIntercepted, canonicalUrl, renderedSearch, routeIsPPREnabled);
        } else {
            // PPR is not enabled for this route. The server responds with a
            // different format (FlightRouterState) that we need to convert.
            // TODO: We will unify the responses eventually. I'm keeping the types
            // separate for now because FlightRouterState has so many
            // overloaded concerns.
            const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(size) {
                (0, _cachemap.setSizeInCacheMap)(entry, size);
            });
            const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers);
            if (serverData.b !== (0, _appbuildid.getAppBuildId)()) {
                // The server build does not match the client. Treat as a 404. During
                // an actual navigation, the router will trigger an MPA navigation.
                // TODO: Consider moving the build ID to a response header so we can check
                // it before decoding the response, and so there's one way of checking
                // across all response types.
                // TODO: We should cache the fact that this is an MPA navigation.
                rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                return null;
            }
            writeDynamicTreeResponseIntoCache(Date.now(), task, // using the LoadingBoundary fetch strategy, so mark their cache entries accordingly.
            _types.FetchStrategy.LoadingBoundary, response, serverData, entry, couldBeIntercepted, canonicalUrl, routeIsPPREnabled);
        }
        if (!couldBeIntercepted) {
            // This route will never be intercepted. So we can use this entry for all
            // requests to this route, regardless of the Next-Url header. This works
            // because when reading the cache we always check for a valid
            // non-intercepted entry first.
            // Re-key the entry. The `set` implementation handles removing it from
            // its previous position in the cache. We don't need to do anything to
            // update the LRU, because the entry is already in it.
            // TODO: Treat this as an upsert — should check if an entry already
            // exists at the new keypath, and if so, whether we should keep that
            // one instead.
            const fulfilledVaryPath = (0, _varypath.getFulfilledRouteVaryPath)(pathname, search, nextUrl, couldBeIntercepted);
            const isRevalidation = false;
            (0, _cachemap.setInCacheMap)(routeCacheMap, fulfilledVaryPath, entry, isRevalidation);
        }
        // Return a promise that resolves when the network connection closes, so
        // the scheduler can track the number of concurrent network connections.
        return {
            value: null,
            closed: closed.promise
        };
    } catch (error) {
        // Either the connection itself failed, or something bad happened while
        // decoding the response.
        rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
        return null;
    }
}
async function fetchSegmentOnCacheMiss(route, segmentCacheEntry, routeKey, tree) {
    // This function is allowed to use async/await because it contains the actual
    // fetch that gets issued on a cache miss. Notice it writes the result to the
    // cache entry directly, rather than return data that is then written by
    // the caller.
    //
    // Segment fetches are non-blocking so we don't need to ping the scheduler
    // on completion.
    // Use the canonical URL to request the segment, not the original URL. These
    // are usually the same, but the canonical URL will be different if the route
    // tree response was redirected. To avoid an extra waterfall on every segment
    // request, we pass the redirected URL instead of the original one.
    const url = new URL(route.canonicalUrl, location.origin);
    const nextUrl = routeKey.nextUrl;
    const requestKey = tree.requestKey;
    const normalizedRequestKey = requestKey === _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY ? // `_index` instead of as an empty string. This should be treated as
    // an implementation detail and not as a stable part of the protocol.
    // It just needs to match the equivalent logic that happens when
    // prerendering the responses. It should not leak outside of Next.js.
    '/_index' : requestKey;
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: normalizedRequestKey
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    const requestUrl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : url;
    try {
        const response = await fetchPrefetchResponse(requestUrl, headers);
        if (!response || !response.ok || response.status === 204 || // Cache miss
        // This checks whether the response was served from the per-segment cache,
        // rather than the old prefetching flow. If it fails, it implies that PPR
        // is disabled on this route. Theoretically this should never happen
        // because we only issue requests for segments once we've verified that
        // the route supports PPR.
        response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) !== '2' && // In output: "export" mode, we can't rely on response headers. But if
        // we receive a well-formed response, we can assume it's a static
        // response, because all data is static in this mode.
        !isOutputExportMode || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
            return null;
        }
        // Track when the network connection closes.
        const closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
        // Wrap the original stream in a new stream that never closes. That way the
        // Flight client doesn't error if there's a hanging promise.
        const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(size) {
            (0, _cachemap.setSizeInCacheMap)(segmentCacheEntry, size);
        });
        const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers);
        if (serverData.buildId !== (0, _appbuildid.getAppBuildId)()) {
            // The server build does not match the client. Treat as a 404. During
            // an actual navigation, the router will trigger an MPA navigation.
            // TODO: Consider moving the build ID to a response header so we can check
            // it before decoding the response, and so there's one way of checking
            // across all response types.
            rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
            return null;
        }
        return {
            value: fulfillSegmentCacheEntry(segmentCacheEntry, serverData.rsc, serverData.loading, // So we use the stale time of the route.
            route.staleAt, serverData.isPartial),
            // Return a promise that resolves when the network connection closes, so
            // the scheduler can track the number of concurrent network connections.
            closed: closed.promise
        };
    } catch (error) {
        // Either the connection itself failed, or something bad happened while
        // decoding the response.
        rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
        return null;
    }
}
async function fetchSegmentPrefetchesUsingDynamicRequest(task, route, fetchStrategy, dynamicRequestTree, spawnedEntries) {
    const key = task.key;
    const url = new URL(route.canonicalUrl, location.origin);
    const nextUrl = key.nextUrl;
    if (spawnedEntries.size === 1 && spawnedEntries.has(route.metadata.requestKey)) {
        // The only thing pending is the head. Instruct the server to
        // skip over everything else.
        dynamicRequestTree = MetadataOnlyRequestTree;
    }
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(dynamicRequestTree)
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    switch(fetchStrategy){
        case _types.FetchStrategy.Full:
            {
                break;
            }
        case _types.FetchStrategy.PPRRuntime:
            {
                headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = '2';
                break;
            }
        case _types.FetchStrategy.LoadingBoundary:
            {
                headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = '1';
                break;
            }
        default:
            {
                fetchStrategy;
            }
    }
    try {
        const response = await fetchPrefetchResponse(url, headers);
        if (!response || !response.ok || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
            return null;
        }
        const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
        if (renderedSearch !== route.renderedSearch) {
            // The search params that were used to render the target page are
            // different from the search params in the request URL. This only happens
            // when there's a dynamic rewrite in between the tree prefetch and the
            // data prefetch.
            // TODO: For now, since this is an edge case, we reject the prefetch, but
            // the proper way to handle this is to evict the stale route tree entry
            // then fill the cache with the new response.
            rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
            return null;
        }
        // Track when the network connection closes.
        const closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
        let fulfilledEntries = null;
        const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(totalBytesReceivedSoFar) {
            // When processing a dynamic response, we don't know how large each
            // individual segment is, so approximate by assiging each segment
            // the average of the total response size.
            if (fulfilledEntries === null) {
                // Haven't received enough data yet to know which segments
                // were included.
                return;
            }
            const averageSize = totalBytesReceivedSoFar / fulfilledEntries.length;
            for (const entry of fulfilledEntries){
                (0, _cachemap.setSizeInCacheMap)(entry, averageSize);
            }
        });
        const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers);
        const isResponsePartial = fetchStrategy === _types.FetchStrategy.PPRRuntime ? serverData.rp?.[0] === true : false;
        // Aside from writing the data into the cache, this function also returns
        // the entries that were fulfilled, so we can streamingly update their sizes
        // in the LRU as more data comes in.
        fulfilledEntries = writeDynamicRenderResponseIntoCache(Date.now(), task, fetchStrategy, response, serverData, isResponsePartial, route, spawnedEntries);
        // Return a promise that resolves when the network connection closes, so
        // the scheduler can track the number of concurrent network connections.
        return {
            value: null,
            closed: closed.promise
        };
    } catch (error) {
        rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
        return null;
    }
}
function writeDynamicTreeResponseIntoCache(now, task, fetchStrategy, response, serverData, entry, couldBeIntercepted, canonicalUrl, routeIsPPREnabled) {
    // Get the URL that was used to render the target page. This may be different
    // from the URL in the request URL, if the page was rewritten.
    const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
    const normalizedFlightDataResult = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
    if (// MPA navigation.
    typeof normalizedFlightDataResult === 'string' || normalizedFlightDataResult.length !== 1) {
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    const flightData = normalizedFlightDataResult[0];
    if (!flightData.isRootRender) {
        // Unexpected response format.
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    const flightRouterState = flightData.tree;
    // For runtime prefetches, stale time is in the payload at rp[1].
    // For other responses, fall back to the header.
    const staleTimeSeconds = typeof serverData.rp?.[1] === 'number' ? serverData.rp[1] : parseInt(response.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER) ?? '', 10);
    const staleTimeMs = !isNaN(staleTimeSeconds) ? getStaleTimeMs(staleTimeSeconds) : _navigatereducer.STATIC_STALETIME_MS;
    // If the response contains dynamic holes, then we must conservatively assume
    // that any individual segment might contain dynamic holes, and also the
    // head. If it did not contain dynamic holes, then we can assume every segment
    // and the head is completely static.
    const isResponsePartial = response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) === '1';
    // Convert the server-sent data into the RouteTree format used by the
    // client cache.
    //
    // During this traversal, we accumulate additional data into this
    // "accumulator" object.
    const acc = {
        metadataVaryPath: null
    };
    const routeTree = convertRootFlightRouterStateToRouteTree(flightRouterState, renderedSearch, acc);
    const metadataVaryPath = acc.metadataVaryPath;
    if (metadataVaryPath === null) {
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    const fulfilledEntry = fulfillRouteCacheEntry(entry, routeTree, metadataVaryPath, now + staleTimeMs, couldBeIntercepted, canonicalUrl, renderedSearch, routeIsPPREnabled);
    // If the server sent segment data as part of the response, we should write
    // it into the cache to prevent a second, redundant prefetch request.
    //
    // TODO: When `clientSegmentCache` is enabled, the server does not include
    // segment data when responding to a route tree prefetch request. However,
    // when `clientSegmentCache` is set to "client-only", and PPR is enabled (or
    // the page is fully static), the normal check is bypassed and the server
    // responds with the full page. This is a temporary situation until we can
    // remove the "client-only" option. Then, we can delete this function call.
    writeDynamicRenderResponseIntoCache(now, task, fetchStrategy, response, serverData, isResponsePartial, fulfilledEntry, null);
}
function rejectSegmentEntriesIfStillPending(entries, staleAt) {
    const fulfilledEntries = [];
    for (const entry of entries.values()){
        if (entry.status === 1) {
            rejectSegmentCacheEntry(entry, staleAt);
        } else if (entry.status === 2) {
            fulfilledEntries.push(entry);
        }
    }
    return fulfilledEntries;
}
function writeDynamicRenderResponseIntoCache(now, task, fetchStrategy, response, serverData, isResponsePartial, route, spawnedEntries) {
    if (serverData.b !== (0, _appbuildid.getAppBuildId)()) {
        // The server build does not match the client. Treat as a 404. During
        // an actual navigation, the router will trigger an MPA navigation.
        // TODO: Consider moving the build ID to a response header so we can check
        // it before decoding the response, and so there's one way of checking
        // across all response types.
        if (spawnedEntries !== null) {
            rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
        }
        return null;
    }
    const flightDatas = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
    if (typeof flightDatas === 'string') {
        // This means navigating to this route will result in an MPA navigation.
        // TODO: We should cache this, too, so that the MPA navigation is immediate.
        return null;
    }
    // For runtime prefetches, stale time is in the payload at rp[1].
    // For other responses, fall back to the header.
    const staleTimeSeconds = typeof serverData.rp?.[1] === 'number' ? serverData.rp[1] : parseInt(response.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER) ?? '', 10);
    const staleTimeMs = !isNaN(staleTimeSeconds) ? getStaleTimeMs(staleTimeSeconds) : _navigatereducer.STATIC_STALETIME_MS;
    const staleAt = now + staleTimeMs;
    for (const flightData of flightDatas){
        const seedData = flightData.seedData;
        if (seedData !== null) {
            // The data sent by the server represents only a subtree of the app. We
            // need to find the part of the task tree that matches the response.
            //
            // segmentPath represents the parent path of subtree. It's a repeating
            // pattern of parallel route key and segment:
            //
            //   [string, Segment, string, Segment, string, Segment, ...]
            const segmentPath = flightData.segmentPath;
            let tree = route.tree;
            for(let i = 0; i < segmentPath.length; i += 2){
                const parallelRouteKey = segmentPath[i];
                if (tree?.slots?.[parallelRouteKey] !== undefined) {
                    tree = tree.slots[parallelRouteKey];
                } else {
                    if (spawnedEntries !== null) {
                        rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
                    }
                    return null;
                }
            }
            writeSeedDataIntoCache(now, task, fetchStrategy, route, tree, staleAt, seedData, isResponsePartial, spawnedEntries);
        }
        const head = flightData.head;
        if (head !== null) {
            fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, route, head, null, flightData.isHeadPartial, staleAt, route.metadata, spawnedEntries);
        }
    }
    // Any entry that's still pending was intentionally not rendered by the
    // server, because it was inside the loading boundary. Mark them as rejected
    // so we know not to fetch them again.
    // TODO: If PPR is enabled on some routes but not others, then it's possible
    // that a different page is able to do a per-segment prefetch of one of the
    // segments we're marking as rejected here. We should mark on the segment
    // somehow that the reason for the rejection is because of a non-PPR prefetch.
    // That way a per-segment prefetch knows to disregard the rejection.
    if (spawnedEntries !== null) {
        const fulfilledEntries = rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
        return fulfilledEntries;
    }
    return null;
}
function writeSeedDataIntoCache(now, task, fetchStrategy, route, tree, staleAt, seedData, isResponsePartial, entriesOwnedByCurrentTask) {
    // This function is used to write the result of a runtime server request
    // (CacheNodeSeedData) into the prefetch cache.
    const rsc = seedData[0];
    const loading = seedData[2];
    const isPartial = rsc === null || isResponsePartial;
    fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, route, rsc, loading, isPartial, staleAt, tree, entriesOwnedByCurrentTask);
    // Recursively write the child data into the cache.
    const slots = tree.slots;
    if (slots !== null) {
        const seedDataChildren = seedData[1];
        for(const parallelRouteKey in slots){
            const childTree = slots[parallelRouteKey];
            const childSeedData = seedDataChildren[parallelRouteKey];
            if (childSeedData !== null && childSeedData !== undefined) {
                writeSeedDataIntoCache(now, task, fetchStrategy, route, childTree, staleAt, childSeedData, isResponsePartial, entriesOwnedByCurrentTask);
            }
        }
    }
}
function fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, route, rsc, loading, isPartial, staleAt, tree, entriesOwnedByCurrentTask) {
    // We should only write into cache entries that are owned by us. Or create
    // a new one and write into that. We must never write over an entry that was
    // created by a different task, because that causes data races.
    const ownedEntry = entriesOwnedByCurrentTask !== null ? entriesOwnedByCurrentTask.get(tree.requestKey) : undefined;
    if (ownedEntry !== undefined) {
        fulfillSegmentCacheEntry(ownedEntry, rsc, loading, staleAt, isPartial);
    } else {
        // There's no matching entry. Attempt to create a new one.
        const possiblyNewEntry = readOrCreateSegmentCacheEntry(now, fetchStrategy, route, tree);
        if (possiblyNewEntry.status === 0) {
            // Confirmed this is a new entry. We can fulfill it.
            const newEntry = possiblyNewEntry;
            fulfillSegmentCacheEntry(upgradeToPendingSegment(newEntry, fetchStrategy), rsc, loading, staleAt, isPartial);
        } else {
            // There was already an entry in the cache. But we may be able to
            // replace it with the new one from the server.
            const newEntry = fulfillSegmentCacheEntry(upgradeToPendingSegment(createDetachedSegmentCacheEntry(staleAt), fetchStrategy), rsc, loading, staleAt, isPartial);
            upsertSegmentEntry(now, (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree), newEntry);
        }
    }
}
async function fetchPrefetchResponse(url, headers) {
    const fetchPriority = 'low';
    // When issuing a prefetch request, don't immediately decode the response; we
    // use the lower level `createFromResponse` API instead because we need to do
    // some extra processing of the response stream. See
    // `createPrefetchResponseStream` for more details.
    const shouldImmediatelyDecode = false;
    const response = await (0, _fetchserverresponse.createFetch)(url, headers, fetchPriority, shouldImmediatelyDecode);
    if (!response.ok) {
        return null;
    }
    // Check the content type
    if ("TURBOPACK compile-time falsy", 0) {
    // In output: "export" mode, we relaxed about the content type, since it's
    // not Next.js that's serving the response. If the status is OK, assume the
    // response is valid. If it's not a valid response, the Flight client won't
    // be able to decode it, and we'll treat it as a miss.
    } else {
        const contentType = response.headers.get('content-type');
        const isFlightResponse = contentType && contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
        if (!isFlightResponse) {
            return null;
        }
    }
    return response;
}
function createPrefetchResponseStream(originalFlightStream, onStreamClose, onResponseSizeUpdate) {
    // When PPR is enabled, prefetch streams may contain references that never
    // resolve, because that's how we encode dynamic data access. In the decoded
    // object returned by the Flight client, these are reified into hanging
    // promises that suspend during render, which is effectively what we want.
    // The UI resolves when it switches to the dynamic data stream
    // (via useDeferredValue(dynamic, static)).
    //
    // However, the Flight implementation currently errors if the server closes
    // the response before all the references are resolved. As a cheat to work
    // around this, we wrap the original stream in a new stream that never closes,
    // and therefore doesn't error.
    //
    // While processing the original stream, we also incrementally update the size
    // of the cache entry in the LRU.
    let totalByteLength = 0;
    const reader = originalFlightStream.getReader();
    return new ReadableStream({
        async pull (controller) {
            while(true){
                const { done, value } = await reader.read();
                if (!done) {
                    // Pass to the target stream and keep consuming the Flight response
                    // from the server.
                    controller.enqueue(value);
                    // Incrementally update the size of the cache entry in the LRU.
                    // NOTE: Since prefetch responses are delivered in a single chunk,
                    // it's not really necessary to do this streamingly, but I'm doing it
                    // anyway in case this changes in the future.
                    totalByteLength += value.byteLength;
                    onResponseSizeUpdate(totalByteLength);
                    continue;
                }
                // The server stream has closed. Exit, but intentionally do not close
                // the target stream. We do notify the caller, though.
                onStreamClose();
                return;
            }
        }
    });
}
function addSegmentPathToUrlInOutputExportMode(url, segmentPath) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return url;
}
function canNewFetchStrategyProvideMoreContent(currentStrategy, newStrategy) {
    return currentStrategy < newStrategy;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=cache.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    convertServerPatchToFullTree: null,
    navigate: null,
    navigateToSeededRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    convertServerPatchToFullTree: function() {
        return convertServerPatchToFullTree;
    },
    navigate: function() {
        return navigate;
    },
    navigateToSeededRoute: function() {
        return navigateToSeededRoute;
    }
});
const _fetchserverresponse = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function navigate(url, currentUrl, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, shouldScroll, accumulation) {
    const now = Date.now();
    const href = url.href;
    // We special case navigations to the exact same URL as the current location.
    // It's a common UI pattern for apps to refresh when you click a link to the
    // current page. So when this happens, we refresh the dynamic data in the page
    // segments.
    //
    // Note that this does not apply if the any part of the hash or search query
    // has changed. This might feel a bit weird but it makes more sense when you
    // consider that the way to trigger this behavior is to click the same link
    // multiple times.
    //
    // TODO: We should probably refresh the *entire* route when this case occurs,
    // not just the page segments. Essentially treating it the same as a refresh()
    // triggered by an action, which is the more explicit way of modeling the UI
    // pattern described above.
    //
    // Also note that this only refreshes the dynamic data, not static/ cached
    // data. If the page segment is fully static and prefetched, the request is
    // skipped. (This is also how refresh() works.)
    const isSamePageNavigation = href === currentUrl.href;
    const cacheKey = (0, _cachekey.createCacheKey)(href, nextUrl);
    const route = (0, _cache.readRouteCacheEntry)(now, cacheKey);
    if (route !== null && route.status === _cache.EntryStatus.Fulfilled) {
        // We have a matching prefetch.
        const snapshot = readRenderSnapshotFromCache(now, route, route.tree);
        const prefetchFlightRouterState = snapshot.flightRouterState;
        const prefetchSeedData = snapshot.seedData;
        const headSnapshot = readHeadSnapshotFromCache(now, route);
        const prefetchHead = headSnapshot.rsc;
        const isPrefetchHeadPartial = headSnapshot.isPartial;
        // TODO: The "canonicalUrl" stored in the cache doesn't include the hash,
        // because hash entries do not vary by hash fragment. However, the one
        // we set in the router state *does* include the hash, and it's used to
        // sync with the actual browser location. To make this less of a refactor
        // hazard, we should always track the hash separately from the rest of
        // the URL.
        const newCanonicalUrl = route.canonicalUrl + url.hash;
        const renderedSearch = route.renderedSearch;
        return navigateUsingPrefetchedRouteTree(now, url, currentUrl, nextUrl, isSamePageNavigation, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, newCanonicalUrl, renderedSearch, freshnessPolicy, shouldScroll);
    }
    // There was no matching route tree in the cache. Let's see if we can
    // construct an "optimistic" route tree.
    //
    // Do not construct an optimistic route tree if there was a cache hit, but
    // the entry has a rejected status, since it may have been rejected due to a
    // rewrite or redirect based on the search params.
    //
    // TODO: There are multiple reasons a prefetch might be rejected; we should
    // track them explicitly and choose what to do here based on that.
    if (route === null || route.status !== _cache.EntryStatus.Rejected) {
        const optimisticRoute = (0, _cache.requestOptimisticRouteCacheEntry)(now, url, nextUrl);
        if (optimisticRoute !== null) {
            // We have an optimistic route tree. Proceed with the normal flow.
            const snapshot = readRenderSnapshotFromCache(now, optimisticRoute, optimisticRoute.tree);
            const prefetchFlightRouterState = snapshot.flightRouterState;
            const prefetchSeedData = snapshot.seedData;
            const headSnapshot = readHeadSnapshotFromCache(now, optimisticRoute);
            const prefetchHead = headSnapshot.rsc;
            const isPrefetchHeadPartial = headSnapshot.isPartial;
            const newCanonicalUrl = optimisticRoute.canonicalUrl + url.hash;
            const newRenderedSearch = optimisticRoute.renderedSearch;
            return navigateUsingPrefetchedRouteTree(now, url, currentUrl, nextUrl, isSamePageNavigation, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, newCanonicalUrl, newRenderedSearch, freshnessPolicy, shouldScroll);
        }
    }
    // There's no matching prefetch for this route in the cache.
    let collectedDebugInfo = accumulation.collectedDebugInfo ?? [];
    if (accumulation.collectedDebugInfo === undefined) {
        collectedDebugInfo = accumulation.collectedDebugInfo = [];
    }
    return {
        tag: _types.NavigationResultTag.Async,
        data: navigateDynamicallyWithNoPrefetch(now, url, currentUrl, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, shouldScroll, collectedDebugInfo)
    };
}
function navigateToSeededRoute(now, url, canonicalUrl, navigationSeed, currentUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, nextUrl, shouldScroll) {
    // A version of navigate() that accepts the target route tree as an argument
    // rather than reading it from the prefetch cache.
    const accumulation = {
        scrollableSegments: null,
        separateRefreshUrls: null
    };
    const isSamePageNavigation = url.href === currentUrl.href;
    const task = (0, _pprnavigations.startPPRNavigation)(now, currentUrl, currentCacheNode, currentFlightRouterState, navigationSeed.tree, freshnessPolicy, navigationSeed.data, navigationSeed.head, null, null, false, isSamePageNavigation, accumulation);
    if (task !== null) {
        (0, _pprnavigations.spawnDynamicRequests)(task, url, nextUrl, freshnessPolicy, accumulation);
        return navigationTaskToResult(task, canonicalUrl, navigationSeed.renderedSearch, accumulation.scrollableSegments, shouldScroll, url.hash);
    }
    // Could not perform a SPA navigation. Revert to a full-page (MPA) navigation.
    return {
        tag: _types.NavigationResultTag.MPA,
        data: canonicalUrl
    };
}
function navigateUsingPrefetchedRouteTree(now, url, currentUrl, nextUrl, isSamePageNavigation, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, canonicalUrl, renderedSearch, freshnessPolicy, shouldScroll) {
    // Recursively construct a prefetch tree by reading from the Segment Cache. To
    // maintain compatibility, we output the same data structures as the old
    // prefetching implementation: FlightRouterState and CacheNodeSeedData.
    // TODO: Eventually updateCacheNodeOnNavigation (or the equivalent) should
    // read from the Segment Cache directly. It's only structured this way for now
    // so we can share code with the old prefetching implementation.
    const accumulation = {
        scrollableSegments: null,
        separateRefreshUrls: null
    };
    const seedData = null;
    const seedHead = null;
    const task = (0, _pprnavigations.startPPRNavigation)(now, currentUrl, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, freshnessPolicy, seedData, seedHead, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, accumulation);
    if (task !== null) {
        (0, _pprnavigations.spawnDynamicRequests)(task, url, nextUrl, freshnessPolicy, accumulation);
        return navigationTaskToResult(task, canonicalUrl, renderedSearch, accumulation.scrollableSegments, shouldScroll, url.hash);
    }
    // Could not perform a SPA navigation. Revert to a full-page (MPA) navigation.
    return {
        tag: _types.NavigationResultTag.MPA,
        data: canonicalUrl
    };
}
function navigationTaskToResult(task, canonicalUrl, renderedSearch, scrollableSegments, shouldScroll, hash) {
    return {
        tag: _types.NavigationResultTag.Success,
        data: {
            flightRouterState: task.route,
            cacheNode: task.node,
            canonicalUrl,
            renderedSearch,
            scrollableSegments,
            shouldScroll,
            hash
        }
    };
}
function readRenderSnapshotFromCache(now, route, tree) {
    let childRouterStates = {};
    let childSeedDatas = {};
    const slots = tree.slots;
    if (slots !== null) {
        for(const parallelRouteKey in slots){
            const childTree = slots[parallelRouteKey];
            const childResult = readRenderSnapshotFromCache(now, route, childTree);
            childRouterStates[parallelRouteKey] = childResult.flightRouterState;
            childSeedDatas[parallelRouteKey] = childResult.seedData;
        }
    }
    let rsc = null;
    let loading = null;
    let isPartial = true;
    const segmentEntry = (0, _cache.readSegmentCacheEntry)(now, tree.varyPath);
    if (segmentEntry !== null) {
        switch(segmentEntry.status){
            case _cache.EntryStatus.Fulfilled:
                {
                    // Happy path: a cache hit
                    rsc = segmentEntry.rsc;
                    loading = segmentEntry.loading;
                    isPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Pending:
                {
                    // We haven't received data for this segment yet, but there's already
                    // an in-progress request. Since it's extremely likely to arrive
                    // before the dynamic data response, we might as well use it.
                    const promiseForFulfilledEntry = (0, _cache.waitForSegmentCacheEntry)(segmentEntry);
                    rsc = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.rsc : null);
                    loading = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.loading : null);
                    // Because the request is still pending, we typically don't know yet
                    // whether the response will be partial. We shouldn't skip this segment
                    // during the dynamic navigation request. Otherwise, we might need to
                    // do yet another request to fill in the remaining data, creating
                    // a waterfall.
                    //
                    // The one exception is if this segment is being fetched with via
                    // prefetch={true} (i.e. the "force stale" or "full" strategy). If so,
                    // we can assume the response will be full. This field is set to `false`
                    // for such segments.
                    isPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Empty:
            case _cache.EntryStatus.Rejected:
                break;
            default:
                segmentEntry;
        }
    }
    // The navigation implementation expects the search params to be
    // included in the segment. However, the Segment Cache tracks search
    // params separately from the rest of the segment key. So we need to
    // add them back here.
    //
    // See corresponding comment in convertFlightRouterStateToTree.
    //
    // TODO: What we should do instead is update the navigation diffing
    // logic to compare search params explicitly. This is a temporary
    // solution until more of the Segment Cache implementation has settled.
    const segment = (0, _segment.addSearchParamsIfPageSegment)(tree.segment, Object.fromEntries(new URLSearchParams(route.renderedSearch)));
    // We don't need this information in a render snapshot, so this can just be a placeholder.
    const hasRuntimePrefetch = false;
    return {
        flightRouterState: [
            segment,
            childRouterStates,
            null,
            null,
            tree.isRootLayout
        ],
        seedData: [
            rsc,
            childSeedDatas,
            loading,
            isPartial,
            hasRuntimePrefetch
        ]
    };
}
function readHeadSnapshotFromCache(now, route) {
    // Same as readRenderSnapshotFromCache, but for the head
    let rsc = null;
    let isPartial = true;
    const segmentEntry = (0, _cache.readSegmentCacheEntry)(now, route.metadata.varyPath);
    if (segmentEntry !== null) {
        switch(segmentEntry.status){
            case _cache.EntryStatus.Fulfilled:
                {
                    rsc = segmentEntry.rsc;
                    isPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Pending:
                {
                    const promiseForFulfilledEntry = (0, _cache.waitForSegmentCacheEntry)(segmentEntry);
                    rsc = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.rsc : null);
                    isPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Empty:
            case _cache.EntryStatus.Rejected:
                break;
            default:
                segmentEntry;
        }
    }
    return {
        rsc,
        isPartial
    };
}
// Used to request all the dynamic data for a route, rather than just a subset,
// e.g. during a refresh or a revalidation. Typically this gets constructed
// during the normal flow when diffing the route tree, but for an unprefetched
// navigation, where we don't know the structure of the target route, we use
// this instead.
const DynamicRequestTreeForEntireRoute = [
    '',
    {},
    null,
    'refetch'
];
async function navigateDynamicallyWithNoPrefetch(now, url, currentUrl, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, shouldScroll, collectedDebugInfo) {
    // Runs when a navigation happens but there's no cached prefetch we can use.
    // Don't bother to wait for a prefetch response; go straight to a full
    // navigation that contains both static and dynamic data in a single stream.
    // (This is unlike the old navigation implementation, which instead blocks
    // the dynamic request until a prefetch request is received.)
    //
    // To avoid duplication of logic, we're going to pretend that the tree
    // returned by the dynamic request is, in fact, a prefetch tree. Then we can
    // use the same server response to write the actual data into the CacheNode
    // tree. So it's the same flow as the "happy path" (prefetch, then
    // navigation), except we use a single server response for both stages.
    let dynamicRequestTree;
    switch(freshnessPolicy){
        case _pprnavigations.FreshnessPolicy.Default:
        case _pprnavigations.FreshnessPolicy.HistoryTraversal:
            dynamicRequestTree = currentFlightRouterState;
            break;
        case _pprnavigations.FreshnessPolicy.Hydration:
        case _pprnavigations.FreshnessPolicy.RefreshAll:
        case _pprnavigations.FreshnessPolicy.HMRRefresh:
            dynamicRequestTree = DynamicRequestTreeForEntireRoute;
            break;
        default:
            freshnessPolicy;
            dynamicRequestTree = currentFlightRouterState;
            break;
    }
    const promiseForDynamicServerResponse = (0, _fetchserverresponse.fetchServerResponse)(url, {
        flightRouterState: dynamicRequestTree,
        nextUrl
    });
    const result = await promiseForDynamicServerResponse;
    if (typeof result === 'string') {
        // This is an MPA navigation.
        const newUrl = result;
        return {
            tag: _types.NavigationResultTag.MPA,
            data: newUrl
        };
    }
    const { flightData, canonicalUrl, renderedSearch, debugInfo: debugInfoFromResponse } = result;
    if (debugInfoFromResponse !== null) {
        collectedDebugInfo.push(...debugInfoFromResponse);
    }
    // Since the response format of dynamic requests and prefetches is slightly
    // different, we'll need to massage the data a bit. Create FlightRouterState
    // tree that simulates what we'd receive as the result of a prefetch.
    const navigationSeed = convertServerPatchToFullTree(currentFlightRouterState, flightData, renderedSearch);
    return navigateToSeededRoute(now, url, (0, _createhreffromurl.createHrefFromUrl)(canonicalUrl), navigationSeed, currentUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, nextUrl, shouldScroll);
}
function convertServerPatchToFullTree(currentTree, flightData, renderedSearch) {
    // During a client navigation or prefetch, the server sends back only a patch
    // for the parts of the tree that have changed.
    //
    // This applies the patch to the base tree to create a full representation of
    // the resulting tree.
    //
    // The return type includes a full FlightRouterState tree and a full
    // CacheNodeSeedData tree. (Conceptually these are the same tree, and should
    // eventually be unified, but there's still lots of existing code that
    // operates on FlightRouterState trees alone without the CacheNodeSeedData.)
    //
    // TODO: This similar to what apply-router-state-patch-to-tree does. It
    // will eventually fully replace it. We should get rid of all the remaining
    // places where we iterate over the server patch format. This should also
    // eventually replace normalizeFlightData.
    let baseTree = currentTree;
    let baseData = null;
    let head = null;
    for (const { segmentPath, tree: treePatch, seedData: dataPatch, head: headPatch } of flightData){
        const result = convertServerPatchToFullTreeImpl(baseTree, baseData, treePatch, dataPatch, segmentPath, 0);
        baseTree = result.tree;
        baseData = result.data;
        // This is the same for all patches per response, so just pick an
        // arbitrary one
        head = headPatch;
    }
    return {
        tree: baseTree,
        data: baseData,
        renderedSearch,
        head
    };
}
function convertServerPatchToFullTreeImpl(baseRouterState, baseData, treePatch, dataPatch, segmentPath, index) {
    if (index === segmentPath.length) {
        // We reached the part of the tree that we need to patch.
        return {
            tree: treePatch,
            data: dataPatch
        };
    }
    // segmentPath represents the parent path of subtree. It's a repeating
    // pattern of parallel route key and segment:
    //
    //   [string, Segment, string, Segment, string, Segment, ...]
    //
    // This path tells us which part of the base tree to apply the tree patch.
    //
    // NOTE: We receive the FlightRouterState patch in the same request as the
    // seed data patch. Therefore we don't need to worry about diffing the segment
    // values; we can assume the server sent us a correct result.
    const updatedParallelRouteKey = segmentPath[index];
    // const segment: Segment = segmentPath[index + 1] <-- Not used, see note above
    const baseTreeChildren = baseRouterState[1];
    const baseSeedDataChildren = baseData !== null ? baseData[1] : null;
    const newTreeChildren = {};
    const newSeedDataChildren = {};
    for(const parallelRouteKey in baseTreeChildren){
        const childBaseRouterState = baseTreeChildren[parallelRouteKey];
        const childBaseSeedData = baseSeedDataChildren !== null ? baseSeedDataChildren[parallelRouteKey] ?? null : null;
        if (parallelRouteKey === updatedParallelRouteKey) {
            const result = convertServerPatchToFullTreeImpl(childBaseRouterState, childBaseSeedData, treePatch, dataPatch, segmentPath, // the end of the segment path.
            index + 2);
            newTreeChildren[parallelRouteKey] = result.tree;
            newSeedDataChildren[parallelRouteKey] = result.data;
        } else {
            // This child is not being patched. Copy it over as-is.
            newTreeChildren[parallelRouteKey] = childBaseRouterState;
            newSeedDataChildren[parallelRouteKey] = childBaseSeedData;
        }
    }
    let clonedTree;
    let clonedSeedData;
    // Clone all the fields except the children.
    // Clone the FlightRouterState tree. Based on equivalent logic in
    // apply-router-state-patch-to-tree, but should confirm whether we need to
    // copy all of these fields. Not sure the server ever sends, e.g. the
    // refetch marker.
    clonedTree = [
        baseRouterState[0],
        newTreeChildren
    ];
    if (2 in baseRouterState) {
        clonedTree[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clonedTree[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clonedTree[4] = baseRouterState[4];
    }
    // Clone the CacheNodeSeedData tree.
    const isEmptySeedDataPartial = true;
    clonedSeedData = [
        null,
        newSeedDataChildren,
        null,
        isEmptySeedDataPartial,
        false
    ];
    return {
        tree: clonedTree,
        data: clonedSeedData
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DYNAMIC_STALETIME_MS: null,
    STATIC_STALETIME_MS: null,
    generateSegmentsFromPatch: null,
    handleExternalUrl: null,
    handleNavigationResult: null,
    navigateReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DYNAMIC_STALETIME_MS: function() {
        return DYNAMIC_STALETIME_MS;
    },
    STATIC_STALETIME_MS: function() {
        return STATIC_STALETIME_MS;
    },
    generateSegmentsFromPatch: function() {
        return generateSegmentsFromPatch;
    },
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    handleNavigationResult: function() {
        return handleNavigationResult;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _navigation = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const DYNAMIC_STALETIME_MS = Number(("TURBOPACK compile-time value", "0")) * 1000;
const STATIC_STALETIME_MS = (0, _cache.getStaleTimeMs)(Number(("TURBOPACK compile-time value", "300")));
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            // If the segment is empty, it means we are at the root of the tree
            if (segment === '') {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function handleNavigationResult(url, state, mutable, pendingPush, result) {
    switch(result.tag){
        case _types.NavigationResultTag.MPA:
            {
                // Perform an MPA navigation.
                const newUrl = result.data;
                return handleExternalUrl(state, mutable, newUrl, pendingPush);
            }
        case _types.NavigationResultTag.Success:
            {
                // Received a new result.
                mutable.cache = result.data.cacheNode;
                mutable.patchedTree = result.data.flightRouterState;
                mutable.renderedSearch = result.data.renderedSearch;
                mutable.canonicalUrl = result.data.canonicalUrl;
                // TODO: During a refresh, we don't set the `scrollableSegments`. There's
                // some confusing and subtle logic in `handleMutable` that decides what
                // to do when `shouldScroll` is set but `scrollableSegments` is not. I'm
                // not convinced it's totally coherent but the tests assert on this
                // particular behavior so I've ported the logic as-is from the previous
                // router implementation, for now.
                mutable.scrollableSegments = result.data.scrollableSegments ?? undefined;
                mutable.shouldScroll = result.data.shouldScroll;
                mutable.hashFragment = result.data.hash;
                // Check if the only thing that changed was the hash fragment.
                const oldUrl = new URL(state.canonicalUrl, url);
                const onlyHashChange = // navigations are always same-origin.
                url.pathname === oldUrl.pathname && url.search === oldUrl.search && url.hash !== oldUrl.hash;
                if (onlyHashChange) {
                    // The only updated part of the URL is the hash.
                    mutable.onlyHashChange = true;
                    mutable.shouldScroll = result.data.shouldScroll;
                    mutable.hashFragment = url.hash;
                    // Setting this to an empty array triggers a scroll for all new and
                    // updated segments. See `ScrollAndFocusHandler` for more details.
                    mutable.scrollableSegments = [];
                }
                return (0, _handlemutable.handleMutable)(state, mutable);
            }
        case _types.NavigationResultTag.Async:
            {
                return result.data.then((asyncResult)=>handleNavigationResult(url, state, mutable, pendingPush, asyncResult), // TODO: This matches the current behavior but we need to do something
                // better here if the network fails.
                ()=>{
                    return state;
                });
            }
        default:
            {
                result;
                return state;
            }
    }
}
function navigateReducer(state, action) {
    const { url, isExternalUrl, navigateType, shouldScroll } = action;
    const mutable = {};
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === 'push';
    mutable.preserveCustomHistoryState = false;
    mutable.pendingPush = pendingPush;
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    // Handles case where `<meta http-equiv="refresh">` tag is present,
    // which will trigger an MPA navigation.
    if (document.getElementById('__next-page-redirect')) {
        return handleExternalUrl(state, mutable, href, pendingPush);
    }
    // Temporary glue code between the router reducer and the new navigation
    // implementation. Eventually we'll rewrite the router reducer to a
    // state machine.
    const currentUrl = new URL(state.canonicalUrl, location.origin);
    const result = (0, _navigation.navigate)(url, currentUrl, state.cache, state.tree, state.nextUrl, _pprnavigations.FreshnessPolicy.Default, shouldScroll, mutable);
    return handleNavigationResult(url, state, mutable, pendingPush, result);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    FreshnessPolicy: null,
    createInitialCacheNodeForHydration: null,
    isDeferredRsc: null,
    spawnDynamicRequests: null,
    startPPRNavigation: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FreshnessPolicy: function() {
        return FreshnessPolicy;
    },
    createInitialCacheNodeForHydration: function() {
        return createInitialCacheNodeForHydration;
    },
    isDeferredRsc: function() {
        return isDeferredRsc;
    },
    spawnDynamicRequests: function() {
        return spawnDynamicRequests;
    },
    startPPRNavigation: function() {
        return startPPRNavigation;
    }
});
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _fetchserverresponse = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _navigation = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)");
var FreshnessPolicy = /*#__PURE__*/ function(FreshnessPolicy) {
    FreshnessPolicy[FreshnessPolicy["Default"] = 0] = "Default";
    FreshnessPolicy[FreshnessPolicy["Hydration"] = 1] = "Hydration";
    FreshnessPolicy[FreshnessPolicy["HistoryTraversal"] = 2] = "HistoryTraversal";
    FreshnessPolicy[FreshnessPolicy["RefreshAll"] = 3] = "RefreshAll";
    FreshnessPolicy[FreshnessPolicy["HMRRefresh"] = 4] = "HMRRefresh";
    return FreshnessPolicy;
}({});
const noop = ()=>{};
function createInitialCacheNodeForHydration(navigatedAt, initialTree, seedData, seedHead) {
    // Create the initial cache node tree, using the data embedded into the
    // HTML document.
    const accumulation = {
        scrollableSegments: null,
        separateRefreshUrls: null
    };
    const task = createCacheNodeOnNavigation(navigatedAt, initialTree, undefined, 1, seedData, seedHead, null, null, false, null, null, false, accumulation);
    // NOTE: We intentionally don't check if any data needs to be fetched from the
    // server. We assume the initial hydration payload is sufficient to render
    // the page.
    //
    // The completeness of the initial data is an important property that we rely
    // on as a last-ditch mechanism for recovering the app; we must always be able
    // to reload a fresh HTML document to get to a consistent state.
    //
    // In the future, there may be cases where the server intentionally sends
    // partial data and expects the client to fill in the rest, in which case this
    // logic may change. (There already is a similar case where the server sends
    // _no_ hydration data in the HTML document at all, and the client fetches it
    // separately, but that's different because we still end up hydrating with a
    // complete tree.)
    return task.node;
}
function startPPRNavigation(navigatedAt, oldUrl, oldCacheNode, oldRouterState, newRouterState, freshness, seedData, seedHead, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, accumulation) {
    const didFindRootLayout = false;
    const parentNeedsDynamicRequest = false;
    const parentRefreshUrl = null;
    return updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNode !== null ? oldCacheNode : undefined, oldRouterState, newRouterState, freshness, didFindRootLayout, seedData, seedHead, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, null, null, parentNeedsDynamicRequest, parentRefreshUrl, accumulation);
}
function updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNode, oldRouterState, newRouterState, freshness, didFindRootLayout, seedData, seedHead, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, parentSegmentPath, parentParallelRouteKey, parentNeedsDynamicRequest, parentRefreshUrl, accumulation) {
    // Check if this segment matches the one in the previous route.
    const oldSegment = oldRouterState[0];
    const newSegment = newRouterState[0];
    if (!(0, _matchsegments.matchSegment)(newSegment, oldSegment)) {
        // This segment does not match the previous route. We're now entering the
        // new part of the target route. Switch to the "create" path.
        if (// highest-level layout in a route tree is referred to as the "root"
        // layout.) This could mean that we're navigating between two different
        // root layouts. When this happens, we perform a full-page (MPA-style)
        // navigation.
        //
        // However, the algorithm for deciding where to start rendering a route
        // (i.e. the one performed in order to reach this function) is stricter
        // than the one used to detect a change in the root layout. So just
        // because we're re-rendering a segment outside of the root layout does
        // not mean we should trigger a full-page navigation.
        //
        // Specifically, we handle dynamic parameters differently: two segments
        // are considered the same even if their parameter values are different.
        //
        // Refer to isNavigatingToNewRootLayout for details.
        //
        // Note that we only have to perform this extra traversal if we didn't
        // already discover a root layout in the part of the tree that is
        // unchanged. We also only need to compare the subtree that is not
        // shared. In the common case, this branch is skipped completely.
        !didFindRootLayout && (0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(oldRouterState, newRouterState) || // The global Not Found route (app/global-not-found.tsx) is a special
        // case, because it acts like a root layout, but in the router tree, it
        // is rendered in the same position as app/layout.tsx.
        //
        // Any navigation to the global Not Found route should trigger a
        // full-page navigation.
        //
        // TODO: We should probably model this by changing the key of the root
        // segment when this happens. Then the root layout check would work
        // as expected, without a special case.
        newSegment === _segment.NOT_FOUND_SEGMENT_KEY) {
            return null;
        }
        if (parentSegmentPath === null || parentParallelRouteKey === null) {
            // The root should never mismatch. If it does, it suggests an internal
            // Next.js error, or a malformed server response. Trigger a full-
            // page navigation.
            return null;
        }
        return createCacheNodeOnNavigation(navigatedAt, newRouterState, oldCacheNode, freshness, seedData, seedHead, prefetchData, prefetchHead, isPrefetchHeadPartial, parentSegmentPath, parentParallelRouteKey, parentNeedsDynamicRequest, accumulation);
    }
    // TODO: The segment paths are tracked so that LayoutRouter knows which
    // segments to scroll to after a navigation. But we should just mark this
    // information on the CacheNode directly. It used to be necessary to do this
    // separately because CacheNodes were created lazily during render, not when
    // rather than when creating the route tree.
    const segmentPath = parentParallelRouteKey !== null && parentSegmentPath !== null ? parentSegmentPath.concat([
        parentParallelRouteKey,
        newSegment
    ]) : [];
    const newRouterStateChildren = newRouterState[1];
    const oldRouterStateChildren = oldRouterState[1];
    const seedDataChildren = seedData !== null ? seedData[1] : null;
    const prefetchDataChildren = prefetchData !== null ? prefetchData[1] : null;
    // We're currently traversing the part of the tree that was also part of
    // the previous route. If we discover a root layout, then we don't need to
    // trigger an MPA navigation.
    const isRootLayout = newRouterState[4] === true;
    const childDidFindRootLayout = didFindRootLayout || isRootLayout;
    const oldParallelRoutes = oldCacheNode !== undefined ? oldCacheNode.parallelRoutes : undefined;
    // Clone the current set of segment children, even if they aren't active in
    // the new tree.
    // TODO: We currently retain all the inactive segments indefinitely, until
    // there's an explicit refresh, or a parent layout is lazily refreshed. We
    // rely on this for popstate navigations, which update the Router State Tree
    // but do not eagerly perform a data fetch, because they expect the segment
    // data to already be in the Cache Node tree. For highly static sites that
    // are mostly read-only, this may happen only rarely, causing memory to
    // leak. We should figure out a better model for the lifetime of inactive
    // segments, so we can maintain instant back/forward navigations without
    // leaking memory indefinitely.
    let shouldDropSiblingCaches = false;
    let shouldRefreshDynamicData = false;
    switch(freshness){
        case 0:
        case 2:
        case 1:
            // We should never drop dynamic data in shared layouts, except during
            // a refresh.
            shouldDropSiblingCaches = false;
            shouldRefreshDynamicData = false;
            break;
        case 3:
        case 4:
            shouldDropSiblingCaches = true;
            shouldRefreshDynamicData = true;
            break;
        default:
            freshness;
            break;
    }
    const newParallelRoutes = new Map(shouldDropSiblingCaches ? undefined : oldParallelRoutes);
    // TODO: We're not consistent about how we do this check. Some places
    // check if the segment starts with PAGE_SEGMENT_KEY, but most seem to
    // check if there any any children, which is why I'm doing it here. We
    // should probably encode an empty children set as `null` though. Either
    // way, we should update all the checks to be consistent.
    const isLeafSegment = Object.keys(newRouterStateChildren).length === 0;
    // Get the data for this segment. Since it was part of the previous route,
    // usually we just clone the data from the old CacheNode. However, during a
    // refresh or a revalidation, there won't be any existing CacheNode. So we
    // may need to consult the prefetch cache, like we would for a new segment.
    let newCacheNode;
    let needsDynamicRequest;
    if (oldCacheNode !== undefined && !shouldRefreshDynamicData && // During a same-page navigation, we always refetch the page segments
    !(isLeafSegment && isSamePageNavigation)) {
        // Reuse the existing CacheNode
        const dropPrefetchRsc = false;
        newCacheNode = reuseDynamicCacheNode(dropPrefetchRsc, oldCacheNode, newParallelRoutes);
        needsDynamicRequest = false;
    } else if (seedData !== null && seedData[0] !== null) {
        // If this navigation was the result of an action, then check if the
        // server sent back data in the action response. We should favor using
        // that, rather than performing a separate request. This is both better
        // for performance and it's more likely to be consistent with any
        // writes that were just performed by the action, compared to a
        // separate request.
        const seedRsc = seedData[0];
        const seedLoading = seedData[2];
        const isSeedRscPartial = false;
        const isSeedHeadPartial = seedHead === null;
        newCacheNode = readCacheNodeFromSeedData(seedRsc, seedLoading, isSeedRscPartial, seedHead, isSeedHeadPartial, isLeafSegment, newParallelRoutes, navigatedAt);
        needsDynamicRequest = isLeafSegment && isSeedHeadPartial;
    } else if (prefetchData !== null) {
        // Consult the prefetch cache.
        const prefetchRsc = prefetchData[0];
        const prefetchLoading = prefetchData[2];
        const isPrefetchRSCPartial = prefetchData[3];
        newCacheNode = readCacheNodeFromSeedData(prefetchRsc, prefetchLoading, isPrefetchRSCPartial, prefetchHead, isPrefetchHeadPartial, isLeafSegment, newParallelRoutes, navigatedAt);
        needsDynamicRequest = isPrefetchRSCPartial || isLeafSegment && isPrefetchHeadPartial;
    } else {
        // Spawn a request to fetch new data from the server.
        newCacheNode = spawnNewCacheNode(newParallelRoutes, isLeafSegment, navigatedAt, freshness);
        needsDynamicRequest = true;
    }
    // During a refresh navigation, there's a special case that happens when
    // entering a "default" slot. The default slot may not be part of the
    // current route; it may have been reused from an older route. If so,
    // we need to fetch its data from the old route's URL rather than current
    // route's URL. Keep track of this as we traverse the tree.
    const href = newRouterState[2];
    const refreshUrl = typeof href === 'string' && newRouterState[3] === 'refresh' ? href : parentRefreshUrl;
    // If this segment itself needs to fetch new data from the server, then by
    // definition it is being refreshed. Track its refresh URL so we know which
    // URL to request the data from.
    if (needsDynamicRequest && refreshUrl !== null) {
        accumulateRefreshUrl(accumulation, refreshUrl);
    }
    // As we diff the trees, we may sometimes modify (copy-on-write, not mutate)
    // the Route Tree that was returned by the server — for example, in the case
    // of default parallel routes, we preserve the currently active segment. To
    // avoid mutating the original tree, we clone the router state children along
    // the return path.
    let patchedRouterStateChildren = {};
    let taskChildren = null;
    // Most navigations require a request to fetch additional data from the
    // server, either because the data was not already prefetched, or because the
    // target route contains dynamic data that cannot be prefetched.
    //
    // However, if the target route is fully static, and it's already completely
    // loaded into the segment cache, then we can skip the server request.
    //
    // This starts off as `false`, and is set to `true` if any of the child
    // routes requires a dynamic request.
    let childNeedsDynamicRequest = false;
    // As we traverse the children, we'll construct a FlightRouterState that can
    // be sent to the server to request the dynamic data. If it turns out that
    // nothing in the subtree is dynamic (i.e. childNeedsDynamicRequest is false
    // at the end), then this will be discarded.
    // TODO: We can probably optimize the format of this data structure to only
    // include paths that are dynamic. Instead of reusing the
    // FlightRouterState type.
    let dynamicRequestTreeChildren = {};
    for(let parallelRouteKey in newRouterStateChildren){
        let newRouterStateChild = newRouterStateChildren[parallelRouteKey];
        const oldRouterStateChild = oldRouterStateChildren[parallelRouteKey];
        if (oldRouterStateChild === undefined) {
            // This should never happen, but if it does, it suggests a malformed
            // server response. Trigger a full-page navigation.
            return null;
        }
        const oldSegmentMapChild = oldParallelRoutes !== undefined ? oldParallelRoutes.get(parallelRouteKey) : undefined;
        let seedDataChild = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
        let prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
        let newSegmentChild = newRouterStateChild[0];
        let seedHeadChild = seedHead;
        let prefetchHeadChild = prefetchHead;
        let isPrefetchHeadPartialChild = isPrefetchHeadPartial;
        if (// was stashed in the history entry as-is.
        freshness !== 2 && newSegmentChild === _segment.DEFAULT_SEGMENT_KEY) {
            // This is a "default" segment. These are never sent by the server during
            // a soft navigation; instead, the client reuses whatever segment was
            // already active in that slot on the previous route.
            newRouterStateChild = reuseActiveSegmentInDefaultSlot(oldUrl, oldRouterStateChild);
            newSegmentChild = newRouterStateChild[0];
            // Since we're switching to a different route tree, these are no
            // longer valid, because they correspond to the outer tree.
            seedDataChild = null;
            seedHeadChild = null;
            prefetchDataChild = null;
            prefetchHeadChild = null;
            isPrefetchHeadPartialChild = false;
        }
        const newSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(newSegmentChild);
        const oldCacheNodeChild = oldSegmentMapChild !== undefined ? oldSegmentMapChild.get(newSegmentKeyChild) : undefined;
        const taskChild = updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNodeChild, oldRouterStateChild, newRouterStateChild, freshness, childDidFindRootLayout, seedDataChild ?? null, seedHeadChild, prefetchDataChild ?? null, prefetchHeadChild, isPrefetchHeadPartialChild, isSamePageNavigation, segmentPath, parallelRouteKey, parentNeedsDynamicRequest || needsDynamicRequest, refreshUrl, accumulation);
        if (taskChild === null) {
            // One of the child tasks discovered a change to the root layout.
            // Immediately unwind from this recursive traversal. This will trigger a
            // full-page navigation.
            return null;
        }
        // Recursively propagate up the child tasks.
        if (taskChildren === null) {
            taskChildren = new Map();
        }
        taskChildren.set(parallelRouteKey, taskChild);
        const newCacheNodeChild = taskChild.node;
        if (newCacheNodeChild !== null) {
            const newSegmentMapChild = new Map(shouldDropSiblingCaches ? undefined : oldSegmentMapChild);
            newSegmentMapChild.set(newSegmentKeyChild, newCacheNodeChild);
            newParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
        }
        // The child tree's route state may be different from the prefetched
        // route sent by the server. We need to clone it as we traverse back up
        // the tree.
        const taskChildRoute = taskChild.route;
        patchedRouterStateChildren[parallelRouteKey] = taskChildRoute;
        const dynamicRequestTreeChild = taskChild.dynamicRequestTree;
        if (dynamicRequestTreeChild !== null) {
            // Something in the child tree is dynamic.
            childNeedsDynamicRequest = true;
            dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
        } else {
            dynamicRequestTreeChildren[parallelRouteKey] = taskChildRoute;
        }
    }
    return {
        status: needsDynamicRequest ? 0 : 1,
        route: patchRouterStateWithNewChildren(newRouterState, patchedRouterStateChildren),
        node: newCacheNode,
        dynamicRequestTree: createDynamicRequestTree(newRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest),
        refreshUrl,
        children: taskChildren
    };
}
function createCacheNodeOnNavigation(navigatedAt, newRouterState, oldCacheNode, freshness, seedData, seedHead, prefetchData, prefetchHead, isPrefetchHeadPartial, parentSegmentPath, parentParallelRouteKey, parentNeedsDynamicRequest, accumulation) {
    // Same traversal as updateCacheNodeNavigation, but simpler. We switch to this
    // path once we reach the part of the tree that was not in the previous route.
    // We don't need to diff against the old tree, we just need to create a new
    // one. We also don't need to worry about any refresh-related logic.
    //
    // For the most part, this is a subset of updateCacheNodeOnNavigation, so any
    // change that happens in this function likely needs to be applied to that
    // one, too. However there are some places where the behavior intentionally
    // diverges, which is why we keep them separate.
    const newSegment = newRouterState[0];
    const segmentPath = parentParallelRouteKey !== null && parentSegmentPath !== null ? parentSegmentPath.concat([
        parentParallelRouteKey,
        newSegment
    ]) : [];
    const newRouterStateChildren = newRouterState[1];
    const prefetchDataChildren = prefetchData !== null ? prefetchData[1] : null;
    const seedDataChildren = seedData !== null ? seedData[1] : null;
    const oldParallelRoutes = oldCacheNode !== undefined ? oldCacheNode.parallelRoutes : undefined;
    let shouldDropSiblingCaches = false;
    let shouldRefreshDynamicData = false;
    let dropPrefetchRsc = false;
    switch(freshness){
        case 0:
            // We should never drop dynamic data in sibling caches except during
            // a refresh.
            shouldDropSiblingCaches = false;
            // Only reuse the dynamic data if experimental.staleTimes.dynamic config
            // is set, and the data is not stale. (This is not a recommended API with
            // Cache Components, but it's supported for backwards compatibility. Use
            // cacheLife instead.)
            //
            // DYNAMIC_STALETIME_MS defaults to 0, but it can be increased.
            shouldRefreshDynamicData = oldCacheNode === undefined || navigatedAt - oldCacheNode.navigatedAt >= _navigatereducer.DYNAMIC_STALETIME_MS;
            dropPrefetchRsc = false;
            break;
        case 1:
            // During hydration, we assume the data sent by the server is both
            // consistent and complete.
            shouldRefreshDynamicData = false;
            shouldDropSiblingCaches = false;
            dropPrefetchRsc = false;
            break;
        case 2:
            // During back/forward navigations, we reuse the dynamic data regardless
            // of how stale it may be.
            shouldRefreshDynamicData = false;
            shouldRefreshDynamicData = false;
            // Only show prefetched data if the dynamic data is still pending. This
            // avoids a flash back to the prefetch state in a case where it's highly
            // likely to have already streamed in.
            //
            // Tehnically, what we're actually checking is whether the dynamic network
            // response was received. But since it's a streaming response, this does
            // not mean that all the dynamic data has fully streamed in. It just means
            // that _some_ of the dynamic data was received. But as a heuristic, we
            // assume that the rest dynamic data will stream in quickly, so it's still
            // better to skip the prefetch state.
            if (oldCacheNode !== undefined) {
                const oldRsc = oldCacheNode.rsc;
                const oldRscDidResolve = !isDeferredRsc(oldRsc) || oldRsc.status !== 'pending';
                dropPrefetchRsc = oldRscDidResolve;
            } else {
                dropPrefetchRsc = false;
            }
            break;
        case 3:
        case 4:
            // Drop all dynamic data.
            shouldRefreshDynamicData = true;
            shouldDropSiblingCaches = true;
            dropPrefetchRsc = false;
            break;
        default:
            freshness;
            break;
    }
    const newParallelRoutes = new Map(shouldDropSiblingCaches ? undefined : oldParallelRoutes);
    const isLeafSegment = Object.keys(newRouterStateChildren).length === 0;
    if (isLeafSegment) {
        // The segment path of every leaf segment (i.e. page) is collected into
        // a result array. This is used by the LayoutRouter to scroll to ensure that
        // new pages are visible after a navigation.
        //
        // This only happens for new pages, not for refreshed pages.
        //
        // TODO: We should use a string to represent the segment path instead of
        // an array. We already use a string representation for the path when
        // accessing the Segment Cache, so we can use the same one.
        if (accumulation.scrollableSegments === null) {
            accumulation.scrollableSegments = [];
        }
        accumulation.scrollableSegments.push(segmentPath);
    }
    let newCacheNode;
    let needsDynamicRequest;
    if (!shouldRefreshDynamicData && oldCacheNode !== undefined) {
        // Reuse the existing CacheNode
        newCacheNode = reuseDynamicCacheNode(dropPrefetchRsc, oldCacheNode, newParallelRoutes);
        needsDynamicRequest = false;
    } else if (seedData !== null && seedData[0] !== null) {
        // If this navigation was the result of an action, then check if the
        // server sent back data in the action response. We should favor using
        // that, rather than performing a separate request. This is both better
        // for performance and it's more likely to be consistent with any
        // writes that were just performed by the action, compared to a
        // separate request.
        const seedRsc = seedData[0];
        const seedLoading = seedData[2];
        const isSeedRscPartial = false;
        const isSeedHeadPartial = seedHead === null && freshness !== 1;
        newCacheNode = readCacheNodeFromSeedData(seedRsc, seedLoading, isSeedRscPartial, seedHead, isSeedHeadPartial, isLeafSegment, newParallelRoutes, navigatedAt);
        needsDynamicRequest = isLeafSegment && isSeedHeadPartial;
    } else if (freshness === 1 && isLeafSegment && seedHead !== null) {
        // This is another weird case related to "not found" pages and hydration.
        // There will be a head sent by the server, but no page seed data.
        // TODO: We really should get rid of all these "not found" specific quirks
        // and make sure the tree is always consistent.
        const seedRsc = null;
        const seedLoading = null;
        const isSeedRscPartial = false;
        const isSeedHeadPartial = false;
        newCacheNode = readCacheNodeFromSeedData(seedRsc, seedLoading, isSeedRscPartial, seedHead, isSeedHeadPartial, isLeafSegment, newParallelRoutes, navigatedAt);
        needsDynamicRequest = false;
    } else if (freshness !== 1 && prefetchData !== null) {
        // Consult the prefetch cache.
        const prefetchRsc = prefetchData[0];
        const prefetchLoading = prefetchData[2];
        const isPrefetchRSCPartial = prefetchData[3];
        newCacheNode = readCacheNodeFromSeedData(prefetchRsc, prefetchLoading, isPrefetchRSCPartial, prefetchHead, isPrefetchHeadPartial, isLeafSegment, newParallelRoutes, navigatedAt);
        needsDynamicRequest = isPrefetchRSCPartial || isLeafSegment && isPrefetchHeadPartial;
    } else {
        // Spawn a request to fetch new data from the server.
        newCacheNode = spawnNewCacheNode(newParallelRoutes, isLeafSegment, navigatedAt, freshness);
        needsDynamicRequest = true;
    }
    let patchedRouterStateChildren = {};
    let taskChildren = null;
    let childNeedsDynamicRequest = false;
    let dynamicRequestTreeChildren = {};
    for(let parallelRouteKey in newRouterStateChildren){
        const newRouterStateChild = newRouterStateChildren[parallelRouteKey];
        const oldSegmentMapChild = oldParallelRoutes !== undefined ? oldParallelRoutes.get(parallelRouteKey) : undefined;
        const seedDataChild = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
        const prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
        const newSegmentChild = newRouterStateChild[0];
        const newSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(newSegmentChild);
        const oldCacheNodeChild = oldSegmentMapChild !== undefined ? oldSegmentMapChild.get(newSegmentKeyChild) : undefined;
        const taskChild = createCacheNodeOnNavigation(navigatedAt, newRouterStateChild, oldCacheNodeChild, freshness, seedDataChild ?? null, seedHead, prefetchDataChild ?? null, prefetchHead, isPrefetchHeadPartial, segmentPath, parallelRouteKey, parentNeedsDynamicRequest || needsDynamicRequest, accumulation);
        if (taskChildren === null) {
            taskChildren = new Map();
        }
        taskChildren.set(parallelRouteKey, taskChild);
        const newCacheNodeChild = taskChild.node;
        if (newCacheNodeChild !== null) {
            const newSegmentMapChild = new Map(shouldDropSiblingCaches ? undefined : oldSegmentMapChild);
            newSegmentMapChild.set(newSegmentKeyChild, newCacheNodeChild);
            newParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
        }
        const taskChildRoute = taskChild.route;
        patchedRouterStateChildren[parallelRouteKey] = taskChildRoute;
        const dynamicRequestTreeChild = taskChild.dynamicRequestTree;
        if (dynamicRequestTreeChild !== null) {
            childNeedsDynamicRequest = true;
            dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
        } else {
            dynamicRequestTreeChildren[parallelRouteKey] = taskChildRoute;
        }
    }
    return {
        status: needsDynamicRequest ? 0 : 1,
        route: patchRouterStateWithNewChildren(newRouterState, patchedRouterStateChildren),
        node: newCacheNode,
        dynamicRequestTree: createDynamicRequestTree(newRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest),
        // This route is not part of the current tree, so there's no reason to
        // track the refresh URL.
        refreshUrl: null,
        children: taskChildren
    };
}
function patchRouterStateWithNewChildren(baseRouterState, newChildren) {
    const clone = [
        baseRouterState[0],
        newChildren
    ];
    // Based on equivalent logic in apply-router-state-patch-to-tree, but should
    // confirm whether we need to copy all of these fields. Not sure the server
    // ever sends, e.g. the refetch marker.
    if (2 in baseRouterState) {
        clone[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clone[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clone[4] = baseRouterState[4];
    }
    return clone;
}
function createDynamicRequestTree(newRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest) {
    // Create a FlightRouterState that instructs the server how to render the
    // requested segment.
    //
    // Or, if neither this segment nor any of the children require a new data,
    // then we return `null` to skip the request.
    let dynamicRequestTree = null;
    if (needsDynamicRequest) {
        dynamicRequestTree = patchRouterStateWithNewChildren(newRouterState, dynamicRequestTreeChildren);
        // The "refetch" marker is set on the top-most segment that requires new
        // data. We can omit it if a parent was already marked.
        if (!parentNeedsDynamicRequest) {
            dynamicRequestTree[3] = 'refetch';
        }
    } else if (childNeedsDynamicRequest) {
        // This segment does not request new data, but at least one of its
        // children does.
        dynamicRequestTree = patchRouterStateWithNewChildren(newRouterState, dynamicRequestTreeChildren);
    } else {
        dynamicRequestTree = null;
    }
    return dynamicRequestTree;
}
function accumulateRefreshUrl(accumulation, refreshUrl) {
    // This is a refresh navigation, and we're inside a "default" slot that's
    // not part of the current route; it was reused from an older route. In
    // order to get fresh data for this reused route, we need to issue a
    // separate request using the old route's URL.
    //
    // Track these extra URLs in the accumulated result. Later, we'll construct
    // an appropriate request for each unique URL in the final set. The reason
    // we don't do it immediately here is so we can deduplicate multiple
    // instances of the same URL into a single request. See
    // listenForDynamicRequest for more details.
    const separateRefreshUrls = accumulation.separateRefreshUrls;
    if (separateRefreshUrls === null) {
        accumulation.separateRefreshUrls = new Set([
            refreshUrl
        ]);
    } else {
        separateRefreshUrls.add(refreshUrl);
    }
}
function reuseActiveSegmentInDefaultSlot(oldUrl, oldRouterState) {
    // This is a "default" segment. These are never sent by the server during a
    // soft navigation; instead, the client reuses whatever segment was already
    // active in that slot on the previous route. This means if we later need to
    // refresh the segment, it will have to be refetched from the previous route's
    // URL. We store it in the Flight Router State.
    //
    // TODO: We also mark the segment with a "refresh" marker but I think we can
    // get rid of that eventually by making sure we only add URLs to page segments
    // that are reused. Then the presence of the URL alone is enough.
    let reusedRouterState;
    const oldRefreshMarker = oldRouterState[3];
    if (oldRefreshMarker === 'refresh') {
        // This segment was already reused from an even older route. Keep its
        // existing URL and refresh marker.
        reusedRouterState = oldRouterState;
    } else {
        // This segment was not previously reused, and it's not on the new route.
        // So it must have been delivered in the old route.
        reusedRouterState = patchRouterStateWithNewChildren(oldRouterState, oldRouterState[1]);
        reusedRouterState[2] = (0, _createhreffromurl.createHrefFromUrl)(oldUrl);
        reusedRouterState[3] = 'refresh';
    }
    return reusedRouterState;
}
function reuseDynamicCacheNode(dropPrefetchRsc, existingCacheNode, parallelRoutes) {
    // Clone an existing CacheNode's data, with (possibly) new children.
    const cacheNode = {
        rsc: existingCacheNode.rsc,
        prefetchRsc: dropPrefetchRsc ? null : existingCacheNode.prefetchRsc,
        head: existingCacheNode.head,
        prefetchHead: dropPrefetchRsc ? null : existingCacheNode.prefetchHead,
        loading: existingCacheNode.loading,
        parallelRoutes,
        // Don't update the navigatedAt timestamp, since we're reusing
        // existing data.
        navigatedAt: existingCacheNode.navigatedAt
    };
    return cacheNode;
}
function readCacheNodeFromSeedData(seedRsc, seedLoading, isSeedRscPartial, seedHead, isSeedHeadPartial, isPageSegment, parallelRoutes, navigatedAt) {
    // TODO: Currently this is threaded through the navigation logic using the
    // CacheNodeSeedData type, but in the future this will read directly from
    // the Segment Cache. See readRenderSnapshotFromCache.
    let rsc;
    let prefetchRsc;
    if (isSeedRscPartial) {
        // The prefetched data contains dynamic holes. Create a pending promise that
        // will be fulfilled when the dynamic data is received from the server.
        prefetchRsc = seedRsc;
        rsc = createDeferredRsc();
    } else {
        // The prefetched data is complete. Use it directly.
        prefetchRsc = null;
        rsc = seedRsc;
    }
    // If this is a page segment, also read the head.
    let prefetchHead;
    let head;
    if (isPageSegment) {
        if (isSeedHeadPartial) {
            prefetchHead = seedHead;
            head = createDeferredRsc();
        } else {
            prefetchHead = null;
            head = seedHead;
        }
    } else {
        prefetchHead = null;
        head = null;
    }
    const cacheNode = {
        rsc,
        prefetchRsc,
        head,
        prefetchHead,
        // TODO: Technically, a loading boundary could contain dynamic data. We
        // should have separate `loading` and `prefetchLoading` fields to handle
        // this, like we do for the segment data and head.
        loading: seedLoading,
        parallelRoutes,
        navigatedAt
    };
    return cacheNode;
}
function spawnNewCacheNode(parallelRoutes, isLeafSegment, navigatedAt, freshness) {
    // We should never spawn network requests during hydration. We must treat the
    // initial payload as authoritative, because the initial page load is used
    // as a last-ditch mechanism for recovering the app.
    //
    // This is also an important safety check because if this leaks into the
    // server rendering path (which theoretically it never should because
    // the server payload should be consistent), the server would hang because
    // these promises would never resolve.
    //
    // TODO: There is an existing case where the global "not found" boundary
    // triggers this path. But it does render correctly despite that. That's an
    // unusual render path so it's not surprising, but we should look into
    // modeling it in a more consistent way. See also the /_notFound special
    // case in updateCacheNodeOnNavigation.
    const isHydration = freshness === 1;
    const cacheNode = {
        rsc: !isHydration ? createDeferredRsc() : null,
        prefetchRsc: null,
        head: !isHydration && isLeafSegment ? createDeferredRsc() : null,
        prefetchHead: null,
        loading: !isHydration ? createDeferredRsc() : null,
        parallelRoutes,
        navigatedAt
    };
    return cacheNode;
}
// Represents whether the previuos navigation resulted in a route tree mismatch.
// A mismatch results in a refresh of the page. If there are two successive
// mismatches, we will fall back to an MPA navigation, to prevent a retry loop.
let previousNavigationDidMismatch = false;
function spawnDynamicRequests(task, primaryUrl, nextUrl, freshnessPolicy, accumulation) {
    const dynamicRequestTree = task.dynamicRequestTree;
    if (dynamicRequestTree === null) {
        // This navigation was fully cached. There are no dynamic requests to spawn.
        previousNavigationDidMismatch = false;
        return;
    }
    // This is intentionally not an async function to discourage the caller from
    // awaiting the result. Any subsequent async operations spawned by this
    // function should result in a separate navigation task, rather than
    // block the original one.
    //
    // In this function we spawn (but do not await) all the network requests that
    // block the navigation, and collect the promises. The next function,
    // `finishNavigationTask`, can await the promises in any order without
    // accidentally introducing a network waterfall.
    const primaryRequestPromise = fetchMissingDynamicData(task, dynamicRequestTree, primaryUrl, nextUrl, freshnessPolicy);
    const separateRefreshUrls = accumulation.separateRefreshUrls;
    let refreshRequestPromises = null;
    if (separateRefreshUrls !== null) {
        // There are multiple URLs that we need to request the data from. This
        // happens when a "default" parallel route slot is present in the tree, and
        // its data cannot be fetched from the current route. We need to split the
        // combined dynamic request tree into separate requests per URL.
        // TODO: Create a scoped dynamic request tree that omits anything that
        // is not relevant to the given URL. Without doing this, the server may
        // sometimes render more data than necessary; this is not a regression
        // compared to the pre-Segment Cache implementation, though, just an
        // optimization we can make in the future.
        // Construct a request tree for each additional refresh URL. This will
        // prune away everything except the parts of the tree that match the
        // given refresh URL.
        refreshRequestPromises = [];
        const canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(primaryUrl);
        for (const refreshUrl of separateRefreshUrls){
            if (refreshUrl === canonicalUrl) {
                continue;
            }
            // TODO: Create a scoped dynamic request tree that omits anything that
            // is not relevant to the given URL. Without doing this, the server may
            // sometimes render more data than necessary; this is not a regression
            // compared to the pre-Segment Cache implementation, though, just an
            // optimization we can make in the future.
            // const scopedDynamicRequestTree = splitTaskByURL(task, refreshUrl)
            const scopedDynamicRequestTree = dynamicRequestTree;
            if (scopedDynamicRequestTree !== null) {
                refreshRequestPromises.push(fetchMissingDynamicData(task, scopedDynamicRequestTree, new URL(refreshUrl, location.origin), // time the refresh URL was set, not the current Next-Url. Need to
                // start tracking this alongside the refresh URL. In the meantime,
                // if a refresh fails due to a mismatch, it will trigger a
                // hard refresh.
                nextUrl, freshnessPolicy));
            }
        }
    }
    // Further async operations are moved into this separate function to
    // discourage sequential network requests.
    const voidPromise = finishNavigationTask(task, nextUrl, primaryRequestPromise, refreshRequestPromises);
    // `finishNavigationTask` is responsible for error handling, so we can attach
    // noop callbacks to this promise.
    voidPromise.then(noop, noop);
}
async function finishNavigationTask(task, nextUrl, primaryRequestPromise, refreshRequestPromises) {
    // Wait for all the requests to finish, or for the first one to fail.
    let exitStatus = await waitForRequestsToFinish(primaryRequestPromise, refreshRequestPromises);
    // Once the all the requests have finished, check the tree for any remaining
    // pending tasks. If anything is still pending, it means the server response
    // does not match the client, and we must refresh to get back to a consistent
    // state. We can skip this step if we already detected a mismatch during the
    // first phase; it doesn't matter in that case because we're going to refresh
    // the whole tree regardless.
    if (exitStatus === 0) {
        exitStatus = abortRemainingPendingTasks(task, null, null);
    }
    switch(exitStatus){
        case 0:
            {
                // The task has completely finished. There's no missing data. Exit.
                previousNavigationDidMismatch = false;
                return;
            }
        case 1:
            {
                // Some data failed to finish loading. Trigger a soft retry.
                // TODO: As an extra precaution against soft retry loops, consider
                // tracking whether a navigation was itself triggered by a retry. If two
                // happen in a row, fall back to a hard retry.
                const isHardRetry = false;
                const primaryRequestResult = await primaryRequestPromise;
                dispatchRetryDueToTreeMismatch(isHardRetry, primaryRequestResult.url, nextUrl, primaryRequestResult.seed, task.route);
                return;
            }
        case 2:
            {
                // Some data failed to finish loading in a non-recoverable way, such as a
                // network error. Trigger an MPA navigation.
                //
                // Hard navigating/refreshing is how we prevent an infinite retry loop
                // caused by a network error — when the network fails, we fall back to the
                // browser behavior for offline navigations. In the future, Next.js may
                // introduce its own custom handling of offline navigations, but that
                // doesn't exist yet.
                const isHardRetry = true;
                const primaryRequestResult = await primaryRequestPromise;
                dispatchRetryDueToTreeMismatch(isHardRetry, primaryRequestResult.url, nextUrl, primaryRequestResult.seed, task.route);
                return;
            }
        default:
            {
                return exitStatus;
            }
    }
}
function waitForRequestsToFinish(primaryRequestPromise, refreshRequestPromises) {
    // Custom async combinator logic. This could be replaced by Promise.any but
    // we don't assume that's available.
    //
    // Each promise resolves once the server responsds and the data is written
    // into the CacheNode tree. Resolve the combined promise once all the
    // requests finish.
    //
    // Or, resolve as soon as one of the requests fails, without waiting for the
    // others to finish.
    return new Promise((resolve)=>{
        const onFulfill = (result)=>{
            if (result.exitStatus === 0) {
                remainingCount--;
                if (remainingCount === 0) {
                    // All the requests finished successfully.
                    resolve(0);
                }
            } else {
                // One of the requests failed. Exit with a failing status.
                // NOTE: It's possible for one of the requests to fail with SoftRetry
                // and a later one to fail with HardRetry. In this case, we choose to
                // retry immediately, rather than delay the retry until all the requests
                // finish. If it fails again, we will hard retry on the next
                // attempt, anyway.
                resolve(result.exitStatus);
            }
        };
        // onReject shouldn't ever be called because fetchMissingDynamicData's
        // entire body is wrapped in a try/catch. This is just defensive.
        const onReject = ()=>resolve(2);
        // Attach the listeners to the promises.
        let remainingCount = 1;
        primaryRequestPromise.then(onFulfill, onReject);
        if (refreshRequestPromises !== null) {
            remainingCount += refreshRequestPromises.length;
            refreshRequestPromises.forEach((refreshRequestPromise)=>refreshRequestPromise.then(onFulfill, onReject));
        }
    });
}
function dispatchRetryDueToTreeMismatch(isHardRetry, retryUrl, retryNextUrl, seed, baseTree) {
    // If this is the second time in a row that a navigation resulted in a
    // mismatch, fall back to a hard (MPA) refresh.
    isHardRetry = isHardRetry || previousNavigationDidMismatch;
    previousNavigationDidMismatch = true;
    const retryAction = {
        type: _routerreducertypes.ACTION_SERVER_PATCH,
        previousTree: baseTree,
        url: retryUrl,
        nextUrl: retryNextUrl,
        seed,
        mpa: isHardRetry
    };
    (0, _useactionqueue.dispatchAppRouterAction)(retryAction);
}
async function fetchMissingDynamicData(task, dynamicRequestTree, url, nextUrl, freshnessPolicy) {
    try {
        const result = await (0, _fetchserverresponse.fetchServerResponse)(url, {
            flightRouterState: dynamicRequestTree,
            nextUrl,
            isHmrRefresh: freshnessPolicy === 4
        });
        if (typeof result === 'string') {
            // fetchServerResponse will return an href to indicate that the SPA
            // navigation failed. For example, if the server triggered a hard
            // redirect, or the fetch request errored. Initiate an MPA navigation
            // to the given href.
            return {
                exitStatus: 2,
                url: new URL(result, location.origin),
                seed: null
            };
        }
        const seed = (0, _navigation.convertServerPatchToFullTree)(task.route, result.flightData, result.renderedSearch);
        const didReceiveUnknownParallelRoute = writeDynamicDataIntoNavigationTask(task, seed.tree, seed.data, seed.head, result.debugInfo);
        return {
            exitStatus: didReceiveUnknownParallelRoute ? 1 : 0,
            url: new URL(result.canonicalUrl, location.origin),
            seed
        };
    } catch  {
        // This shouldn't happen because fetchServerResponse's entire body is
        // wrapped in a try/catch. If it does, though, it implies the server failed
        // to respond with any tree at all. So we must fall back to a hard retry.
        return {
            exitStatus: 2,
            url: url,
            seed: null
        };
    }
}
function writeDynamicDataIntoNavigationTask(task, serverRouterState, dynamicData, dynamicHead, debugInfo) {
    if (task.status === 0 && dynamicData !== null) {
        task.status = 1;
        finishPendingCacheNode(task.node, dynamicData, dynamicHead, debugInfo);
    }
    const taskChildren = task.children;
    const serverChildren = serverRouterState[1];
    const dynamicDataChildren = dynamicData !== null ? dynamicData[1] : null;
    // Detect whether the server sends a parallel route slot that the client
    // doesn't know about.
    let didReceiveUnknownParallelRoute = false;
    if (taskChildren !== null) {
        for(const parallelRouteKey in serverChildren){
            const serverRouterStateChild = serverChildren[parallelRouteKey];
            const dynamicDataChild = dynamicDataChildren !== null ? dynamicDataChildren[parallelRouteKey] : null;
            const taskChild = taskChildren.get(parallelRouteKey);
            if (taskChild === undefined) {
                // The server sent a child segment that the client doesn't know about.
                //
                // When we receive an unknown parallel route, we must consider it a
                // mismatch. This is unlike the case where the segment itself
                // mismatches, because multiple routes can be active simultaneously.
                // But a given layout should never have a mismatching set of
                // child slots.
                //
                // Theoretically, this should only happen in development during an HMR
                // refresh, because the set of parallel routes for a layout does not
                // change over the lifetime of a build/deployment. In production, we
                // should have already mismatched on either the build id or the segment
                // path. But as an extra precaution, we validate in prod, too.
                didReceiveUnknownParallelRoute = true;
            } else {
                const taskSegment = taskChild.route[0];
                if ((0, _matchsegments.matchSegment)(serverRouterStateChild[0], taskSegment) && dynamicDataChild !== null && dynamicDataChild !== undefined) {
                    // Found a match for this task. Keep traversing down the task tree.
                    const childDidReceiveUnknownParallelRoute = writeDynamicDataIntoNavigationTask(taskChild, serverRouterStateChild, dynamicDataChild, dynamicHead, debugInfo);
                    if (childDidReceiveUnknownParallelRoute) {
                        didReceiveUnknownParallelRoute = true;
                    }
                }
            }
        }
    }
    return didReceiveUnknownParallelRoute;
}
function finishPendingCacheNode(cacheNode, dynamicData, dynamicHead, debugInfo) {
    // Writes a dynamic response into an existing Cache Node tree. This does _not_
    // create a new tree, it updates the existing tree in-place. So it must follow
    // the Suspense rules of cache safety — it can resolve pending promises, but
    // it cannot overwrite existing data. It can add segments to the tree (because
    // a missing segment will cause the layout router to suspend).
    // but it cannot delete them.
    //
    // We must resolve every promise in the tree, or else it will suspend
    // indefinitely. If we did not receive data for a segment, we will resolve its
    // data promise to `null` to trigger a lazy fetch during render.
    // Use the dynamic data from the server to fulfill the deferred RSC promise
    // on the Cache Node.
    const rsc = cacheNode.rsc;
    const dynamicSegmentData = dynamicData[0];
    if (dynamicSegmentData === null) {
        // This is an empty CacheNode; this particular server request did not
        // render this segment. There may be a separate pending request that will,
        // though, so we won't abort the task until all pending requests finish.
        return;
    }
    if (rsc === null) {
        // This is a lazy cache node. We can overwrite it. This is only safe
        // because we know that the LayoutRouter suspends if `rsc` is `null`.
        cacheNode.rsc = dynamicSegmentData;
    } else if (isDeferredRsc(rsc)) {
        // This is a deferred RSC promise. We can fulfill it with the data we just
        // received from the server. If it was already resolved by a different
        // navigation, then this does nothing because we can't overwrite data.
        rsc.resolve(dynamicSegmentData, debugInfo);
    } else {
    // This is not a deferred RSC promise, nor is it empty, so it must have
    // been populated by a different navigation. We must not overwrite it.
    }
    // If we navigated without a prefetch, then `loading` will be a deferred promise too.
    // Fulfill it using the dynamic response so that we can display the loading boundary.
    const loading = cacheNode.loading;
    if (isDeferredRsc(loading)) {
        const dynamicLoading = dynamicData[2];
        loading.resolve(dynamicLoading, debugInfo);
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved with the dynamic head from
    // the server.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(dynamicHead, debugInfo);
    }
}
function abortRemainingPendingTasks(task, error, debugInfo) {
    let exitStatus;
    if (task.status === 0) {
        // The data for this segment is still missing.
        task.status = 2;
        abortPendingCacheNode(task.node, error, debugInfo);
        // If the server failed to fulfill the data for this segment, it implies
        // that the route tree received from the server mismatched the tree that
        // was previously prefetched.
        //
        // In an app with fully static routes and no proxy-driven redirects or
        // rewrites, this should never happen, because the route for a URL would
        // always be the same across multiple requests. So, this implies that some
        // runtime routing condition changed, likely in a proxy, without being
        // pushed to the client.
        //
        // When this happens, we treat this the same as a refresh(). The entire
        // tree will be re-rendered from the root.
        if (task.refreshUrl === null) {
            // Trigger a "soft" refresh. Essentially the same as calling `refresh()`
            // in a Server Action.
            exitStatus = 1;
        } else {
            // The mismatch was discovered inside an inactive parallel route. This
            // implies the inactive parallel route is no longer reachable at the URL
            // that originally rendered it. Fall back to an MPA refresh.
            // TODO: An alternative could be to trigger a soft refresh but to _not_
            // re-use the inactive parallel routes this time. Similar to what would
            // happen if were to do a hard refrehs, but without the HTML page.
            exitStatus = 2;
        }
    } else {
        // This segment finished. (An error here is treated as Done because they are
        // surfaced to the application during render.)
        exitStatus = 0;
    }
    const taskChildren = task.children;
    if (taskChildren !== null) {
        for (const [, taskChild] of taskChildren){
            const childExitStatus = abortRemainingPendingTasks(taskChild, error, debugInfo);
            // Propagate the exit status up the tree. The statuses are ordered by
            // their precedence.
            if (childExitStatus > exitStatus) {
                exitStatus = childExitStatus;
            }
        }
    }
    return exitStatus;
}
function abortPendingCacheNode(cacheNode, error, debugInfo) {
    const rsc = cacheNode.rsc;
    if (isDeferredRsc(rsc)) {
        if (error === null) {
            // This will trigger a lazy fetch during render.
            rsc.resolve(null, debugInfo);
        } else {
            // This will trigger an error during rendering.
            rsc.reject(error, debugInfo);
        }
    }
    const loading = cacheNode.loading;
    if (isDeferredRsc(loading)) {
        loading.resolve(null, debugInfo);
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved. If an error was provided, we
    // will not resolve it with an error, since this is rendered at the root of
    // the app. We want the segment to error, not the entire app.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(null, debugInfo);
    }
}
const DEFERRED = Symbol();
function isDeferredRsc(value) {
    return value && typeof value === 'object' && value.tag === DEFERRED;
}
function createDeferredRsc() {
    // Create an unresolved promise that represents data derived from a Flight
    // response. The promise will be resolved later as soon as we start receiving
    // data from the server, i.e. as soon as the Flight client decodes and returns
    // the top-level response object.
    // The `_debugInfo` field contains profiling information. Promises that are
    // created by Flight already have this info added by React; for any derived
    // promise created by the router, we need to transfer the Flight debug info
    // onto the derived promise.
    //
    // The debug info represents the latency between the start of the navigation
    // and the start of rendering. (It does not represent the time it takes for
    // whole stream to finish.)
    const debugInfo = [];
    let resolve;
    let reject;
    const pendingRsc = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    pendingRsc.status = 'pending';
    pendingRsc.resolve = (value, responseDebugInfo)=>{
        if (pendingRsc.status === 'pending') {
            const fulfilledRsc = pendingRsc;
            fulfilledRsc.status = 'fulfilled';
            fulfilledRsc.value = value;
            if (responseDebugInfo !== null) {
                // Transfer the debug info to the derived promise.
                debugInfo.push.apply(debugInfo, responseDebugInfo);
            }
            resolve(value);
        }
    };
    pendingRsc.reject = (error, responseDebugInfo)=>{
        if (pendingRsc.status === 'pending') {
            const rejectedRsc = pendingRsc;
            rejectedRsc.status = 'rejected';
            rejectedRsc.reason = error;
            if (responseDebugInfo !== null) {
                // Transfer the debug info to the derived promise.
                debugInfo.push.apply(debugInfo, responseDebugInfo);
            }
            reject(error);
        }
    };
    pendingRsc.tag = DEFERRED;
    pendingRsc._debugInfo = debugInfo;
    return pendingRsc;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ppr-navigations.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createNestedLayoutNavigationPromises: null,
    createRootNavigationPromises: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createNestedLayoutNavigationPromises: function() {
        return createNestedLayoutNavigationPromises;
    },
    createRootNavigationPromises: function() {
        return createRootNavigationPromises;
    }
});
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const layoutSegmentPromisesCache = new WeakMap();
/**
 * Creates instrumented promises for layout segment hooks at a given tree level.
 * This is dev-only code for React Suspense DevTools instrumentation.
 */ function createLayoutSegmentPromises(tree) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Check if we already have cached promises for this tree
    const cached = layoutSegmentPromisesCache.get(tree);
    if (cached) {
        return cached;
    }
    // Create new promises and cache them
    const segmentPromises = new Map();
    const segmentsPromises = new Map();
    const parallelRoutes = tree[1];
    for (const parallelRouteKey of Object.keys(parallelRoutes)){
        const segments = (0, _segment.getSelectedLayoutSegmentPath)(tree, parallelRouteKey);
        // Use the shared logic to compute the segment value
        const segment = (0, _segment.computeSelectedLayoutSegment)(segments, parallelRouteKey);
        segmentPromises.set(parallelRouteKey, (0, _hooksclientcontextsharedruntime.createDevToolsInstrumentedPromise)('useSelectedLayoutSegment', segment));
        segmentsPromises.set(parallelRouteKey, (0, _hooksclientcontextsharedruntime.createDevToolsInstrumentedPromise)('useSelectedLayoutSegments', segments));
    }
    const result = {
        selectedLayoutSegmentPromises: segmentPromises,
        selectedLayoutSegmentsPromises: segmentsPromises
    };
    // Cache the result for future renders
    layoutSegmentPromisesCache.set(tree, result);
    return result;
}
const rootNavigationPromisesCache = new WeakMap();
function createRootNavigationPromises(tree, pathname, searchParams, pathParams) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Create stable cache keys from the values
    const searchParamsString = searchParams.toString();
    const pathParamsString = JSON.stringify(pathParams);
    const cacheKey = `${pathname}:${searchParamsString}:${pathParamsString}`;
    // Get or create the cache for this tree
    let treeCache = rootNavigationPromisesCache.get(tree);
    if (!treeCache) {
        treeCache = new Map();
        rootNavigationPromisesCache.set(tree, treeCache);
    }
    // Check if we have cached promises for this combination
    const cached = treeCache.get(cacheKey);
    if (cached) {
        return cached;
    }
    const readonlySearchParams = new _hooksclientcontextsharedruntime.ReadonlyURLSearchParams(searchParams);
    const layoutSegmentPromises = createLayoutSegmentPromises(tree);
    const promises = {
        pathname: (0, _hooksclientcontextsharedruntime.createDevToolsInstrumentedPromise)('usePathname', pathname),
        searchParams: (0, _hooksclientcontextsharedruntime.createDevToolsInstrumentedPromise)('useSearchParams', readonlySearchParams),
        params: (0, _hooksclientcontextsharedruntime.createDevToolsInstrumentedPromise)('useParams', pathParams),
        ...layoutSegmentPromises
    };
    treeCache.set(cacheKey, promises);
    return promises;
}
const nestedLayoutPromisesCache = new WeakMap();
function createNestedLayoutNavigationPromises(tree, parentNavPromises) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const parallelRoutes = tree[1];
    const parallelRouteKeys = Object.keys(parallelRoutes);
    // Only create promises if there are parallel routes at this level
    if (parallelRouteKeys.length === 0) {
        return null;
    }
    // Get or create the cache for this tree
    let treeCache = nestedLayoutPromisesCache.get(tree);
    if (!treeCache) {
        treeCache = new Map();
        nestedLayoutPromisesCache.set(tree, treeCache);
    }
    // Check if we have cached promises for this parent combination
    const cached = treeCache.get(parentNavPromises);
    if (cached) {
        return cached;
    }
    // Create merged promises
    const layoutSegmentPromises = createLayoutSegmentPromises(tree);
    const promises = {
        ...parentNavPromises,
        ...layoutSegmentPromises
    };
    treeCache.set(parentNavPromises, promises);
    return promises;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation-devtools.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE: null,
    SegmentBoundaryTriggerNode: null,
    SegmentStateProvider: null,
    SegmentViewNode: null,
    SegmentViewStateNode: null,
    useSegmentState: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE: function() {
        return SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE;
    },
    SegmentBoundaryTriggerNode: function() {
        return SegmentBoundaryTriggerNode;
    },
    SegmentStateProvider: function() {
        return SegmentStateProvider;
    },
    SegmentViewNode: function() {
        return SegmentViewNode;
    },
    SegmentViewStateNode: function() {
        return SegmentViewStateNode;
    },
    useSegmentState: function() {
        return useSegmentState;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _nextdevtools = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/next-devtools/index.js (raw)");
const _notfound = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)");
const SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE = 'NEXT_DEVTOOLS_SIMULATED_ERROR';
function SegmentTrieNode({ type, pagePath }) {
    const { boundaryType, setBoundaryType } = useSegmentState();
    const nodeState = (0, _react.useMemo)(()=>{
        return {
            type,
            pagePath,
            boundaryType,
            setBoundaryType
        };
    }, [
        type,
        pagePath,
        boundaryType,
        setBoundaryType
    ]);
    // Use `useLayoutEffect` to ensure the state is updated during suspense.
    // `useEffect` won't work as the state is preserved during suspense.
    (0, _react.useLayoutEffect)(()=>{
        _nextdevtools.dispatcher.segmentExplorerNodeAdd(nodeState);
        return ()=>{
            _nextdevtools.dispatcher.segmentExplorerNodeRemove(nodeState);
        };
    }, [
        nodeState
    ]);
    return null;
}
function NotFoundSegmentNode() {
    (0, _notfound.notFound)();
}
function ErrorSegmentNode() {
    throw Object.defineProperty(new Error(SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
}
const forever = new Promise(()=>{});
function LoadingSegmentNode() {
    (0, _react.use)(forever);
    return null;
}
function SegmentViewStateNode({ page }) {
    (0, _react.useLayoutEffect)(()=>{
        _nextdevtools.dispatcher.segmentExplorerUpdateRouteState(page);
        return ()=>{
            _nextdevtools.dispatcher.segmentExplorerUpdateRouteState('');
        };
    }, [
        page
    ]);
    return null;
}
function SegmentBoundaryTriggerNode() {
    const { boundaryType } = useSegmentState();
    let segmentNode = null;
    if (boundaryType === 'loading') {
        segmentNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingSegmentNode, {});
    } else if (boundaryType === 'not-found') {
        segmentNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(NotFoundSegmentNode, {});
    } else if (boundaryType === 'error') {
        segmentNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorSegmentNode, {});
    }
    return segmentNode;
}
function SegmentViewNode({ type, pagePath, children }) {
    const segmentNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentTrieNode, {
        type: type,
        pagePath: pagePath
    }, type);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            segmentNode,
            children
        ]
    });
}
const SegmentStateContext = /*#__PURE__*/ (0, _react.createContext)({
    boundaryType: null,
    setBoundaryType: ()=>{}
});
function SegmentStateProvider({ children }) {
    const [boundaryType, setBoundaryType] = (0, _react.useState)(null);
    const [errorBoundaryKey, setErrorBoundaryKey] = (0, _react.useState)(0);
    const reloadBoundary = (0, _react.useCallback)(()=>setErrorBoundaryKey((prev)=>prev + 1), []);
    const setBoundaryTypeAndReload = (0, _react.useCallback)((type)=>{
        if (type === null) {
            reloadBoundary();
        }
        setBoundaryType(type);
    }, [
        reloadBoundary
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentStateContext.Provider, {
        value: {
            boundaryType,
            setBoundaryType: setBoundaryTypeAndReload
        },
        children: children
    }, errorBoundaryKey);
}
function useSegmentState() {
    return (0, _react.useContext)(SegmentStateContext);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=segment-explorer-node.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _bfcache = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
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
        const { createNestedLayoutNavigationPromises } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)");
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
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
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
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
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
"[project]/AirSafeMove/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule'
]); //# sourceMappingURL=reflect-utils.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A searchParam property was accessed directly with ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForSyncSpread() {
    console.error(`The keys of \`searchParams\` were accessed directly. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=search-params.browser.dev.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=search-params.browser.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration();
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A param property was accessed directly with ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForEnumeration() {
    console.error(`params are being enumerated. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderParamsFromClient(clientParams) {
    return makeDynamicallyTrackedParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=params.browser.dev.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=params.browser.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return afterTaskAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const afterTaskAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=after-task-async-storage-instance.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorage", {
    enumerable: true,
    get: function() {
        return _aftertaskasyncstorageinstance.afterTaskAsyncStorageInstance;
    }
});
const _aftertaskasyncstorageinstance = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)"); //# sourceMappingURL=after-task-async-storage.external.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRequestAPICallableInsideAfter: null,
    throwForSearchParamsAccessInUseCache: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
const _staticgenerationbailout = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
const _aftertaskasyncstorageexternal = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)");
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E842",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    workStore.invalidDynamicUsageError ??= error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
} //# sourceMappingURL=utils.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RenderStage: null,
    StagedRenderingController: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RenderStage: function() {
        return RenderStage;
    },
    StagedRenderingController: function() {
        return StagedRenderingController;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-client] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Before"] = 1] = "Before";
    RenderStage[RenderStage["Static"] = 2] = "Static";
    RenderStage[RenderStage["Runtime"] = 3] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 4] = "Dynamic";
    RenderStage[RenderStage["Abandoned"] = 5] = "Abandoned";
    return RenderStage;
}({});
class StagedRenderingController {
    constructor(abortSignal = null, hasRuntimePrefetch){
        this.abortSignal = abortSignal;
        this.hasRuntimePrefetch = hasRuntimePrefetch;
        this.currentStage = 1;
        this.staticInterruptReason = null;
        this.runtimeInterruptReason = null;
        this.staticStageEndTime = Infinity;
        this.runtimeStageEndTime = Infinity;
        this.runtimeStageListeners = [];
        this.dynamicStageListeners = [];
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.mayAbandon = false;
        if (abortSignal) {
            abortSignal.addEventListener('abort', ()=>{
                const { reason } = abortSignal;
                if (this.currentStage < 3) {
                    this.runtimeStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.runtimeStagePromise.reject(reason);
                }
                if (this.currentStage < 4 || this.currentStage === 5) {
                    this.dynamicStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.dynamicStagePromise.reject(reason);
                }
            }, {
                once: true
            });
            this.mayAbandon = true;
        }
    }
    onStage(stage, callback) {
        if (this.currentStage >= stage) {
            callback();
        } else if (stage === 3) {
            this.runtimeStageListeners.push(callback);
        } else if (stage === 4) {
            this.dynamicStageListeners.push(callback);
        } else {
            // This should never happen
            throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                value: "E881",
                enumerable: false,
                configurable: true
            });
        }
    }
    canSyncInterrupt() {
        // If we haven't started the render yet, it can't be interrupted.
        if (this.currentStage === 1) {
            return false;
        }
        const boundaryStage = this.hasRuntimePrefetch ? 4 : 3;
        return this.currentStage < boundaryStage;
    }
    syncInterruptCurrentStageWithReason(reason) {
        if (this.currentStage === 1) {
            return;
        }
        // If Sync IO occurs during the initial (abandonable) render, we'll retry it,
        // so we want a slightly different flow.
        // See the implementation of `abandonRenderImpl` for more explanation.
        if (this.mayAbandon) {
            return this.abandonRenderImpl();
        }
        // If we're in the final render, we cannot abandon it. We need to advance to the Dynamic stage
        // and capture the interruption reason.
        switch(this.currentStage){
            case 2:
                {
                    this.staticInterruptReason = reason;
                    this.advanceStage(4);
                    return;
                }
            case 3:
                {
                    // We only error for Sync IO in the runtime stage if the route
                    // is configured to use runtime prefetching.
                    // We do this to reflect the fact that during a runtime prefetch,
                    // Sync IO aborts aborts the render.
                    // Note that `canSyncInterrupt` should prevent us from getting here at all
                    // if runtime prefetching isn't enabled.
                    if (this.hasRuntimePrefetch) {
                        this.runtimeInterruptReason = reason;
                        this.advanceStage(4);
                    }
                    return;
                }
            case 4:
            case 5:
            default:
        }
    }
    getStaticInterruptReason() {
        return this.staticInterruptReason;
    }
    getRuntimeInterruptReason() {
        return this.runtimeInterruptReason;
    }
    getStaticStageEndTime() {
        return this.staticStageEndTime;
    }
    getRuntimeStageEndTime() {
        return this.runtimeStageEndTime;
    }
    abandonRender() {
        if (!this.mayAbandon) {
            throw Object.defineProperty(new _invarianterror.InvariantError('`abandonRender` called on a stage controller that cannot be abandoned.'), "__NEXT_ERROR_CODE", {
                value: "E938",
                enumerable: false,
                configurable: true
            });
        }
        this.abandonRenderImpl();
    }
    abandonRenderImpl() {
        // In staged rendering, only the initial render is abandonable.
        // We can abandon the initial render if
        //   1. We notice a cache miss, and need to wait for caches to fill
        //   2. A sync IO error occurs, and the render should be interrupted
        //      (this might be a lazy intitialization of a module,
        //       so we still want to restart in this case and see if it still occurs)
        // In either case, we'll be doing another render after this one,
        // so we only want to unblock the Runtime stage, not Dynamic, because
        // unblocking the dynamic stage would likely lead to wasted (uncached) IO.
        const { currentStage } = this;
        switch(currentStage){
            case 2:
                {
                    this.currentStage = 5;
                    this.resolveRuntimeStage();
                    return;
                }
            case 3:
                {
                    this.currentStage = 5;
                    return;
                }
            case 4:
            case 1:
            case 5:
                break;
            default:
                {
                    currentStage;
                }
        }
    }
    advanceStage(stage) {
        // If we're already at the target stage or beyond, do nothing.
        // (this can happen e.g. if sync IO advanced us to the dynamic stage)
        if (stage <= this.currentStage) {
            return;
        }
        let currentStage = this.currentStage;
        this.currentStage = stage;
        if (currentStage < 3 && stage >= 3) {
            this.staticStageEndTime = performance.now() + performance.timeOrigin;
            this.resolveRuntimeStage();
        }
        if (currentStage < 4 && stage >= 4) {
            this.runtimeStageEndTime = performance.now() + performance.timeOrigin;
            this.resolveDynamicStage();
            return;
        }
    }
    /** Fire the `onStage` listeners for the runtime stage and unblock any promises waiting for it. */ resolveRuntimeStage() {
        const runtimeListeners = this.runtimeStageListeners;
        for(let i = 0; i < runtimeListeners.length; i++){
            runtimeListeners[i]();
        }
        runtimeListeners.length = 0;
        this.runtimeStagePromise.resolve();
    }
    /** Fire the `onStage` listeners for the dynamic stage and unblock any promises waiting for it. */ resolveDynamicStage() {
        const dynamicListeners = this.dynamicStageListeners;
        for(let i = 0; i < dynamicListeners.length; i++){
            dynamicListeners[i]();
        }
        dynamicListeners.length = 0;
        this.dynamicStagePromise.resolve();
    }
    getStagePromise(stage) {
        switch(stage){
            case 3:
                {
                    return this.runtimeStagePromise.promise;
                }
            case 4:
                {
                    return this.dynamicStagePromise.promise;
                }
            default:
                {
                    stage;
                    throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
        }
    }
    waitForStage(stage) {
        return this.getStagePromise(stage);
    }
    delayUntilStage(stage, displayName, resolvedValue) {
        const ioTriggerPromise = this.getStagePromise(stage);
        const promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
        // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
        // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
        // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
        if (this.abortSignal) {
            promise.catch(ignoreReject);
        }
        return promise;
    }
}
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    const promise = new Promise((resolve, reject)=>{
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
} //# sourceMappingURL=staged-rendering.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createPrerenderSearchParamsForClientPage: null,
    createSearchParamsFromClient: null,
    createServerSearchParamsForMetadata: null,
    createServerSearchParamsForServerPage: null,
    makeErroringSearchParamsForUseCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrerenderSearchParamsForClientPage: function() {
        return createPrerenderSearchParamsForClientPage;
    },
    createSearchParamsFromClient: function() {
        return createSearchParamsFromClient;
    },
    createServerSearchParamsForMetadata: function() {
        return createServerSearchParamsForMetadata;
    },
    createServerSearchParamsForServerPage: function() {
        return createServerSearchParamsForServerPage;
    },
    makeErroringSearchParamsForUseCache: function() {
        return makeErroringSearchParamsForUseCache;
    }
});
const _reflect = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function createSearchParamsFromClient(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E769",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E739",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                return createRenderSearchParams(underlyingSearchParams, workStore, workUnitStore);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
const createServerSearchParamsForMetadata = createServerSearchParamsForServerPage;
function createServerSearchParamsForServerPage(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerSearchParamsForServerPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E747",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore);
            case 'request':
                return createRenderSearchParams(underlyingSearchParams, workStore, workUnitStore);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderSearchParamsForClientPage(workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                // We're prerendering in a mode that aborts (cacheComponents) and should stall
                // the promise to ensure the RSC side is considered dynamic
                return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`searchParams`');
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E768",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E746",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
                return Promise.resolve({});
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createStaticPrerenderSearchParams(workStore, prerenderStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            // We are in a cacheComponents (PPR or otherwise) prerender
            return makeHangingSearchParams(workStore, prerenderStore);
        case 'prerender-ppr':
        case 'prerender-legacy':
            // We are in a legacy static generation and need to interrupt the
            // prerender when search params are accessed.
            return makeErroringSearchParams(workStore, prerenderStore);
        default:
            return prerenderStore;
    }
}
function createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore) {
    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedSearchParams(underlyingSearchParams));
}
function createRenderSearchParams(underlyingSearchParams, workStore, requestStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            // Semantically we only need the dev tracking when running in `next dev`
            // but since you would never use next dev with production NODE_ENV we use this
            // as a proxy so we can statically exclude this code from production builds.
            return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams, workStore, requestStore);
        } else //TURBOPACK unreachable
        ;
    }
}
const CachedSearchParams = new WeakMap();
const CachedSearchParamsForUseCache = new WeakMap();
function makeHangingSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(prerenderStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`searchParams`');
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                default:
                    {
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        }
    });
    CachedSearchParams.set(prerenderStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const underlyingSearchParams = {};
    // For search params we don't construct a ReactPromise because we want to interrupt
    // rendering on any property access that was not set from outside and so we only want
    // to have properties like value and status if React sets them.
    const promise = Promise.resolve(underlyingSearchParams);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && prop === 'then') {
                const expression = '`await searchParams`, `searchParams.then`, or similar';
                if (workStore.dynamicShouldError) {
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                } else if (prerenderStore.type === 'prerender-ppr') {
                    // PPR Prerender (no cacheComponents)
                    (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                } else {
                    // Legacy Prerender
                    (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    CachedSearchParams.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringSearchParamsForUseCache(workStore) {
    const cachedSearchParams = CachedSearchParamsForUseCache.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve({});
    const proxiedPromise = new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it. We know it
                // isn't a dynamic access because it can only be something that was
                // previously written to the promise and thus not an underlying
                // searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore, get);
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    CachedSearchParamsForUseCache.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeUntrackedSearchParams(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve(underlyingSearchParams);
    CachedSearchParams.set(underlyingSearchParams, promise);
    return promise;
}
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams, workStore, requestStore) {
    if (requestStore.asyncApiPromises) {
        // Do not cache the resulting promise. If we do, we'll only show the first "awaited at"
        // across all segments that receive searchParams.
        return makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore);
    } else {
        const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
        if (cachedSearchParams) {
            return cachedSearchParams;
        }
        const promise = makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore);
        CachedSearchParams.set(requestStore, promise);
        return promise;
    }
}
function makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore) {
    const promiseInitialized = {
        current: false
    };
    const proxiedUnderlying = instrumentSearchParamsObjectWithDevWarnings(underlyingSearchParams, workStore, promiseInitialized);
    let promise;
    if (requestStore.asyncApiPromises) {
        // We wrap each instance of searchParams in a `new Promise()`.
        // This is important when all awaits are in third party which would otherwise
        // track all the way to the internal params.
        const sharedSearchParamsParent = requestStore.asyncApiPromises.sharedSearchParamsParent;
        promise = new Promise((resolve, reject)=>{
            sharedSearchParamsParent.then(()=>resolve(proxiedUnderlying), reject);
        });
        // @ts-expect-error
        promise.displayName = 'searchParams';
    } else {
        promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(proxiedUnderlying, requestStore, _stagedrendering.RenderStage.Runtime);
    }
    promise.then(()=>{
        promiseInitialized.current = true;
    }, // is aborted before it can reach the runtime stage.
    // In that case, we have to prevent an unhandled rejection from the promise
    // created by this `.then()` call.
    // This does not affect the `promiseInitialized` logic above,
    // because `proxiedUnderlying` will not be used to resolve the promise,
    // so there's no risk of any of its properties being accessed and triggering
    // an undesireable warning.
    ignoreReject);
    return instrumentSearchParamsPromiseWithDevWarnings(underlyingSearchParams, promise, workStore);
}
function ignoreReject() {}
function instrumentSearchParamsObjectWithDevWarnings(underlyingSearchParams, workStore, promiseInitialized) {
    // We have an unfortunate sequence of events that requires this initialization logic. We want to instrument the underlying
    // searchParams object to detect if you are accessing values in dev. This is used for warnings and for things like the static prerender
    // indicator. However when we pass this proxy to our Promise.resolve() below the VM checks if the resolved value is a promise by looking
    // at the `.then` property. To our dynamic tracking logic this is indistinguishable from a `then` searchParam and so we would normally trigger
    // dynamic tracking. However we know that this .then is not real dynamic access, it's just how thenables resolve in sequence. So we introduce
    // this initialization concept so we omit the dynamic check until after we've constructed our resolved promise.
    return new Proxy(underlyingSearchParams, {
        get (target, prop, receiver) {
            if (typeof prop === 'string' && promiseInitialized.current) {
                if (workStore.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (workStore.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            if (workStore.dynamicShouldError) {
                const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            }
            return Reflect.ownKeys(target);
        }
    });
}
function instrumentSearchParamsPromiseWithDevWarnings(underlyingSearchParams, promise, workStore) {
    // Track which properties we should warn for.
    const proxiedProperties = new Set();
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    return new Proxy(promise, {
        get (target, prop, receiver) {
            if (prop === 'then' && workStore.dynamicShouldError) {
                const expression = '`searchParams.then`';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            }
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            const expression = '`Object.keys(searchParams)` or similar';
            warnForSyncAccess(workStore.route, expression);
            return Reflect.ownKeys(target);
        }
    });
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createSearchAccessError);
function createSearchAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E848",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=search-params.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return dynamicAccessAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const dynamicAccessAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=dynamic-access-async-storage-instance.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorage", {
    enumerable: true,
    get: function() {
        return _dynamicaccessasyncstorageinstance.dynamicAccessAsyncStorageInstance;
    }
});
const _dynamicaccessasyncstorageinstance = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)"); //# sourceMappingURL=dynamic-access-async-storage.external.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createParamsFromClient: null,
    createPrerenderParamsForClientSegment: null,
    createServerParamsForMetadata: null,
    createServerParamsForRoute: null,
    createServerParamsForServerSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createParamsFromClient: function() {
        return createParamsFromClient;
    },
    createPrerenderParamsForClientSegment: function() {
        return createPrerenderParamsForClientSegment;
    },
    createServerParamsForMetadata: function() {
        return createServerParamsForMetadata;
    },
    createServerParamsForRoute: function() {
        return createServerParamsForRoute;
    },
    createServerParamsForServerSegment: function() {
        return createServerParamsForServerSegment;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
const _dynamicaccessasyncstorageexternal = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function createParamsFromClient(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E736",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E770",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore, workUnitStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
const createServerParamsForMetadata = createServerParamsForServerSegment;
function createServerParamsForRoute(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForRoute should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E738",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderParams(underlyingParams, workUnitStore);
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore, workUnitStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createServerParamsForServerSegment(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForServerSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E743",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderParams(underlyingParams, workUnitStore);
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore, workUnitStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderParamsForClientSegment(underlyingParams) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Missing workStore in createPrerenderParamsForClientSegment'), "__NEXT_ERROR_CODE", {
            value: "E773",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                const fallbackParams = workUnitStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(let key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`params`');
                        }
                    }
                }
                break;
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderParamsForClientSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E734",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'prerender-runtime':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // We're prerendering in a mode that does not abort. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve(underlyingParams);
}
function createStaticPrerenderParams(underlyingParams, workStore, prerenderStore) {
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(const key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return makeHangingParams(underlyingParams, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-ppr':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(const key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            return makeErroringParams(underlyingParams, fallbackParams, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-legacy':
            break;
        default:
            prerenderStore;
    }
    return makeUntrackedParams(underlyingParams);
}
function createRuntimePrerenderParams(underlyingParams, workUnitStore) {
    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedParams(underlyingParams));
}
function createRenderParamsInProd(underlyingParams) {
    return makeUntrackedParams(underlyingParams);
}
function createRenderParamsInDev(underlyingParams, devFallbackParams, workStore, requestStore) {
    let hasFallbackParams = false;
    if (devFallbackParams) {
        for(let key in underlyingParams){
            if (devFallbackParams.has(key)) {
                hasFallbackParams = true;
                break;
            }
        }
    }
    return makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams, hasFallbackParams, workStore, requestStore);
}
const CachedParams = new WeakMap();
const fallbackParamsProxyHandler = {
    get: function get(target, prop, receiver) {
        if (prop === 'then' || prop === 'catch' || prop === 'finally') {
            const originalMethod = _reflect.ReflectAdapter.get(target, prop, receiver);
            return ({
                [prop]: (...args)=>{
                    const store = _dynamicaccessasyncstorageexternal.dynamicAccessAsyncStorage.getStore();
                    if (store) {
                        store.abortController.abort(Object.defineProperty(new Error(`Accessed fallback \`params\` during prerendering.`), "__NEXT_ERROR_CODE", {
                            value: "E691",
                            enumerable: false,
                            configurable: true
                        }));
                    }
                    return new Proxy(originalMethod.apply(target, args), fallbackParamsProxyHandler);
                }
            })[prop];
        }
        return _reflect.ReflectAdapter.get(target, prop, receiver);
    }
};
function makeHangingParams(underlyingParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = new Proxy((0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`params`'), fallbackParamsProxyHandler);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeErroringParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const augmentedUnderlying = {
        ...underlyingParams
    };
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(augmentedUnderlying);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            if (fallbackParams.has(prop)) {
                Object.defineProperty(augmentedUnderlying, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when cacheComponents is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    enumerable: true
                });
            }
        }
    });
    return promise;
}
function makeUntrackedParams(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = Promise.resolve(underlyingParams);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams, hasFallbackParams, workStore, requestStore) {
    if (requestStore.asyncApiPromises && hasFallbackParams) {
        // We wrap each instance of params in a `new Promise()`, because deduping
        // them across requests doesn't work anyway and this let us show each
        // await a different set of values. This is important when all awaits
        // are in third party which would otherwise track all the way to the
        // internal params.
        const sharedParamsParent = requestStore.asyncApiPromises.sharedParamsParent;
        const promise = new Promise((resolve, reject)=>{
            sharedParamsParent.then(()=>resolve(underlyingParams), reject);
        });
        // @ts-expect-error
        promise.displayName = 'params';
        return instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore);
    }
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = hasFallbackParams ? (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingParams, requestStore, _stagedrendering.RenderStage.Runtime) : Promise.resolve(underlyingParams);
    const proxiedPromise = instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore);
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore) {
    // Track which properties we should warn for.
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    return new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            const expression = '`...params` or similar expression';
            warnForSyncAccess(workStore.route, expression);
            return Reflect.ownKeys(target);
        }
    });
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createParamsAccessError);
function createParamsAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E834",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=params.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
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
        const { workAsyncStorage } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
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
        const { createSearchParamsFromClient } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)");
        clientSearchParams = createSearchParamsFromClient(searchParams, store);
        const { createParamsFromClient } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)");
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    } else {
        const { createRenderSearchParamsFromClient } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
        const clientSearchParams = createRenderSearchParamsFromClient(searchParams);
        const { createRenderParamsFromClient } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
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
"[project]/AirSafeMove/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
        const { workAsyncStorage } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
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
        const { createParamsFromClient } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)");
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    } else {
        const { createRenderParamsFromClient } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
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
"[project]/AirSafeMove/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
}; //# sourceMappingURL=icon-mark.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/lib/framework/boundary-components.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MetadataBoundary: null,
    OutletBoundary: null,
    RootLayoutBoundary: null,
    ViewportBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MetadataBoundary: function() {
        return MetadataBoundary;
    },
    OutletBoundary: function() {
        return OutletBoundary;
    },
    RootLayoutBoundary: function() {
        return RootLayoutBoundary;
    },
    ViewportBoundary: function() {
        return ViewportBoundary;
    }
});
const _boundaryconstants = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/lib/framework/boundary-constants.js [app-client] (ecmascript)");
// We use a namespace object to allow us to recover the name of the function
// at runtime even when production bundling/minification is used.
const NameSpace = {
    [_boundaryconstants.METADATA_BOUNDARY_NAME]: function({ children }) {
        return children;
    },
    [_boundaryconstants.VIEWPORT_BOUNDARY_NAME]: function({ children }) {
        return children;
    },
    [_boundaryconstants.OUTLET_BOUNDARY_NAME]: function({ children }) {
        return children;
    },
    [_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME]: function({ children }) {
        return children;
    }
};
const MetadataBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.METADATA_BOUNDARY_NAME.slice(0)];
const ViewportBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.VIEWPORT_BOUNDARY_NAME.slice(0)];
const OutletBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.OUTLET_BOUNDARY_NAME.slice(0)];
const RootLayoutBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)]; //# sourceMappingURL=boundary-components.js.map
}),
]);

//# sourceMappingURL=8d5c3_next_dist_855dba54._.js.map