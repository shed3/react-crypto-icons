import React from "react";
import { DynamicSVGImportOptions } from "./types/interfaces";
export default function useDynamicSVGImport(name: string, options?: DynamicSVGImportOptions): {
    exists: boolean;
    error: Error;
    loading: boolean;
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
};
