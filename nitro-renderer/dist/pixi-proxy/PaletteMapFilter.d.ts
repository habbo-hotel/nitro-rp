import { NitroBaseTexture } from './NitroBaseTexture';
import { NitroFilter } from './NitroFilter';
export declare class PaletteMapFilter extends NitroFilter {
    static readonly CHANNEL_RED = 0;
    static readonly CHANNEL_GREEN = 1;
    static readonly CHANNEL_BLUE = 2;
    static readonly CHANNEL_ALPHA = 3;
    private _lut;
    private _channel;
    constructor(palette: number[], channel?: number);
    private getLutForPalette;
    get lut(): NitroBaseTexture;
    get channel(): number;
}
