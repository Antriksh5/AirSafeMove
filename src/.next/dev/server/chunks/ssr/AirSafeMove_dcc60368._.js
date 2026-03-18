module.exports = [
"[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathSep", {
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
});
function normalizePathSep(path) {
    return path.replace(/\\/g, '/');
} //# sourceMappingURL=normalize-path-sep.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _ensureleadingslash = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
const _segment = (()=>{
    const e = new Error("Cannot find module '../../segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
"[project]/AirSafeMove/src/node_modules/next/dist/lib/is-app-route-route.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isAppRouteRoute", {
    enumerable: true,
    get: function() {
        return isAppRouteRoute;
    }
});
function isAppRouteRoute(route) {
    return route.endsWith('/route');
} //# sourceMappingURL=is-app-route-route.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/lib/metadata/is-metadata-route.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_METADATA_ROUTE_EXTENSIONS: null,
    STATIC_METADATA_IMAGES: null,
    getExtensionRegexString: null,
    isMetadataPage: null,
    isMetadataRoute: null,
    isMetadataRouteFile: null,
    isStaticMetadataFile: null,
    isStaticMetadataRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_METADATA_ROUTE_EXTENSIONS: function() {
        return DEFAULT_METADATA_ROUTE_EXTENSIONS;
    },
    STATIC_METADATA_IMAGES: function() {
        return STATIC_METADATA_IMAGES;
    },
    getExtensionRegexString: function() {
        return getExtensionRegexString;
    },
    isMetadataPage: function() {
        return isMetadataPage;
    },
    isMetadataRoute: function() {
        return isMetadataRoute;
    },
    isMetadataRouteFile: function() {
        return isMetadataRouteFile;
    },
    isStaticMetadataFile: function() {
        return isStaticMetadataFile;
    },
    isStaticMetadataRoute: function() {
        return isStaticMetadataRoute;
    }
});
const _normalizepathsep = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [app-rsc] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
const _isapprouteroute = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/lib/is-app-route-route.js [app-rsc] (ecmascript)");
const STATIC_METADATA_IMAGES = {
    icon: {
        filename: 'icon',
        extensions: [
            'ico',
            'jpg',
            'jpeg',
            'png',
            'svg'
        ]
    },
    apple: {
        filename: 'apple-icon',
        extensions: [
            'jpg',
            'jpeg',
            'png'
        ]
    },
    favicon: {
        filename: 'favicon',
        extensions: [
            'ico'
        ]
    },
    openGraph: {
        filename: 'opengraph-image',
        extensions: [
            'jpg',
            'jpeg',
            'png',
            'gif'
        ]
    },
    twitter: {
        filename: 'twitter-image',
        extensions: [
            'jpg',
            'jpeg',
            'png',
            'gif'
        ]
    }
};
const DEFAULT_METADATA_ROUTE_EXTENSIONS = [
    'js',
    'jsx',
    'ts',
    'tsx'
];
const getExtensionRegexString = (staticExtensions, dynamicExtensions)=>{
    let result;
    // If there's no possible multi dynamic routes, will not match any <name>[].<ext> files
    if (!dynamicExtensions || dynamicExtensions.length === 0) {
        result = `(\\.(?:${staticExtensions.join('|')}))`;
    } else {
        result = `(?:\\.(${staticExtensions.join('|')})|(\\.(${dynamicExtensions.join('|')})))`;
    }
    return result;
};
function isStaticMetadataFile(appDirRelativePath) {
    return isMetadataRouteFile(appDirRelativePath, [], true);
}
// Pre-compiled static regexes for common cases
const FAVICON_REGEX = /^[\\/]favicon\.ico$/;
const ROBOTS_TXT_REGEX = /^[\\/]robots\.txt$/;
const MANIFEST_JSON_REGEX = /^[\\/]manifest\.json$/;
const MANIFEST_WEBMANIFEST_REGEX = /^[\\/]manifest\.webmanifest$/;
const SITEMAP_XML_REGEX = /[\\/]sitemap\.xml$/;
// Cache for compiled regex patterns based on parameters
const compiledRegexCache = new Map();
// Fast path checks for common metadata files
function fastPathCheck(normalizedPath) {
    // Check favicon.ico first (most common)
    if (FAVICON_REGEX.test(normalizedPath)) return true;
    // Check other common static files
    if (ROBOTS_TXT_REGEX.test(normalizedPath)) return true;
    if (MANIFEST_JSON_REGEX.test(normalizedPath)) return true;
    if (MANIFEST_WEBMANIFEST_REGEX.test(normalizedPath)) return true;
    if (SITEMAP_XML_REGEX.test(normalizedPath)) return true;
    // Quick negative check - if it doesn't contain any metadata keywords, skip
    if (!normalizedPath.includes('robots') && !normalizedPath.includes('manifest') && !normalizedPath.includes('sitemap') && !normalizedPath.includes('icon') && !normalizedPath.includes('apple-icon') && !normalizedPath.includes('opengraph-image') && !normalizedPath.includes('twitter-image') && !normalizedPath.includes('favicon')) {
        return false;
    }
    return null // Continue with full regex matching
    ;
}
function getCompiledRegexes(pageExtensions, strictlyMatchExtensions) {
    // Create cache key
    const cacheKey = `${pageExtensions.join(',')}|${strictlyMatchExtensions}`;
    const cached = compiledRegexCache.get(cacheKey);
    if (cached) {
        return cached;
    }
    // Pre-compute common strings
    const trailingMatcher = strictlyMatchExtensions ? '$' : '?$';
    const variantsMatcher = '\\d?';
    const groupSuffix = strictlyMatchExtensions ? '' : '(-\\w{6})?';
    const suffixMatcher = variantsMatcher + groupSuffix;
    // Pre-compute extension arrays to avoid repeated concatenation
    const robotsExts = pageExtensions.length > 0 ? [
        ...pageExtensions,
        'txt'
    ] : [
        'txt'
    ];
    const manifestExts = pageExtensions.length > 0 ? [
        ...pageExtensions,
        'webmanifest',
        'json'
    ] : [
        'webmanifest',
        'json'
    ];
    const regexes = [
        new RegExp(`^[\\\\/]robots${getExtensionRegexString(robotsExts, null)}${trailingMatcher}`),
        new RegExp(`^[\\\\/]manifest${getExtensionRegexString(manifestExts, null)}${trailingMatcher}`),
        // FAVICON_REGEX removed - already handled in fastPathCheck
        new RegExp(`[\\\\/]sitemap${getExtensionRegexString([
            'xml'
        ], pageExtensions)}${trailingMatcher}`),
        new RegExp(`[\\\\/]icon${suffixMatcher}${getExtensionRegexString(STATIC_METADATA_IMAGES.icon.extensions, pageExtensions)}${trailingMatcher}`),
        new RegExp(`[\\\\/]apple-icon${suffixMatcher}${getExtensionRegexString(STATIC_METADATA_IMAGES.apple.extensions, pageExtensions)}${trailingMatcher}`),
        new RegExp(`[\\\\/]opengraph-image${suffixMatcher}${getExtensionRegexString(STATIC_METADATA_IMAGES.openGraph.extensions, pageExtensions)}${trailingMatcher}`),
        new RegExp(`[\\\\/]twitter-image${suffixMatcher}${getExtensionRegexString(STATIC_METADATA_IMAGES.twitter.extensions, pageExtensions)}${trailingMatcher}`)
    ];
    compiledRegexCache.set(cacheKey, regexes);
    return regexes;
}
function isMetadataRouteFile(appDirRelativePath, pageExtensions, strictlyMatchExtensions) {
    // Early exit for empty or obviously non-metadata paths
    if (!appDirRelativePath || appDirRelativePath.length < 2) {
        return false;
    }
    const normalizedPath = (0, _normalizepathsep.normalizePathSep)(appDirRelativePath);
    // Fast path check for common cases
    const fastResult = fastPathCheck(normalizedPath);
    if (fastResult !== null) {
        return fastResult;
    }
    // Get compiled regexes from cache
    const regexes = getCompiledRegexes(pageExtensions, strictlyMatchExtensions);
    // Use for loop instead of .some() for better performance
    for(let i = 0; i < regexes.length; i++){
        if (regexes[i].test(normalizedPath)) {
            return true;
        }
    }
    return false;
}
function isStaticMetadataRoute(route) {
    // extract ext with regex
    const pathname = route.replace(/\/route$/, '');
    const matched = (0, _isapprouteroute.isAppRouteRoute)(route) && isMetadataRouteFile(pathname, [], true) && // These routes can either be built by static or dynamic entrypoints,
    // so we assume they're dynamic
    pathname !== '/robots.txt' && pathname !== '/manifest.webmanifest' && !pathname.endsWith('/sitemap.xml');
    return matched;
}
function isMetadataPage(page) {
    const matched = !(0, _isapprouteroute.isAppRouteRoute)(page) && isMetadataRouteFile(page, [], false);
    return matched;
}
function isMetadataRoute(route) {
    let page = (0, _apppaths.normalizeAppPath)(route).replace(/^\/?app\//, '') // Remove the dynamic route id
    .replace('/[__metadata_id__]', '') // Remove the /route suffix
    .replace(/\/route$/, '');
    if (page[0] !== '/') page = '/' + page;
    const matched = (0, _isapprouteroute.isAppRouteRoute)(route) && isMetadataRouteFile(page, [], false);
    return matched;
} //# sourceMappingURL=is-metadata-route.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/hash.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/AirSafeMove/src/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fillMetadataSegment: null,
    normalizeMetadataPageToRoute: null,
    normalizeMetadataRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fillMetadataSegment: function() {
        return fillMetadataSegment;
    },
    normalizeMetadataPageToRoute: function() {
        return normalizeMetadataPageToRoute;
    },
    normalizeMetadataRoute: function() {
        return normalizeMetadataRoute;
    }
});
const _ismetadataroute = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/lib/metadata/is-metadata-route.js [app-rsc] (ecmascript)");
const _path = /*#__PURE__*/ _interop_require_default((()=>{
    const e = new Error("Cannot find module '../../shared/lib/isomorphic/path'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _serverutils = (()=>{
    const e = new Error("Cannot find module '../../server/server-utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _routeregex = (()=>{
    const e = new Error("Cannot find module '../../shared/lib/router/utils/route-regex'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _hash = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/hash.js [app-rsc] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
const _normalizepathsep = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [app-rsc] (ecmascript)");
const _segment = (()=>{
    const e = new Error("Cannot find module '../../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
 * If there's special convention like (...) or @ in the page path,
 * Give it a unique hash suffix to avoid conflicts
 *
 * e.g.
 * /opengraph-image -> /opengraph-image
 * /(post)/opengraph-image.tsx -> /opengraph-image-[0-9a-z]{6}
 *
 * Sitemap is an exception, it should not have a suffix.
 * Each sitemap contains all the urls of sub routes, we don't have the case of duplicates `/(group)/sitemap.[ext]` and `/sitemap.[ext]` since they should be the same.
 * Hence we always normalize the urls for sitemap and do not append hash suffix, and ensure user-land only contains one sitemap per pathname.
 *
 * /sitemap -> /sitemap
 * /(post)/sitemap -> /sitemap
 */ function getMetadataRouteSuffix(page) {
    // Remove the last segment and get the parent pathname
    // e.g. /parent/a/b/c -> /parent/a/b
    // e.g. /parent/opengraph-image -> /parent
    const parentPathname = _path.default.dirname(page);
    // Only apply suffix to metadata routes except for sitemaps
    if (page.endsWith('/sitemap') || page.endsWith('/sitemap.xml')) {
        return '';
    }
    // Calculate the hash suffix based on the parent path
    let suffix = '';
    // Check if there's any special characters in the parent pathname.
    const segments = parentPathname.split('/');
    if (segments.some((seg)=>(0, _segment.isGroupSegment)(seg) || (0, _segment.isParallelRouteSegment)(seg))) {
        // Hash the parent path to get a unique suffix
        suffix = (0, _hash.djb2Hash)(parentPathname).toString(36).slice(0, 6);
    }
    return suffix;
}
function fillMetadataSegment(segment, params, lastSegment) {
    const pathname = (0, _apppaths.normalizeAppPath)(segment);
    const routeRegex = (0, _routeregex.getNamedRouteRegex)(pathname, {
        prefixRouteKeys: false
    });
    const route = (0, _serverutils.interpolateDynamicPath)(pathname, params, routeRegex);
    const { name, ext } = _path.default.parse(lastSegment);
    const pagePath = _path.default.posix.join(segment, name);
    const suffix = getMetadataRouteSuffix(pagePath);
    const routeSuffix = suffix ? `-${suffix}` : '';
    return (0, _normalizepathsep.normalizePathSep)(_path.default.join(route, `${name}${routeSuffix}${ext}`));
}
function normalizeMetadataRoute(page) {
    if (!(0, _ismetadataroute.isMetadataPage)(page)) {
        return page;
    }
    let route = page;
    let suffix = '';
    if (page === '/robots') {
        route += '.txt';
    } else if (page === '/manifest') {
        route += '.webmanifest';
    } else {
        suffix = getMetadataRouteSuffix(page);
    }
    // Support both /<metadata-route.ext> and custom routes /<metadata-route>/route.ts.
    // If it's a metadata file route, we need to append /[id]/route to the page.
    if (!route.endsWith('/route')) {
        const { dir, name: baseName, ext } = _path.default.parse(route);
        route = _path.default.posix.join(dir, `${baseName}${suffix ? `-${suffix}` : ''}${ext}`, 'route');
    }
    return route;
}
function normalizeMetadataPageToRoute(page, isDynamic) {
    const isRoute = page.endsWith('/route');
    const routePagePath = isRoute ? page.slice(0, -'/route'.length) : page;
    const metadataRouteExtension = routePagePath.endsWith('/sitemap') ? '.xml' : '';
    const mapped = isDynamic ? `${routePagePath}/[__metadata_id__]` : `${routePagePath}${metadataRouteExtension}`;
    return mapped + (isRoute ? '/route' : '');
} //# sourceMappingURL=get-metadata-route.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteKind",
    ()=>RouteKind
]);
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactServerDOMTurbopackServer; //# sourceMappingURL=react-server-dom-turbopack-server.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactServerDOMTurbopackStatic; //# sourceMappingURL=react-server-dom-turbopack-static.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].React; //# sourceMappingURL=react.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/layout-router.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/layout-router.js <module evaluation>"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/layout-router.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/layout-router.js"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/layout-router.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/layout-router.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/layout-router.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-page.js <module evaluation>"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-page.js"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-segment.js <module evaluation>"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-segment.js"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicServerError",
    ()=>DynamicServerError,
    "isDynamicServerError",
    ()=>isDynamicServerError
]);
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
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js <module evaluation>"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/non-nullable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonNullable",
    ()=>nonNullable
]);
function nonNullable(value) {
    return value !== null && value !== undefined;
} //# sourceMappingURL=non-nullable.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Meta",
    ()=>Meta,
    "MetaFilter",
    ()=>MetaFilter,
    "MultiMeta",
    ()=>MultiMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$non$2d$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/non-nullable.js [app-rsc] (ecmascript)");
;
;
;
function Meta({ name, property, content, media }) {
    if (typeof content !== 'undefined' && content !== null && content !== '') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
            ...name ? {
                name
            } : {
                property
            },
            ...media ? {
                media
            } : undefined,
            content: typeof content === 'string' ? content : content.toString()
        });
    }
    return null;
}
function MetaFilter(items) {
    const acc = [];
    for (const item of items){
        if (Array.isArray(item)) {
            acc.push(...item.filter(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$non$2d$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nonNullable"]));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$non$2d$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nonNullable"])(item)) {
            acc.push(item);
        }
    }
    return acc;
}
function camelToSnake(camelCaseStr) {
    return camelCaseStr.replace(/([A-Z])/g, function(match) {
        return '_' + match.toLowerCase();
    });
}
const aliasPropPrefixes = new Set([
    'og:image',
    'twitter:image',
    'og:video',
    'og:audio'
]);
function getMetaKey(prefix, key) {
    // Use `twitter:image` and `og:image` instead of `twitter:image:url` and `og:image:url`
    // to be more compatible as it's a more common format.
    // `og:video` & `og:audio` do not have a `:url` suffix alias
    if (aliasPropPrefixes.has(prefix) && key === 'url') {
        return prefix;
    }
    if (prefix.startsWith('og:') || prefix.startsWith('twitter:')) {
        key = camelToSnake(key);
    }
    return prefix + ':' + key;
}
function ExtendMeta({ content, namePrefix, propertyPrefix }) {
    if (!content) return null;
    return MetaFilter(Object.entries(content).map(([k, v])=>{
        return typeof v === 'undefined' ? null : Meta({
            ...propertyPrefix && {
                property: getMetaKey(propertyPrefix, k)
            },
            ...namePrefix && {
                name: getMetaKey(namePrefix, k)
            },
            content: typeof v === 'string' ? v : v == null ? void 0 : v.toString()
        });
    }));
}
function MultiMeta({ propertyPrefix, namePrefix, contents }) {
    if (typeof contents === 'undefined' || contents === null) {
        return null;
    }
    return MetaFilter(contents.map((content)=>{
        if (typeof content === 'string' || typeof content === 'number' || content instanceof URL) {
            return Meta({
                ...propertyPrefix ? {
                    property: propertyPrefix
                } : {
                    name: namePrefix
                },
                content
            });
        } else {
            return ExtendMeta({
                namePrefix,
                propertyPrefix,
                content
            });
        }
    }));
} //# sourceMappingURL=meta.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconKeys",
    ()=>IconKeys,
    "ViewportMetaKeys",
    ()=>ViewportMetaKeys
]);
const ViewportMetaKeys = {
    width: 'width',
    height: 'height',
    initialScale: 'initial-scale',
    minimumScale: 'minimum-scale',
    maximumScale: 'maximum-scale',
    viewportFit: 'viewport-fit',
    userScalable: 'user-scalable',
    interactiveWidget: 'interactive-widget'
};
const IconKeys = [
    'icon',
    'shortcut',
    'apple',
    'other'
]; //# sourceMappingURL=constants.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/basic.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppleWebAppMeta",
    ()=>AppleWebAppMeta,
    "BasicMeta",
    ()=>BasicMeta,
    "FacebookMeta",
    ()=>FacebookMeta,
    "FormatDetectionMeta",
    ()=>FormatDetectionMeta,
    "ItunesMeta",
    ()=>ItunesMeta,
    "PinterestMeta",
    ()=>PinterestMeta,
    "VerificationMeta",
    ()=>VerificationMeta,
    "ViewportMeta",
    ()=>ViewportMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/constants.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
