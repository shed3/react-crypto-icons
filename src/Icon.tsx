import React from "react";
import useDynamicSVGImport from "./useDynamicSVGImport";
import { IconProps } from "./types/interfaces";

/**
 * Simple wrapper for dynamic SVG import hook. You can implement your own wrapper,
 * or even use the hook directly in your components.
 */
const Icon: React.FC<IconProps> = ({
    name,
    size,
    onCompleted,
    onError,
    ...rest
}): React.ReactElement | null => {
    const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
        onCompleted,
        onError,
    });
    if (error) {
        return <p>{error.message}</p>;
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (SvgIcon) {
        return <SvgIcon {...rest} style={{ height: size, width: size }} />;
    }
    return null;
};

export default Icon;
