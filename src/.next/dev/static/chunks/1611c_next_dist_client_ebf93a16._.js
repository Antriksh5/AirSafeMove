(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/AirSafeMove/src/node_modules/next/dist/client/asset-prefix.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getAssetPrefix", {
    enumerable: true,
    get: function() {
        return getAssetPrefix;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
function getAssetPrefix() {
    const currentScript = document.currentScript;
    if (!(currentScript instanceof HTMLScriptElement)) {
        throw Object.defineProperty(new _invarianterror.InvariantError(`Expected document.currentScript to be a <script> element. Received ${currentScript} instead.`), "__NEXT_ERROR_CODE", {
            value: "E783",
            enumerable: false,
            configurable: true
        });
    }
    const { pathname } = new URL(currentScript.src);
    const nextIndex = pathname.indexOf('/_next/');
    if (nextIndex === -1) {
        throw Object.defineProperty(new _invarianterror.InvariantError(`Expected document.currentScript src to contain '/_next/'. Received ${currentScript.src} instead.`), "__NEXT_ERROR_CODE", {
            value: "E784",
            enumerable: false,
            configurable: true
        });
    }
    return pathname.slice(0, nextIndex);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=asset-prefix.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Before starting the Next.js runtime and requiring any module, we need to make
 * sure the following scripts are executed in the correct order:
 * - Polyfills
 * - next/script with `beforeInteractive` strategy
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "appBootstrap", {
    enumerable: true,
    get: function() {
        return appBootstrap;
    }
});
const _assetprefix = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/asset-prefix.js [app-client] (ecmascript)");
const _setattributesfromprops = (()=>{
    const e = new Error("Cannot find module './set-attributes-from-props'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const version = "16.1.4";
window.next = {
    version,
    appDir: true
};
function loadScriptsInSequence(scripts, hydrate) {
    if (!scripts || !scripts.length) {
        return hydrate();
    }
    return scripts.reduce((promise, [src, props])=>{
        return promise.then(()=>{
            return new Promise((resolve, reject)=>{
                const el = document.createElement('script');
                if (props) {
                    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
                }
                if (src) {
                    el.src = src;
                    el.onload = ()=>resolve();
                    el.onerror = reject;
                } else if (props) {
                    el.innerHTML = props.children;
                    setTimeout(resolve);
                }
                document.head.appendChild(el);
            });
        });
    }, Promise.resolve()).catch((err)=>{
        console.error(err);
    // Still try to hydrate even if there's an error.
    }).then(()=>{
        hydrate();
    });
}
function appBootstrap(hydrate) {
    const assetPrefix = (0, _assetprefix.getAssetPrefix)();
    loadScriptsInSequence(self.__next_s, ()=>{
        // If the static shell is being debugged, skip hydration if the
        // `__nextppronly` query is present. This is only enabled when the
        // environment variable `__NEXT_EXPERIMENTAL_STATIC_SHELL_DEBUGGING` is
        // set to `1`. Otherwise the following is optimized out.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        hydrate(assetPrefix);
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-bootstrap.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _httpaccessfallback = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
const _redirecterror = (()=>{
    const e = new Error("Cannot find module './redirect-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/lib/console.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatConsoleArgs: null,
    parseConsoleArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatConsoleArgs: function() {
        return formatConsoleArgs;
    },
    parseConsoleArgs: function() {
        return parseConsoleArgs;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
function formatObject(arg, depth) {
    switch(typeof arg){
        case 'object':
            if (arg === null) {
                return 'null';
            } else if (Array.isArray(arg)) {
                let result = '[';
                if (depth < 1) {
                    for(let i = 0; i < arg.length; i++){
                        if (result !== '[') {
                            result += ',';
                        }
                        if (Object.prototype.hasOwnProperty.call(arg, i)) {
                            result += formatObject(arg[i], depth + 1);
                        }
                    }
                } else {
                    result += arg.length > 0 ? '...' : '';
                }
                result += ']';
                return result;
            } else if (arg instanceof Error) {
                return arg + '';
            } else {
                const keys = Object.keys(arg);
                let result = '{';
                if (depth < 1) {
                    for(let i = 0; i < keys.length; i++){
                        const key = keys[i];
                        const desc = Object.getOwnPropertyDescriptor(arg, 'key');
                        if (desc && !desc.get && !desc.set) {
                            const jsonKey = JSON.stringify(key);
                            if (jsonKey !== '"' + key + '"') {
                                result += jsonKey + ': ';
                            } else {
                                result += key + ': ';
                            }
                            result += formatObject(desc.value, depth + 1);
                        }
                    }
                } else {
                    result += keys.length > 0 ? '...' : '';
                }
                result += '}';
                return result;
            }
        case 'string':
            return JSON.stringify(arg);
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'symbol':
        case 'undefined':
        case 'function':
        default:
            return String(arg);
    }
}
function formatConsoleArgs(args) {
    let message;
    let idx;
    if (typeof args[0] === 'string') {
        message = args[0];
        idx = 1;
    } else {
        message = '';
        idx = 0;
    }
    let result = '';
    let startQuote = false;
    for(let i = 0; i < message.length; ++i){
        const char = message[i];
        if (char !== '%' || i === message.length - 1 || idx >= args.length) {
            result += char;
            continue;
        }
        const code = message[++i];
        switch(code){
            case 'c':
                {
                    // TODO: We should colorize with HTML instead of turning into a string.
                    // Ignore for now.
                    result = startQuote ? `${result}]` : `[${result}`;
                    startQuote = !startQuote;
                    idx++;
                    break;
                }
            case 'O':
            case 'o':
                {
                    result += formatObject(args[idx++], 0);
                    break;
                }
            case 'd':
            case 'i':
                {
                    result += parseInt(args[idx++], 10);
                    break;
                }
            case 'f':
                {
                    result += parseFloat(args[idx++]);
                    break;
                }
            case 's':
                {
                    result += String(args[idx++]);
                    break;
                }
            default:
                result += '%' + code;
        }
    }
    for(; idx < args.length; idx++){
        result += (idx > 0 ? ' ' : '') + formatObject(args[idx], 0);
    }
    return result;
}
function parseConsoleArgs(args) {
    // See
    // https://github.com/facebook/react/blob/65a56d0e99261481c721334a3ec4561d173594cd/packages/react-devtools-shared/src/backend/flight/renderer.js#L88-L93
    //
    // Logs replayed from the server look like this:
    // [
    //   "%c%s%c%o\n\n%s\n\n%s\n",
    //   "background: #e6e6e6; ...",
    //   " Server ", // can also be e.g. " Prerender "
    //   "",
    //   Error,
    //   "The above error occurred in the <Page> component.",
    //   ...
    // ]
    if (args.length > 3 && typeof args[0] === 'string' && args[0].startsWith('%c%s%c') && typeof args[1] === 'string' && typeof args[2] === 'string' && typeof args[3] === 'string') {
        const environmentName = args[2];
        const maybeError = args[4];
        return {
            environmentName: environmentName.trim(),
            error: (0, _iserror.default)(maybeError) ? maybeError : null
        };
    }
    return {
        environmentName: null,
        error: null
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=console.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// imports polyfill from `@next/polyfill-module` after build.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
(()=>{
    const e = new Error("Cannot find module '../build/polyfills/polyfill-module'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// Only setup devtools in development
if ("TURBOPACK compile-time truthy", 1) {
    __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-setup.js [app-client] (ecmascript)");
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-globals.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const workAsyncStorage = typeof window === 'undefined' ? (()=>{
    const e = new Error("Cannot find module '../../server/app-render/work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})().workAsyncStorage : undefined;
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigationuntracked = (()=>{
    const e = new Error("Cannot find module './navigation-untracked'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _isnextroutererror = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _navfailurehandler = (()=>{
    const e = new Error("Cannot find module './nav-failure-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _handleisrerror = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
const _isbot = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // supplied custom global error signatures.
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _handleisrerror = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '28px',
        margin: '0 8px'
    }
};
function DefaultGlobalError({ error }) {
    const digest = error?.digest;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
        id: "__next_error__",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_handleisrerror.HandleISRError, {
                        error: error
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        style: styles.error,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsxs)("h2", {
                                    style: styles.text,
                                    children: [
                                        "Application error: a ",
                                        digest ? 'server' : 'client',
                                        "-side exception has occurred while loading ",
                                        window.location.hostname,
                                        " (see the",
                                        ' ',
                                        digest ? 'server logs' : 'browser console',
                                        " for more information)."
                                    ]
                                }),
                                digest ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    style: styles.text,
                                    children: `Digest: ${digest}`
                                }) : null
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
const _default = DefaultGlobalError;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=global-error.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// This file is only used in app router due to the specific error state handling.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    onCaughtError: null,
    onUncaughtError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    onCaughtError: function() {
        return onCaughtError;
    },
    onUncaughtError: function() {
        return onUncaughtError;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _reportglobalerror = (()=>{
    const e = new Error("Cannot find module './report-global-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorboundary = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
const devToolErrorMod = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/next-devtools/userspace/app/errors/index.js [app-client] (ecmascript)") : "TURBOPACK unreachable";
function onCaughtError(thrownValue, errorInfo) {
    const errorBoundaryComponent = errorInfo.errorBoundary?.constructor;
    let isImplicitErrorBoundary;
    if ("TURBOPACK compile-time truthy", 1) {
        const { AppDevOverlayErrorBoundary } = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)");
        isImplicitErrorBoundary = errorBoundaryComponent === AppDevOverlayErrorBoundary;
    }
    isImplicitErrorBoundary = isImplicitErrorBoundary || errorBoundaryComponent === _errorboundary.ErrorBoundaryHandler && errorInfo.errorBoundary.props.errorComponent === _globalerror.default;
    // Skip the segment explorer triggered error
    if ("TURBOPACK compile-time truthy", 1) {
        const { SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE } = (()=>{
            const e = new Error("Cannot find module '../../next-devtools/userspace/app/segment-explorer-node'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        if (thrownValue instanceof Error && thrownValue.message === SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE) {
            return;
        }
    }
    if (isImplicitErrorBoundary) {
        // We don't consider errors caught unless they're caught by an explicit error
        // boundary. The built-in ones are considered implicit.
        // This mimics how the same app would behave without Next.js.
        return onUncaughtError(thrownValue);
    }
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(thrownValue) || (0, _isnextroutererror.isNextRouterError)(thrownValue)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        const errorBoundaryName = errorBoundaryComponent?.displayName || errorBoundaryComponent?.name || 'Unknown';
        const componentThatErroredFrame = errorInfo?.componentStack?.split('\n')[1];
        // Match chrome or safari stack trace
        const matches = // example 1: at Page (http://localhost:3000/_next/static/chunks/pages/index.js?ts=1631600000000:2:1)
        // example 2: Page@http://localhost:3000/_next/static/chunks/pages/index.js?ts=1631600000000:2:1
        componentThatErroredFrame?.match(/\s+at (\w+)\s+|(\w+)@/) ?? [];
        const componentThatErroredName = matches[1] || matches[2] || 'Unknown';
        // Create error location with errored component and error boundary, to match the behavior of default React onCaughtError handler.
        const errorBoundaryMessage = `It was handled by the <${errorBoundaryName}> error boundary.`;
        const componentErrorMessage = ("TURBOPACK compile-time truthy", 1) ? `The above error occurred in the <${componentThatErroredName}> component.` : "TURBOPACK unreachable";
        const errorLocation = `${componentErrorMessage} ${errorBoundaryMessage}`;
        const error = devToolErrorMod.decorateDevError(thrownValue);
        // Log and report the error with location but without modifying the error stack
        devToolErrorMod.originConsoleError('%o\n\n%s', thrownValue, errorLocation);
        devToolErrorMod.handleClientError(error);
    } else //TURBOPACK unreachable
    ;
}
function onUncaughtError(thrownValue) {
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(thrownValue) || (0, _isnextroutererror.isNextRouterError)(thrownValue)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        const error = devToolErrorMod.decorateDevError(thrownValue);
        // TODO: Add an adendum to the overlay telling people about custom error boundaries.
        (0, _reportglobalerror.reportGlobalError)(error);
    } else //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary-callbacks.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _react = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './components/router-reducer/router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _useactionqueue = (()=>{
    const e = new Error("Cannot find module './components/use-action-queue'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _addpathprefix = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-client] (ecmascript)");
const _normalizetrailingslash = (()=>{
    const e = new Error("Cannot find module './normalize-trailing-slash'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _isbot = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './router-reducer/router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _routerreducer = (()=>{
    const e = new Error("Cannot find module './router-reducer/router-reducer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _react = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _isthenable = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/is-thenable.js [app-client] (ecmascript)");
const _types = (()=>{
    const e = new Error("Cannot find module './segment-cache/types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _prefetch = (()=>{
    const e = new Error("Cannot find module './segment-cache/prefetch'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _useactionqueue = (()=>{
    const e = new Error("Cannot find module './use-action-queue'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _addbasepath = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _approuterutils = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router-utils.js [app-client] (ecmascript)");
const _links = (()=>{
    const e = new Error("Cannot find module './links'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppRouterAnnouncer", {
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
});
const _react = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const ANNOUNCER_TYPE = 'next-route-announcer';
const ANNOUNCER_ID = '__next-route-announcer__';
function getAnnouncerNode() {
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer?.shadowRoot?.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = 'position:absolute';
        const announcer = document.createElement('div');
        announcer.ariaLive = 'assertive';
        announcer.id = ANNOUNCER_ID;
        announcer.role = 'alert';
        announcer.style.cssText = 'position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal';
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer({ tree }) {
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container?.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)('');
    const previousTitle = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(()=>{
        let currentTitle = '';
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector('h1');
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || '';
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined && previousTitle.current !== currentTitle) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _segment = (()=>{
    const e = new Error("Cannot find module '../../../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findHeadInCache", {
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
});
const _segment = (()=>{
    const e = new Error("Cannot find module '../../../../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _createroutercachekey = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function findHeadInCache(cache, parallelRoutes) {
    return findHeadInCacheImpl(cache, parallelRoutes, '', '');
}
function findHeadInCacheImpl(cache, parallelRoutes, keyPrefix, keyPrefixWithoutSearchParams) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        // Returns the entire Cache Node of the segment whose head we will render.
        return [
            cache,
            keyPrefix,
            keyPrefixWithoutSearchParams
        ];
    }
    // First try the 'children' parallel route if it exists
    // when starting from the "root", this corresponds with the main page component
    const parallelRoutesKeys = Object.keys(parallelRoutes).filter((key)=>key !== 'children');
    // if we are at the root, we need to check the children slot first
    if ('children' in parallelRoutes) {
        parallelRoutesKeys.unshift('children');
    }
    for (const key of parallelRoutesKeys){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        // If the parallel is not matched and using the default segment,
        // skip searching the head from it.
        if (segment === _segment.DEFAULT_SEGMENT_KEY) {
            continue;
        }
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheKeyWithoutSearchParams = (0, _createroutercachekey.createRouterCacheKey)(segment, true);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCacheImpl(cacheNode, childParallelRoutes, keyPrefix + '/' + cacheKey, keyPrefix + '/' + cacheKeyWithoutSearchParams);
        if (item) {
            return item;
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
} //# sourceMappingURL=find-head-in-cache.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _pathhasprefix = (()=>{
    const e = new Error("Cannot find module '../shared/lib/router/utils/path-has-prefix'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _interceptionroutes = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
const _segment = (()=>{
    const e = new Error("Cannot find module '../../../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _matchsegments = (()=>{
    const e = new Error("Cannot find module '../match-segments'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigationuntracked = (()=>{
    const e = new Error("Cannot find module '../navigation-untracked'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _httpaccessfallback = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
const _warnonce = (()=>{
    const e = new Error("Cannot find module '../../../shared/lib/utils/warn-once'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DevRootHTTPAccessFallbackBoundary: null,
    bailOnRootNotFound: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DevRootHTTPAccessFallbackBoundary: function() {
        return DevRootHTTPAccessFallbackBoundary;
    },
    bailOnRootNotFound: function() {
        return bailOnRootNotFound;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _errorboundary = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
function bailOnRootNotFound() {
    throw Object.defineProperty(new Error('notFound() is not allowed to use in root layout'), "__NEXT_ERROR_CODE", {
        value: "E192",
        enumerable: false,
        configurable: true
    });
}
function NotAllowedRootHTTPFallbackError() {
    bailOnRootNotFound();
    return null;
}
function DevRootHTTPAccessFallbackBoundary({ children }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.HTTPAccessFallbackBoundary, {
        notFound: /*#__PURE__*/ (0, _jsxruntime.jsx)(NotAllowedRootHTTPFallbackError, {}),
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-root-http-access-fallback-boundary.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/dev/debug-channel.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createDebugChannel: null,
    getOrCreateDebugChannelReadableWriterPair: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createDebugChannel: function() {
        return createDebugChannel;
    },
    getOrCreateDebugChannelReadableWriterPair: function() {
        return getOrCreateDebugChannelReadableWriterPair;
    }
});
const _approuterheaders = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const pairs = new Map();
function getOrCreateDebugChannelReadableWriterPair(requestId) {
    let pair = pairs.get(requestId);
    if (!pair) {
        const { readable, writable } = new TransformStream();
        pair = {
            readable,
            writer: writable.getWriter()
        };
        pairs.set(requestId, pair);
        pair.writer.closed.finally(()=>pairs.delete(requestId));
    }
    return pair;
}
function createDebugChannel(requestHeaders) {
    let requestId;
    if (requestHeaders) {
        requestId = requestHeaders[_approuterheaders.NEXT_REQUEST_ID_HEADER] ?? undefined;
        if (!requestId) {
            throw Object.defineProperty(new _invarianterror.InvariantError(`Expected a ${JSON.stringify(_approuterheaders.NEXT_REQUEST_ID_HEADER)} request header.`), "__NEXT_ERROR_CODE", {
                value: "E854",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        requestId = self.__next_r;
        if (!requestId) {
            throw Object.defineProperty(new _invarianterror.InvariantError(`Expected a request ID to be defined for the document via self.__next_r.`), "__NEXT_ERROR_CODE", {
                value: "E806",
                enumerable: false,
                configurable: true
            });
        }
    }
    const { readable } = getOrCreateDebugChannelReadableWriterPair(requestId);
    return {
        readable
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=debug-channel.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/// <reference types="webpack/module.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    performFullReload: null,
    processMessage: null,
    waitForWebpackRuntimeHotUpdate: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return HotReload;
    },
    performFullReload: function() {
        return performFullReload;
    },
    processMessage: function() {
        return processMessage;
    },
    waitForWebpackRuntimeHotUpdate: function() {
        return waitForWebpackRuntimeHotUpdate;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/strip-ansi/index.js [app-client] (ecmascript)"));
const _formatwebpackmessages = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/format-webpack-messages.js [app-client] (ecmascript)"));
const _shared = (()=>{
    const e = new Error("Cannot find module '../shared'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _nextdevtools = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/next-devtools/index.js (raw)");
const _replayssronlyerrors = (()=>{
    const e = new Error("Cannot find module '../../../../next-devtools/userspace/app/errors/replay-ssr-only-errors'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _appdevoverlayerrorboundary = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)");
const _useerrorhandler = (()=>{
    const e = new Error("Cannot find module '../../../../next-devtools/userspace/app/errors/use-error-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _runtimeerrorhandler = (()=>{
    const e = new Error("Cannot find module '../../runtime-error-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _websocket = (()=>{
    const e = new Error("Cannot find module './web-socket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _hotreloadertypes = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/server/dev/hot-reloader-types.js [app-client] (ecmascript)");
const _navigationuntracked = (()=>{
    const e = new Error("Cannot find module '../../../components/navigation-untracked'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _reporthmrlatency = /*#__PURE__*/ _interop_require_default._((()=>{
    const e = new Error("Cannot find module '../../report-hmr-latency'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _turbopackhotreloadercommon = (()=>{
    const e = new Error("Cannot find module '../turbopack-hot-reloader-common'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _approuterheaders = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _debugchannel = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/dev/debug-channel.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const createFromReadableStream = _client.createFromReadableStream;
let mostRecentCompilationHash = null;
let __nextDevClientId = Math.round(Math.random() * 100 + Date.now());
let reloading = false;
let webpackStartMsSinceEpoch = null;
const turbopackHmr = ("TURBOPACK compile-time truthy", 1) ? new _turbopackhotreloadercommon.TurbopackHmr() : "TURBOPACK unreachable";
let pendingHotUpdateWebpack = Promise.resolve();
let resolvePendingHotUpdateWebpack = ()=>{};
function setPendingHotUpdateWebpack() {
    pendingHotUpdateWebpack = new Promise((resolve)=>{
        resolvePendingHotUpdateWebpack = ()=>{
            resolve();
        };
    });
}
function waitForWebpackRuntimeHotUpdate() {
    return pendingHotUpdateWebpack;
}
// There is a newer version of the code available.
function handleAvailableHash(hash) {
    // Update last known compilation hash.
    mostRecentCompilationHash = hash;
}
/**
 * Is there a newer version of this code available?
 * For webpack: Check if the hash changed compared to __webpack_hash__
 * For Turbopack: Always true because it doesn't have __webpack_hash__
 */ function isUpdateAvailable() {
    if ("TURBOPACK compile-time truthy", 1) {
        return true;
    }
    //TURBOPACK unreachable
    ;
}
// Webpack disallows updates in other states.
function canApplyUpdates() {
    return module.hot.status() === 'idle';
}
function afterApplyUpdates(fn) {
    if (canApplyUpdates()) {
        fn();
    } else {
        function handler(status) {
            if (status === 'idle') {
                module.hot.removeStatusHandler(handler);
                fn();
            }
        }
        module.hot.addStatusHandler(handler);
    }
}
function performFullReload(err, sendMessage) {
    const stackTrace = err && (err.stack && err.stack.split('\n').slice(0, 5).join('\n') || err.message || err + '');
    sendMessage(JSON.stringify({
        event: 'client-full-reload',
        stackTrace,
        hadRuntimeError: !!_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError,
        dependencyChain: err ? err.dependencyChain : undefined
    }));
    if (reloading) return;
    reloading = true;
    window.location.reload();
}
// Attempt to update code on the fly, fall back to a hard reload.
function tryApplyUpdatesWebpack(sendMessage) {
    if (!isUpdateAvailable() || !canApplyUpdates()) {
        resolvePendingHotUpdateWebpack();
        _nextdevtools.dispatcher.onBuildOk();
        (0, _reporthmrlatency.default)(sendMessage, [], webpackStartMsSinceEpoch, Date.now());
        return;
    }
    function handleApplyUpdates(err, updatedModules) {
        if (err || _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError || updatedModules == null) {
            if (err) {
                console.warn(_shared.REACT_REFRESH_FULL_RELOAD);
            } else if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
            }
            performFullReload(err, sendMessage);
            return;
        }
        _nextdevtools.dispatcher.onBuildOk();
        if (isUpdateAvailable()) {
            // While we were updating, there was a new update! Do it again.
            tryApplyUpdatesWebpack(sendMessage);
            return;
        }
        _nextdevtools.dispatcher.onRefresh();
        resolvePendingHotUpdateWebpack();
        (0, _reporthmrlatency.default)(sendMessage, updatedModules, webpackStartMsSinceEpoch, Date.now());
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    // https://webpack.js.org/api/hot-module-replacement/#check
    module.hot.check(/* autoApply */ false).then((updatedModules)=>{
        if (updatedModules == null) {
            return null;
        }
        // We should always handle an update, even if updatedModules is empty (but
        // non-null) for any reason. That's what webpack would normally do:
        // https://github.com/webpack/webpack/blob/3aa6b6bc3a64/lib/hmr/HotModuleReplacement.runtime.js#L296-L298
        _nextdevtools.dispatcher.onBeforeRefresh();
        // https://webpack.js.org/api/hot-module-replacement/#apply
        return module.hot.apply();
    }).then((updatedModules)=>{
        handleApplyUpdates(null, updatedModules);
    }, (err)=>{
        handleApplyUpdates(err, null);
    });
}
function processMessage(message, sendMessage, processTurbopackMessage, staticIndicatorState) {
    function handleErrors(errors) {
        // "Massage" webpack messages.
        const formatted = (0, _formatwebpackmessages.default)({
            errors: errors,
            warnings: []
        });
        // Only show the first error.
        _nextdevtools.dispatcher.onBuildError(formatted.errors[0]);
        // Also log them to the console.
        for(let i = 0; i < formatted.errors.length; i++){
            console.error((0, _stripansi.default)(formatted.errors[i]));
        }
        // Do not attempt to reload now.
        // We will reload on next success instead.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    function handleHotUpdate() {
        if ("TURBOPACK compile-time truthy", 1) {
            const hmrUpdate = turbopackHmr.onBuilt();
            if (hmrUpdate != null) {
                (0, _reporthmrlatency.default)(sendMessage, [
                    ...hmrUpdate.updatedModules
                ], hmrUpdate.startMsSinceEpoch, hmrUpdate.endMsSinceEpoch, hmrUpdate.hasUpdates);
            }
            _nextdevtools.dispatcher.onBuildOk();
        } else //TURBOPACK unreachable
        ;
    }
    switch(message.type){
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.ISR_MANIFEST:
            {
                if ("TURBOPACK compile-time truthy", 1) {
                    staticIndicatorState.appIsrManifest = message.data;
                    // Handle the initial static indicator status on receiving the ISR
                    // manifest. Navigation is handled in an effect inside HotReload for
                    // pathname changes as we'll receive the updated manifest before
                    // usePathname triggers for a new value.
                    const isStatic = staticIndicatorState.pathname ? message.data[staticIndicatorState.pathname] : undefined;
                    _nextdevtools.dispatcher.onStaticIndicator(isStatic === undefined ? 'pending' : isStatic ? 'static' : 'dynamic');
                }
                break;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.BUILDING:
            {
                _nextdevtools.dispatcher.buildingIndicatorShow();
                if ("TURBOPACK compile-time truthy", 1) {
                    turbopackHmr.onBuilding();
                } else //TURBOPACK unreachable
                ;
                break;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.BUILT:
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.SYNC:
            {
                _nextdevtools.dispatcher.buildingIndicatorHide();
                if (message.hash) {
                    handleAvailableHash(message.hash);
                }
                const { errors, warnings } = message;
                // Is undefined when it's a 'built' event
                if ('versionInfo' in message) _nextdevtools.dispatcher.onVersionInfo(message.versionInfo);
                if ('debug' in message && message.debug) _nextdevtools.dispatcher.onDebugInfo(message.debug);
                if ('devIndicator' in message) _nextdevtools.dispatcher.onDevIndicator(message.devIndicator);
                if ('devToolsConfig' in message) _nextdevtools.dispatcher.onDevToolsConfig(message.devToolsConfig);
                const hasErrors = Boolean(errors && errors.length);
                // Compilation with errors (e.g. syntax error or missing modules).
                if (hasErrors) {
                    sendMessage(JSON.stringify({
                        event: 'client-error',
                        errorCount: errors.length,
                        clientId: __nextDevClientId
                    }));
                    handleErrors(errors);
                    return;
                }
                const hasWarnings = Boolean(warnings && warnings.length);
                if (hasWarnings) {
                    sendMessage(JSON.stringify({
                        event: 'client-warning',
                        warningCount: warnings.length,
                        clientId: __nextDevClientId
                    }));
                    // Print warnings to the console.
                    const formattedMessages = (0, _formatwebpackmessages.default)({
                        warnings: warnings,
                        errors: []
                    });
                    for(let i = 0; i < formattedMessages.warnings.length; i++){
                        if (i === 5) {
                            console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
                            break;
                        }
                        console.warn((0, _stripansi.default)(formattedMessages.warnings[i]));
                    }
                // No early return here as we need to apply modules in the same way between warnings only and compiles without warnings
                }
                sendMessage(JSON.stringify({
                    event: 'client-success',
                    clientId: __nextDevClientId
                }));
                if (message.type === _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.BUILT) {
                    handleHotUpdate();
                }
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.TURBOPACK_CONNECTED:
            {
                processTurbopackMessage({
                    type: _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.TURBOPACK_CONNECTED,
                    data: {
                        sessionId: message.data.sessionId
                    }
                });
                break;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.TURBOPACK_MESSAGE:
            {
                turbopackHmr.onTurbopackMessage(message);
                _nextdevtools.dispatcher.onBeforeRefresh();
                processTurbopackMessage({
                    type: _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.TURBOPACK_MESSAGE,
                    data: message.data
                });
                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                    performFullReload(null, sendMessage);
                }
                _nextdevtools.dispatcher.onRefresh();
                break;
            }
        // TODO-APP: make server component change more granular
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.SERVER_COMPONENT_CHANGES:
            {
                turbopackHmr?.onServerComponentChanges();
                sendMessage(JSON.stringify({
                    event: 'server-component-reload-page',
                    clientId: __nextDevClientId,
                    hash: message.hash
                }));
                // Store the latest hash in a session cookie so that it's sent back to the
                // server with any subsequent requests.
                document.cookie = `${_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE}=${message.hash};path=/`;
                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError || document.documentElement.id === '__next_error__') {
                    if (reloading) return;
                    reloading = true;
                    return window.location.reload();
                }
                (0, _react.startTransition)(()=>{
                    _approuterinstance.publicAppRouterInstance.hmrRefresh();
                    _nextdevtools.dispatcher.onRefresh();
                });
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.RELOAD_PAGE:
            {
                turbopackHmr?.onReloadPage();
                sendMessage(JSON.stringify({
                    event: 'client-reload-page',
                    clientId: __nextDevClientId
                }));
                if (reloading) return;
                reloading = true;
                return window.location.reload();
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.ADDED_PAGE:
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REMOVED_PAGE:
            {
                turbopackHmr?.onPageAddRemove();
                // TODO-APP: potentially only refresh if the currently viewed page was added/removed.
                return _approuterinstance.publicAppRouterInstance.hmrRefresh();
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.SERVER_ERROR:
            {
                const { errorJSON } = message;
                if (errorJSON) {
                    const errorObject = JSON.parse(errorJSON);
                    const error = Object.defineProperty(new Error(errorObject.message), "__NEXT_ERROR_CODE", {
                        value: "E394",
                        enumerable: false,
                        configurable: true
                    });
                    error.stack = errorObject.stack;
                    handleErrors([
                        error
                    ]);
                }
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.DEV_PAGES_MANIFEST_UPDATE:
            {
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.DEVTOOLS_CONFIG:
            {
                _nextdevtools.dispatcher.onDevToolsConfig(message.data);
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REACT_DEBUG_CHUNK:
            {
                const { requestId, chunk } = message;
                const { writer } = (0, _debugchannel.getOrCreateDebugChannelReadableWriterPair)(requestId);
                if (chunk) {
                    writer.ready.then(()=>writer.write(chunk)).catch(console.error);
                } else {
                    // A null chunk signals that no more chunks will be sent, which allows
                    // us to close the writer.
                    // TODO: Revisit this cleanup logic when we integrate the return channel
                    // that keeps the connection open to be able to lazily retrieve debug
                    // objects.
                    writer.ready.then(()=>writer.close()).catch(console.error);
                }
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REQUEST_CURRENT_ERROR_STATE:
            {
                const errorState = (0, _nextdevtools.getSerializedOverlayState)();
                const response = {
                    event: _hotreloadertypes.HMR_MESSAGE_SENT_TO_SERVER.MCP_ERROR_STATE_RESPONSE,
                    requestId: message.requestId,
                    errorState,
                    url: window.location.href
                };
                sendMessage(JSON.stringify(response));
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.REQUEST_PAGE_METADATA:
            {
                const segmentTrieData = (0, _nextdevtools.getSegmentTrieData)();
                const response = {
                    event: _hotreloadertypes.HMR_MESSAGE_SENT_TO_SERVER.MCP_PAGE_METADATA_RESPONSE,
                    requestId: message.requestId,
                    segmentTrieData,
                    url: window.location.href
                };
                sendMessage(JSON.stringify(response));
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.CACHE_INDICATOR:
            {
                _nextdevtools.dispatcher.onCacheIndicator(message.state);
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.ERRORS_TO_SHOW_IN_BROWSER:
            {
                createFromReadableStream(new ReadableStream({
                    start (controller) {
                        controller.enqueue(message.serializedErrors);
                        controller.close();
                    }
                }), {
                    findSourceMapURL: _appfindsourcemapurl.findSourceMapURL
                }).then((errors)=>{
                    for (const error of errors){
                        console.error(error);
                    }
                }, (err)=>{
                    console.error(Object.defineProperty(new Error('Failed to deserialize errors.', {
                        cause: err
                    }), "__NEXT_ERROR_CODE", {
                        value: "E946",
                        enumerable: false,
                        configurable: true
                    }));
                });
                return;
            }
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.MIDDLEWARE_CHANGES:
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.CLIENT_CHANGES:
        case _hotreloadertypes.HMR_MESSAGE_SENT_TO_BROWSER.SERVER_ONLY_CHANGES:
            break;
        default:
            {
                message;
            }
    }
}
function HotReload({ children, globalError, webSocket, staticIndicatorState }) {
    (0, _useerrorhandler.useErrorHandler)(_nextdevtools.dispatcher.onUnhandledError, _nextdevtools.dispatcher.onUnhandledRejection);
    (0, _websocket.useWebSocketPing)(webSocket);
    // We don't want access of the pathname for the dev tools to trigger a dynamic
    // access (as the dev overlay will never be present in production).
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    if ("TURBOPACK compile-time truthy", 1) {
        // this conditional is only for dead-code elimination which
        // isn't a runtime conditional only build-time so ignore hooks rule
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, _react.useEffect)(()=>{
            if (!staticIndicatorState) {
                throw Object.defineProperty(new _invarianterror.InvariantError('Expected staticIndicatorState to be defined in dev mode.'), "__NEXT_ERROR_CODE", {
                    value: "E786",
                    enumerable: false,
                    configurable: true
                });
            }
            staticIndicatorState.pathname = pathname;
            if (staticIndicatorState.appIsrManifest) {
                const isStatic = pathname ? staticIndicatorState.appIsrManifest[pathname] : undefined;
                _nextdevtools.dispatcher.onStaticIndicator(isStatic === undefined ? 'pending' : isStatic ? 'static' : 'dynamic');
            }
        }, [
            pathname,
            staticIndicatorState
        ]);
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_appdevoverlayerrorboundary.AppDevOverlayErrorBoundary, {
        globalError: globalError,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_replayssronlyerrors.ReplaySsrOnlyErrors, {
                onBlockingError: _nextdevtools.dispatcher.openErrorOverlay
            }),
            children
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hot-reloader-app.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AppRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './router-reducer/router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _useactionqueue = (()=>{
    const e = new Error("Cannot find module './use-action-queue'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _approuterannouncer = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)");
const _redirectboundary = (()=>{
    const e = new Error("Cannot find module './redirect-boundary'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _findheadincache = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)");
const _unresolvedthenable = (()=>{
    const e = new Error("Cannot find module './unresolved-thenable'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _removebasepath = (()=>{
    const e = new Error("Cannot find module '../remove-base-path'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _hasbasepath = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
const _computechangedpath = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
const _navfailurehandler = (()=>{
    const e = new Error("Cannot find module './nav-failure-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _approuterinstance = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _redirect = (()=>{
    const e = new Error("Cannot find module './redirect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _redirecterror = (()=>{
    const e = new Error("Cannot find module './redirect-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _links = (()=>{
    const e = new Error("Cannot find module './links'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _rooterrorboundary = /*#__PURE__*/ _interop_require_default._((()=>{
    const e = new Error("Cannot find module './errors/root-error-boundary'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
const _boundarycomponents = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/lib/framework/boundary-components.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
const globalMutable = {};
function HistoryUpdater({ appRouterState }) {
    (0, _react.useInsertionEffect)(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const { tree, pushRef, canonicalUrl, renderedSearch } = appRouterState;
        const appHistoryState = {
            tree,
            renderedSearch
        };
        // TODO: Use Navigation API if available
        const historyState = {
            ...pushRef.preserveCustomHistoryState ? window.history.state : {},
            // Identifier is shortened intentionally.
            // __NA is used to identify if the history entry can be handled by the app-router.
            // __N is used to identify if the history entry can be handled by the old router.
            __NA: true,
            __PRIVATE_NEXTJS_INTERNALS_TREE: appHistoryState
        };
        if (pushRef.pendingPush && // Skip pushing an additional history entry if the canonicalUrl is the same as the current url.
        // This mirrors the browser behavior for normal navigation.
        (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, '', canonicalUrl);
        } else {
            window.history.replaceState(historyState, '', canonicalUrl);
        }
    }, [
        appRouterState
    ]);
    (0, _react.useEffect)(()=>{
        // The Next-Url and the base tree may affect the result of a prefetch
        // task. Re-prefetch all visible links with the updated values. In most
        // cases, this will not result in any new network requests, only if
        // the prefetch result actually varies on one of these inputs.
        (0, _links.pingVisibleLinks)(appRouterState.nextUrl, appRouterState.tree);
    }, [
        appRouterState.nextUrl,
        appRouterState.tree
    ]);
    return null;
}
function copyNextJsInternalHistoryState(data) {
    if (data == null) data = {};
    const currentState = window.history.state;
    const __NA = currentState?.__NA;
    if (__NA) {
        data.__NA = __NA;
    }
    const __PRIVATE_NEXTJS_INTERNALS_TREE = currentState?.__PRIVATE_NEXTJS_INTERNALS_TREE;
    if (__PRIVATE_NEXTJS_INTERNALS_TREE) {
        data.__PRIVATE_NEXTJS_INTERNALS_TREE = __PRIVATE_NEXTJS_INTERNALS_TREE;
    }
    return data;
}
function Head({ headCacheNode }) {
    // If this segment has a `prefetchHead`, it's the statically prefetched data.
    // We should use that on initial render instead of `head`. Then we'll switch
    // to `head` when the dynamic response streams in.
    const head = headCacheNode !== null ? headCacheNode.head : null;
    const prefetchHead = headCacheNode !== null ? headCacheNode.prefetchHead : null;
    // If no prefetch data is available, then we go straight to rendering `head`.
    const resolvedPrefetchRsc = prefetchHead !== null ? prefetchHead : head;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    return (0, _react.useDeferredValue)(head, resolvedPrefetchRsc);
}
/**
 * The global router that wraps the application components.
 */ function Router({ actionQueue, globalError, webSocket, staticIndicatorState }) {
    const state = (0, _useactionqueue.useActionQueue)(actionQueue);
    const { canonicalUrl } = state;
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl, typeof window === 'undefined' ? 'http://n' : window.location.href);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: (0, _hasbasepath.hasBasePath)(url.pathname) ? (0, _removebasepath.removeBasePath)(url.pathname) : url.pathname
        };
    }, [
        canonicalUrl
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const { cache, tree } = state;
        // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, _react.useEffect)(()=>{
            // Add `window.nd` for debugging purposes.
            // This is not meant for use in applications as concurrent rendering will affect the cache/tree/router.
            // @ts-ignore this is for debugging
            window.nd = {
                router: _approuterinstance.publicAppRouterInstance,
                cache,
                tree
            };
        }, [
            cache,
            tree
        ]);
    }
    (0, _react.useEffect)(()=>{
        // If the app is restored from bfcache, it's possible that
        // pushRef.mpaNavigation is true, which would mean that any re-render of this component
        // would trigger the mpa navigation logic again from the lines below.
        // This will restore the router to the initial state in the event that the app is restored from bfcache.
        function handlePageShow(event) {
            if (!event.persisted || !window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE) {
                return;
            }
            // Clear the pendingMpaPath value so that a subsequent MPA navigation to the same URL can be triggered.
            // This is necessary because if the browser restored from bfcache, the pendingMpaPath would still be set to the value
            // of the last MPA navigation.
            globalMutable.pendingMpaPath = undefined;
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                historyState: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE
            });
        }
        window.addEventListener('pageshow', handlePageShow);
        return ()=>{
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, []);
    (0, _react.useEffect)(()=>{
        // Ensure that any redirect errors that bubble up outside of the RedirectBoundary
        // are caught and handled by the router.
        function handleUnhandledRedirect(event) {
            const error = 'reason' in event ? event.reason : event.error;
            if ((0, _redirecterror.isRedirectError)(error)) {
                event.preventDefault();
                const url = (0, _redirect.getURLFromRedirectError)(error);
                const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
                // TODO: This should access the router methods directly, rather than
                // go through the public interface.
                if (redirectType === _redirecterror.RedirectType.push) {
                    _approuterinstance.publicAppRouterInstance.push(url, {});
                } else {
                    _approuterinstance.publicAppRouterInstance.replace(url, {});
                }
            }
        }
        window.addEventListener('error', handleUnhandledRedirect);
        window.addEventListener('unhandledrejection', handleUnhandledRedirect);
        return ()=>{
            window.removeEventListener('error', handleUnhandledRedirect);
            window.removeEventListener('unhandledrejection', handleUnhandledRedirect);
        };
    }, []);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    const { pushRef } = state;
    if (pushRef.mpaNavigation) {
        // if there's a re-render, we don't want to trigger another redirect if one is already in flight to the same URL
        if (globalMutable.pendingMpaPath !== canonicalUrl) {
            const location = window.location;
            if (pushRef.pendingPush) {
                location.assign(canonicalUrl);
            } else {
                location.replace(canonicalUrl);
            }
            globalMutable.pendingMpaPath = canonicalUrl;
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        // NOTE: This is intentionally using `throw` instead of `use` because we're
        // inside an externally mutable condition (pushRef.mpaNavigation), which
        // violates the rules of hooks.
        throw _unresolvedthenable.unresolvedThenable;
    }
    (0, _react.useEffect)(()=>{
        const originalPushState = window.history.pushState.bind(window.history);
        const originalReplaceState = window.history.replaceState.bind(window.history);
        // Ensure the canonical URL in the Next.js Router is updated when the URL is changed so that `usePathname` and `useSearchParams` hold the pushed values.
        const applyUrlFromHistoryPushReplace = (url)=>{
            const href = window.location.href;
            const appHistoryState = window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE;
            (0, _react.startTransition)(()=>{
                (0, _useactionqueue.dispatchAppRouterAction)({
                    type: _routerreducertypes.ACTION_RESTORE,
                    url: new URL(url ?? href, href),
                    historyState: appHistoryState
                });
            });
        };
        /**
     * Patch pushState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.pushState = function pushState(data, _unused, url) {
            // TODO: Warn when Navigation API is available (navigation.navigate() should be used)
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if (data?.__NA || data?._N) {
                return originalPushState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalPushState(data, _unused, url);
        };
        /**
     * Patch replaceState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.replaceState = function replaceState(data, _unused, url) {
            // TODO: Warn when Navigation API is available (navigation.navigate() should be used)
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if (data?.__NA || data?._N) {
                return originalReplaceState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalReplaceState(data, _unused, url);
        };
        /**
     * Handle popstate event, this is used to handle back/forward in the browser.
     * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
     * That case can happen when the old router injected the history entry.
     */ const onPopState = (event)=>{
            if (!event.state) {
                // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
                return;
            }
            // This case happens when the history entry was pushed by the `pages` router.
            if (!event.state.__NA) {
                window.location.reload();
                return;
            }
            // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
            // Without startTransition works if the cache is there for this path
            (0, _react.startTransition)(()=>{
                (0, _approuterinstance.dispatchTraverseAction)(window.location.href, event.state.__PRIVATE_NEXTJS_INTERNALS_TREE);
            });
        };
        // Register popstate event to call onPopstate.
        window.addEventListener('popstate', onPopState);
        return ()=>{
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
            window.removeEventListener('popstate', onPopState);
        };
    }, []);
    const { cache, tree, nextUrl, focusAndScrollRef, previousNextUrl } = state;
    const matchingHead = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    // Add memoized pathParams for useParams.
    const pathParams = (0, _react.useMemo)(()=>{
        return (0, _computechangedpath.getSelectedParams)(tree);
    }, [
        tree
    ]);
    // Create instrumented promises for navigation hooks (dev-only)
    // These are specially instrumented promises to show in the Suspense DevTools
    // Promises are cached outside of render to survive suspense retries.
    let instrumentedNavigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createRootNavigationPromises } = (()=>{
            const e = new Error("Cannot find module './navigation-devtools'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        instrumentedNavigationPromises = createRootNavigationPromises(tree, pathname, searchParams, pathParams);
    }
    const layoutRouterContext = (0, _react.useMemo)(()=>{
        return {
            parentTree: tree,
            parentCacheNode: cache,
            parentSegmentPath: null,
            parentParams: {},
            // This is the <Activity> "name" that shows up in the Suspense DevTools.
            // It represents the root of the app.
            debugNameContext: '/',
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl,
            // Root segment is always active
            isActive: true
        };
    }, [
        tree,
        cache,
        canonicalUrl
    ]);
    const globalLayoutRouterContext = (0, _react.useMemo)(()=>{
        return {
            tree,
            focusAndScrollRef,
            nextUrl,
            previousNextUrl
        };
    }, [
        tree,
        focusAndScrollRef,
        nextUrl,
        previousNextUrl
    ]);
    let head;
    if (matchingHead !== null) {
        // The head is wrapped in an extra component so we can use
        // `useDeferredValue` to swap between the prefetched and final versions of
        // the head. (This is what LayoutRouter does for segment data, too.)
        //
        // The `key` is used to remount the component whenever the head moves to
        // a different segment.
        const [headCacheNode, headKey, headKeyWithoutSearchParams] = matchingHead;
        head = /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {
            headCacheNode: headCacheNode
        }, typeof window === 'undefined' ? headKeyWithoutSearchParams : headKey);
    } else {
        head = null;
    }
    let content = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
        children: [
            head,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_boundarycomponents.RootLayoutBoundary, {
                children: cache.rsc
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuterannouncer.AppRouterAnnouncer, {
                tree: tree
            })
        ]
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // In development, we apply few error boundaries and hot-reloader:
        // - DevRootHTTPAccessFallbackBoundary: avoid using navigation API like notFound() in root layout
        // - HotReloader:
        //  - hot-reload the app when the code changes
        //  - render dev overlay
        //  - catch runtime errors and display global-error when necessary
        if (typeof window !== 'undefined') {
            const { DevRootHTTPAccessFallbackBoundary } = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js [app-client] (ecmascript)");
            content = /*#__PURE__*/ (0, _jsxruntime.jsx)(DevRootHTTPAccessFallbackBoundary, {
                children: content
            });
        }
        const HotReloader = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)").default;
        content = /*#__PURE__*/ (0, _jsxruntime.jsx)(HotReloader, {
            globalError: globalError,
            webSocket: webSocket,
            staticIndicatorState: staticIndicatorState,
            children: content
        });
    } else //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(HistoryUpdater, {
                appRouterState: state
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(RuntimeStyles, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
                value: instrumentedNavigationPromises,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathParamsContext.Provider, {
                    value: pathParams,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathnameContext.Provider, {
                        value: pathname,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.SearchParamsContext.Provider, {
                            value: searchParams,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.GlobalLayoutRouterContext.Provider, {
                                value: globalLayoutRouterContext,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.AppRouterContext.Provider, {
                                    value: _approuterinstance.publicAppRouterInstance,
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
                                        value: layoutRouterContext,
                                        children: content
                                    })
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
function AppRouter({ actionQueue, globalErrorState, webSocket, staticIndicatorState }) {
    (0, _navfailurehandler.useNavFailureHandler)();
    const router = /*#__PURE__*/ (0, _jsxruntime.jsx)(Router, {
        actionQueue: actionQueue,
        globalError: globalErrorState,
        webSocket: webSocket,
        staticIndicatorState: staticIndicatorState
    });
    // At the very top level, use the default GlobalError component as the final fallback.
    // When the app router itself fails, which means the framework itself fails, we show the default error.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_rooterrorboundary.default, {
        errorComponent: _globalerror.default,
        children: router
    });
}
const runtimeStyles = new Set();
let runtimeStyleChanged = new Set();
globalThis._N_E_STYLE_LOAD = function(href) {
    let len = runtimeStyles.size;
    runtimeStyles.add(href);
    if (runtimeStyles.size !== len) {
        runtimeStyleChanged.forEach((cb)=>cb());
    }
    // TODO figure out how to get a promise here
    // But maybe it's not necessary as react would block rendering until it's loaded
    return Promise.resolve();
};
function RuntimeStyles() {
    const [, forceUpdate] = _react.default.useState(0);
    const renderedStylesSize = runtimeStyles.size;
    (0, _react.useEffect)(()=>{
        const changed = ()=>forceUpdate((c)=>c + 1);
        runtimeStyleChanged.add(changed);
        if (renderedStylesSize !== runtimeStyles.size) {
            changed();
        }
        return ()=>{
            runtimeStyleChanged.delete(changed);
        };
    }, [
        renderedStylesSize,
        forceUpdate
    ]);
    const dplId = (0, _deploymentid.getDeploymentIdQueryOrEmptyString)();
    return [
        ...runtimeStyles
    ].map((href, i)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "stylesheet",
            href: `${href}${dplId}`,
            // @ts-ignore
            precedence: "next"
        }, i));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _segment = (()=>{
    const e = new Error("Cannot find module '../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _routeparams = (()=>{
    const e = new Error("Cannot find module './route-params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createInitialRouterState", {
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
});
const _createhreffromurl = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _computechangedpath = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _pprnavigations = (()=>{
    const e = new Error("Cannot find module './ppr-navigations'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function createInitialRouterState({ navigatedAt, initialFlightData, initialCanonicalUrlParts, initialRenderedSearch, location }) {
    // When initialized on the server, the canonical URL is provided as an array of parts.
    // This is to ensure that when the RSC payload streamed to the client, crawlers don't interpret it
    // as a URL that should be crawled.
    const initialCanonicalUrl = initialCanonicalUrlParts.join('/');
    const normalizedFlightData = (0, _flightdatahelpers.getFlightDataPartsFromPath)(initialFlightData[0]);
    const { tree: initialTree, seedData: initialSeedData, head: initialHead } = normalizedFlightData;
    // For the SSR render, seed data should always be available (we only send back a `null` response
    // in the case of a `loading` segment, pre-PPR.)
    const canonicalUrl = // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
    location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl;
    const initialState = {
        tree: initialTree,
        cache: (0, _pprnavigations.createInitialCacheNodeForHydration)(navigatedAt, initialTree, initialSeedData, initialHead),
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // First render needs to preserve the previous window.history.state
            // to avoid it being overwritten on navigation back/forward with MPA Navigation.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: {
            apply: false,
            onlyHashChange: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl,
        renderedSearch: initialRenderedSearch,
        nextUrl: ((0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || location?.pathname) ?? null,
        previousNextUrl: null,
        debugInfo: null
    };
    return initialState;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/AirSafeMove/src/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "linkGc", {
    enumerable: true,
    get: function() {
        return linkGc;
    }
});
function linkGc() {
    // TODO-APP: Remove this logic when Float has GC built-in in development.
    if ("TURBOPACK compile-time truthy", 1) {
        const callback = (mutationList)=>{
            for (const mutation of mutationList){
                if (mutation.type === 'childList') {
                    for (const node of mutation.addedNodes){
                        if ('tagName' in node && node.tagName === 'LINK') {
                            const link = node;
                            if (link.dataset.precedence?.startsWith('next')) {
                                const href = link.getAttribute('href');
                                if (href) {
                                    const [resource, version] = href.split('?v=', 2);
                                    if (version) {
                                        const currentOrigin = window.location.origin;
                                        const allLinks = [
                                            ...document.querySelectorAll('link[href^="' + resource + '"]'),
                                            // It's possible that the resource is a full URL or only pathname,
                                            // so we need to remove the alternative href as well.
                                            ...document.querySelectorAll('link[href^="' + (resource.startsWith(currentOrigin) ? resource.slice(currentOrigin.length) : currentOrigin + resource) + '"]')
                                        ];
                                        for (const otherLink of allLinks){
                                            if (otherLink.dataset.precedence?.startsWith('next')) {
                                                const otherHref = otherLink.getAttribute('href');
                                                if (otherHref) {
                                                    const [, otherVersion] = otherHref.split('?v=', 2);
                                                    if (!otherVersion || +otherVersion < +version) {
                                                        // Delay the removal of the stylesheet to avoid FOUC
                                                        // caused by `@font-face` rules, as they seem to be
                                                        // a couple of ticks delayed between the old and new
                                                        // styles being swapped even if the font is cached.
                                                        setTimeout(()=>{
                                                            otherLink.remove();
                                                        }, 5);
                                                        const preloadLink = document.querySelector(`link[rel="preload"][as="style"][href="${otherHref}"]`);
                                                        if (preloadLink) {
                                                            preloadLink.remove();
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        observer.observe(document.head, {
            childList: true
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-link-gc.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hydrate", {
    enumerable: true,
    get: function() {
        return hydrate;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)");
const _client = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _client1 = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _onrecoverableerror = (()=>{
    const e = new Error("Cannot find module './react-client-callbacks/on-recoverable-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorboundarycallbacks = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)");
const _appcallserver = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _approuter = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)"));
const _createinitialrouterstate = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _appbuildid = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
/// <reference types="react-dom/experimental" />
const createFromReadableStream = _client1.createFromReadableStream;
const createFromFetch = _client1.createFromFetch;
const appElement = document;
const encoder = new TextEncoder();
let initialServerDataBuffer = undefined;
let initialServerDataWriter = undefined;
let initialServerDataLoaded = false;
let initialServerDataFlushed = false;
let initialFormStateData = null;
function nextServerDataCallback(seg) {
    if (seg[0] === 0) {
        initialServerDataBuffer = [];
    } else if (seg[0] === 1) {
        if (!initialServerDataBuffer) throw Object.defineProperty(new Error('Unexpected server data: missing bootstrap script.'), "__NEXT_ERROR_CODE", {
            value: "E18",
            enumerable: false,
            configurable: true
        });
        if (initialServerDataWriter) {
            initialServerDataWriter.enqueue(encoder.encode(seg[1]));
        } else {
            initialServerDataBuffer.push(seg[1]);
        }
    } else if (seg[0] === 2) {
        initialFormStateData = seg[1];
    } else if (seg[0] === 3) {
        if (!initialServerDataBuffer) throw Object.defineProperty(new Error('Unexpected server data: missing bootstrap script.'), "__NEXT_ERROR_CODE", {
            value: "E18",
            enumerable: false,
            configurable: true
        });
        // Decode the base64 string back to binary data.
        const binaryString = atob(seg[1]);
        const decodedChunk = new Uint8Array(binaryString.length);
        for(var i = 0; i < binaryString.length; i++){
            decodedChunk[i] = binaryString.charCodeAt(i);
        }
        if (initialServerDataWriter) {
            initialServerDataWriter.enqueue(decodedChunk);
        } else {
            initialServerDataBuffer.push(decodedChunk);
        }
    }
}
function isStreamErrorOrUnfinished(ctr) {
    // If `desiredSize` is null, it means the stream is closed or errored. If it is lower than 0, the stream is still unfinished.
    return ctr.desiredSize === null || ctr.desiredSize < 0;
}
// There might be race conditions between `nextServerDataRegisterWriter` and
// `DOMContentLoaded`. The former will be called when React starts to hydrate
// the root, the latter will be called when the DOM is fully loaded.
// For streaming, the former is called first due to partial hydration.
// For non-streaming, the latter can be called first.
// Hence, we use two variables `initialServerDataLoaded` and
// `initialServerDataFlushed` to make sure the writer will be closed and
// `initialServerDataBuffer` will be cleared in the right time.
function nextServerDataRegisterWriter(ctr) {
    if (initialServerDataBuffer) {
        initialServerDataBuffer.forEach((val)=>{
            ctr.enqueue(typeof val === 'string' ? encoder.encode(val) : val);
        });
        if (initialServerDataLoaded && !initialServerDataFlushed) {
            if (isStreamErrorOrUnfinished(ctr)) {
                ctr.error(Object.defineProperty(new Error('The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection.'), "__NEXT_ERROR_CODE", {
                    value: "E117",
                    enumerable: false,
                    configurable: true
                }));
            } else {
                ctr.close();
            }
            initialServerDataFlushed = true;
            initialServerDataBuffer = undefined;
        }
    }
    initialServerDataWriter = ctr;
}
// When `DOMContentLoaded`, we can close all pending writers to finish hydration.
const DOMContentLoaded = function() {
    if (initialServerDataWriter && !initialServerDataFlushed) {
        initialServerDataWriter.close();
        initialServerDataFlushed = true;
        initialServerDataBuffer = undefined;
    }
    initialServerDataLoaded = true;
};
// It's possible that the DOM is already loaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
} else {
    // Delayed in marco task to ensure it's executed later than hydration
    setTimeout(DOMContentLoaded);
}
const nextServerDataLoadingGlobal = self.__next_f = self.__next_f || [];
// Consume all buffered chunks and clear the global data array right after to release memory.
// Otherwise it will be retained indefinitely.
nextServerDataLoadingGlobal.forEach(nextServerDataCallback);
nextServerDataLoadingGlobal.length = 0;
// Patch its push method so subsequent chunks are handled (but not actually pushed to the array).
nextServerDataLoadingGlobal.push = nextServerDataCallback;
const readable = new ReadableStream({
    start (controller) {
        nextServerDataRegisterWriter(controller);
    }
});
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error
    readable.name = 'hydration';
}
let debugChannel;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const clientResumeFetch = window.__NEXT_CLIENT_RESUME;
let initialServerResponse;
if (clientResumeFetch) {
    initialServerResponse = Promise.resolve(createFromFetch(clientResumeFetch, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel
    })).then(async (fallbackInitialRSCPayload)=>(0, _flightdatahelpers.createInitialRSCPayloadFromFallbackPrerender)(await clientResumeFetch, fallbackInitialRSCPayload));
} else {
    initialServerResponse = createFromReadableStream(readable, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel,
        startTime: 0
    });
}
function ServerRoot({ initialRSCPayload, actionQueue, webSocket, staticIndicatorState }) {
    const router = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuter.default, {
        actionQueue: actionQueue,
        globalErrorState: initialRSCPayload.G,
        webSocket: webSocket,
        staticIndicatorState: staticIndicatorState
    });
    if (("TURBOPACK compile-time value", "development") === 'development' && initialRSCPayload.m) {
        // We provide missing slot information in a context provider only during development
        // as we log some additional information about the missing slots in the console.
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.MissingSlotContext, {
            value: initialRSCPayload.m,
            children: router
        });
    }
    return router;
}
const StrictModeIfEnabled = ("TURBOPACK compile-time truthy", 1) ? _react.default.StrictMode : "TURBOPACK unreachable";
function Root({ children }) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return children;
}
const enableTransitionIndicator = ("TURBOPACK compile-time value", false);
function noDefaultTransitionIndicator() {
    return ()=>{};
}
const reactRootOptions = {
    onDefaultTransitionIndicator: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : noDefaultTransitionIndicator,
    onRecoverableError: _onrecoverableerror.onRecoverableError,
    onCaughtError: _errorboundarycallbacks.onCaughtError,
    onUncaughtError: _errorboundarycallbacks.onUncaughtError
};
async function hydrate(instrumentationHooks, assetPrefix) {
    let staticIndicatorState;
    let webSocket;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createWebSocket } = (()=>{
            const e = new Error("Cannot find module './dev/hot-reloader/app/web-socket'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        staticIndicatorState = {
            pathname: null,
            appIsrManifest: null
        };
        webSocket = createWebSocket(assetPrefix, staticIndicatorState);
    }
    const initialRSCPayload = await initialServerResponse;
    // setAppBuildId should be called only once, during JS initialization
    // and before any components have hydrated.
    (0, _appbuildid.setAppBuildId)(initialRSCPayload.b);
    const initialTimestamp = Date.now();
    const actionQueue = (0, _approuterinstance.createMutableActionQueue)((0, _createinitialrouterstate.createInitialRouterState)({
        navigatedAt: initialTimestamp,
        initialFlightData: initialRSCPayload.f,
        initialCanonicalUrlParts: initialRSCPayload.c,
        initialRenderedSearch: initialRSCPayload.q,
        location: window.location
    }), instrumentationHooks);
    const reactEl = /*#__PURE__*/ (0, _jsxruntime.jsx)(StrictModeIfEnabled, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_headmanagercontextsharedruntime.HeadManagerContext.Provider, {
            value: {
                appDir: true
            },
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Root, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(ServerRoot, {
                    initialRSCPayload: initialRSCPayload,
                    actionQueue: actionQueue,
                    webSocket: webSocket,
                    staticIndicatorState: staticIndicatorState
                })
            })
        })
    });
    if (document.documentElement.id === '__next_error__') {
        let element = reactEl;
        // Server rendering failed, fall back to client-side rendering
        if ("TURBOPACK compile-time truthy", 1) {
            const { RootLevelDevOverlayElement } = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/next-devtools/userspace/app/client-entry.js [app-client] (ecmascript)");
            // Note this won't cause hydration mismatch because we are doing CSR w/o hydration
            element = /*#__PURE__*/ (0, _jsxruntime.jsx)(RootLevelDevOverlayElement, {
                children: element
            });
        }
        _client.default.createRoot(appElement, reactRootOptions).render(element);
    } else {
        _react.default.startTransition(()=>{
            _client.default.hydrateRoot(appElement, reactEl, {
                ...reactRootOptions,
                formState: initialFormStateData
            });
        });
    }
    // TODO-APP: Remove this logic when Float has GC built-in in development.
    if ("TURBOPACK compile-time truthy", 1) {
        const { linkGc } = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)");
        linkGc();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-index.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/client/app-next-turbopack.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _appbootstrap = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)");
const _onrecoverableerror = (()=>{
    const e = new Error("Cannot find module './react-client-callbacks/on-recoverable-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
window.next.turbopack = true;
self.__webpack_hash__ = '';
// eslint-disable-next-line @next/internal/typechecked-require
const instrumentationHooks = (()=>{
    const e = new Error("Cannot find module '../lib/require-instrumentation-client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(0, _appbootstrap.appBootstrap)((assetPrefix)=>{
    const { hydrate } = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)");
    try {
        hydrate(instrumentationHooks, assetPrefix);
    } finally{
        if ("TURBOPACK compile-time truthy", 1) {
            const enableCacheIndicator = ("TURBOPACK compile-time value", false);
            const { getOwnerStack } = (()=>{
                const e = new Error("Cannot find module '../next-devtools/userspace/app/errors/stitched-error'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            const { renderAppDevOverlay } = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/compiled/next-devtools/index.js (raw)");
            renderAppDevOverlay(getOwnerStack, _onrecoverableerror.isRecoverableError, enableCacheIndicator);
        }
    }
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-next-turbopack.js.map
}),
]);

//# sourceMappingURL=1611c_next_dist_client_ebf93a16._.js.map