// convert viewport object to string for viewport meta tag
function resolveViewportLayout(viewport) {
    let resolved = null;
    if (viewport && typeof viewport === 'object') {
        resolved = '';
        for(const viewportKey_ in __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportMetaKeys"]){
            const viewportKey = viewportKey_;
            if (viewportKey in viewport) {
                let value = viewport[viewportKey];
                if (typeof value === 'boolean') {
                    value = value ? 'yes' : 'no';
                } else if (!value && viewportKey === 'initialScale') {
                    value = undefined;
                }
                if (value) {
                    if (resolved) resolved += ', ';
                    resolved += `${__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportMetaKeys"][viewportKey]}=${value}`;
                }
            }
        }
    }
    return resolved;
}
function ViewportMeta({ viewport }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
            charSet: "utf-8"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'viewport',
            content: resolveViewportLayout(viewport)
        }),
        ...viewport.themeColor ? viewport.themeColor.map((themeColor)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                name: 'theme-color',
                content: themeColor.color,
                media: themeColor.media
            })) : [],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'color-scheme',
            content: viewport.colorScheme
        })
    ]);
}
function BasicMeta({ metadata }) {
    var _metadata_keywords, _metadata_robots, _metadata_robots1;
    const manifestOrigin = metadata.manifest ? getOrigin(metadata.manifest) : undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        metadata.title !== null && metadata.title.absolute ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("title", {
            children: metadata.title.absolute
        }) : null,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'description',
            content: metadata.description
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'application-name',
            content: metadata.applicationName
        }),
        ...metadata.authors ? metadata.authors.map((author)=>[
                author.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                    rel: "author",
                    href: author.url.toString()
                }) : null,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name: 'author',
                    content: author.name
                })
            ]) : [],
        metadata.manifest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
            rel: "manifest",
            href: metadata.manifest.toString(),
            // If it's same origin, and it's a preview deployment,
            // including credentials for manifest request.
            crossOrigin: !manifestOrigin && process.env.VERCEL_ENV === 'preview' ? 'use-credentials' : undefined
        }) : null,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'generator',
            content: metadata.generator
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'keywords',
            content: (_metadata_keywords = metadata.keywords) == null ? void 0 : _metadata_keywords.join(',')
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'referrer',
            content: metadata.referrer
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'creator',
            content: metadata.creator
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'publisher',
            content: metadata.publisher
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'robots',
            content: (_metadata_robots = metadata.robots) == null ? void 0 : _metadata_robots.basic
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'googlebot',
            content: (_metadata_robots1 = metadata.robots) == null ? void 0 : _metadata_robots1.googleBot
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'abstract',
            content: metadata.abstract
        }),
        ...metadata.archives ? metadata.archives.map((archive)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                rel: "archives",
                href: archive
            })) : [],
        ...metadata.assets ? metadata.assets.map((asset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                rel: "assets",
                href: asset
            })) : [],
        ...metadata.bookmarks ? metadata.bookmarks.map((bookmark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                rel: "bookmarks",
                href: bookmark
            })) : [],
        ...metadata.pagination ? [
            metadata.pagination.previous ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                rel: "prev",
                href: metadata.pagination.previous
            }) : null,
            metadata.pagination.next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                rel: "next",
                href: metadata.pagination.next
            }) : null
        ] : [],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'category',
            content: metadata.category
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'classification',
            content: metadata.classification
        }),
        ...metadata.other ? Object.entries(metadata.other).map(([name, content])=>{
            if (Array.isArray(content)) {
                return content.map((contentItem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        name,
                        content: contentItem
                    }));
            } else {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name,
                    content
                });
            }
        }) : []
    ]);
}
function ItunesMeta({ itunes }) {
    if (!itunes) return null;
    const { appId, appArgument } = itunes;
    let content = `app-id=${appId}`;
    if (appArgument) {
        content += `, app-argument=${appArgument}`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
        name: "apple-itunes-app",
        content: content
    });
}
function FacebookMeta({ facebook }) {
    if (!facebook) return null;
    const { appId, admins } = facebook;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        appId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
            property: "fb:app_id",
            content: appId
        }) : null,
        ...admins ? admins.map((admin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
                property: "fb:admins",
                content: admin
            })) : []
    ]);
}
function PinterestMeta({ pinterest }) {
    if (!pinterest || pinterest.richPin === undefined) return null;
    const { richPin } = pinterest;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
        property: "pinterest-rich-pin",
        content: richPin.toString()
    });
}
const formatDetectionKeys = [
    'telephone',
    'date',
    'address',
    'email',
    'url'
];
function FormatDetectionMeta({ formatDetection }) {
    if (!formatDetection) return null;
    let content = '';
    for (const key of formatDetectionKeys){
        if (formatDetection[key] === false) {
            if (content) content += ', ';
            content += `${key}=no`;
        }
    }
    return content ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
        name: "format-detection",
        content: content
    }) : null;
}
function AppleWebAppMeta({ appleWebApp }) {
    if (!appleWebApp) return null;
    const { capable, title, startupImage, statusBarStyle } = appleWebApp;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        capable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'mobile-web-app-capable',
            content: 'yes'
        }) : null,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'apple-mobile-web-app-title',
            content: title
        }),
        startupImage ? startupImage.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
                href: image.url,
                media: image.media,
                rel: "apple-touch-startup-image"
            })) : null,
        statusBarStyle ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'apple-mobile-web-app-status-bar-style',
            content: statusBarStyle
        }) : null
    ]);
}
function VerificationMeta({ verification }) {
    if (!verification) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            namePrefix: 'google-site-verification',
            contents: verification.google
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            namePrefix: 'y_key',
            contents: verification.yahoo
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            namePrefix: 'yandex-verification',
            contents: verification.yandex
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            namePrefix: 'me',
            contents: verification.me
        }),
        ...verification.other ? Object.entries(verification.other).map(([key, value])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                namePrefix: key,
                contents: value
            })) : []
    ]);
} //# sourceMappingURL=basic.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/alternate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlternatesMetadata",
    ()=>AlternatesMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)");
