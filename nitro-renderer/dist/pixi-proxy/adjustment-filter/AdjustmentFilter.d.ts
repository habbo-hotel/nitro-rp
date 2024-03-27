import { CLEAR_MODES } from '@pixi/constants';
import { Filter, FilterSystem, RenderTexture } from '@pixi/core';
interface AdjustmentFilterOptions {
    gamma: number;
    saturation: number;
    contrast: number;
    brightness: number;
    red: number;
    green: number;
    blue: number;
    alpha: number;
}
export declare class AdjustmentFilter extends Filter {
    /** The amount of luminance */
    gamma: number;
    /** The amount of saturation */
    saturation: number;
    /** The amount of contrast */
    contrast: number;
    /** The amount of brightness */
    brightness: number;
    /** The amount of red channel */
    red: number;
    /** The amount of green channel */
    green: number;
    /** The amount of blue channel */
    blue: number;
    /** The amount of alpha channel */
    alpha: number;
    /**
     * @param {object|number} [options] - The optional parameters of the filter.
     * @param {number} [options.gamma=1] - The amount of luminance
     * @param {number} [options.saturation=1] - The amount of color saturation
     * @param {number} [options.contrast=1] - The amount of contrast
     * @param {number} [options.brightness=1] - The overall brightness
     * @param {number} [options.red=1] - The multipled red channel
     * @param {number} [options.green=1] - The multipled green channel
     * @param {number} [options.blue=1] - The multipled blue channel
     * @param {number} [options.alpha=1] - The overall alpha amount
     */
    constructor(options?: Partial<AdjustmentFilterOptions>);
    /**
     * Override existing apply method in PIXI.Filter
     * @ignore
     */
    apply(filterManager: FilterSystem, input: RenderTexture, output: RenderTexture, clear: CLEAR_MODES): void;
}
export {};
