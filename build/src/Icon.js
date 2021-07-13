"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useDynamicSVGImport_1 = __importDefault(require("./useDynamicSVGImport"));
const Icon = ({ name, height, width, onCompleted, onError, ...rest }) => {
    const { exists, error, loading, SvgIcon } = useDynamicSVGImport_1.default(name, {
        onCompleted,
        onError,
    });
    if (error) {
        return react_1.default.createElement("p", null, error.message);
    }
    if (loading) {
        return react_1.default.createElement("p", null, "Loading...");
    }
    if (SvgIcon) {
        console.log(exists);
        if (!exists) {
            height *= 15.1;
            width *= 15.1;
        }
        return react_1.default.createElement(SvgIcon, { ...rest, style: { height, width } });
    }
    return null;
};
exports.default = Icon;
//# sourceMappingURL=Icon.js.map