;
;
;
function AlternateLink({ descriptor, ...props }) {
    if (!descriptor.url) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
        ...props,
        ...descriptor.title && {
            title: descriptor.title
        },
        href: descriptor.url.toString()
    });
}
function AlternatesMetadata({ alternates }) {
    if (!alternates) return null;
    const { canonical, languages, media, types } = alternates;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        canonical ? AlternateLink({
            rel: 'canonical',
            descriptor: canonical
        }) : null,
        languages ? Object.entries(languages).flatMap(([locale, descriptors])=>descriptors == null ? void 0 : descriptors.map((descriptor)=>AlternateLink({
                    rel: 'alternate',
                    hrefLang: locale,
                    descriptor
                }))) : null,
        media ? Object.entries(media).flatMap(([mediaName, descriptors])=>descriptors == null ? void 0 : descriptors.map((descriptor)=>AlternateLink({
                    rel: 'alternate',
                    media: mediaName,
                    descriptor
                }))) : null,
        types ? Object.entries(types).flatMap(([type, descriptors])=>descriptors == null ? void 0 : descriptors.map((descriptor)=>AlternateLink({
                    rel: 'alternate',
                    type,
                    descriptor
                }))) : null
    ]);
} //# sourceMappingURL=alternate.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js <module evaluation>"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$icon$2d$mark$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$icon$2d$mark$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$icon$2d$mark$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/icons.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconsMetadata",
    ()=>IconsMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$icon$2d$mark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)");
;
;
;
function IconDescriptorLink({ icon }) {
    const { url, rel = 'icon', ...props } = icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
        rel: rel,
        href: url.toString(),
        ...props
    });
}
function IconLink({ rel, icon }) {
    if (typeof icon === 'object' && !(icon instanceof URL)) {
        if (!icon.rel && rel) icon.rel = rel;
        return IconDescriptorLink({
            icon
        });
    } else {
        const href = icon.toString();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
            rel: rel,
            href: href
        });
    }
}
function IconsMetadata({ icons }) {
    if (!icons) return null;
    const shortcutList = icons.shortcut;
    const iconList = icons.icon;
    const appleList = icons.apple;
    const otherList = icons.other;
    const hasIcon = Boolean((shortcutList == null ? void 0 : shortcutList.length) || (iconList == null ? void 0 : iconList.length) || (appleList == null ? void 0 : appleList.length) || (otherList == null ? void 0 : otherList.length));
    if (!hasIcon) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        shortcutList ? shortcutList.map((icon)=>IconLink({
                rel: 'shortcut icon',
                icon
            })) : null,
        iconList ? iconList.map((icon)=>IconLink({
                rel: 'icon',
                icon
            })) : null,
        appleList ? appleList.map((icon)=>IconLink({
                rel: 'apple-touch-icon',
                icon
            })) : null,
        otherList ? otherList.map((icon)=>IconDescriptorLink({
                icon
            })) : null,
        hasIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$icon$2d$mark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconMark"], {}) : null
    ]);
} //# sourceMappingURL=icons.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTTPAccessErrorStatus",
    ()=>HTTPAccessErrorStatus,
    "HTTP_ERROR_FALLBACK_ERROR_CODE",
    ()=>HTTP_ERROR_FALLBACK_ERROR_CODE,
    "getAccessFallbackErrorTypeByStatus",
    ()=>getAccessFallbackErrorTypeByStatus,
    "getAccessFallbackHTTPStatus",
    ()=>getAccessFallbackHTTPStatus,
    "isHTTPAccessFallbackError",
    ()=>isHTTPAccessFallbackError
]);
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
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPostpone",
    ()=>isPostpone
]);
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js <module evaluation>"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js"));
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMetadataComponents",
    ()=>createMetadataComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/basic.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$alternate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/alternate.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './generate/opengraph'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$icons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/icons.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './resolve-metadata'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../server/request/search-params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../server/request/pathname'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$router$2d$utils$2f$is$2d$postpone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
function createMetadataComponents({ tree, pathname, parsedQuery, metadataContext, getDynamicParamFromSegment, errorType, workStore, serveStreamingMetadata }) {
    const searchParams = createServerSearchParamsForMetadata(parsedQuery, workStore);
    const pathnameForMetadata = createServerPathnameForMetadata(pathname, workStore);
    async function Viewport() {
        const tags = await getResolvedViewport(tree, searchParams, getDynamicParamFromSegment, workStore, errorType).catch((viewportErr)=>{
            // When Legacy PPR is enabled viewport can reject with a Postpone type
            // This will go away once Legacy PPR is removed and dynamic metadata will
            // stay pending until after the prerender is complete when it is dynamic
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$router$2d$utils$2f$is$2d$postpone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPostpone"])(viewportErr)) {
                throw viewportErr;
            }
            if (!errorType && (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTTPAccessFallbackError"])(viewportErr)) {
                return getNotFoundViewport(tree, searchParams, getDynamicParamFromSegment, workStore).catch(()=>null);
            }
            // We're going to throw the error from the metadata outlet so we just render null here instead
            return null;
        });
        return tags;
    }
    Viewport.displayName = 'Next.Viewport';
    function ViewportWrapper() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportBoundary"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(Viewport, {})
        });
    }
    async function Metadata() {
        const tags = await getResolvedMetadata(tree, pathnameForMetadata, searchParams, getDynamicParamFromSegment, metadataContext, workStore, errorType).catch((metadataErr)=>{
            // When Legacy PPR is enabled metadata can reject with a Postpone type
            // This will go away once Legacy PPR is removed and dynamic metadata will
            // stay pending until after the prerender is complete when it is dynamic
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$router$2d$utils$2f$is$2d$postpone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPostpone"])(metadataErr)) {
                throw metadataErr;
            }
            if (!errorType && (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTTPAccessFallbackError"])(metadataErr)) {
                return getNotFoundMetadata(tree, pathnameForMetadata, searchParams, getDynamicParamFromSegment, metadataContext, workStore).catch(()=>null);
            }
            // We're going to throw the error from the metadata outlet so we just render null here instead
            return null;
        });
        return tags;
    }
    Metadata.displayName = 'Next.Metadata';
    function MetadataWrapper() {
        // TODO: We shouldn't change what we render based on whether we are streaming or not.
        // If we aren't streaming we should just block the response until we have resolved the
        // metadata.
        if (!serveStreamingMetadata) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetadataBoundary"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(Metadata, {})
            });
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
            hidden: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetadataBoundary"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                    name: "Next.Metadata",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(Metadata, {})
                })
            })
        });
    }
    function MetadataOutlet() {
        const pendingOutlet = Promise.all([
            getResolvedMetadata(tree, pathnameForMetadata, searchParams, getDynamicParamFromSegment, metadataContext, workStore, errorType),
            getResolvedViewport(tree, searchParams, getDynamicParamFromSegment, workStore, errorType)
        ]).then(()=>null);
        // TODO: We shouldn't change what we render based on whether we are streaming or not.
        // If we aren't streaming we should just block the response until we have resolved the
        // metadata.
        if (!serveStreamingMetadata) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutletBoundary"], {
                children: pendingOutlet
            });
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutletBoundary"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                name: "Next.MetadataOutlet",
                children: pendingOutlet
            })
        });
    }
    MetadataOutlet.displayName = 'Next.MetadataOutlet';
    return {
        Viewport: ViewportWrapper,
        Metadata: MetadataWrapper,
        MetadataOutlet
    };
}
const getResolvedMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(getResolvedMetadataImpl);
async function getResolvedMetadataImpl(tree, pathname, searchParams, getDynamicParamFromSegment, metadataContext, workStore, errorType) {
    const errorConvention = errorType === 'redirect' ? undefined : errorType;
    return renderMetadata(tree, pathname, searchParams, getDynamicParamFromSegment, metadataContext, workStore, errorConvention);
}
const getNotFoundMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(getNotFoundMetadataImpl);
async function getNotFoundMetadataImpl(tree, pathname, searchParams, getDynamicParamFromSegment, metadataContext, workStore) {
    const notFoundErrorConvention = 'not-found';
    return renderMetadata(tree, pathname, searchParams, getDynamicParamFromSegment, metadataContext, workStore, notFoundErrorConvention);
}
const getResolvedViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(getResolvedViewportImpl);
async function getResolvedViewportImpl(tree, searchParams, getDynamicParamFromSegment, workStore, errorType) {
    const errorConvention = errorType === 'redirect' ? undefined : errorType;
    return renderViewport(tree, searchParams, getDynamicParamFromSegment, workStore, errorConvention);
}
const getNotFoundViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(getNotFoundViewportImpl);
async function getNotFoundViewportImpl(tree, searchParams, getDynamicParamFromSegment, workStore) {
    const notFoundErrorConvention = 'not-found';
    return renderViewport(tree, searchParams, getDynamicParamFromSegment, workStore, notFoundErrorConvention);
}
async function renderMetadata(tree, pathname, searchParams, getDynamicParamFromSegment, metadataContext, workStore, errorConvention) {
    const resolvedMetadata = await resolveMetadata(tree, pathname, searchParams, errorConvention, getDynamicParamFromSegment, workStore, metadataContext);
    const elements = createMetadataElements(resolvedMetadata);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: elements.map((el, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneElement"])(el, {
                key: index
            });
        })
    });
}
async function renderViewport(tree, searchParams, getDynamicParamFromSegment, workStore, errorConvention) {
    const resolvedViewport = await resolveViewport(tree, searchParams, errorConvention, getDynamicParamFromSegment, workStore);
    const elements = createViewportElements(resolvedViewport);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: elements.map((el, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneElement"])(el, {
                key: index
            });
        })
    });
}
function createMetadataElements(metadata) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BasicMeta"])({
            metadata
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$alternate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AlternatesMetadata"])({
            alternates: metadata.alternates
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ItunesMeta"])({
            itunes: metadata.itunes
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FacebookMeta"])({
            facebook: metadata.facebook
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PinterestMeta"])({
            pinterest: metadata.pinterest
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FormatDetectionMeta"])({
            formatDetection: metadata.formatDetection
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VerificationMeta"])({
            verification: metadata.verification
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppleWebAppMeta"])({
            appleWebApp: metadata.appleWebApp
        }),
        OpenGraphMetadata({
            openGraph: metadata.openGraph
        }),
        TwitterMetadata({
            twitter: metadata.twitter
        }),
        AppLinksMeta({
            appLinks: metadata.appLinks
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$icons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconsMetadata"])({
            icons: metadata.icons
        })
    ]);
}
function createViewportElements(viewport) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$basic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportMeta"])({
            viewport: viewport
        })
    ]);
} //# sourceMappingURL=metadata.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/compiled/react-server-dom-turbopack/client.node.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = (()=>{
        const e = new Error("Cannot find module './cjs/react-server-dom-turbopack-client.node.development.js'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
}
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppRenderSpan",
    ()=>AppRenderSpan,
    "AppRouteRouteHandlersSpan",
    ()=>AppRouteRouteHandlersSpan,
    "BaseServerSpan",
    ()=>BaseServerSpan,
    "LoadComponentsSpan",
    ()=>LoadComponentsSpan,
    "LogSpanAllowList",
    ()=>LogSpanAllowList,
    "MiddlewareSpan",
    ()=>MiddlewareSpan,
    "NextNodeServerSpan",
    ()=>NextNodeServerSpan,
    "NextServerSpan",
    ()=>NextServerSpan,
    "NextVanillaSpanAllowlist",
    ()=>NextVanillaSpanAllowlist,
    "NodeSpan",
    ()=>NodeSpan,
    "RenderSpan",
    ()=>RenderSpan,
    "ResolveMetadataSpan",
    ()=>ResolveMetadataSpan,
    "RouterSpan",
    ()=>RouterSpan,
    "StartServerSpan",
    ()=>StartServerSpan
]);
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
var BaseServerSpan = /*#__PURE__*/ function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
    return BaseServerSpan;
}(BaseServerSpan || {});
var LoadComponentsSpan = /*#__PURE__*/ function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
    return LoadComponentsSpan;
}(LoadComponentsSpan || {});
var NextServerSpan = /*#__PURE__*/ function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getRequestHandlerWithMetadata"] = "NextServer.getRequestHandlerWithMetadata";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
    return NextServerSpan;
}(NextServerSpan || {});
var NextNodeServerSpan = /*#__PURE__*/ function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
    return NextNodeServerSpan;
}(NextNodeServerSpan || {});
var StartServerSpan = /*#__PURE__*/ function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
    return StartServerSpan;
}(StartServerSpan || {});
var RenderSpan = /*#__PURE__*/ function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
    return RenderSpan;
}(RenderSpan || {});
var AppRenderSpan = /*#__PURE__*/ function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
    return AppRenderSpan;
}(AppRenderSpan || {});
var RouterSpan = /*#__PURE__*/ function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
    return RouterSpan;
}(RouterSpan || {});
var NodeSpan = /*#__PURE__*/ function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
    return NodeSpan;
}(NodeSpan || {});
var AppRouteRouteHandlersSpan = /*#__PURE__*/ function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
    return AppRouteRouteHandlersSpan;
}(AppRouteRouteHandlersSpan || {});
var ResolveMetadataSpan = /*#__PURE__*/ function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
    return ResolveMetadataSpan;
}(ResolveMetadataSpan || {});
var MiddlewareSpan = /*#__PURE__*/ function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
    return MiddlewareSpan;
}(MiddlewareSpan || {});
const NextVanillaSpanAllowlist = new Set([
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
]);
const LogSpanAllowList = new Set([
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
]);
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A `Promise.withResolvers` implementation that exposes the `resolve` and
 * `reject` functions on a `Promise`.
 *
 * @see https://tc39.es/proposal-promise-with-resolvers/
 */ __turbopack_context__.s([
    "DetachedPromise",
    ()=>DetachedPromise
]);
class DetachedPromise {
    constructor(){
        let resolve;
        let reject;
        // Create the promise and assign the resolvers to the object.
        this.promise = new Promise((res, rej)=>{
            resolve = res;
            reject = rej;
        });
        // We know that resolvers is defined because the Promise constructor runs
        // synchronously.
        this.resolve = resolve;
        this.reject = reject;
    }
} //# sourceMappingURL=detached-promise.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENCODED_TAGS",
    ()=>ENCODED_TAGS
]);
const ENCODED_TAGS = {
    // opening tags do not have the closing `>` since they can contain other attributes such as `<body className=''>`
    OPENING: {
        // <html
        HTML: new Uint8Array([
            60,
            104,
            116,
            109,
            108
        ]),
        // <body
        BODY: new Uint8Array([
            60,
            98,
            111,
            100,
            121
        ])
    },
    CLOSED: {
        // </head>
        HEAD: new Uint8Array([
            60,
            47,
            104,
            101,
            97,
            100,
            62
        ]),
        // </body>
        BODY: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62
        ]),
        // </html>
        HTML: new Uint8Array([
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ]),
        // </body></html>
        BODY_AND_HTML: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62,
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ])
    },
    META: {
        // Only the match the prefix cause the suffix can be different wether it's xml compatible or not ">" or "/>"
        // <meta name="«nxt-icon»"
        // This is a special mark that will be replaced by the icon insertion script tag.
        ICON_MARK: new Uint8Array([
            60,
            109,
            101,
            116,
            97,
            32,
            110,
            97,
            109,
            101,
            61,
            34,
            194,
            171,
            110,
            120,
            116,
            45,
            105,
            99,
            111,
            110,
            194,
            187,
            34
        ])
    }
}; //# sourceMappingURL=encoded-tags.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/errors/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MISSING_ROOT_TAGS_ERROR",
    ()=>MISSING_ROOT_TAGS_ERROR
]);
const MISSING_ROOT_TAGS_ERROR = 'NEXT_MISSING_ROOT_TAGS'; //# sourceMappingURL=constants.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_HEADER",
    ()=>ACTION_HEADER,
    "FLIGHT_HEADERS",
    ()=>FLIGHT_HEADERS,
    "NEXT_ACTION_NOT_FOUND_HEADER",
    ()=>NEXT_ACTION_NOT_FOUND_HEADER,
    "NEXT_ACTION_REVALIDATED_HEADER",
    ()=>NEXT_ACTION_REVALIDATED_HEADER,
    "NEXT_DID_POSTPONE_HEADER",
    ()=>NEXT_DID_POSTPONE_HEADER,
    "NEXT_HMR_REFRESH_HASH_COOKIE",
    ()=>NEXT_HMR_REFRESH_HASH_COOKIE,
    "NEXT_HMR_REFRESH_HEADER",
    ()=>NEXT_HMR_REFRESH_HEADER,
    "NEXT_HTML_REQUEST_ID_HEADER",
    ()=>NEXT_HTML_REQUEST_ID_HEADER,
    "NEXT_IS_PRERENDER_HEADER",
    ()=>NEXT_IS_PRERENDER_HEADER,
    "NEXT_REQUEST_ID_HEADER",
    ()=>NEXT_REQUEST_ID_HEADER,
    "NEXT_REWRITTEN_PATH_HEADER",
    ()=>NEXT_REWRITTEN_PATH_HEADER,
    "NEXT_REWRITTEN_QUERY_HEADER",
    ()=>NEXT_REWRITTEN_QUERY_HEADER,
    "NEXT_ROUTER_PREFETCH_HEADER",
    ()=>NEXT_ROUTER_PREFETCH_HEADER,
    "NEXT_ROUTER_SEGMENT_PREFETCH_HEADER",
    ()=>NEXT_ROUTER_SEGMENT_PREFETCH_HEADER,
    "NEXT_ROUTER_STALE_TIME_HEADER",
    ()=>NEXT_ROUTER_STALE_TIME_HEADER,
    "NEXT_ROUTER_STATE_TREE_HEADER",
    ()=>NEXT_ROUTER_STATE_TREE_HEADER,
    "NEXT_RSC_UNION_QUERY",
    ()=>NEXT_RSC_UNION_QUERY,
    "NEXT_URL",
    ()=>NEXT_URL,
    "RSC_CONTENT_TYPE_HEADER",
    ()=>RSC_CONTENT_TYPE_HEADER,
    "RSC_HEADER",
    ()=>RSC_HEADER
]);
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
const NEXT_ACTION_REVALIDATED_HEADER = 'x-action-revalidated'; //# sourceMappingURL=app-router-headers.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/hash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.
__turbopack_context__.s([
    "djb2Hash",
    ()=>djb2Hash,
    "hexHash",
    ()=>hexHash
]);
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
"[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/router/utils/cache-busting-search-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeCacheBustingSearchParam",
    ()=>computeCacheBustingSearchParam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$hash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/hash.js [app-rsc] (ecmascript)");
