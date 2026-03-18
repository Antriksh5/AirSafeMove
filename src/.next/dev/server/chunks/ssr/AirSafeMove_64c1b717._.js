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
"[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/isomorphic/path.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This module is for next.js server internal usage of path module.
 * It will use native path module for nodejs runtime.
 * It will use path-browserify polyfill for edge runtime.
 */ let path;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
}
module.exports = path; //# sourceMappingURL=path.js.map
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
const _path = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/shared/lib/isomorphic/path.js [app-rsc] (ecmascript)"));
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
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDedupedByCallsiteServerErrorLoggerDev",
    ()=>createDedupedByCallsiteServerErrorLoggerDev
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"] === 'function' ? __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"] : (fn)=>fn;
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
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/request/params.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createParamsFromClient",
    ()=>createParamsFromClient,
    "createPrerenderParamsForClientSegment",
    ()=>createPrerenderParamsForClientSegment,
    "createServerParamsForMetadata",
    ()=>createServerParamsForMetadata,
    "createServerParamsForRoute",
    ()=>createServerParamsForRoute,
    "createServerParamsForServerSegment",
    ()=>createServerParamsForServerSegment
]);
(()=>{
    const e = new Error("Cannot find module '../app-render/work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../web/spec-extension/adapters/reflect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../app-render/work-unit-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../shared/lib/utils/reflect-utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$dynamic$2d$access$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$dynamic$2d$access$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)");
(()=>{
    const e = new Error("Cannot find module '../app-render/staged-rendering'");
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
function createParamsFromClient(underlyingParams, workStore) {
    const workUnitStore = workUnitAsyncStorage.getStore();
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
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('createParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E736",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('createParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
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
    throwInvariantForMissingStore();
}
const createServerParamsForMetadata = createServerParamsForServerSegment;
function createServerParamsForRoute(underlyingParams, workStore) {
    const workUnitStore = workUnitAsyncStorage.getStore();
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
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('createServerParamsForRoute should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
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
    throwInvariantForMissingStore();
}
function createServerParamsForServerSegment(underlyingParams, workStore) {
    const workUnitStore = workUnitAsyncStorage.getStore();
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
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('createServerParamsForServerSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
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
    throwInvariantForMissingStore();
}
function createPrerenderParamsForClientSegment(underlyingParams) {
    const workStore = workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing workStore in createPrerenderParamsForClientSegment'), "__NEXT_ERROR_CODE", {
            value: "E773",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = workUnitAsyncStorage.getStore();
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
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, workStore.route, '`params`');
                        }
                    }
                }
                break;
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('createPrerenderParamsForClientSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["delayUntilRuntimeStage"])(workUnitStore, makeUntrackedParams(underlyingParams));
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
            const originalMethod = ReflectAdapter.get(target, prop, receiver);
            return ({
                [prop]: (...args)=>{
                    const store = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$dynamic$2d$access$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$dynamic$2d$access$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["dynamicAccessAsyncStorage"].getStore();
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
        return ReflectAdapter.get(target, prop, receiver);
    }
};
function makeHangingParams(underlyingParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = new Proxy((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(prerenderStore.renderSignal, workStore.route, '`params`'), fallbackParamsProxyHandler);
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
        if (wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            if (fallbackParams.has(prop)) {
                Object.defineProperty(augmentedUnderlying, prop, {
                    get () {
                        const expression = describeStringPropertyAccess('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when cacheComponents is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwToInterruptStaticGeneration"])(expression, workStore, prerenderStore);
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
    const promise = hasFallbackParams ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeDevtoolsIOAwarePromise"])(underlyingParams, requestStore, RenderStage.Runtime) : Promise.resolve(underlyingParams);
    const proxiedPromise = instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore);
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore) {
    // Track which properties we should warn for.
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (wellKnownProperties.has(prop)) {
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
                    const expression = describeStringPropertyAccess('params', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            const expression = '`...params` or similar expression';
            warnForSyncAccess(workStore.route, expression);
            return Reflect.ownKeys(target);
        }
    });
}
const warnForSyncAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$create$2d$deduped$2d$by$2d$callsite$2d$server$2d$error$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDedupedByCallsiteServerErrorLoggerDev"])(createParamsAccessError);
function createParamsAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E834",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=params.js.map
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
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/opengraph.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLinksMeta",
    ()=>AppLinksMeta,
    "OpenGraphMetadata",
    ()=>OpenGraphMetadata,
    "TwitterMetadata",
    ()=>TwitterMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/meta.js [app-rsc] (ecmascript)");
;
function OpenGraphMetadata({ openGraph }) {
    var _openGraph_title, _openGraph_url, _openGraph_ttl;
    if (!openGraph) {
        return null;
    }
    let typedOpenGraph;
    if ('type' in openGraph) {
        const openGraphType = openGraph.type;
        switch(openGraphType){
            case 'website':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'website'
                    })
                ];
                break;
            case 'article':
                var _openGraph_publishedTime, _openGraph_modifiedTime, _openGraph_expirationTime;
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'article'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'article:published_time',
                        content: (_openGraph_publishedTime = openGraph.publishedTime) == null ? void 0 : _openGraph_publishedTime.toString()
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'article:modified_time',
                        content: (_openGraph_modifiedTime = openGraph.modifiedTime) == null ? void 0 : _openGraph_modifiedTime.toString()
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'article:expiration_time',
                        content: (_openGraph_expirationTime = openGraph.expirationTime) == null ? void 0 : _openGraph_expirationTime.toString()
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'article:author',
                        contents: openGraph.authors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'article:section',
                        content: openGraph.section
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'article:tag',
                        contents: openGraph.tags
                    })
                ];
                break;
            case 'book':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'book'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'book:isbn',
                        content: openGraph.isbn
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'book:release_date',
                        content: openGraph.releaseDate
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'book:author',
                        contents: openGraph.authors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'book:tag',
                        contents: openGraph.tags
                    })
                ];
                break;
            case 'profile':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'profile'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'profile:first_name',
                        content: openGraph.firstName
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'profile:last_name',
                        content: openGraph.lastName
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'profile:username',
                        content: openGraph.username
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'profile:gender',
                        content: openGraph.gender
                    })
                ];
                break;
            case 'music.song':
                var _openGraph_duration;
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'music.song'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'music:duration',
                        content: (_openGraph_duration = openGraph.duration) == null ? void 0 : _openGraph_duration.toString()
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:album',
                        contents: openGraph.albums
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:musician',
                        contents: openGraph.musicians
                    })
                ];
                break;
            case 'music.album':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'music.album'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:song',
                        contents: openGraph.songs
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:musician',
                        contents: openGraph.musicians
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'music:release_date',
                        content: openGraph.releaseDate
                    })
                ];
                break;
            case 'music.playlist':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'music.playlist'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:song',
                        contents: openGraph.songs
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:creator',
                        contents: openGraph.creators
                    })
                ];
                break;
            case 'music.radio_station':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'music.radio_station'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'music:creator',
                        contents: openGraph.creators
                    })
                ];
                break;
            case 'video.movie':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'video.movie'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:actor',
                        contents: openGraph.actors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:director',
                        contents: openGraph.directors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:writer',
                        contents: openGraph.writers
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'video:duration',
                        content: openGraph.duration
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'video:release_date',
                        content: openGraph.releaseDate
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:tag',
                        contents: openGraph.tags
                    })
                ];
                break;
            case 'video.episode':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'video.episode'
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:actor',
                        contents: openGraph.actors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:director',
                        contents: openGraph.directors
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:writer',
                        contents: openGraph.writers
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'video:duration',
                        content: openGraph.duration
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'video:release_date',
                        content: openGraph.releaseDate
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
                        propertyPrefix: 'video:tag',
                        contents: openGraph.tags
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'video:series',
                        content: openGraph.series
                    })
                ];
                break;
            case 'video.tv_show':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'video.tv_show'
                    })
                ];
                break;
            case 'video.other':
                typedOpenGraph = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                        property: 'og:type',
                        content: 'video.other'
                    })
                ];
                break;
            default:
                const _exhaustiveCheck = openGraphType;
                throw Object.defineProperty(new Error(`Invalid OpenGraph type: ${_exhaustiveCheck}`), "__NEXT_ERROR_CODE", {
                    value: "E237",
                    enumerable: false,
                    configurable: true
                });
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:determiner',
            content: openGraph.determiner
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:title',
            content: (_openGraph_title = openGraph.title) == null ? void 0 : _openGraph_title.absolute
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:description',
            content: openGraph.description
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:url',
            content: (_openGraph_url = openGraph.url) == null ? void 0 : _openGraph_url.toString()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:site_name',
            content: openGraph.siteName
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:locale',
            content: openGraph.locale
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:country_name',
            content: openGraph.countryName
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            property: 'og:ttl',
            content: (_openGraph_ttl = openGraph.ttl) == null ? void 0 : _openGraph_ttl.toString()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:image',
            contents: openGraph.images
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:video',
            contents: openGraph.videos
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:audio',
            contents: openGraph.audio
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:email',
            contents: openGraph.emails
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:phone_number',
            contents: openGraph.phoneNumbers
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:fax_number',
            contents: openGraph.faxNumbers
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'og:locale:alternate',
            contents: openGraph.alternateLocale
        }),
        ...typedOpenGraph ? typedOpenGraph : []
    ]);
}
function TwitterAppItem({ app, type }) {
    var _app_url_type, _app_url;
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: `twitter:app:name:${type}`,
            content: app.name
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: `twitter:app:id:${type}`,
            content: app.id[type]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: `twitter:app:url:${type}`,
            content: (_app_url = app.url) == null ? void 0 : (_app_url_type = _app_url[type]) == null ? void 0 : _app_url_type.toString()
        })
    ];
}
function TwitterMetadata({ twitter }) {
    var _twitter_title;
    if (!twitter) return null;
    const { card } = twitter;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:card',
            content: card
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:site',
            content: twitter.site
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:site:id',
            content: twitter.siteId
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:creator',
            content: twitter.creator
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:creator:id',
            content: twitter.creatorId
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:title',
            content: (_twitter_title = twitter.title) == null ? void 0 : _twitter_title.absolute
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
            name: 'twitter:description',
            content: twitter.description
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            namePrefix: 'twitter:image',
            contents: twitter.images
        }),
        ...card === 'player' ? twitter.players.flatMap((player)=>[
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name: 'twitter:player',
                    content: player.playerUrl.toString()
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name: 'twitter:player:stream',
                    content: player.streamUrl.toString()
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name: 'twitter:player:width',
                    content: player.width
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meta"])({
                    name: 'twitter:player:height',
                    content: player.height
                })
            ]) : [],
        ...card === 'app' ? [
            TwitterAppItem({
                app: twitter.app,
                type: 'iphone'
            }),
            TwitterAppItem({
                app: twitter.app,
                type: 'ipad'
            }),
            TwitterAppItem({
                app: twitter.app,
                type: 'googleplay'
            })
        ] : []
    ]);
}
function AppLinksMeta({ appLinks }) {
    if (!appLinks) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetaFilter"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:ios',
            contents: appLinks.ios
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:iphone',
            contents: appLinks.iphone
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:ipad',
            contents: appLinks.ipad
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:android',
            contents: appLinks.android
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:windows_phone',
            contents: appLinks.windows_phone
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:windows',
            contents: appLinks.windows
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:windows_universal',
            contents: appLinks.windows_universal
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MultiMeta"])({
            propertyPrefix: 'al:web',
            contents: appLinks.web
        })
    ]);
} //# sourceMappingURL=opengraph.js.map
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
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/request/pathname.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerPathnameForMetadata",
    ()=>createServerPathnameForMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../app-render/work-unit-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
