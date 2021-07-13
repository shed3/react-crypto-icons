"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const default_svg_1 = __importDefault(require("!!@svgr/webpack?+svgo,+titleProp,+ref!../assets/default.svg"));
function useDynamicSVGImport(name, options = {}) {
    const ImportedIconRef = react_1.useRef();
    const [loading, setLoading] = react_1.useState(false);
    const [error, setError] = react_1.useState();
    const [exists, setExists] = react_1.useState(false);
    const { onCompleted, onError } = options;
    react_1.useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = (await Promise.resolve().then(() => __importStar(require(`!!@svgr/webpack?+svgo,+titleProp,+ref!../assets/${name}.svg`)))).default;
                onCompleted?.(name, ImportedIconRef.current);
                setExists(true);
            }
            catch (err) {
                console.log("ERROR", err.message);
                if (err.message.includes("Cannot find module")) {
                    ImportedIconRef.current = default_svg_1.default;
                    onCompleted?.(name, ImportedIconRef.current);
                }
                else {
                    onError?.(err);
                    setError(err);
                }
            }
            finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name, onCompleted, onError]);
    return { exists, error, loading, SvgIcon: ImportedIconRef.current };
}
exports.default = useDynamicSVGImport;
//# sourceMappingURL=useDynamicSVGImport.js.map