;
function computeCacheBustingSearchParam(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    if ((prefetchHeader === undefined || prefetchHeader === '0') && segmentPrefetchHeader === undefined && stateTreeHeader === undefined && nextUrlHeader === undefined) {
        return '';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$hash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexHash"])([
        prefetchHeader || '0',
        segmentPrefetchHeader || '0',
        stateTreeHeader || '0',
        nextUrlHeader || '0'
    ].join(','));
} //# sourceMappingURL=cache-busting-search-param.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chainStreams",
    ()=>chainStreams,
    "continueDynamicHTMLResume",
    ()=>continueDynamicHTMLResume,
    "continueDynamicPrerender",
    ()=>continueDynamicPrerender,
    "continueFizzStream",
    ()=>continueFizzStream,
    "continueStaticFallbackPrerender",
    ()=>continueStaticFallbackPrerender,
    "continueStaticPrerender",
    ()=>continueStaticPrerender,
    "createBufferedTransformStream",
    ()=>createBufferedTransformStream,
    "createDocumentClosingStream",
    ()=>createDocumentClosingStream,
    "createRootLayoutValidatorStream",
    ()=>createRootLayoutValidatorStream,
    "renderToInitialFizzStream",
    ()=>renderToInitialFizzStream,
    "streamFromBuffer",
    ()=>streamFromBuffer,
    "streamFromString",
    ()=>streamFromString,
    "streamToBuffer",
    ()=>streamToBuffer,
    "streamToString",
    ()=>streamToString,
    "streamToUint8Array",
    ()=>streamToUint8Array
]);
(()=>{
    const e = new Error("Cannot find module '../lib/trace/tracer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/scheduler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './uint8array-helpers'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$errors$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/errors/constants.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../shared/lib/segment-cache/output-export-prefetch-encoding'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$cache$2d$busting$2d$search$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/router/utils/cache-busting-search-param.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function voidCatch() {
// this catcher is designed to be used with pipeTo where we expect the underlying
// pipe implementation to forward errors but we don't want the pipeTo promise to reject
// and be unhandled
}
// We can share the same encoder instance everywhere
// Notably we cannot do the same for TextDecoder because it is stateful
// when handling streaming data
const encoder = new TextEncoder();
function chainStreams(...streams) {
    // If we have no streams, return an empty stream. This behavior is
    // intentional as we're now providing the `RenderResult.EMPTY` value.
    if (streams.length === 0) {
        return new ReadableStream({
            start (controller) {
                controller.close();
            }
        });
    }
    // If we only have 1 stream we fast path it by returning just this stream
    if (streams.length === 1) {
        return streams[0];
    }
    const { readable, writable } = new TransformStream();
    // We always initiate pipeTo immediately. We know we have at least 2 streams
    // so we need to avoid closing the writable when this one finishes.
    let promise = streams[0].pipeTo(writable, {
        preventClose: true
    });
    let i = 1;
    for(; i < streams.length - 1; i++){
        const nextStream = streams[i];
        promise = promise.then(()=>nextStream.pipeTo(writable, {
                preventClose: true
            }));
    }
    // We can omit the length check because we halted before the last stream and there
    // is at least two streams so the lastStream here will always be defined
    const lastStream = streams[i];
    promise = promise.then(()=>lastStream.pipeTo(writable));
    // Catch any errors from the streams and ignore them, they will be handled
    // by whatever is consuming the readable stream.
    promise.catch(voidCatch);
    return readable;
}
function streamFromString(str) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(encoder.encode(str));
            controller.close();
        }
    });
}
function streamFromBuffer(chunk) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(chunk);
            controller.close();
        }
    });
}
async function streamToChunks(stream) {
    const reader = stream.getReader();
    const chunks = [];
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(value);
    }
    return chunks;
}
function concatUint8Arrays(chunks) {
    const totalLength = chunks.reduce((sum, chunk)=>sum + chunk.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks){
        result.set(chunk, offset);
        offset += chunk.length;
    }
    return result;
}
async function streamToUint8Array(stream) {
    return concatUint8Arrays(await streamToChunks(stream));
}
async function streamToBuffer(stream) {
    return Buffer.concat(await streamToChunks(stream));
}
async function streamToString(stream, signal) {
    const decoder = new TextDecoder('utf-8', {
        fatal: true
    });
    let string = '';
    for await (const chunk of stream){
        if (signal == null ? void 0 : signal.aborted) {
            return string;
        }
        string += decoder.decode(chunk, {
            stream: true
        });
    }
    string += decoder.decode();
    return string;
}
function createBufferedTransformStream(options = {}) {
    const { maxBufferByteLength = Infinity } = options;
    let bufferedChunks = [];
    let bufferByteLength = 0;
    let pending;
    const flush = (controller)=>{
        try {
            if (bufferedChunks.length === 0) {
                return;
            }
            const chunk = new Uint8Array(bufferByteLength);
            let copiedBytes = 0;
            for(let i = 0; i < bufferedChunks.length; i++){
                const bufferedChunk = bufferedChunks[i];
                chunk.set(bufferedChunk, copiedBytes);
                copiedBytes += bufferedChunk.byteLength;
            }
            // We just wrote all the buffered chunks so we need to reset the bufferedChunks array
            // and our bufferByteLength to prepare for the next round of buffered chunks
            bufferedChunks.length = 0;
            bufferByteLength = 0;
            controller.enqueue(chunk);
        } catch  {
        // If an error occurs while enqueuing, it can't be due to this
        // transformer. It's most likely caused by the controller having been
        // errored (for example, if the stream was cancelled).
        }
    };
    const scheduleFlush = (controller)=>{
        if (pending) {
            return;
        }
        const detached = new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        pending = detached;
        scheduleImmediate(()=>{
            try {
                flush(controller);
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            // Combine the previous buffer with the new chunk.
            bufferedChunks.push(chunk);
            bufferByteLength += chunk.byteLength;
            if (bufferByteLength >= maxBufferByteLength) {
                flush(controller);
            } else {
                scheduleFlush(controller);
            }
        },
        flush () {
            return pending == null ? void 0 : pending.promise;
        }
    });
}
function createPrefetchCommentStream(isBuildTimePrerendering, buildId) {
    // Insert an extra comment at the beginning of the HTML document. This must
    // come after the DOCTYPE, which is inserted by React.
    //
    // The first chunk sent by React will contain the doctype. After that, we can
    // pass through the rest of the chunks as-is.
    let didTransformFirstChunk = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (isBuildTimePrerendering && !didTransformFirstChunk) {
                didTransformFirstChunk = true;
                const decoder = new TextDecoder('utf-8', {
                    fatal: true
                });
                const chunkStr = decoder.decode(chunk, {
                    stream: true
                });
                const updatedChunkStr = insertBuildIdComment(chunkStr, buildId);
                controller.enqueue(encoder.encode(updatedChunkStr));
                return;
            }
            controller.enqueue(chunk);
        }
    });
}
function renderToInitialFizzStream({ ReactDOMServer, element, streamOptions }) {
    return getTracer().trace(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppRenderSpan"].renderToReadableStream, async ()=>ReactDOMServer.renderToReadableStream(element, streamOptions));
}
function createMetadataTransformStream(insert) {
    let chunkIndex = -1;
    let isMarkRemoved = false;
    return new TransformStream({
        async transform (chunk, controller) {
            let iconMarkIndex = -1;
            let closedHeadIndex = -1;
            chunkIndex++;
            if (isMarkRemoved) {
                controller.enqueue(chunk);
                return;
            }
            let iconMarkLength = 0;
            // Only search for the closed head tag once
            if (iconMarkIndex === -1) {
                iconMarkIndex = indexOfUint8Array(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].META.ICON_MARK);
                if (iconMarkIndex === -1) {
                    controller.enqueue(chunk);
                    return;
                } else {
                    // When we found the `<meta name="«nxt-icon»"` tag prefix, we will remove it from the chunk.
                    // Its close tag could either be `/>` or `>`, checking the next char to ensure we cover both cases.
                    iconMarkLength = __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].META.ICON_MARK.length;
                    // Check if next char is /, this is for xml mode.
                    if (chunk[iconMarkIndex + iconMarkLength] === 47) {
                        iconMarkLength += 2;
                    } else {
                        // The last char is `>`
                        iconMarkLength++;
                    }
                }
            }
            // Check if icon mark is inside <head> tag in the first chunk.
            if (chunkIndex === 0) {
                closedHeadIndex = indexOfUint8Array(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HEAD);
                if (iconMarkIndex !== -1) {
                    // The mark icon is located in the 1st chunk before the head tag.
                    // We do not need to insert the script tag in this case because it's in the head.
                    // Just remove the icon mark from the chunk.
                    if (iconMarkIndex < closedHeadIndex) {
                        const replaced = new Uint8Array(chunk.length - iconMarkLength);
                        // Remove the icon mark from the chunk.
                        replaced.set(chunk.subarray(0, iconMarkIndex));
                        replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex);
                        chunk = replaced;
                    } else {
                        // The icon mark is after the head tag, replace and insert the script tag at that position.
                        const insertion = await insert();
                        const encodedInsertion = encoder.encode(insertion);
                        const insertionLength = encodedInsertion.length;
                        const replaced = new Uint8Array(chunk.length - iconMarkLength + insertionLength);
                        replaced.set(chunk.subarray(0, iconMarkIndex));
                        replaced.set(encodedInsertion, iconMarkIndex);
                        replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex + insertionLength);
                        chunk = replaced;
                    }
                    isMarkRemoved = true;
                }
            // If there's no icon mark located, it will be handled later when if present in the following chunks.
            } else {
                // When it's appeared in the following chunks, we'll need to
                // remove the mark and then insert the script tag at that position.
                const insertion = await insert();
                const encodedInsertion = encoder.encode(insertion);
                const insertionLength = encodedInsertion.length;
                // Replace the icon mark with the hoist script or empty string.
                const replaced = new Uint8Array(chunk.length - iconMarkLength + insertionLength);
                // Set the first part of the chunk, before the icon mark.
                replaced.set(chunk.subarray(0, iconMarkIndex));
                // Set the insertion after the icon mark.
                replaced.set(encodedInsertion, iconMarkIndex);
                // Set the rest of the chunk after the icon mark.
                replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex + insertionLength);
                chunk = replaced;
                isMarkRemoved = true;
            }
            controller.enqueue(chunk);
        }
    });
}
function createHeadInsertionTransformStream(insert) {
    let inserted = false;
    // We need to track if this transform saw any bytes because if it didn't
    // we won't want to insert any server HTML at all
    let hasBytes = false;
    return new TransformStream({
        async transform (chunk, controller) {
            hasBytes = true;
            const insertion = await insert();
            if (inserted) {
                if (insertion) {
                    const encodedInsertion = encoder.encode(insertion);
                    controller.enqueue(encodedInsertion);
                }
                controller.enqueue(chunk);
            } else {
                // TODO (@Ethan-Arrowood): Replace the generic `indexOfUint8Array` method with something finely tuned for the subset of things actually being checked for.
                const index = indexOfUint8Array(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HEAD);
                // In fully static rendering or non PPR rendering cases:
                // `/head>` will always be found in the chunk in first chunk rendering.
                if (index !== -1) {
                    if (insertion) {
                        const encodedInsertion = encoder.encode(insertion);
                        // Get the total count of the bytes in the chunk and the insertion
                        // e.g.
                        // chunk = <head><meta charset="utf-8"></head>
                        // insertion = <script>...</script>
                        // output = <head><meta charset="utf-8"> [ <script>...</script> ] </head>
                        const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
                        // Append the first part of the chunk, before the head tag
                        insertedHeadContent.set(chunk.slice(0, index));
                        // Append the server inserted content
                        insertedHeadContent.set(encodedInsertion, index);
                        // Append the rest of the chunk
                        insertedHeadContent.set(chunk.slice(index), index + encodedInsertion.length);
                        controller.enqueue(insertedHeadContent);
                    } else {
                        controller.enqueue(chunk);
                    }
                    inserted = true;
                } else {
                    // This will happens in PPR rendering during next start, when the page is partially rendered.
                    // When the page resumes, the head tag will be found in the middle of the chunk.
                    // Where we just need to append the insertion and chunk to the current stream.
                    // e.g.
                    // PPR-static: <head>...</head><body> [ resume content ] </body>
                    // PPR-resume: [ insertion ] [ rest content ]
                    if (insertion) {
                        controller.enqueue(encoder.encode(insertion));
                    }
                    controller.enqueue(chunk);
                    inserted = true;
                }
            }
        },
        async flush (controller) {
            // Check before closing if there's anything remaining to insert.
            if (hasBytes) {
                const insertion = await insert();
                if (insertion) {
                    controller.enqueue(encoder.encode(insertion));
                }
            }
        }
    });
}
function createClientResumeScriptInsertionTransformStream() {
    const segmentPath = '/_full';
    const cacheBustingHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$cache$2d$busting$2d$search$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["computeCacheBustingSearchParam"])('1', '/_full', undefined, undefined //       headers[NEXT_URL]
    );
    const searchStr = `${__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]}=${cacheBustingHeader}`;
    const NEXT_CLIENT_RESUME_SCRIPT = `<script>__NEXT_CLIENT_RESUME=fetch(location.pathname+'?${searchStr}',{credentials:'same-origin',headers:{'${__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_HEADER"]}': '1','${__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]}': '1','${__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_SEGMENT_PREFETCH_HEADER"]}': '${segmentPath}'}})</script>`;
    let didAlreadyInsert = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (didAlreadyInsert) {
                // Already inserted the script into the head. Pass through.
                controller.enqueue(chunk);
                return;
            }
            // TODO (@Ethan-Arrowood): Replace the generic `indexOfUint8Array` method with something finely tuned for the subset of things actually being checked for.
            const headClosingTagIndex = indexOfUint8Array(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HEAD);
            if (headClosingTagIndex === -1) {
                // In fully static rendering or non PPR rendering cases:
                // `/head>` will always be found in the chunk in first chunk rendering.
                controller.enqueue(chunk);
                return;
            }
            const encodedInsertion = encoder.encode(NEXT_CLIENT_RESUME_SCRIPT);
            // Get the total count of the bytes in the chunk and the insertion
            // e.g.
            // chunk = <head><meta charset="utf-8"></head>
            // insertion = <script>...</script>
            // output = <head><meta charset="utf-8"> [ <script>...</script> ] </head>
            const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
            // Append the first part of the chunk, before the head tag
            insertedHeadContent.set(chunk.slice(0, headClosingTagIndex));
            // Append the server inserted content
            insertedHeadContent.set(encodedInsertion, headClosingTagIndex);
            // Append the rest of the chunk
            insertedHeadContent.set(chunk.slice(headClosingTagIndex), headClosingTagIndex + encodedInsertion.length);
            controller.enqueue(insertedHeadContent);
            didAlreadyInsert = true;
        }
    });
}
// Suffix after main body content - scripts before </body>,
// but wait for the major chunks to be enqueued.
function createDeferredSuffixStream(suffix) {
    let flushed = false;
    let pending;
    const flush = (controller)=>{
        const detached = new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        pending = detached;
        scheduleImmediate(()=>{
            try {
                controller.enqueue(encoder.encode(suffix));
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // If we've already flushed, we're done.
            if (flushed) return;
            // Schedule the flush to happen.
            flushed = true;
            flush(controller);
        },
        flush (controller) {
            if (pending) return pending.promise;
            if (flushed) return;
            // Flush now.
            controller.enqueue(encoder.encode(suffix));
        }
    });
}
function createFlightDataInjectionTransformStream(stream, delayDataUntilFirstHtmlChunk) {
    let htmlStreamFinished = false;
    let pull = null;
    let donePulling = false;
    function startOrContinuePulling(controller) {
        if (!pull) {
            pull = startPulling(controller);
        }
        return pull;
    }
    async function startPulling(controller) {
        const reader = stream.getReader();
        if (delayDataUntilFirstHtmlChunk) {
            // NOTE: streaming flush
            // We are buffering here for the inlined data stream because the
            // "shell" stream might be chunkenized again by the underlying stream
            // implementation, e.g. with a specific high-water mark. To ensure it's
            // the safe timing to pipe the data stream, this extra tick is
            // necessary.
            // We don't start reading until we've left the current Task to ensure
            // that it's inserted after flushing the shell. Note that this implementation
            // might get stale if impl details of Fizz change in the future.
            await atLeastOneTask();
        }
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) {
                    donePulling = true;
                    return;
                }
                // We want to prioritize HTML over RSC data.
                // The SSR render is based on the same RSC stream, so when we get a new RSC chunk,
                // we're likely to produce an HTML chunk as well, so give it a chance to flush first.
                if (!delayDataUntilFirstHtmlChunk && !htmlStreamFinished) {
                    await atLeastOneTask();
                }
                controller.enqueue(value);
            }
        } catch (err) {
            controller.error(err);
        }
    }
    return new TransformStream({
        start (controller) {
            if (!delayDataUntilFirstHtmlChunk) {
                startOrContinuePulling(controller);
            }
        },
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // Start the streaming if it hasn't already been started yet.
            if (delayDataUntilFirstHtmlChunk) {
                startOrContinuePulling(controller);
            }
        },
        flush (controller) {
            htmlStreamFinished = true;
            if (donePulling) {
                return;
            }
            return startOrContinuePulling(controller);
        }
    });
}
const CLOSE_TAG = '</body></html>';
/**
 * This transform stream moves the suffix to the end of the stream, so results
 * like `</body></html><script>...</script>` will be transformed to
 * `<script>...</script></body></html>`.
 */ function createMoveSuffixStream() {
    let foundSuffix = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (foundSuffix) {
                return controller.enqueue(chunk);
            }
            const index = indexOfUint8Array(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
            if (index > -1) {
                foundSuffix = true;
                // If the whole chunk is the suffix, then don't write anything, it will
                // be written in the flush.
                if (chunk.length === __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length) {
                    return;
                }
                // Write out the part before the suffix.
                const before = chunk.slice(0, index);
                controller.enqueue(before);
                // In the case where the suffix is in the middle of the chunk, we need
                // to split the chunk into two parts.
                if (chunk.length > __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length + index) {
                    // Write out the part after the suffix.
                    const after = chunk.slice(index + __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length);
                    controller.enqueue(after);
                }
            } else {
                controller.enqueue(chunk);
            }
        },
        flush (controller) {
            // Even if we didn't find the suffix, the HTML is not valid if we don't
            // add it, so insert it at the end.
            controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
        }
    });
}
function createStripDocumentClosingTagsTransform() {
    return new TransformStream({
        transform (chunk, controller) {
            // We rely on the assumption that chunks will never break across a code unit.
            // This is reasonable because we currently concat all of React's output from a single
            // flush into one chunk before streaming it forward which means the chunk will represent
            // a single coherent utf-8 string. This is not safe to use if we change our streaming to no
            // longer do this large buffered chunk
            if (isEquivalentUint8Arrays(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML) || isEquivalentUint8Arrays(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY) || isEquivalentUint8Arrays(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HTML)) {
                // the entire chunk is the closing tags; return without enqueueing anything.
                return;
            }
            // We assume these tags will go at together at the end of the document and that
            // they won't appear anywhere else in the document. This is not really a safe assumption
            // but until we revamp our streaming infra this is a performant way to string the tags
            chunk = removeFromUint8Array(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY);
            chunk = removeFromUint8Array(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HTML);
            controller.enqueue(chunk);
        }
    });
}
function createRootLayoutValidatorStream() {
    let foundHtml = false;
    let foundBody = false;
    return new TransformStream({
        async transform (chunk, controller) {
            // Peek into the streamed chunk to see if the tags are present.
            if (!foundHtml && indexOfUint8Array(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.HTML) > -1) {
                foundHtml = true;
            }
            if (!foundBody && indexOfUint8Array(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.BODY) > -1) {
                foundBody = true;
            }
            controller.enqueue(chunk);
        },
        flush (controller) {
            const missingTags = [];
            if (!foundHtml) missingTags.push('html');
            if (!foundBody) missingTags.push('body');
            if (!missingTags.length) return;
            controller.enqueue(encoder.encode(`<html id="__next_error__">
            <template
              data-next-error-message="Missing ${missingTags.map((c)=>`<${c}>`).join(missingTags.length > 1 ? ' and ' : '')} tags in the root layout.\nRead more at https://nextjs.org/docs/messages/missing-root-layout-tags"
              data-next-error-digest="${__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$errors$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MISSING_ROOT_TAGS_ERROR"]}"
              data-next-error-stack=""
            ></template>
          `));
        }
    });
}
function chainTransformers(readable, transformers) {
    let stream = readable;
    for (const transformer of transformers){
        if (!transformer) continue;
        stream = stream.pipeThrough(transformer);
    }
    return stream;
}
async function continueFizzStream(renderStream, { suffix, inlinedDataStream, isStaticGeneration, isBuildTimePrerendering, buildId, getServerInsertedHTML, getServerInsertedMetadata, validateRootLayout }) {
    // Suffix itself might contain close tags at the end, so we need to split it.
    const suffixUnclosed = suffix ? suffix.split(CLOSE_TAG, 1)[0] : null;
    if (isStaticGeneration) {
        // If we're generating static HTML we need to wait for it to resolve before continuing.
        await renderStream.allReady;
    } else {
        // Otherwise, we want to make sure Fizz is done with all microtasky work
        // before we start pulling the stream and cause a flush.
        await waitAtLeastOneReactRenderTask();
    }
    return chainTransformers(renderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Add build id comment to start of the HTML document (in export mode)
        createPrefetchCommentStream(isBuildTimePrerendering, buildId),
        // Transform metadata
        createMetadataTransformStream(getServerInsertedMetadata),
        // Insert suffix content
        suffixUnclosed != null && suffixUnclosed.length > 0 ? createDeferredSuffixStream(suffixUnclosed) : null,
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        inlinedDataStream ? createFlightDataInjectionTransformStream(inlinedDataStream, true) : null,
        // Validate the root layout for missing html or body tags
        validateRootLayout ? createRootLayoutValidatorStream() : null,
        // Close tags should always be deferred to the end
        createMoveSuffixStream(),
        // Special head insertions
        // TODO-APP: Insert server side html to end of head in app layout rendering, to avoid
        // hydration errors. Remove this once it's ready to be handled by react itself.
        createHeadInsertionTransformStream(getServerInsertedHTML)
    ]);
}
async function continueDynamicPrerender(prerenderStream, { getServerInsertedHTML, getServerInsertedMetadata }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()).pipeThrough(createStripDocumentClosingTagsTransform()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Transform metadata
    .pipeThrough(createMetadataTransformStream(getServerInsertedMetadata));
}
async function continueStaticPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata, isBuildTimePrerendering, buildId }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Add build id comment to start of the HTML document (in export mode)
    .pipeThrough(createPrefetchCommentStream(isBuildTimePrerendering, buildId)) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Transform metadata
    .pipeThrough(createMetadataTransformStream(getServerInsertedMetadata)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createFlightDataInjectionTransformStream(inlinedDataStream, true)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
async function continueStaticFallbackPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata, isBuildTimePrerendering, buildId }) {
    // Same as `continueStaticPrerender`, but also inserts an additional script
    // to instruct the client to start fetching the hydration data as early
    // as possible.
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Add build id comment to start of the HTML document (in export mode)
    .pipeThrough(createPrefetchCommentStream(isBuildTimePrerendering, buildId)) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert the client resume script into the head
    .pipeThrough(createClientResumeScriptInsertionTransformStream()) // Transform metadata
    .pipeThrough(createMetadataTransformStream(getServerInsertedMetadata)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createFlightDataInjectionTransformStream(inlinedDataStream, true)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
async function continueDynamicHTMLResume(renderStream, { delayDataUntilFirstHtmlChunk, inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata }) {
    return renderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Transform metadata
    .pipeThrough(createMetadataTransformStream(getServerInsertedMetadata)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createFlightDataInjectionTransformStream(inlinedDataStream, delayDataUntilFirstHtmlChunk)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
function createDocumentClosingStream() {
    return streamFromString(CLOSE_TAG);
} //# sourceMappingURL=node-web-streams-helper.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/compiled/string-hash/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        328: (e)=>{
            function hash(e) {
                var r = 5381, _ = e.length;
                while(_){
                    r = r * 33 ^ e.charCodeAt(--_);
                }
                return r >>> 0;
            }
            e.exports = hash;
        }
    };
    var r = {};
    function __nccwpck_require__(_) {
        var a = r[_];
        if (a !== undefined) {
            return a.exports;
        }
        var t = r[_] = {
            exports: {}
        };
        var i = true;
        try {
            e[_](t, t.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[_];
        }
        return t.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/AirSafeMove/src/node_modules/next/dist/compiled/string-hash") + "/";
    var _ = __nccwpck_require__(328);
    module.exports = _;
})();
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/format-server-error.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatServerError",
    ()=>formatServerError,
    "getStackWithoutErrorMessage",
    ()=>getStackWithoutErrorMessage
]);
const invalidServerComponentReactHooks = [
    'useDeferredValue',
    'useEffect',
    'useImperativeHandle',
    'useInsertionEffect',
    'useLayoutEffect',
    'useReducer',
    'useRef',
    'useState',
    'useSyncExternalStore',
    'useTransition',
    'experimental_useOptimistic',
    'useOptimistic'
];
function setMessage(error, message) {
    error.message = message;
    if (error.stack) {
        const lines = error.stack.split('\n');
        lines[0] = message;
        error.stack = lines.join('\n');
    }
}
function getStackWithoutErrorMessage(error) {
    const stack = error.stack;
    if (!stack) return '';
    return stack.replace(/^[^\n]*\n/, '');
}
function formatServerError(error) {
    if (typeof (error == null ? void 0 : error.message) !== 'string') return;
    if (error.message.includes('Class extends value undefined is not a constructor or null')) {
        const addedMessage = 'This might be caused by a React Class Component being rendered in a Server Component, React Class Components only works in Client Components. Read more: https://nextjs.org/docs/messages/class-component-in-server-component';
        // If this error instance already has the message, don't add it again
        if (error.message.includes(addedMessage)) return;
        setMessage(error, `${error.message}

${addedMessage}`);
        return;
    }
    if (error.message.includes('createContext is not a function')) {
        setMessage(error, 'createContext only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/context-in-server-component');
        return;
    }
    for (const clientHook of invalidServerComponentReactHooks){
        const regex = new RegExp(`\\b${clientHook}\\b.*is not a function`);
        if (regex.test(error.message)) {
            setMessage(error, `${clientHook} only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component`);
            return;
        }
    }
} //# sourceMappingURL=format-server-error.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BailoutToCSRError",
    ()=>BailoutToCSRError,
    "isBailoutToCSRError",
    ()=>isBailoutToCSRError
]);
// This has to be a shared module which is shared between client component error boundary and dynamic component
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
"[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/is-next-router-error.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNextRouterError",
    ()=>isNextRouterError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './redirect-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function isNextRouterError(error) {
    return isRedirectError(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHTTPAccessFallbackError"])(error);
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHangingPromiseRejectionError",
    ()=>isHangingPromiseRejectionError,
    "makeDevtoolsIOAwarePromise",
    ()=>makeDevtoolsIOAwarePromise,
    "makeHangingPromise",
    ()=>makeHangingPromise
]);
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
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "METADATA_BOUNDARY_NAME",
    ()=>METADATA_BOUNDARY_NAME,
    "OUTLET_BOUNDARY_NAME",
    ()=>OUTLET_BOUNDARY_NAME,
    "ROOT_LAYOUT_BOUNDARY_NAME",
    ()=>ROOT_LAYOUT_BOUNDARY_NAME,
    "VIEWPORT_BOUNDARY_NAME",
    ()=>VIEWPORT_BOUNDARY_NAME
]);
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvariantError",
    ()=>InvariantError
]);
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Postpone",
    ()=>Postpone,
    "PreludeState",
    ()=>PreludeState,
    "abortAndThrowOnSynchronousRequestDataAccess",
    ()=>abortAndThrowOnSynchronousRequestDataAccess,
    "abortOnSynchronousPlatformIOAccess",
    ()=>abortOnSynchronousPlatformIOAccess,
    "accessedDynamicData",
    ()=>accessedDynamicData,
    "annotateDynamicAccess",
    ()=>annotateDynamicAccess,
    "consumeDynamicAccess",
    ()=>consumeDynamicAccess,
    "createDynamicTrackingState",
    ()=>createDynamicTrackingState,
    "createDynamicValidationState",
    ()=>createDynamicValidationState,
    "createHangingInputAbortSignal",
    ()=>createHangingInputAbortSignal,
    "createRenderInBrowserAbortSignal",
    ()=>createRenderInBrowserAbortSignal,
    "delayUntilRuntimeStage",
    ()=>delayUntilRuntimeStage,
    "formatDynamicAPIAccesses",
    ()=>formatDynamicAPIAccesses,
    "getFirstDynamicReason",
    ()=>getFirstDynamicReason,
    "getStaticShellDisallowedDynamicReasons",
    ()=>getStaticShellDisallowedDynamicReasons,
    "isDynamicPostpone",
    ()=>isDynamicPostpone,
    "isPrerenderInterruptedError",
    ()=>isPrerenderInterruptedError,
    "logDisallowedDynamicError",
    ()=>logDisallowedDynamicError,
    "markCurrentScopeAsDynamic",
    ()=>markCurrentScopeAsDynamic,
    "postponeWithTracking",
    ()=>postponeWithTracking,
    "throwIfDisallowedDynamic",
    ()=>throwIfDisallowedDynamic,
    "throwToInterruptStaticGeneration",
    ()=>throwToInterruptStaticGeneration,
    "trackAllowedDynamicAccess",
    ()=>trackAllowedDynamicAccess,
    "trackDynamicDataInDynamicRender",
    ()=>trackDynamicDataInDynamicRender,
    "trackDynamicHoleInRuntimeShell",
    ()=>trackDynamicHoleInRuntimeShell,
    "trackDynamicHoleInStaticShell",
    ()=>trackDynamicHoleInStaticShell,
    "useDynamicRouteParams",
    ()=>useDynamicRouteParams,
    "useDynamicSearchParams",
    ()=>useDynamicSearchParams
]);
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
 */ // Once postpone is in stable we should switch to importing the postpone export directly
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../client/components/static-generation-bailout'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './work-unit-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../app-render/work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-constants.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/scheduler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const hasPostpone = typeof __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].unstable_postpone === 'function';
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
        throw Object.defineProperty(new StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
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
                const err = Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
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
    const err = Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
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
    const prerenderStore = workUnitAsyncStorage.getStore();
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
    __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].unstable_postpone(createPostponeReason(route, expression));
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
    controller.abort(Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BailoutToCSRError"]('Render in Browser'), "__NEXT_ERROR_CODE", {
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
                const runtimeStagePromise = getRuntimeStagePromise(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>scheduleOnNextTick(()=>controller.abort()));
                } else {
                    scheduleOnNextTick(()=>controller.abort());
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
    const workStore = workAsyncStorage.getStore();
    const workUnitStore = workUnitAsyncStorage.getStore();
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
                        __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, workStore.route, expression));
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
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
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
    const workStore = workAsyncStorage.getStore();
    const workUnitStore = workUnitAsyncStorage.getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        throwForMissingRequestStore(expression);
    }
    switch(workUnitStore.type){
        case 'prerender-client':
            {
                __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BailoutToCSRError"](expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
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
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROOT_LAYOUT_BOUNDARY_NAME"]} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["METADATA_BOUNDARY_NAME"]}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VIEWPORT_BOUNDARY_NAME"]}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OUTLET_BOUNDARY_NAME"]}[\\n\\s]`);
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
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].captureOwnerStack ? __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].captureOwnerStack() : null;
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
        throw new StaticGenBailoutError();
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
            throw new StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new StaticGenBailoutError();
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
                Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
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
"[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/is-plain-object.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getObjectClassLabel",
    ()=>getObjectClassLabel,
    "isPlainObject",
    ()=>isPlainObject
]);
function getObjectClassLabel(value) {
    return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
    if (getObjectClassLabel(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    /**
   * this used to be previously:
   *
   * `return prototype === null || prototype === Object.prototype`
   *
   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
   *
   * It was changed to the current implementation since it's resilient to serialization.
   */ return prototype === null || prototype.hasOwnProperty('isPrototypeOf');
} //# sourceMappingURL=is-plain-object.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/is-error.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isError,
    "getProperError",
    ()=>getProperError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$plain$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/is-plain-object.js [app-rsc] (ecmascript)");
;
/**
 * This is a safe stringify function that handles circular references.
 * We're using a simpler version here to avoid introducing
 * the dependency `safe-stable-stringify` into production bundle.
 *
 * This helper is used both in development and production.
 */ function safeStringifyLite(obj) {
    const seen = new WeakSet();
    return JSON.stringify(obj, (_key, value)=>{
        // If value is an object and already seen, replace with "[Circular]"
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return '[Circular]';
            }
            seen.add(value);
        }
        return value;
    });
}
function isError(err) {
    return typeof err === 'object' && err !== null && 'name' in err && 'message' in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // provide better error for case where `throw undefined`
        // is called in development
        if (typeof err === 'undefined') {
            return Object.defineProperty(new Error('An undefined error was thrown, ' + 'see here for more info: https://nextjs.org/docs/messages/threw-undefined'), "__NEXT_ERROR_CODE", {
                value: "E98",
                enumerable: false,
                configurable: true
            });
        }
        if (err === null) {
            return Object.defineProperty(new Error('A null error was thrown, ' + 'see here for more info: https://nextjs.org/docs/messages/threw-undefined'), "__NEXT_ERROR_CODE", {
                value: "E336",
                enumerable: false,
                configurable: true
            });
        }
    }
    return Object.defineProperty(new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$plain$2d$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(err) ? safeStringifyLite(err) : err + ''), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=is-error.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/error-telemetry-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDigestWithErrorCode",
    ()=>createDigestWithErrorCode,
    "extractNextErrorCode",
    ()=>extractNextErrorCode
]);
const ERROR_CODE_DELIMITER = '@';
const createDigestWithErrorCode = (thrownValue, originalDigest)=>{
    if (typeof thrownValue === 'object' && thrownValue !== null && '__NEXT_ERROR_CODE' in thrownValue) {
        return `${originalDigest}${ERROR_CODE_DELIMITER}${thrownValue.__NEXT_ERROR_CODE}`;
    }
    return originalDigest;
};
const extractNextErrorCode = (error)=>{
    if (typeof error === 'object' && error !== null && '__NEXT_ERROR_CODE' in error && typeof error.__NEXT_ERROR_CODE === 'string') {
        return error.__NEXT_ERROR_CODE;
    }
    if (typeof error === 'object' && error !== null && 'digest' in error && typeof error.digest === 'string') {
        const segments = error.digest.split(ERROR_CODE_DELIMITER);
        const errorCode = segments.find((segment)=>segment.startsWith('E'));
        return errorCode;
    }
    return undefined;
}; //# sourceMappingURL=error-telemetry-utils.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/create-error-handler.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHTMLErrorHandler",
    ()=>createHTMLErrorHandler,
    "createReactServerErrorHandler",
    ()=>createReactServerErrorHandler,
    "getDigestForWellKnownError",
    ()=>getDigestForWellKnownError,
    "isUserLandError",
    ()=>isUserLandError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/compiled/string-hash/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$format$2d$server$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/format-server-error.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/trace/tracer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../pipe-readable'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/is-next-router-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$is$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/is-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$error$2d$telemetry$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/error-telemetry-utils.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './react-large-shell-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