;
;
;
;
function createServerPathnameForMetadata(underlyingPathname, workStore) {
    const workUnitStore = workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                {
                    return createPrerenderPathname(underlyingPathname, workStore, workUnitStore);
                }
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('createServerPathnameForMetadata should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E740",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["delayUntilRuntimeStage"])(workUnitStore, createRenderPathname(underlyingPathname));
            case 'request':
                return createRenderPathname(underlyingPathname);
            default:
                workUnitStore;
        }
    }
    throwInvariantForMissingStore();
}
function createPrerenderPathname(underlyingPathname, workStore, prerenderStore) {
    switch(prerenderStore.type){
        case 'prerender-client':
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('createPrerenderPathname was called inside a client component scope.'), "__NEXT_ERROR_CODE", {
                value: "E694",
                enumerable: false,
                configurable: true
            });
        case 'prerender':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams && fallbackParams.size > 0) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(prerenderStore.renderSignal, workStore.route, '`pathname`');
                }
                break;
            }
        case 'prerender-ppr':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams && fallbackParams.size > 0) {
                    return makeErroringPathname(workStore, prerenderStore.dynamicTracking);
                }
                break;
            }
        case 'prerender-legacy':
            break;
        default:
            prerenderStore;
    }
    // We don't have any fallback params so we have an entirely static safe params object
    return Promise.resolve(underlyingPathname);
}
function makeErroringPathname(workStore, dynamicTracking) {
    let reject = null;
    const promise = new Promise((_, re)=>{
        reject = re;
    });
    const originalThen = promise.then.bind(promise);
    // We instrument .then so that we can generate a tracking event only if you actually
    // await this promise, not just that it is created.
    promise.then = (onfulfilled, onrejected)=>{
        if (reject) {
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["postponeWithTracking"])(workStore.route, 'metadata relative url resolving', dynamicTracking);
            } catch (error) {
                reject(error);
                reject = null;
            }
        }
        return originalThen(onfulfilled, onrejected);
    };
    // We wrap in a noop proxy to trick the runtime into thinking it
    // isn't a native promise (it's not really). This is so that awaiting
    // the promise will call the `then` property triggering the lazy postpone
    return new Proxy(promise, {});
}
function createRenderPathname(underlyingPathname) {
    return Promise.resolve(underlyingPathname);
} //# sourceMappingURL=pathname.js.map
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/generate/opengraph.js [app-rsc] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$pathname$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/request/pathname.js [app-rsc] (ecmascript)");
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
    const pathnameForMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$pathname$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerPathnameForMetadata"])(pathname, workStore);
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OpenGraphMetadata"])({
            openGraph: metadata.openGraph
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TwitterMetadata"])({
            twitter: metadata.twitter
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$generate$2f$opengraph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppLinksMeta"])({
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
"[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-dom.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/rsc/preloads.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "preconnect",
    ()=>preconnect,
    "preloadFont",
    ()=>preloadFont,
    "preloadStyle",
    ()=>preloadStyle
]);
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-dom.js [app-rsc] (ecmascript)");
;
function preloadStyle(href, crossOrigin, nonce) {
    const opts = {
        as: 'style'
    };
    if (typeof crossOrigin === 'string') {
        opts.crossOrigin = crossOrigin;
    }
    if (typeof nonce === 'string') {
        opts.nonce = nonce;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].preload(href, opts);
}
function preloadFont(href, type, crossOrigin, nonce) {
    const opts = {
        as: 'font',
        type
    };
    if (typeof crossOrigin === 'string') {
        opts.crossOrigin = crossOrigin;
    }
    if (typeof nonce === 'string') {
        opts.nonce = nonce;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].preload(href, opts);
}
function preconnect(href, crossOrigin, nonce) {
    const opts = {};
    if (typeof crossOrigin === 'string') {
        opts.crossOrigin = crossOrigin;
    }
    if (typeof nonce === 'string') {
        opts.nonce = nonce;
    }
    ;
    __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].preconnect(href, opts);
} //# sourceMappingURL=preloads.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/rsc/postpone.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ // When postpone is available in canary React we can switch to importing it directly
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)"); //# sourceMappingURL=postpone.js.map
;
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
"[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/segment-cache/output-export-prefetch-encoding.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "insertBuildIdComment",
    ()=>insertBuildIdComment
]);
// In output: export mode, the build id is added to the start of the HTML
// document, directly after the doctype declaration. During a prefetch, the
// client performs a range request to get the build id, so it can check whether
// the target page belongs to the same build.
//
// The first 64 bytes of the document are requested. The exact number isn't
// too important; it must be larger than the build id + doctype + closing and
// ending comment markers, but it doesn't need to match the end of the
// comment exactly.
//
// Build ids are 21 bytes long in the default implementation, though this
// can be overridden in the Next.js config. For the purposes of this check,
// it's OK to only match the start of the id, so we'll truncate it if exceeds
// a certain length.
const DOCTYPE_PREFIX = '<!DOCTYPE html>' // 15 bytes
;
const MAX_BUILD_ID_LENGTH = 24;
function escapeBuildId(buildId) {
    // If the build id is longer than the given limit, it's OK for our purposes
    // to only match the beginning.
    const truncated = buildId.slice(0, MAX_BUILD_ID_LENGTH);
    // Replace hyphens with underscores so it doesn't break the HTML comment.
    // (Unlikely, but if this did happen it would break the whole document.)
    return truncated.replace(/-/g, '_');
}
function insertBuildIdComment(originalHtml, buildId) {
    if (buildId.includes('-->') || // React always inserts a doctype at the start of the document. Skip if it
    // isn't present. Shouldn't happen; suggests an issue elsewhere.
    !originalHtml.startsWith(DOCTYPE_PREFIX)) {
        // Return the original HTML unchanged. This means the document will not
        // be prefetched.
        // TODO: The build id comment is currently only used during prefetches, but
        // if we eventually use this mechanism for regular navigations, we may need
        // to error during build if we fail to insert it for some reason.
        return originalHtml;
    }
    // The comment must be inserted after the doctype.
    return originalHtml.replace(DOCTYPE_PREFIX, DOCTYPE_PREFIX + '<!--' + escapeBuildId(buildId) + '-->');
} //# sourceMappingURL=output-export-prefetch-encoding.js.map
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2d$cache$2f$output$2d$export$2d$prefetch$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/segment-cache/output-export-prefetch-encoding.js [app-rsc] (ecmascript)");
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
                const updatedChunkStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2d$cache$2f$output$2d$export$2d$prefetch$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insertBuildIdComment"])(chunkStr, buildId);
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
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/base-http/helpers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This file provides some helpers that should be used in conjunction with
 * explicit environment checks. When combined with the environment checks, it
 * will ensure that the correct typings are used as well as enable code
 * elimination.
 */ /**
 * Type guard to determine if a request is a WebNextRequest. This does not
 * actually check the type of the request, but rather the runtime environment.
 * It's expected that when the runtime environment is the edge runtime, that any
 * base request is a WebNextRequest.
 */ __turbopack_context__.s([
    "isNodeNextRequest",
    ()=>isNodeNextRequest,
    "isNodeNextResponse",
    ()=>isNodeNextResponse,
    "isWebNextRequest",
    ()=>isWebNextRequest,
    "isWebNextResponse",
    ()=>isWebNextResponse
]);
const isWebNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isWebNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isNodeNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") !== 'edge';
const isNodeNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") !== 'edge'; //# sourceMappingURL=helpers.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/web/spec-extension/adapters/next-request.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextRequestAdapter",
    ()=>NextRequestAdapter,
    "ResponseAborted",
    ()=>ResponseAborted,
    "ResponseAbortedName",
    ()=>ResponseAbortedName,
    "createAbortController",
    ()=>createAbortController,
    "signalFromNodeResponse",
    ()=>signalFromNodeResponse
]);
(()=>{
    const e = new Error("Cannot find module '../../../request-meta'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../request'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/base-http/helpers.js [app-rsc] (ecmascript)");
;
;
;
;
const ResponseAbortedName = 'ResponseAborted';
class ResponseAborted extends Error {
    constructor(...args){
        super(...args), this.name = ResponseAbortedName;
    }
}
function createAbortController(response) {
    const controller = new AbortController();
    // If `finish` fires first, then `res.end()` has been called and the close is
    // just us finishing the stream on our side. If `close` fires first, then we
    // know the client disconnected before we finished.
    response.once('close', ()=>{
        if (response.writableFinished) return;
        controller.abort(new ResponseAborted());
    });
    return controller;
}
function signalFromNodeResponse(response) {
    const { errored, destroyed } = response;
    if (errored || destroyed) {
        return AbortSignal.abort(errored ?? new ResponseAborted());
    }
    const { signal } = createAbortController(response);
    return signal;
}
class NextRequestAdapter {
    static fromBaseNextRequest(request, signal) {
        if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") === 'edge' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isWebNextRequest"])(request)) //TURBOPACK unreachable
        ;
        else if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") !== 'edge' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNodeNextRequest"])(request)) {
            return NextRequestAdapter.fromNodeNextRequest(request, signal);
        } else {
            throw Object.defineProperty(new Error('Invariant: Unsupported NextRequest type'), "__NEXT_ERROR_CODE", {
                value: "E345",
                enumerable: false,
                configurable: true
            });
        }
    }
    static fromNodeNextRequest(request, signal) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD' && request.body) {
            // @ts-expect-error - this is handled by undici, when streams/web land use it instead
            body = request.body;
        }
        let url;
        if (request.url.startsWith('http')) {
            url = new URL(request.url);
        } else {
            // Grab the full URL from the request metadata.
            const base = getRequestMeta(request, 'initURL');
            if (!base || !base.startsWith('http')) {
                // Because the URL construction relies on the fact that the URL provided
                // is absolute, we need to provide a base URL. We can't use the request
                // URL because it's relative, so we use a dummy URL instead.
                url = new URL(request.url, 'http://n');
            } else {
                url = new URL(request.url, base);
            }
        }
        return new NextRequest(url, {
            method: request.method,
            headers: fromNodeOutgoingHttpHeaders(request.headers),
            duplex: 'half',
            signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...signal.aborted ? {} : {
                body
            }
        });
    }
    static fromWebNextRequest(request) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD') {
            body = request.body;
        }
        return new NextRequest(request.url, {
            method: request.method,
            headers: fromNodeOutgoingHttpHeaders(request.headers),
            duplex: 'half',
            signal: request.request.signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...request.request.signal.aborted ? {} : {
                body
            }
        });
    }
} //# sourceMappingURL=next-request.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/client-component-renderer-logger.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClientComponentLoaderMetrics",
    ()=>getClientComponentLoaderMetrics,
    "wrapClientComponentLoader",
    ()=>wrapClientComponentLoader
]);
// Combined load times for loading client components
let clientComponentLoadStart = 0;
let clientComponentLoadTimes = 0;
let clientComponentLoadCount = 0;
function wrapClientComponentLoader(ComponentMod) {
    if (!('performance' in globalThis)) {
        return ComponentMod.__next_app__;
    }
    return {
        require: (...args)=>{
            const startTime = performance.now();
            if (clientComponentLoadStart === 0) {
                clientComponentLoadStart = startTime;
            }
            try {
                clientComponentLoadCount += 1;
                return ComponentMod.__next_app__.require(...args);
            } finally{
                clientComponentLoadTimes += performance.now() - startTime;
            }
        },
        loadChunk: (...args)=>{
            const startTime = performance.now();
            const result = ComponentMod.__next_app__.loadChunk(...args);
            // Avoid wrapping `loadChunk`'s result in an extra promise in case something like React depends on its identity.
            // We only need to know when it's settled.
            result.finally(()=>{
                clientComponentLoadTimes += performance.now() - startTime;
            });
            return result;
        }
    };
}
function getClientComponentLoaderMetrics(options = {}) {
    const metrics = clientComponentLoadStart === 0 ? undefined : {
        clientComponentLoadStart,
        clientComponentLoadTimes,
        clientComponentLoadCount
    };
    if (options.reset) {
        clientComponentLoadStart = 0;
        clientComponentLoadTimes = 0;
        clientComponentLoadCount = 0;
    }
    return metrics;
} //# sourceMappingURL=client-component-renderer-logger.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/pipe-readable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAbortError",
    ()=>isAbortError,
    "pipeToNodeResponse",
    ()=>pipeToNodeResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/web/spec-extension/adapters/next-request.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './lib/trace/tracer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$client$2d$component$2d$renderer$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/client-component-renderer-logger.js [app-rsc] (ecmascript)");
