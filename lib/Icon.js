var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import useDynamicSVGImport from "./useDynamicSVGImport";
var Icon = function (_a) {
    var name = _a.name, size = _a.size, onCompleted = _a.onCompleted, onError = _a.onError, rest = __rest(_a, ["name", "size", "onCompleted", "onError"]);
    var _b = useDynamicSVGImport(name, {
        onCompleted: onCompleted,
        onError: onError,
    }), error = _b.error, loading = _b.loading, SvgIcon = _b.SvgIcon;
    if (error) {
        return React.createElement("p", null, error.message);
    }
    if (loading) {
        return React.createElement("p", null, "Loading...");
    }
    if (SvgIcon) {
        return React.createElement(SvgIcon, __assign({}, rest, { style: { height: size, width: size } }));
    }
    return null;
};
export default Icon;
//# sourceMappingURL=Icon.js.map