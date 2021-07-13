import React from "react";
import useDynamicSVGImport from "./useDynamicSVGImport";
import { IconProps } from "./types/interfaces";

/**
 * Simple wrapper for dynamic SVG import hook. You can implement your own wrapper,
 * or even use the hook directly in your components.
 */
const Icon: React.FC<IconProps> = ({
    name,
    height,
    width,
    onCompleted,
    onError,
    ...rest
}): React.ReactElement | null => {
    const { exists, error, loading, SvgIcon } = useDynamicSVGImport(name, {
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
        console.log(exists);
        if (!exists) {
            height *= 15.1;
            width *= 15.1;
        }
        return <SvgIcon {...rest} style={{ height, width }} />;
    }
    return null;
};

export default Icon;