;
;
;
;
;
function isAbortError(e) {
    return (e == null ? void 0 : e.name) === 'AbortError' || (e == null ? void 0 : e.name) === __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResponseAbortedName"];
}
function createWriterFromResponse(res, waitUntilForEnd) {
    let started = false;
    // Create a promise that will resolve once the response has drained. See
    // https://nodejs.org/api/stream.html#stream_event_drain
    let drained = new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
    function onDrain() {
        drained.resolve();
    }
    res.on('drain', onDrain);
    // If the finish event fires, it means we shouldn't block and wait for the
    // drain event.
    res.once('close', ()=>{
        res.off('drain', onDrain);
        drained.resolve();
    });
    // Create a promise that will resolve once the response has finished. See
    // https://nodejs.org/api/http.html#event-finish_1
    const finished = new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
    res.once('finish', ()=>{
        finished.resolve();
    });
    // Create a writable stream that will write to the response.
    return new WritableStream({
        write: async (chunk)=>{
            // You'd think we'd want to use `start` instead of placing this in `write`
            // but this ensures that we don't actually flush the headers until we've
            // started writing chunks.
            if (!started) {
                started = true;
                if ('performance' in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX) {
                    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$client$2d$component$2d$renderer$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClientComponentLoaderMetrics"])();
                    if (metrics) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, {
                            start: metrics.clientComponentLoadStart,
                            end: metrics.clientComponentLoadStart + metrics.clientComponentLoadTimes
                        });
                    }
                }
                res.flushHeaders();
                getTracer().trace(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextNodeServerSpan"].startResponse, {
                    spanName: 'start response'
                }, ()=>undefined);
            }
            try {
                const ok = res.write(chunk);
                // Added by the `compression` middleware, this is a function that will
                // flush the partially-compressed response to the client.
                if ('flush' in res && typeof res.flush === 'function') {
                    res.flush();
                }
                // If the write returns false, it means there's some backpressure, so
                // wait until it's streamed before continuing.
                if (!ok) {
                    await drained.promise;
                    // Reset the drained promise so that we can wait for the next drain event.
                    drained = new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
                }
            } catch (err) {
                res.end();
                throw Object.defineProperty(new Error('failed to write chunk to response', {
                    cause: err
                }), "__NEXT_ERROR_CODE", {
                    value: "E321",
                    enumerable: false,
                    configurable: true
                });
            }
        },
        abort: (err)=>{
            if (res.writableFinished) return;
            res.destroy(err);
        },
        close: async ()=>{
            // if a waitUntil promise was passed, wait for it to resolve before
            // ending the response.
            if (waitUntilForEnd) {
                await waitUntilForEnd;
            }
            if (res.writableFinished) return;
            res.end();
            return finished.promise;
        }
    });
}
async function pipeToNodeResponse(readable, res, waitUntilForEnd) {
    try {
        // If the response has already errored, then just return now.
        const { errored, destroyed } = res;
        if (errored || destroyed) return;
        // Create a new AbortController so that we can abort the readable if the
        // client disconnects.
        const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAbortController"])(res);
        const writer = createWriterFromResponse(res, waitUntilForEnd);
        await readable.pipeTo(writer, {
            signal: controller.signal
        });
    } catch (err) {
        // If this isn't related to an abort error, re-throw it.
        if (isAbortError(err)) return;
        throw Object.defineProperty(new Error('failed to pipe response', {
            cause: err
        }), "__NEXT_ERROR_CODE", {
            value: "E180",
            enumerable: false,
            configurable: true
        });
    }
} //# sourceMappingURL=pipe-readable.js.map
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/pipe-readable.js [app-rsc] (ecmascript)");
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(thrownValue)) return;
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(thrownValue)) return;
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
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(err) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBailoutToCSRError"])(err) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNextRouterError"])(err);
} //# sourceMappingURL=create-error-handler.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/prospective-render-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phase",
    ()=>Phase,
    "printDebugThrownValueForProspectiveRender",
    ()=>printDebugThrownValueForProspectiveRender
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$create$2d$error$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/create-error-handler.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './react-large-shell-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
var Phase = /*#__PURE__*/ function(Phase) {
    Phase["ProspectiveRender"] = "the prospective render";
    Phase["SegmentCollection"] = "segment collection";
    return Phase;
}({});
function printDebugThrownValueForProspectiveRender(thrownValue, route, phase) {
    // We don't need to print well-known Next.js errors.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$create$2d$error$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDigestForWellKnownError"])(thrownValue)) {
        return;
    }
    if (isReactLargeShellError(thrownValue)) {
        // TODO: Aggregate
        console.error(thrownValue);
        return undefined;
    }
    let message;
    if (typeof thrownValue === 'object' && thrownValue !== null && typeof thrownValue.message === 'string') {
        message = thrownValue.message;
        if (typeof thrownValue.stack === 'string') {
            const originalErrorStack = thrownValue.stack;
            const stackStart = originalErrorStack.indexOf('\n');
            if (stackStart > -1) {
                const error = Object.defineProperty(new Error(`Route ${route} errored during ${phase}. These errors are normally ignored and may not prevent the route from prerendering but are logged here because build debugging is enabled.
          
Original Error: ${message}`), "__NEXT_ERROR_CODE", {
                    value: "E949",
                    enumerable: false,
                    configurable: true
                });
                error.stack = 'Error: ' + error.message + originalErrorStack.slice(stackStart);
                console.error(error);
                return;
            }
        }
    } else if (typeof thrownValue === 'string') {
        message = thrownValue;
    }
    if (message) {
        console.error(`Route ${route} errored during ${phase}. These errors are normally ignored and may not prevent the route from prerendering but are logged here because build debugging is enabled. No stack was provided.
          
Original Message: ${message}`);
        return;
    }
    console.error(`Route ${route} errored during ${phase}. These errors are normally ignored and may not prevent the route from prerendering but are logged here because build debugging is enabled. The thrown value is logged just following this message`);
    console.error(thrownValue);
    return;
} //# sourceMappingURL=prospective-render-utils.js.map
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$prospective$2d$render$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/prospective-render-utils.js [app-rsc] (ecmascript)");
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$prospective$2d$render$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["printDebugThrownValueForProspectiveRender"])(error, (workStore == null ? void 0 : workStore.route) ?? 'unknown route', __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$prospective$2d$render$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Phase"].SegmentCollection);
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
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_SUFFIX",
    ()=>ACTION_SUFFIX,
    "APP_DIR_ALIAS",
    ()=>APP_DIR_ALIAS,
    "CACHE_ONE_YEAR",
    ()=>CACHE_ONE_YEAR,
    "DOT_NEXT_ALIAS",
    ()=>DOT_NEXT_ALIAS,
    "ESLINT_DEFAULT_DIRS",
    ()=>ESLINT_DEFAULT_DIRS,
    "GSP_NO_RETURNED_VALUE",
    ()=>GSP_NO_RETURNED_VALUE,
    "GSSP_COMPONENT_MEMBER_ERROR",
    ()=>GSSP_COMPONENT_MEMBER_ERROR,
    "GSSP_NO_RETURNED_VALUE",
    ()=>GSSP_NO_RETURNED_VALUE,
    "HTML_CONTENT_TYPE_HEADER",
    ()=>HTML_CONTENT_TYPE_HEADER,
    "INFINITE_CACHE",
    ()=>INFINITE_CACHE,
    "INSTRUMENTATION_HOOK_FILENAME",
    ()=>INSTRUMENTATION_HOOK_FILENAME,
    "JSON_CONTENT_TYPE_HEADER",
    ()=>JSON_CONTENT_TYPE_HEADER,
    "MATCHED_PATH_HEADER",
    ()=>MATCHED_PATH_HEADER,
    "MIDDLEWARE_FILENAME",
    ()=>MIDDLEWARE_FILENAME,
    "MIDDLEWARE_LOCATION_REGEXP",
    ()=>MIDDLEWARE_LOCATION_REGEXP,
    "NEXT_BODY_SUFFIX",
    ()=>NEXT_BODY_SUFFIX,
    "NEXT_CACHE_IMPLICIT_TAG_ID",
    ()=>NEXT_CACHE_IMPLICIT_TAG_ID,
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER",
    ()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER,
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER",
    ()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER,
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH",
    ()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH,
    "NEXT_CACHE_TAGS_HEADER",
    ()=>NEXT_CACHE_TAGS_HEADER,
    "NEXT_CACHE_TAG_MAX_ITEMS",
    ()=>NEXT_CACHE_TAG_MAX_ITEMS,
    "NEXT_CACHE_TAG_MAX_LENGTH",
    ()=>NEXT_CACHE_TAG_MAX_LENGTH,
    "NEXT_DATA_SUFFIX",
    ()=>NEXT_DATA_SUFFIX,
    "NEXT_INTERCEPTION_MARKER_PREFIX",
    ()=>NEXT_INTERCEPTION_MARKER_PREFIX,
    "NEXT_META_SUFFIX",
    ()=>NEXT_META_SUFFIX,
    "NEXT_QUERY_PARAM_PREFIX",
    ()=>NEXT_QUERY_PARAM_PREFIX,
    "NEXT_RESUME_HEADER",
    ()=>NEXT_RESUME_HEADER,
    "NON_STANDARD_NODE_ENV",
    ()=>NON_STANDARD_NODE_ENV,
    "PAGES_DIR_ALIAS",
    ()=>PAGES_DIR_ALIAS,
    "PRERENDER_REVALIDATE_HEADER",
    ()=>PRERENDER_REVALIDATE_HEADER,
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER",
    ()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER,
    "PROXY_FILENAME",
    ()=>PROXY_FILENAME,
    "PROXY_LOCATION_REGEXP",
    ()=>PROXY_LOCATION_REGEXP,
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT",
    ()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT,
    "ROOT_DIR_ALIAS",
    ()=>ROOT_DIR_ALIAS,
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS",
    ()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS,
    "RSC_ACTION_ENCRYPTION_ALIAS",
    ()=>RSC_ACTION_ENCRYPTION_ALIAS,
    "RSC_ACTION_PROXY_ALIAS",
    ()=>RSC_ACTION_PROXY_ALIAS,
    "RSC_ACTION_VALIDATE_ALIAS",
    ()=>RSC_ACTION_VALIDATE_ALIAS,
    "RSC_CACHE_WRAPPER_ALIAS",
    ()=>RSC_CACHE_WRAPPER_ALIAS,
    "RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS",
    ()=>RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS,
    "RSC_MOD_REF_PROXY_ALIAS",
    ()=>RSC_MOD_REF_PROXY_ALIAS,
    "RSC_SEGMENTS_DIR_SUFFIX",
    ()=>RSC_SEGMENTS_DIR_SUFFIX,
    "RSC_SEGMENT_SUFFIX",
    ()=>RSC_SEGMENT_SUFFIX,
    "RSC_SUFFIX",
    ()=>RSC_SUFFIX,
    "SERVER_PROPS_EXPORT_ERROR",
    ()=>SERVER_PROPS_EXPORT_ERROR,
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT",
    ()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT,
    "SERVER_PROPS_SSG_CONFLICT",
    ()=>SERVER_PROPS_SSG_CONFLICT,
    "SERVER_RUNTIME",
    ()=>SERVER_RUNTIME,
    "SSG_FALLBACK_EXPORT_ERROR",
    ()=>SSG_FALLBACK_EXPORT_ERROR,
    "SSG_GET_INITIAL_PROPS_CONFLICT",
    ()=>SSG_GET_INITIAL_PROPS_CONFLICT,
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR",
    ()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR,
    "TEXT_PLAIN_CONTENT_TYPE_HEADER",
    ()=>TEXT_PLAIN_CONTENT_TYPE_HEADER,
    "UNSTABLE_REVALIDATE_RENAME_ERROR",
    ()=>UNSTABLE_REVALIDATE_RENAME_ERROR,
    "WEBPACK_LAYERS",
    ()=>WEBPACK_LAYERS,
    "WEBPACK_RESOURCE_QUERIES",
    ()=>WEBPACK_RESOURCE_QUERIES,
    "WEB_SOCKET_MAX_RECONNECTIONS",
    ()=>WEB_SOCKET_MAX_RECONNECTIONS
]);
const TEXT_PLAIN_CONTENT_TYPE_HEADER = 'text/plain';
const HTML_CONTENT_TYPE_HEADER = 'text/html; charset=utf-8';
const JSON_CONTENT_TYPE_HEADER = 'application/json; charset=utf-8';
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const PROXY_FILENAME = 'proxy';
const PROXY_LOCATION_REGEXP = `(?:src/)?${PROXY_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = 'private-next-rsc-track-dynamic-import';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
const WEB_SOCKET_MAX_RECONNECTIONS = 12;
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The Node.js bundle layer for the API routes.
   */ apiNode: 'api-node',
    /**
   * The Edge Lite bundle layer for the API routes.
   */ apiEdge: 'api-edge',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.apiNode,
            WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
};
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/clone-response.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cloneResponse",
    ()=>cloneResponse
]);
const noop = ()=>{};
let registry;
if (globalThis.FinalizationRegistry) {
    registry = new FinalizationRegistry((weakRef)=>{
        const stream = weakRef.deref();
        if (stream && !stream.locked) {
            stream.cancel('Response object has been garbage collected').then(noop);
        }
    });
}
function cloneResponse(original) {
    // If the response has no body, then we can just return the original response
    // twice because it's immutable.
    if (!original.body) {
        return [
            original,
            original
        ];
    }
    const [body1, body2] = original.body.tee();
    const cloned1 = new Response(body1, {
        status: original.status,
        statusText: original.statusText,
        headers: original.headers
    });
    Object.defineProperty(cloned1, 'url', {
        value: original.url,
        // How the original response.url behaves
        configurable: true,
        enumerable: true,
        writable: false
    });
    // The Fetch Standard allows users to skip consuming the response body by
    // relying on garbage collection to release connection resources.
    // https://github.com/nodejs/undici?tab=readme-ov-file#garbage-collection
    //
    // To cancel the stream you then need to cancel both resulting branches.
    // Teeing a stream will generally lock it for the duration, preventing other
    // readers from locking it.
    // https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/tee
    // cloned2 is stored in a react cache and cloned for subsequent requests.
    // It is the original request, and is is garbage collected by a
    // FinalizationRegistry in Undici, but since we're tee-ing the stream
    // ourselves, we need to cancel clone1's stream (the response returned from
    // our dedupe fetch) when clone1 is reclaimed, otherwise we leak memory.
    if (registry && cloned1.body) {
        registry.register(cloned1, new WeakRef(cloned1.body));
    }
    const cloned2 = new Response(body2, {
        status: original.status,
        statusText: original.statusText,
        headers: original.headers
    });
    Object.defineProperty(cloned2, 'url', {
        value: original.url,
        // How the original response.url behaves
        configurable: true,
        enumerable: true,
        writable: false
    });
    return [
        cloned1,
        cloned2
    ];
} //# sourceMappingURL=clone-response.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/dedupe-fetch.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDedupeFetch",
    ()=>createDedupeFetch
]);
/**
 * Based on https://github.com/facebook/react/blob/d4e78c42a94be027b4dc7ed2659a5fddfbf9bd4e/packages/react/src/ReactFetch.js
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/clone-response.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
;
;
;
const simpleCacheKey = '["GET",[],null,"follow",null,null,null,null]' // generateCacheKey(new Request('https://blank'));
;
// Headers that should not affect deduplication
// traceparent and tracestate are used for distributed tracing and should not affect cache keys
const headersToExcludeInCacheKey = new Set([
    'traceparent',
    'tracestate'
]);
function generateCacheKey(request) {
    // We pick the fields that goes into the key used to dedupe requests.
    // We don't include the `cache` field, because we end up using whatever
    // caching resulted from the first request.
    // Notably we currently don't consider non-standard (or future) options.
    // This might not be safe. TODO: warn for non-standard extensions differing.
    // IF YOU CHANGE THIS UPDATE THE simpleCacheKey ABOVE.
    const filteredHeaders = Array.from(request.headers.entries()).filter(([key])=>!headersToExcludeInCacheKey.has(key.toLowerCase()));
    return JSON.stringify([
        request.method,
        filteredHeaders,
        request.mode,
        request.redirect,
        request.credentials,
        request.referrer,
        request.referrerPolicy,
        request.integrity
    ]);
}
function createDedupeFetch(originalFetch) {
    const getCacheEntries = __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"]((url)=>[]);
    return function dedupeFetch(resource, options) {
        if (options && options.signal) {
            // If we're passed a signal, then we assume that
            // someone else controls the lifetime of this object and opts out of
            // caching. It's effectively the opt-out mechanism.
            // Ideally we should be able to check this on the Request but
            // it always gets initialized with its own signal so we don't
            // know if it's supposed to override - unless we also override the
            // Request constructor.
            return originalFetch(resource, options);
        }
        // Normalize the Request
        let url;
        let cacheKey;
        if (typeof resource === 'string' && !options) {
            // Fast path.
            cacheKey = simpleCacheKey;
            url = resource;
        } else {
            // Normalize the request.
            // if resource is not a string or a URL (its an instance of Request)
            // then do not instantiate a new Request but instead
            // reuse the request as to not disturb the body in the event it's a ReadableStream.
            const request = typeof resource === 'string' || resource instanceof URL ? new Request(resource, options) : resource;
            if (request.method !== 'GET' && request.method !== 'HEAD' || request.keepalive) {
                // We currently don't dedupe requests that might have side-effects. Those
                // have to be explicitly cached. We assume that the request doesn't have a
                // body if it's GET or HEAD.
                // keepalive gets treated the same as if you passed a custom cache signal.
                return originalFetch(resource, options);
            }
            cacheKey = generateCacheKey(request);
            url = request.url;
        }
        const cacheEntries = getCacheEntries(url);
        for(let i = 0, j = cacheEntries.length; i < j; i += 1){
            const [key, promise] = cacheEntries[i];
            if (key === cacheKey) {
                return promise.then(()=>{
                    const response = cacheEntries[i][2];
                    if (!response) throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('No cached response'), "__NEXT_ERROR_CODE", {
                        value: "E579",
                        enumerable: false,
                        configurable: true
                    });
                    // We're cloning the response using this utility because there exists
                    // a bug in the undici library around response cloning. See the
                    // following pull request for more details:
                    // https://github.com/vercel/next.js/pull/73274
                    const [cloned1, cloned2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneResponse"])(response);
                    cacheEntries[i][2] = cloned2;
                    return cloned1;
                });
            }
        }
        // We pass the original arguments here in case normalizing the Request
        // doesn't include all the options in this environment.
        const promise = originalFetch(resource, options);
        const entry = [
            cacheKey,
            promise,
            null
        ];
        cacheEntries.push(entry);
        return promise.then((response)=>{
            // We're cloning the response using this utility because there exists
            // a bug in the undici library around response cloning. See the
            // following pull request for more details:
            // https://github.com/vercel/next.js/pull/73274
            const [cloned1, cloned2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneResponse"])(response);
            entry[2] = cloned2;
            return cloned1;
        });
    };
} //# sourceMappingURL=dedupe-fetch.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/batcher.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Batcher",
    ()=>Batcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)");
;
class Batcher {
    constructor(cacheKeyFn, /**
     * A function that will be called to schedule the wrapped function to be
     * executed. This defaults to a function that will execute the function
     * immediately.
     */ schedulerFn = (fn)=>fn()){
        this.cacheKeyFn = cacheKeyFn;
        this.schedulerFn = schedulerFn;
        this.pending = new Map();
    }
    static create(options) {
        return new Batcher(options == null ? void 0 : options.cacheKeyFn, options == null ? void 0 : options.schedulerFn);
    }
    /**
   * Wraps a function in a promise that will be resolved or rejected only once
   * for a given key. This will allow multiple calls to the function to be
   * made, but only one will be executed at a time. The result of the first
   * call will be returned to all callers.
   *
   * @param key the key to use for the cache
   * @param fn the function to wrap
   * @returns a promise that resolves to the result of the function
   */ async batch(key, fn) {
        const cacheKey = this.cacheKeyFn ? await this.cacheKeyFn(key) : key;
        if (cacheKey === null) {
            return fn({
                resolve: (value)=>Promise.resolve(value),
                key
            });
        }
        const pending = this.pending.get(cacheKey);
        if (pending) return pending;
        const { promise, resolve, reject } = new __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        this.pending.set(cacheKey, promise);
        this.schedulerFn(async ()=>{
            try {
                const result = await fn({
                    resolve,
                    key
                });
                // Resolving a promise multiple times is a no-op, so we can safely
                // resolve all pending promises with the same result.
                resolve(result);
            } catch (err) {
                reject(err);
            } finally{
                this.pending.delete(cacheKey);
            }
        });
        return promise;
    }
} //# sourceMappingURL=batcher.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResponseCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/batcher.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/scheduler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
class ResponseCache {
    constructor(minimal_mode){
        this.getBatcher = __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Batcher"].create({
            // Ensure on-demand revalidate doesn't block normal requests, it should be
            // safe to run an on-demand revalidate for the same key as a normal request.
            cacheKeyFn: ({ key, isOnDemandRevalidate })=>`${key}-${isOnDemandRevalidate ? '1' : '0'}`,
            // We wait to do any async work until after we've added our promise to
            // `pendingResponses` to ensure that any any other calls will reuse the
            // same promise until we've fully finished our work.
            schedulerFn: scheduleOnNextTick
        });
        this.revalidateBatcher = __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Batcher"].create({
            // We wait to do any async work until after we've added our promise to
            // `pendingResponses` to ensure that any any other calls will reuse the
            // same promise until we've fully finished our work.
            schedulerFn: scheduleOnNextTick
        });
        this.minimal_mode = minimal_mode;
    }
    /**
   * Gets the response cache entry for the given key.
   *
   * @param key - The key to get the response cache entry for.
   * @param responseGenerator - The response generator to use to generate the response cache entry.
   * @param context - The context for the get request.
   * @returns The response cache entry.
   */ async get(key, responseGenerator, context) {
        var _this_previousCacheItem;
        // If there is no key for the cache, we can't possibly look this up in the
        // cache so just return the result of the response generator.
        if (!key) {
            return responseGenerator({
                hasResolved: false,
                previousCacheEntry: null
            });
        }
        // Check minimal mode cache before doing any other work
        if (this.minimal_mode && ((_this_previousCacheItem = this.previousCacheItem) == null ? void 0 : _this_previousCacheItem.key) === key && this.previousCacheItem.expiresAt > Date.now()) {
            return toResponseCacheEntry(this.previousCacheItem.entry);
        }
        const { incrementalCache, isOnDemandRevalidate = false, isFallback = false, isRoutePPREnabled = false, isPrefetch = false, waitUntil, routeKind } = context;
        const response = await this.getBatcher.batch({
            key,
            isOnDemandRevalidate
        }, ({ resolve })=>{
            const promise = this.handleGet(key, responseGenerator, {
                incrementalCache,
                isOnDemandRevalidate,
                isFallback,
                isRoutePPREnabled,
                isPrefetch,
                routeKind
            }, resolve);
            // We need to ensure background revalidates are passed to waitUntil.
            if (waitUntil) waitUntil(promise);
            return promise;
        });
        return toResponseCacheEntry(response);
    }
    /**
   * Handles the get request for the response cache.
   *
   * @param key - The key to get the response cache entry for.
   * @param responseGenerator - The response generator to use to generate the response cache entry.
   * @param context - The context for the get request.
   * @param resolve - The resolve function to use to resolve the response cache entry.
   * @returns The response cache entry.
   */ async handleGet(key, responseGenerator, context, resolve) {
        let previousIncrementalCacheEntry = null;
        let resolved = false;
        try {
            // Get the previous cache entry if not in minimal mode
            previousIncrementalCacheEntry = !this.minimal_mode ? await context.incrementalCache.get(key, {
                kind: routeKindToIncrementalCacheKind(context.routeKind),
                isRoutePPREnabled: context.isRoutePPREnabled,
                isFallback: context.isFallback
            }) : null;
            if (previousIncrementalCacheEntry && !context.isOnDemandRevalidate) {
                resolve(previousIncrementalCacheEntry);
                resolved = true;
                if (!previousIncrementalCacheEntry.isStale || context.isPrefetch) {
                    // The cached value is still valid, so we don't need to update it yet.
                    return previousIncrementalCacheEntry;
                }
            }
            // Revalidate the cache entry
            const incrementalResponseCacheEntry = await this.revalidate(key, context.incrementalCache, context.isRoutePPREnabled, context.isFallback, responseGenerator, previousIncrementalCacheEntry, previousIncrementalCacheEntry !== null && !context.isOnDemandRevalidate);
            // Handle null response
            if (!incrementalResponseCacheEntry) {
                // Unset the previous cache item if it was set so we don't use it again.
                if (this.minimal_mode) this.previousCacheItem = undefined;
                return null;
            }
            // Resolve for on-demand revalidation or if not already resolved
            if (context.isOnDemandRevalidate && !resolved) {
                return incrementalResponseCacheEntry;
            }
            return incrementalResponseCacheEntry;
        } catch (err) {
            // If we've already resolved the cache entry, we can't reject as we
            // already resolved the cache entry so log the error here.
            if (resolved) {
                console.error(err);
                return null;
            }
            throw err;
        }
    }
    /**
   * Revalidates the cache entry for the given key.
   *
   * @param key - The key to revalidate the cache entry for.
   * @param incrementalCache - The incremental cache to use to revalidate the cache entry.
   * @param isRoutePPREnabled - Whether the route is PPR enabled.
   * @param isFallback - Whether the route is a fallback.
   * @param responseGenerator - The response generator to use to generate the response cache entry.
   * @param previousIncrementalCacheEntry - The previous cache entry to use to revalidate the cache entry.
   * @param hasResolved - Whether the response has been resolved.
   * @returns The revalidated cache entry.
   */ async revalidate(key, incrementalCache, isRoutePPREnabled, isFallback, responseGenerator, previousIncrementalCacheEntry, hasResolved, waitUntil) {
        return this.revalidateBatcher.batch(key, ()=>{
            const promise = this.handleRevalidate(key, incrementalCache, isRoutePPREnabled, isFallback, responseGenerator, previousIncrementalCacheEntry, hasResolved);
            // We need to ensure background revalidates are passed to waitUntil.
            if (waitUntil) waitUntil(promise);
            return promise;
        });
    }
    async handleRevalidate(key, incrementalCache, isRoutePPREnabled, isFallback, responseGenerator, previousIncrementalCacheEntry, hasResolved) {
        try {
            // Generate the response cache entry using the response generator.
            const responseCacheEntry = await responseGenerator({
                hasResolved,
                previousCacheEntry: previousIncrementalCacheEntry,
                isRevalidating: true
            });
            if (!responseCacheEntry) {
                return null;
            }
            // Convert the response cache entry to an incremental response cache entry.
            const incrementalResponseCacheEntry = await fromResponseCacheEntry({
                ...responseCacheEntry,
                isMiss: !previousIncrementalCacheEntry
            });
            // We want to persist the result only if it has a cache control value
            // defined.
            if (incrementalResponseCacheEntry.cacheControl) {
                if (this.minimal_mode) {
                    this.previousCacheItem = {
                        key,
                        entry: incrementalResponseCacheEntry,
                        expiresAt: Date.now() + 1000
                    };
                } else {
                    await incrementalCache.set(key, incrementalResponseCacheEntry.value, {
                        cacheControl: incrementalResponseCacheEntry.cacheControl,
                        isRoutePPREnabled,
                        isFallback
                    });
                }
            }
            return incrementalResponseCacheEntry;
        } catch (err) {
            // When a path is erroring we automatically re-set the existing cache
            // with new revalidate and expire times to prevent non-stop retrying.
            if (previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.cacheControl) {
                const revalidate = Math.min(Math.max(previousIncrementalCacheEntry.cacheControl.revalidate || 3, 3), 30);
                const expire = previousIncrementalCacheEntry.cacheControl.expire === undefined ? undefined : Math.max(revalidate + 3, previousIncrementalCacheEntry.cacheControl.expire);
                await incrementalCache.set(key, previousIncrementalCacheEntry.value, {
                    cacheControl: {
                        revalidate: revalidate,
                        expire: expire
                    },
                    isRoutePPREnabled,
                    isFallback
                });
            }
            // We haven't resolved yet, so let's throw to indicate an error.
            throw err;
        }
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module './types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/patch-fetch.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NEXT_PATCH_SYMBOL",
    ()=>NEXT_PATCH_SYMBOL,
    "createPatchedFetcher",
    ()=>createPatchedFetcher,
    "patchFetch",
    ()=>patchFetch,
    "validateRevalidate",
    ()=>validateRevalidate,
    "validateTags",
    ()=>validateTags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './trace/tracer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$dedupe$2d$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/dedupe-fetch.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../app-render/work-unit-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/clone-response.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../app-render/staged-rendering'");
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
const isEdgeRuntime = ("TURBOPACK compile-time value", "nodejs") === 'edge';
const NEXT_PATCH_SYMBOL = Symbol.for('next-patch');
function isFetchPatched() {
    return globalThis[NEXT_PATCH_SYMBOL] === true;
}
function validateRevalidate(revalidateVal, route) {
    try {
        let normalizedRevalidate = undefined;
        if (revalidateVal === false) {
            normalizedRevalidate = __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
        } else if (typeof revalidateVal === 'number' && !isNaN(revalidateVal) && revalidateVal > -1) {
            normalizedRevalidate = revalidateVal;
        } else if (typeof revalidateVal !== 'undefined') {
            throw Object.defineProperty(new Error(`Invalid revalidate value "${revalidateVal}" on "${route}", must be a non-negative number or false`), "__NEXT_ERROR_CODE", {
                value: "E179",
                enumerable: false,
                configurable: true
            });
        }
        return normalizedRevalidate;
    } catch (err) {
        // handle client component error from attempting to check revalidate value
        if (err instanceof Error && err.message.includes('Invalid revalidate')) {
            throw err;
        }
        return undefined;
    }
}
function validateTags(tags, description) {
    const validTags = [];
    const invalidTags = [];
    for(let i = 0; i < tags.length; i++){
        const tag = tags[i];
        if (typeof tag !== 'string') {
            invalidTags.push({
                tag,
                reason: 'invalid type, must be a string'
            });
        } else if (tag.length > __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAG_MAX_LENGTH"]) {
            invalidTags.push({
                tag,
                reason: `exceeded max length of ${__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAG_MAX_LENGTH"]}`
            });
        } else {
            validTags.push(tag);
        }
        if (validTags.length > __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAG_MAX_ITEMS"]) {
            console.warn(`Warning: exceeded max tag count for ${description}, dropped tags:`, tags.slice(i).join(', '));
            break;
        }
    }
    if (invalidTags.length > 0) {
        console.warn(`Warning: invalid tags passed to ${description}: `);
        for (const { tag, reason } of invalidTags){
            console.log(`tag: "${tag}" ${reason}`);
        }
    }
    return validTags;
}
function trackFetchMetric(workStore, ctx) {
    if (!workStore.shouldTrackFetchMetrics) {
        return;
    }
    workStore.fetchMetrics ??= [];
    workStore.fetchMetrics.push({
        ...ctx,
        end: performance.timeOrigin + performance.now(),
        idx: workStore.nextFetchId || 0
    });
}
async function createCachedPrerenderResponse(res, cacheKey, incrementalCacheContext, incrementalCache, revalidate, handleUnlock) {
    // We are prerendering at build time or revalidate time with cacheComponents so we
    // need to buffer the response so we can guarantee it can be read in a
    // microtask.
    const bodyBuffer = await res.arrayBuffer();
    const fetchedData = {
        headers: Object.fromEntries(res.headers.entries()),
        body: Buffer.from(bodyBuffer).toString('base64'),
        status: res.status,
        url: res.url
    };
    // We can skip setting the serverComponentsHmrCache because we aren't in dev
    // mode.
    if (incrementalCacheContext) {
        await incrementalCache.set(cacheKey, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH,
            data: fetchedData,
            revalidate
        }, incrementalCacheContext);
    }
    await handleUnlock();
    // We return a new Response to the caller.
    return new Response(bodyBuffer, {
        headers: res.headers,
        status: res.status,
        statusText: res.statusText
    });
}
async function createCachedDynamicResponse(workStore, res, cacheKey, incrementalCacheContext, incrementalCache, serverComponentsHmrCache, revalidate, input, handleUnlock) {
    // We're cloning the response using this utility because there exists a bug in
    // the undici library around response cloning. See the following pull request
    // for more details: https://github.com/vercel/next.js/pull/73274
    const [cloned1, cloned2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneResponse"])(res);
    // We are dynamically rendering including dev mode. We want to return the
    // response to the caller as soon as possible because it might stream over a
    // very long time.
    const cacheSetPromise = cloned1.arrayBuffer().then(async (arrayBuffer)=>{
        const bodyBuffer = Buffer.from(arrayBuffer);
        const fetchedData = {
            headers: Object.fromEntries(cloned1.headers.entries()),
            body: bodyBuffer.toString('base64'),
            status: cloned1.status,
            url: cloned1.url
        };
        serverComponentsHmrCache == null ? void 0 : serverComponentsHmrCache.set(cacheKey, fetchedData);
        if (incrementalCacheContext) {
            await incrementalCache.set(cacheKey, {
                kind: __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH,
                data: fetchedData,
                revalidate
            }, incrementalCacheContext);
        }
    }).catch((error)=>console.warn(`Failed to set fetch cache`, input, error)).finally(handleUnlock);
    const pendingRevalidateKey = `cache-set-${cacheKey}`;
    const pendingRevalidates = workStore.pendingRevalidates ??= {};
    let pendingRevalidatePromise = Promise.resolve();
    if (pendingRevalidateKey in pendingRevalidates) {
        // There is already a pending revalidate entry that we need to await to
        // avoid race conditions.
        pendingRevalidatePromise = pendingRevalidates[pendingRevalidateKey];
    }
    pendingRevalidates[pendingRevalidateKey] = pendingRevalidatePromise.then(()=>cacheSetPromise).finally(()=>{
        // If the pending revalidate is not present in the store, then we have
        // nothing to delete.
        if (!(pendingRevalidates == null ? void 0 : pendingRevalidates[pendingRevalidateKey])) {
            return;
        }
        delete pendingRevalidates[pendingRevalidateKey];
    });
    return cloned2;
}
function createPatchedFetcher(originFetch, { workAsyncStorage, workUnitAsyncStorage }) {
    // Create the patched fetch function.
    const patched = async function fetch(input, init) {
        var _init_method, _init_next;
        let url;
        try {
            url = new URL(input instanceof Request ? input.url : input);
            url.username = '';
            url.password = '';
        } catch  {
            // Error caused by malformed URL should be handled by native fetch
            url = undefined;
        }
        const fetchUrl = (url == null ? void 0 : url.href) ?? '';
        const method = (init == null ? void 0 : (_init_method = init.method) == null ? void 0 : _init_method.toUpperCase()) || 'GET';
        // Do create a new span trace for internal fetches in the
        // non-verbose mode.
        const isInternal = (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) === true;
        const hideSpan = process.env.NEXT_OTEL_FETCH_DISABLED === '1';
        // We don't track fetch metrics for internal fetches
        // so it's not critical that we have a start time, as it won't be recorded.
        // This is to workaround a flaky issue where performance APIs might
        // not be available and will require follow-up investigation.
        const fetchStart = isInternal ? undefined : performance.timeOrigin + performance.now();
        const workStore = workAsyncStorage.getStore();
        const workUnitStore = workUnitAsyncStorage.getStore();
        let cacheSignal = workUnitStore ? getCacheSignal(workUnitStore) : null;
        if (cacheSignal) {
            cacheSignal.beginRead();
        }
        const result = getTracer().trace(isInternal ? __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextNodeServerSpan"].internalFetch : __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppRenderSpan"].fetch, {
            hideSpan,
            kind: SpanKind.CLIENT,
            spanName: [
                'fetch',
                method,
                fetchUrl
            ].filter(Boolean).join(' '),
            attributes: {
                'http.url': fetchUrl,
                'http.method': method,
                'net.peer.name': url == null ? void 0 : url.hostname,
                'net.peer.port': (url == null ? void 0 : url.port) || undefined
            }
        }, async ()=>{
            var _getRequestMeta;
            // If this is an internal fetch, we should not do any special treatment.
            if (isInternal) {
                return originFetch(input, init);
            }
            // If the workStore is not available, we can't do any
            // special treatment of fetch, therefore fallback to the original
            // fetch implementation.
            if (!workStore) {
                return originFetch(input, init);
            }
            // We should also fallback to the original fetch implementation if we
            // are in draft mode, it does not constitute a static generation.
            if (workStore.isDraftMode) {
                return originFetch(input, init);
            }
            const isRequestInput = input && typeof input === 'object' && typeof input.method === 'string';
            const getRequestMeta = (field)=>{
                // If request input is present but init is not, retrieve from input first.
                const value = init == null ? void 0 : init[field];
                return value || (isRequestInput ? input[field] : null);
            };
            let finalRevalidate = undefined;
            const getNextField = (field)=>{
                var _init_next, _init_next1, _input_next;
                return typeof (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next[field]) !== 'undefined' ? init == null ? void 0 : (_init_next1 = init.next) == null ? void 0 : _init_next1[field] : isRequestInput ? (_input_next = input.next) == null ? void 0 : _input_next[field] : undefined;
            };
            // RequestInit doesn't keep extra fields e.g. next so it's
            // only available if init is used separate
            const originalFetchRevalidate = getNextField('revalidate');
            let currentFetchRevalidate = originalFetchRevalidate;
            const tags = validateTags(getNextField('tags') || [], `fetch ${input.toString()}`);
            let revalidateStore;
            if (workUnitStore) {
                switch(workUnitStore.type){
                    case 'prerender':
                    case 'prerender-runtime':
                    // TODO: Stop accumulating tags in client prerender. (fallthrough)
                    case 'prerender-client':
                    case 'prerender-ppr':
                    case 'prerender-legacy':
                    case 'cache':
                    case 'private-cache':
                        revalidateStore = workUnitStore;
                        break;
                    case 'request':
                    case 'unstable-cache':
                        break;
                    default:
                        workUnitStore;
                }
            }
            if (revalidateStore) {
                if (Array.isArray(tags)) {
                    // Collect tags onto parent caches or parent prerenders.
                    const collectedTags = revalidateStore.tags ?? (revalidateStore.tags = []);
                    for (const tag of tags){
                        if (!collectedTags.includes(tag)) {
                            collectedTags.push(tag);
                        }
                    }
                }
            }
            const implicitTags = workUnitStore == null ? void 0 : workUnitStore.implicitTags;
            let pageFetchCacheMode = workStore.fetchCache;
            if (workUnitStore) {
                switch(workUnitStore.type){
                    case 'unstable-cache':
                        // Inside unstable-cache we treat it the same as force-no-store on
                        // the page.
                        pageFetchCacheMode = 'force-no-store';
                        break;
                    case 'prerender':
                    case 'prerender-client':
                    case 'prerender-runtime':
                    case 'prerender-ppr':
                    case 'prerender-legacy':
                    case 'request':
                    case 'cache':
                    case 'private-cache':
                        break;
                    default:
                        workUnitStore;
                }
            }
            const isUsingNoStore = !!workStore.isUnstableNoStore;
            let currentFetchCacheConfig = getRequestMeta('cache');
            let cacheReason = '';
            let cacheWarning;
            if (typeof currentFetchCacheConfig === 'string' && typeof currentFetchRevalidate !== 'undefined') {
                // If the revalidate value conflicts with the cache value, we should warn the user and unset the conflicting values.
                const isConflictingRevalidate = currentFetchCacheConfig === 'force-cache' && currentFetchRevalidate === 0 || // revalidate: >0 or revalidate: false and cache: no-store
                currentFetchCacheConfig === 'no-store' && (currentFetchRevalidate > 0 || currentFetchRevalidate === false);
                if (isConflictingRevalidate) {
                    cacheWarning = `Specified "cache: ${currentFetchCacheConfig}" and "revalidate: ${currentFetchRevalidate}", only one should be specified.`;
                    currentFetchCacheConfig = undefined;
                    currentFetchRevalidate = undefined;
                }
            }
            const hasExplicitFetchCacheOptOut = currentFetchCacheConfig === 'no-cache' || currentFetchCacheConfig === 'no-store' || // the fetch isn't explicitly caching and the segment level cache config signals not to cache
            // note: `pageFetchCacheMode` is also set by being in an unstable_cache context.
            pageFetchCacheMode === 'force-no-store' || pageFetchCacheMode === 'only-no-store';
            // If no explicit fetch cache mode is set, but dynamic = `force-dynamic` is set,
            // we shouldn't consider caching the fetch. This is because the `dynamic` cache
            // is considered a "top-level" cache mode, whereas something like `fetchCache` is more
            // fine-grained. Top-level modes are responsible for setting reasonable defaults for the
            // other configurations.
            const noFetchConfigAndForceDynamic = !pageFetchCacheMode && !currentFetchCacheConfig && !currentFetchRevalidate && workStore.forceDynamic;
            if (// which will signal the cache to not revalidate
            currentFetchCacheConfig === 'force-cache' && typeof currentFetchRevalidate === 'undefined') {
                currentFetchRevalidate = false;
            } else if (hasExplicitFetchCacheOptOut || noFetchConfigAndForceDynamic) {
                currentFetchRevalidate = 0;
            }
            if (currentFetchCacheConfig === 'no-cache' || currentFetchCacheConfig === 'no-store') {
                cacheReason = `cache: ${currentFetchCacheConfig}`;
            }
            finalRevalidate = validateRevalidate(currentFetchRevalidate, workStore.route);
            const _headers = getRequestMeta('headers');
            const initHeaders = typeof (_headers == null ? void 0 : _headers.get) === 'function' ? _headers : new Headers(_headers || {});
            const hasUnCacheableHeader = initHeaders.get('authorization') || initHeaders.get('cookie');
            const isUnCacheableMethod = ![
                'get',
                'head'
            ].includes(((_getRequestMeta = getRequestMeta('method')) == null ? void 0 : _getRequestMeta.toLowerCase()) || 'get');
            /**
         * We automatically disable fetch caching under the following conditions:
         * - Fetch cache configs are not set. Specifically:
         *    - A page fetch cache mode is not set (export const fetchCache=...)
         *    - A fetch cache mode is not set in the fetch call (fetch(url, { cache: ... }))
         *      or the fetch cache mode is set to 'default'
         *    - A fetch revalidate value is not set in the fetch call (fetch(url, { revalidate: ... }))
         * - OR the fetch comes after a configuration that triggered dynamic rendering (e.g., reading cookies())
         *   and the fetch was considered uncacheable (e.g., POST method or has authorization headers)
         */ const hasNoExplicitCacheConfig = pageFetchCacheMode == undefined && // eslint-disable-next-line eqeqeq
            (currentFetchCacheConfig == undefined || // when considering whether to opt into the default "no-cache" fetch semantics,
            // a "default" cache config should be treated the same as no cache config
            currentFetchCacheConfig === 'default') && // eslint-disable-next-line eqeqeq
            currentFetchRevalidate == undefined;
            let autoNoCache = Boolean((hasUnCacheableHeader || isUnCacheableMethod) && (revalidateStore == null ? void 0 : revalidateStore.revalidate) === 0);
            let isImplicitBuildTimeCache = false;
            if (!autoNoCache && hasNoExplicitCacheConfig) {
                // We don't enable automatic no-cache behavior during build-time
                // prerendering so that we can still leverage the fetch cache between
                // export workers.
                if (workStore.isBuildTimePrerendering) {
                    isImplicitBuildTimeCache = true;
                } else {
                    autoNoCache = true;
                }
            }
            // If we have no cache config, and we're in Dynamic I/O prerendering,
            // it'll be a dynamic call. We don't have to issue that dynamic call.
            if (hasNoExplicitCacheConfig && workUnitStore !== undefined) {
                switch(workUnitStore.type){
                    case 'prerender':
                    case 'prerender-runtime':
                    // While we don't want to do caching in the client scope we know the
                    // fetch will be dynamic for cacheComponents so we may as well avoid the
                    // call here. (fallthrough)
                    case 'prerender-client':
                        if (cacheSignal) {
                            cacheSignal.endRead();
                            cacheSignal = null;
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, workStore.route, 'fetch()');
                    case 'request':
                        if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.stagedRendering) {
                            if (cacheSignal) {
                                cacheSignal.endRead();
                                cacheSignal = null;
                            }
                            await workUnitStore.stagedRendering.waitForStage(RenderStage.Dynamic);
                        }
                        break;
                    case 'prerender-ppr':
                    case 'prerender-legacy':
                    case 'cache':
                    case 'private-cache':
                    case 'unstable-cache':
                        break;
                    default:
                        workUnitStore;
                }
            }
            switch(pageFetchCacheMode){
                case 'force-no-store':
                    {
                        cacheReason = 'fetchCache = force-no-store';
                        break;
                    }
                case 'only-no-store':
                    {
                        if (currentFetchCacheConfig === 'force-cache' || typeof finalRevalidate !== 'undefined' && finalRevalidate > 0) {
                            throw Object.defineProperty(new Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`), "__NEXT_ERROR_CODE", {
                                value: "E448",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheReason = 'fetchCache = only-no-store';
                        break;
                    }
                case 'only-cache':
                    {
                        if (currentFetchCacheConfig === 'no-store') {
                            throw Object.defineProperty(new Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`), "__NEXT_ERROR_CODE", {
                                value: "E521",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        break;
                    }
                case 'force-cache':
                    {
                        if (typeof currentFetchRevalidate === 'undefined' || currentFetchRevalidate === 0) {
                            cacheReason = 'fetchCache = force-cache';
                            finalRevalidate = __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
                        }
                        break;
                    }
                case 'default-cache':
                case 'default-no-store':
                case 'auto':
                case undefined:
                    break;
                default:
                    pageFetchCacheMode;
            }
            if (typeof finalRevalidate === 'undefined') {
                if (pageFetchCacheMode === 'default-cache' && !isUsingNoStore) {
                    finalRevalidate = __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
                    cacheReason = 'fetchCache = default-cache';
                } else if (pageFetchCacheMode === 'default-no-store') {
                    finalRevalidate = 0;
                    cacheReason = 'fetchCache = default-no-store';
                } else if (isUsingNoStore) {
                    finalRevalidate = 0;
                    cacheReason = 'noStore call';
                } else if (autoNoCache) {
                    finalRevalidate = 0;
                    cacheReason = 'auto no cache';
                } else {
                    // TODO: should we consider this case an invariant?
                    cacheReason = 'auto cache';
                    finalRevalidate = revalidateStore ? revalidateStore.revalidate : __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
                }
            } else if (!cacheReason) {
                cacheReason = `revalidate: ${finalRevalidate}`;
            }
            if (// `revalidate: 0` values
            !(workStore.forceStatic && finalRevalidate === 0) && // we don't consider autoNoCache to switch to dynamic for ISR
            !autoNoCache && // If the revalidate value isn't currently set or the value is less
            // than the current revalidate value, we should update the revalidate
            // value.
            revalidateStore && finalRevalidate < revalidateStore.revalidate) {
                // If we were setting the revalidate value to 0, we should try to
                // postpone instead first.
                if (finalRevalidate === 0) {
                    if (workUnitStore) {
                        switch(workUnitStore.type){
                            case 'prerender':
                            case 'prerender-client':
                            case 'prerender-runtime':
                                if (cacheSignal) {
                                    cacheSignal.endRead();
                                    cacheSignal = null;
                                }
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, workStore.route, 'fetch()');
                            case 'request':
                                if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.stagedRendering) {
                                    if (cacheSignal) {
                                        cacheSignal.endRead();
                                        cacheSignal = null;
                                    }
                                    await workUnitStore.stagedRendering.waitForStage(RenderStage.Dynamic);
                                }
                                break;
                            case 'prerender-ppr':
                            case 'prerender-legacy':
                            case 'cache':
                            case 'private-cache':
                            case 'unstable-cache':
                                break;
                            default:
                                workUnitStore;
                        }
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markCurrentScopeAsDynamic"])(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                }
                // We only want to set the revalidate store's revalidate time if it
                // was explicitly set for the fetch call, i.e.
                // originalFetchRevalidate.
                if (revalidateStore && originalFetchRevalidate === finalRevalidate) {
                    revalidateStore.revalidate = finalRevalidate;
                }
            }
            const isCacheableRevalidate = typeof finalRevalidate === 'number' && finalRevalidate > 0;
            let cacheKey;
            const { incrementalCache } = workStore;
            let isHmrRefresh = false;
            let serverComponentsHmrCache;
            if (workUnitStore) {
                switch(workUnitStore.type){
                    case 'request':
                    case 'cache':
                    case 'private-cache':
                        isHmrRefresh = workUnitStore.isHmrRefresh ?? false;
                        serverComponentsHmrCache = workUnitStore.serverComponentsHmrCache;
                        break;
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
            if (incrementalCache && (isCacheableRevalidate || serverComponentsHmrCache)) {
                try {
                    cacheKey = await incrementalCache.generateCacheKey(fetchUrl, isRequestInput ? input : init);
                } catch (err) {
                    console.error(`Failed to generate cache key for`, input);
                }
            }
            const fetchIdx = workStore.nextFetchId ?? 1;
            workStore.nextFetchId = fetchIdx + 1;
            let handleUnlock = ()=>{};
            const doOriginalFetch = async (isStale, cacheReasonOverride)=>{
                const requestInputFields = [
                    'cache',
                    'credentials',
                    'headers',
                    'integrity',
                    'keepalive',
                    'method',
                    'mode',
                    'redirect',
                    'referrer',
                    'referrerPolicy',
                    'window',
                    'duplex',
                    // don't pass through signal when revalidating
                    ...isStale ? [] : [
                        'signal'
                    ]
                ];
                if (isRequestInput) {
                    const reqInput = input;
                    const reqOptions = {
                        body: reqInput._ogBody || reqInput.body
                    };
                    for (const field of requestInputFields){
                        // @ts-expect-error custom fields
                        reqOptions[field] = reqInput[field];
                    }
                    input = new Request(reqInput.url, reqOptions);
                } else if (init) {
                    const { _ogBody, body, signal, ...otherInput } = init;
                    init = {
                        ...otherInput,
                        body: _ogBody || body,
                        signal: isStale ? undefined : signal
                    };
                }
                // add metadata to init without editing the original
                const clonedInit = {
                    ...init,
                    next: {
                        ...init == null ? void 0 : init.next,
                        fetchType: 'origin',
                        fetchIdx
                    }
                };
                return originFetch(input, clonedInit).then(async (res)=>{
                    if (!isStale && fetchStart) {
                        trackFetchMetric(workStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason: cacheReasonOverride || cacheReason,
                            cacheStatus: finalRevalidate === 0 || cacheReasonOverride ? 'skip' : 'miss',
                            cacheWarning,
                            status: res.status,
                            method: clonedInit.method || 'GET'
                        });
                    }
                    if (res.status === 200 && incrementalCache && cacheKey && (isCacheableRevalidate || serverComponentsHmrCache)) {
                        const normalizedRevalidate = finalRevalidate >= __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INFINITE_CACHE"] ? __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"] : finalRevalidate;
                        const incrementalCacheConfig = isCacheableRevalidate ? {
                            fetchCache: true,
                            fetchUrl,
                            fetchIdx,
                            tags,
                            isImplicitBuildTimeCache
                        } : undefined;
                        switch(workUnitStore == null ? void 0 : workUnitStore.type){
                            case 'prerender':
                            case 'prerender-client':
                            case 'prerender-runtime':
                                return createCachedPrerenderResponse(res, cacheKey, incrementalCacheConfig, incrementalCache, normalizedRevalidate, handleUnlock);
                            case 'request':
                                if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.stagedRendering && workUnitStore.cacheSignal) {
                                    // We're filling caches for a staged render,
                                    // so we need to wait for the response to finish instead of streaming.
                                    return createCachedPrerenderResponse(res, cacheKey, incrementalCacheConfig, incrementalCache, normalizedRevalidate, handleUnlock);
                                }
                            // fallthrough
                            case 'prerender-ppr':
                            case 'prerender-legacy':
                            case 'cache':
                            case 'private-cache':
                            case 'unstable-cache':
                            case undefined:
                                return createCachedDynamicResponse(workStore, res, cacheKey, incrementalCacheConfig, incrementalCache, serverComponentsHmrCache, normalizedRevalidate, input, handleUnlock);
                            default:
                                workUnitStore;
                        }
                    }
                    // we had response that we determined shouldn't be cached so we return it
                    // and don't cache it. This also needs to unlock the cache lock we acquired.
                    await handleUnlock();
                    return res;
                }).catch((error)=>{
                    handleUnlock();
                    throw error;
                });
            };
            let cacheReasonOverride;
            let isForegroundRevalidate = false;
            let isHmrRefreshCache = false;
            if (cacheKey && incrementalCache) {
                let cachedFetchData;
                if (isHmrRefresh && serverComponentsHmrCache) {
                    cachedFetchData = serverComponentsHmrCache.get(cacheKey);
                    isHmrRefreshCache = true;
                }
                if (isCacheableRevalidate && !cachedFetchData) {
                    handleUnlock = await incrementalCache.lock(cacheKey);
                    const entry = workStore.isOnDemandRevalidate ? null : await incrementalCache.get(cacheKey, {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH,
                        revalidate: finalRevalidate,
                        fetchUrl,
                        fetchIdx,
                        tags,
                        softTags: implicitTags == null ? void 0 : implicitTags.tags
                    });
                    if (hasNoExplicitCacheConfig && workUnitStore) {
                        switch(workUnitStore.type){
                            case 'prerender':
                            case 'prerender-client':
                            case 'prerender-runtime':
                                // We sometimes use the cache to dedupe fetches that do not
                                // specify a cache configuration. In these cases we want to
                                // make sure we still exclude them from prerenders if
                                // cacheComponents is on so we introduce an artificial task boundary
                                // here.
                                await getTimeoutBoundary();
                                break;
                            case 'request':
                                if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.stagedRendering) {
                                    await workUnitStore.stagedRendering.waitForStage(RenderStage.Dynamic);
                                }
                                break;
                            case 'prerender-ppr':
                            case 'prerender-legacy':
                            case 'cache':
                            case 'private-cache':
                            case 'unstable-cache':
                                break;
                            default:
                                workUnitStore;
                        }
                    }
                    if (entry) {
                        await handleUnlock();
                    } else {
                        // in dev, incremental cache response will be null in case the browser adds `cache-control: no-cache` in the request headers
                        // TODO: it seems like we also hit this after revalidates in dev?
                        cacheReasonOverride = 'cache-control: no-cache (hard refresh)';
                    }
                    if ((entry == null ? void 0 : entry.value) && entry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
                        // when stale and is revalidating we wait for fresh data
                        // so the revalidated entry has the updated data
                        if (workStore.isStaticGeneration && entry.isStale) {
                            isForegroundRevalidate = true;
                        } else {
                            if (entry.isStale) {
                                workStore.pendingRevalidates ??= {};
                                if (!workStore.pendingRevalidates[cacheKey]) {
                                    const pendingRevalidate = doOriginalFetch(true).then(async (response)=>({
                                            body: await response.arrayBuffer(),
                                            headers: response.headers,
                                            status: response.status,
                                            statusText: response.statusText
                                        })).finally(()=>{
                                        workStore.pendingRevalidates ??= {};
                                        delete workStore.pendingRevalidates[cacheKey || ''];
                                    });
                                    // Attach the empty catch here so we don't get a "unhandled
                                    // promise rejection" warning.
                                    pendingRevalidate.catch(console.error);
                                    workStore.pendingRevalidates[cacheKey] = pendingRevalidate;
                                }
                            }
                            cachedFetchData = entry.value.data;
                        }
                    }
                }
                if (cachedFetchData) {
                    if (fetchStart) {
                        trackFetchMetric(workStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: isHmrRefreshCache ? 'hmr' : 'hit',
                            cacheWarning,
                            status: cachedFetchData.status || 200,
                            method: (init == null ? void 0 : init.method) || 'GET'
                        });
                    }
                    const response = new Response(Buffer.from(cachedFetchData.body, 'base64'), {
                        headers: cachedFetchData.headers,
                        status: cachedFetchData.status
                    });
                    Object.defineProperty(response, 'url', {
                        value: cachedFetchData.url
                    });
                    return response;
                }
            }
            if ((workStore.isStaticGeneration || ("TURBOPACK compile-time value", "development") === 'development' && ("TURBOPACK compile-time value", false) && workUnitStore && // eslint-disable-next-line no-restricted-syntax
            workUnitStore.type === 'request' && workUnitStore.stagedRendering) && init && typeof init === 'object') {
                const { cache } = init;
                // Delete `cache` property as Cloudflare Workers will throw an error
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                if (cache === 'no-store') {
                    // If enabled, we should bail out of static generation.
                    if (workUnitStore) {
                        switch(workUnitStore.type){
                            case 'prerender':
                            case 'prerender-client':
                            case 'prerender-runtime':
                                if (cacheSignal) {
                                    cacheSignal.endRead();
                                    cacheSignal = null;
                                }
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, workStore.route, 'fetch()');
                            case 'request':
                                if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.stagedRendering) {
                                    if (cacheSignal) {
                                        cacheSignal.endRead();
                                        cacheSignal = null;
                                    }
                                    await workUnitStore.stagedRendering.waitForStage(RenderStage.Dynamic);
                                }
                                break;
                            case 'prerender-ppr':
                            case 'prerender-legacy':
                            case 'cache':
                            case 'private-cache':
                            case 'unstable-cache':
                                break;
                            default:
                                workUnitStore;
                        }
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markCurrentScopeAsDynamic"])(workStore, workUnitStore, `no-store fetch ${input} ${workStore.route}`);
                }
                const hasNextConfig = 'next' in init;
                const { next = {} } = init;
                if (typeof next.revalidate === 'number' && revalidateStore && next.revalidate < revalidateStore.revalidate) {
                    if (next.revalidate === 0) {
                        // If enabled, we should bail out of static generation.
                        if (workUnitStore) {
                            switch(workUnitStore.type){
                                case 'prerender':
                                case 'prerender-client':
                                case 'prerender-runtime':
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, workStore.route, 'fetch()');
                                case 'request':
                                    if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.stagedRendering) {
                                        await workUnitStore.stagedRendering.waitForStage(RenderStage.Dynamic);
                                    }
                                    break;
                                case 'cache':
                                case 'private-cache':
                                case 'unstable-cache':
                                case 'prerender-legacy':
                                case 'prerender-ppr':
                                    break;
                                default:
                                    workUnitStore;
                            }
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markCurrentScopeAsDynamic"])(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                    }
                    if (!workStore.forceStatic || next.revalidate !== 0) {
                        revalidateStore.revalidate = next.revalidate;
                    }
                }
                if (hasNextConfig) delete init.next;
            }
            // if we are revalidating the whole page via time or on-demand and
            // the fetch cache entry is stale we should still de-dupe the
            // origin hit if it's a cache-able entry
            if (cacheKey && isForegroundRevalidate) {
                const pendingRevalidateKey = cacheKey;
                workStore.pendingRevalidates ??= {};
                let pendingRevalidate = workStore.pendingRevalidates[pendingRevalidateKey];
                if (pendingRevalidate) {
                    const revalidatedResult = await pendingRevalidate;
                    return new Response(revalidatedResult.body, {
                        headers: revalidatedResult.headers,
                        status: revalidatedResult.status,
                        statusText: revalidatedResult.statusText
                    });
                }
                // We used to just resolve the Response and clone it however for
                // static generation with cacheComponents we need the response to be able to
                // be resolved in a microtask and cloning the response will never have
                // a body that can resolve in a microtask in node (as observed through
                // experimentation) So instead we await the body and then when it is
                // available we construct manually cloned Response objects with the
                // body as an ArrayBuffer. This will be resolvable in a microtask
                // making it compatible with cacheComponents.
                const pendingResponse = doOriginalFetch(true, cacheReasonOverride) // We're cloning the response using this utility because there
                // exists a bug in the undici library around response cloning.
                // See the following pull request for more details:
                // https://github.com/vercel/next.js/pull/73274
                .then(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$clone$2d$response$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneResponse"]);
                pendingRevalidate = pendingResponse.then(async (responses)=>{
                    const response = responses[0];
                    return {
                        body: await response.arrayBuffer(),
                        headers: response.headers,
                        status: response.status,
                        statusText: response.statusText
                    };
                }).finally(()=>{
                    var _workStore_pendingRevalidates;
                    // If the pending revalidate is not present in the store, then
                    // we have nothing to delete.
                    if (!((_workStore_pendingRevalidates = workStore.pendingRevalidates) == null ? void 0 : _workStore_pendingRevalidates[pendingRevalidateKey])) {
                        return;
                    }
                    delete workStore.pendingRevalidates[pendingRevalidateKey];
                });
                // Attach the empty catch here so we don't get a "unhandled promise
                // rejection" warning
                pendingRevalidate.catch(()=>{});
                workStore.pendingRevalidates[pendingRevalidateKey] = pendingRevalidate;
                return pendingResponse.then((responses)=>responses[1]);
            } else {
                return doOriginalFetch(false, cacheReasonOverride);
            }
        });
        if (cacheSignal) {
            try {
                return await result;
            } finally{
                if (cacheSignal) {
                    cacheSignal.endRead();
                }
            }
        }
        return result;
    };
    // Attach the necessary properties to the patched fetch function.
    // We don't use this to determine if the fetch function has been patched,
    // but for external consumers to determine if the fetch function has been
    // patched.
    patched.__nextPatched = true;
    patched.__nextGetStaticStore = ()=>workAsyncStorage;
    patched._nextOriginalFetch = originFetch;
    globalThis[NEXT_PATCH_SYMBOL] = true;
    // Assign the function name also as a name property, so that it's preserved
    // even when mangling is enabled.
    Object.defineProperty(patched, 'name', {
        value: 'fetch',
        writable: false
    });
    return patched;
}
function patchFetch(options) {
    // If we've already patched fetch, we should not patch it again.
    if (isFetchPatched()) return;
    // Grab the original fetch function. We'll attach this so we can use it in
    // the patched fetch function.
    const original = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$dedupe$2d$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDedupeFetch"])(globalThis.fetch);
    // Set the global fetch to the patched fetch.
    globalThis.fetch = createPatchedFetcher(original, options);
}
let currentTimeoutBoundary = null;
function getTimeoutBoundary() {
    if (!currentTimeoutBoundary) {
        currentTimeoutBoundary = new Promise((r)=>{
            setTimeout(()=>{
                currentTimeoutBoundary = null;
                r();
            }, 0);
        });
    }
    return currentTimeoutBoundary;
} //# sourceMappingURL=patch-fetch.js.map
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/request/params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$preloads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/rsc/preloads.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$postpone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/rsc/postpone.js [app-rsc] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module './rsc/taint'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$collect$2d$segment$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/collect-segment-data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$patch$2d$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/lib/patch-fetch.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$patch$2d$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["patchFetch"])({
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
    "Postpone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Postpone"],
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
    "createPrerenderParamsForClientSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPrerenderParamsForClientSegment"],
    "createServerParamsForServerSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerParamsForServerSegment"],
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
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$preloads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$preloads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$preloads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preloadStyle"],
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/request/params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/metadata/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$rsc$2f$preloads$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/rsc/preloads.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './rsc/taint'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$collect$2d$segment$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/esm/server/app-render/collect-segment-data.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=AirSafeMove_64c1b717._.js.map