;
;
;
function getDigestForWellKnownError(error) {
    // If we're bailing out to CSR, we don't need to log the error.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBailoutToCSRError"])(error)) return error.digest;
    // If this is a navigation error, we don't need to log the error.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNextRouterError"])(error)) return error.digest;
    // If this error occurs, we know that we should be stopping the static
    // render. This is only thrown in static generation when PPR is not enabled,
    // which causes the whole page to be marked as dynamic. We don't need to
    // tell the user about this error, as it's not actionable.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDynamicServerError"])(error)) return error.digest;
    // If this is a prerender interrupted error, we don't need to log the error.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPrerenderInterruptedError"])(error)) return error.digest;
    return undefined;
}
function createReactServerErrorHandler(shouldFormatError, isNextExport, reactServerErrors, onReactServerRenderError, spanToRecordOn) {
    return (thrownValue)=>{
        var _err_message;
        if (typeof thrownValue === 'string') {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(thrownValue).toString();
        }
        // If the response was closed, we don't need to log the error.
        if (isAbortError(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        if (isReactLargeShellError(thrownValue)) {
            // TODO: Aggregate
            console.error(thrownValue);
            return undefined;
        }
        let err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$is$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProperError"])(thrownValue);
        let silenceLog = false;
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (err.digest) {
            if (("TURBOPACK compile-time value", "development") === 'production' && reactServerErrors.has(err.digest)) //TURBOPACK unreachable
            ;
            else {
            // Either we're in development (where we want to keep the transported
            // error with environmentName), or the error is not in reactServerErrors
            // but has a digest from other means. Keep the error as-is.
            }
        } else {
            err.digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$error$2d$telemetry$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDigestWithErrorCode"])(err, (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(err.message + (err.stack || '')).toString());
        }
        // @TODO by putting this here and not at the top it is possible that
        // we don't error the build in places we actually expect to
        if (!reactServerErrors.has(err.digest)) {
            reactServerErrors.set(err.digest, err);
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$format$2d$server$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatServerError"])(err);
        }
        // Don't log the suppressed error during export
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes('The specific message is omitted in production builds to avoid leaking sensitive details.')))) {
            // Record exception on the provided span if available, otherwise try active span.
            const span = spanToRecordOn ?? getTracer().getActiveScopeSpan();
            if (span) {
                span.recordException(err);
                span.setAttribute('error.type', err.name);
                span.setStatus({
                    code: SpanStatusCode.ERROR,
                    message: err.message
                });
            }
            onReactServerRenderError(err, silenceLog);
        }
        return err.digest;
    };
}
function createHTMLErrorHandler(shouldFormatError, isNextExport, reactServerErrors, allCapturedErrors, onHTMLRenderSSRError, spanToRecordOn) {
    return (thrownValue, errorInfo)=>{
        var _err_message;
        if (isReactLargeShellError(thrownValue)) {
            // TODO: Aggregate
            console.error(thrownValue);
            return undefined;
        }
        let isSSRError = true;
        allCapturedErrors.push(thrownValue);
        // If the response was closed, we don't need to log the error.
        if (isAbortError(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$is$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProperError"])(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (err.digest) {
            if (reactServerErrors.has(err.digest)) {
                // This error is likely an obfuscated error from react-server.
                // We recover the original error here.
                thrownValue = reactServerErrors.get(err.digest);
                isSSRError = false;
            } else {
            // The error is not from react-server but has a digest
            // from other means so we don't need to produce a new one
            }
        } else {
            err.digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$error$2d$telemetry$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDigestWithErrorCode"])(err, (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(err.message + ((errorInfo == null ? void 0 : errorInfo.componentStack) || err.stack || '')).toString());
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$format$2d$server$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatServerError"])(err);
        }
        // Don't log the suppressed error during export
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes('The specific message is omitted in production builds to avoid leaking sensitive details.')))) {
            // HTML errors contain RSC errors as well, filter them out before reporting
            if (isSSRError) {
                // Record exception on the provided span if available, otherwise try active span.
                const span = spanToRecordOn ?? getTracer().getActiveScopeSpan();
                if (span) {
                    span.recordException(err);
                    span.setAttribute('error.type', err.name);
                    span.setStatus({
                        code: SpanStatusCode.ERROR,
                        message: err.message
                    });
                }
                onHTMLRenderSSRError(err, errorInfo);
            }
        }
        return err.digest;
    };
}
function isUserLandError(err) {
    return !isAbortError(err) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBailoutToCSRError"])(err) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNextRouterError"])(err);
} //# sourceMappingURL=create-error-handler.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/collect-segment-data.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectSegmentData",
    ()=>collectSegmentData
]);
/* eslint-disable @next/internal/no-ambiguous-jsx -- Bundled in entry-base so it gets the right JSX runtime. */ var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
// eslint-disable-next-line import/no-extraneous-dependencies
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$client$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/compiled/react-server-dom-turbopack/client.node.js [app-rsc] (ecmascript)");
// eslint-disable-next-line import/no-extraneous-dependencies
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/scheduler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../shared/lib/segment-cache/segment-value-encoding'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$create$2d$error$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/create-error-handler.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './prospective-render-utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
;
const filterStackFrame = ("TURBOPACK compile-time truthy", 1) ? (()=>{
    const e = new Error("Cannot find module '../lib/source-maps'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})().filterStackFrameDEV : "TURBOPACK unreachable";
const findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? (()=>{
    const e = new Error("Cannot find module '../lib/source-maps'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})().findSourceMapURLDEV : "TURBOPACK unreachable";
function onSegmentPrerenderError(error) {
    const digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$create$2d$error$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDigestForWellKnownError"])(error);
    if (digest) {
        return digest;
    }
    // We don't need to log the errors because we would have already done that
    // when generating the original Flight stream for the whole page.
    if (process.env.NEXT_DEBUG_BUILD || process.env.__NEXT_VERBOSE_LOGGING) {
        const workStore = workAsyncStorage.getStore();
        printDebugThrownValueForProspectiveRender(error, (workStore == null ? void 0 : workStore.route) ?? 'unknown route', Phase.SegmentCollection);
    }
}
async function collectSegmentData(isCacheComponentsEnabled, fullPageDataBuffer, staleTime, clientModules, serverConsumerManifest) {
    // Traverse the router tree and generate a prefetch response for each segment.
    // A mutable map to collect the results as we traverse the route tree.
    const resultMap = new Map();
    // Before we start, warm up the module cache by decoding the page data once.
    // Then we can assume that any remaining async tasks that occur the next time
    // are due to hanging promises caused by dynamic data access. Note we only
    // have to do this once per page, not per individual segment.
    //
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$client$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFromReadableStream"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromBuffer"])(fullPageDataBuffer), {
            findSourceMapURL,
            serverConsumerManifest
        });
        await waitAtLeastOneReactRenderTask();
    } catch  {}
    // Create an abort controller that we'll use to stop the stream.
    const abortController = new AbortController();
    const onCompletedProcessingRouteTree = async ()=>{
        // Since all we're doing is decoding and re-encoding a cached prerender, if
        // serializing the stream takes longer than a microtask, it must because of
        // hanging promises caused by dynamic data.
        await waitAtLeastOneReactRenderTask();
        abortController.abort();
    };
    // Generate a stream for the route tree prefetch. While we're walking the
    // tree, we'll also spawn additional tasks to generate the segment prefetches.
    // The promises for these tasks are pushed to a mutable array that we will
    // await once the route tree is fully rendered.
    const segmentTasks = [];
    const { prelude: treeStream } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prerender"])(// we need to use a component so that when we decode the original stream
    // inside of it, the side effects are transferred to the new stream.
    // @ts-expect-error
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(PrefetchTreeData, {
        isClientParamParsingEnabled: isCacheComponentsEnabled,
        fullPageDataBuffer: fullPageDataBuffer,
        serverConsumerManifest: serverConsumerManifest,
        clientModules: clientModules,
        staleTime: staleTime,
        segmentTasks: segmentTasks,
        onCompletedProcessingRouteTree: onCompletedProcessingRouteTree
    }), clientModules, {
        filterStackFrame,
        signal: abortController.signal,
        onError: onSegmentPrerenderError
    });
    // Write the route tree to a special `/_tree` segment.
    const treeBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamToBuffer"])(treeStream);
    resultMap.set('/_tree', treeBuffer);
    // Also output the entire full page data response
    resultMap.set('/_full', fullPageDataBuffer);
    // Now that we've finished rendering the route tree, all the segment tasks
    // should have been spawned. Await them in parallel and write the segment
    // prefetches to the result map.
    for (const [segmentPath, buffer] of (await Promise.all(segmentTasks))){
        resultMap.set(segmentPath, buffer);
    }
    return resultMap;
}
async function PrefetchTreeData({ isClientParamParsingEnabled, fullPageDataBuffer, serverConsumerManifest, clientModules, staleTime, segmentTasks, onCompletedProcessingRouteTree }) {
    // We're currently rendering a Flight response for the route tree prefetch.
    // Inside this component, decode the Flight stream for the whole page. This is
    // a hack to transfer the side effects from the original Flight stream (e.g.
    // Float preloads) onto the Flight stream for the tree prefetch.
    // TODO: React needs a better way to do this. Needed for Server Actions, too.
    const initialRSCPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$client$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFromReadableStream"])(createUnclosingPrefetchStream((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromBuffer"])(fullPageDataBuffer)), {
        findSourceMapURL,
        serverConsumerManifest
    });
    const buildId = initialRSCPayload.b;
    // FlightDataPath is an unsound type, hence the additional checks.
    const flightDataPaths = initialRSCPayload.f;
    if (flightDataPaths.length !== 1 && flightDataPaths[0].length !== 3) {
        console.error('Internal Next.js error: InitialRSCPayload does not match the expected ' + 'shape for a prerendered page during segment prefetch generation.');
        return null;
    }
    const flightRouterState = flightDataPaths[0][0];
    const seedData = flightDataPaths[0][1];
    const head = flightDataPaths[0][2];
    // Compute the route metadata tree by traversing the FlightRouterState. As we
    // walk the tree, we will also spawn a task to produce a prefetch response for
    // each segment.
    const tree = collectSegmentDataImpl(isClientParamParsingEnabled, flightRouterState, buildId, seedData, clientModules, ROOT_SEGMENT_REQUEST_KEY, segmentTasks);
    // Also spawn a task to produce a prefetch response for the "head" segment.
    // The head contains metadata, like the title; it's not really a route
    // segment, but it contains RSC data, so it's treated like a segment by
    // the client cache.
    segmentTasks.push(waitAtLeastOneReactRenderTask().then(()=>renderSegmentPrefetch(buildId, head, null, HEAD_REQUEST_KEY, clientModules)));
    // Notify the abort controller that we're done processing the route tree.
    // Anything async that happens after this point must be due to hanging
    // promises in the original stream.
    onCompletedProcessingRouteTree();
    // Render the route tree to a special `/_tree` segment.
    const treePrefetch = {
        buildId,
        tree,
        staleTime
    };
    return treePrefetch;
}
function collectSegmentDataImpl(isClientParamParsingEnabled, route, buildId, seedData, clientModules, requestKey, segmentTasks) {
    // Metadata about the segment. Sent as part of the tree prefetch. Null if
    // there are no children.
    let slotMetadata = null;
    const children = route[1];
    const seedDataChildren = seedData !== null ? seedData[1] : null;
    for(const parallelRouteKey in children){
        const childRoute = children[parallelRouteKey];
        const childSegment = childRoute[0];
        const childSeedData = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
        const childRequestKey = appendSegmentRequestKeyPart(requestKey, parallelRouteKey, createSegmentRequestKeyPart(childSegment));
        const childTree = collectSegmentDataImpl(isClientParamParsingEnabled, childRoute, buildId, childSeedData, clientModules, childRequestKey, segmentTasks);
        if (slotMetadata === null) {
            slotMetadata = {};
        }
        slotMetadata[parallelRouteKey] = childTree;
    }
    const hasRuntimePrefetch = seedData !== null ? seedData[4] : false;
    if (seedData !== null) {
        // Spawn a task to write the segment data to a new Flight stream.
        segmentTasks.push(// current task to escape the current rendering context.
        waitAtLeastOneReactRenderTask().then(()=>renderSegmentPrefetch(buildId, seedData[0], seedData[2], requestKey, clientModules)));
    } else {
    // This segment does not have any seed data. Skip generating a prefetch
    // response for it. We'll still include it in the route tree, though.
    // TODO: We should encode in the route tree whether a segment is missing
    // so we don't attempt to fetch it for no reason. As of now this shouldn't
    // ever happen in practice, though.
    }
    const segment = route[0];
    let name;
    let paramType = null;
    let paramKey = null;
    if (typeof segment === 'string') {
        name = segment;
        paramKey = segment;
        paramType = null;
    } else {
        name = segment[0];
        paramKey = segment[1];
        paramType = segment[2];
    }
    // Metadata about the segment. Sent to the client as part of the
    // tree prefetch.
    return {
        name,
        paramType,
        // This value is ommitted from the prefetch response when cacheComponents
        // is enabled.
        paramKey: isClientParamParsingEnabled ? null : paramKey,
        hasRuntimePrefetch,
        slots: slotMetadata,
        isRootLayout: route[4] === true
    };
}
async function renderSegmentPrefetch(buildId, rsc, loading, requestKey, clientModules) {
    // Render the segment data to a stream.
    // In the future, this is where we can include additional metadata, like the
    // stale time and cache tags.
    const segmentPrefetch = {
        buildId,
        rsc,
        loading,
        isPartial: await isPartialRSCData(rsc, clientModules)
    };
    // Since all we're doing is decoding and re-encoding a cached prerender, if
    // it takes longer than a microtask, it must because of hanging promises
    // caused by dynamic data. Abort the stream at the end of the current task.
    const abortController = new AbortController();
    waitAtLeastOneReactRenderTask().then(()=>abortController.abort());
    const { prelude: segmentStream } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prerender"])(segmentPrefetch, clientModules, {
        filterStackFrame,
        signal: abortController.signal,
        onError: onSegmentPrerenderError
    });
    const segmentBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamToBuffer"])(segmentStream);
    if (requestKey === ROOT_SEGMENT_REQUEST_KEY) {
        return [
            '/_index',
            segmentBuffer
        ];
    } else {
        return [
            requestKey,
            segmentBuffer
        ];
    }
}
async function isPartialRSCData(rsc, clientModules) {
    // We can determine if a segment contains only partial data if it takes longer
    // than a task to encode, because dynamic data is encoded as an infinite
    // promise. We must do this in a separate Flight prerender from the one that
    // actually generates the prefetch stream because we need to include
    // `isPartial` in the stream itself.
    let isPartial = false;
    const abortController = new AbortController();
    waitAtLeastOneReactRenderTask().then(()=>{
        // If we haven't yet finished the outer task, then it must be because we
        // accessed dynamic data.
        isPartial = true;
        abortController.abort();
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prerender"])(rsc, clientModules, {
        filterStackFrame,
        signal: abortController.signal,
        onError () {}
    });
    return isPartial;
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
} //# sourceMappingURL=collect-segment-data.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SegmentViewNode",
    ()=>SegmentViewNode,
    "SegmentViewStateNode",
    ()=>SegmentViewStateNode,
    "patchFetch",
    ()=>patchFetch
]);
// eslint-disable-next-line import/no-extraneous-dependencies
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
// eslint-disable-next-line import/no-extraneous-dependencies
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static.js [app-rsc] (ecmascript)");
// TODO: Just re-export `* as ReactServer`
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/layout-router.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../client/components/render-from-template-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../app-render/work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './work-unit-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../request/search-params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../request/params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './rsc/preloads'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './rsc/postpone'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './rsc/taint'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$collect$2d$segment$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/collect-segment-data.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/patch-fetch'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
let SegmentViewNode = ()=>null;
let SegmentViewStateNode = ()=>null;
if ("TURBOPACK compile-time truthy", 1) {
    const mod = (()=>{
        const e = new Error("Cannot find module '../../next-devtools/userspace/app/segment-explorer-node'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
    SegmentViewNode = mod.SegmentViewNode;
    SegmentViewStateNode = mod.SegmentViewStateNode;
}
// hot-reloader modules are not bundled so we need to inject `__next__clear_chunk_cache__`
// into globalThis from this file which is bundled.
if ("TURBOPACK compile-time truthy", 1) {
    globalThis.__next__clear_chunk_cache__ = /*TURBOPACK member replacement*/ __turbopack_context__.C;
} else //TURBOPACK unreachable
;
function patchFetch() {
    return _patchFetch({
        workAsyncStorage,
        workUnitAsyncStorage
    });
}
;
 //# sourceMappingURL=entry-base.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientSegmentRoot"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTTPAccessFallbackBoundary"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SegmentViewStateNode"],
    "actionAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["actionAsyncStorage"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["captureOwnerStack"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$collect$2d$segment$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectSegmentData"],
    "createElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"],
    "createMetadataComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMetadataComponents"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeReply"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["patchFetch"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prerender"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderToReadableStream"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$layout$2d$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/layout-router.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../client/components/render-from-template-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../app-render/work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './work-unit-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../request/search-params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../request/params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './rsc/preloads'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './rsc/postpone'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './rsc/taint'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$collect$2d$segment$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/collect-segment-data.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=AirSafeMove_dcc60368._.js.map