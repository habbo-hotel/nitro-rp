import { Filter, RenderTexture } from '@pixi/core';
export declare class CopyChannelFilter extends Filter {
    static readonly CHANNEL_RED = 0;
    static readonly CHANNEL_GREEN = 1;
    static readonly CHANNEL_BLUE = 2;
    static readonly CHANNEL_ALPHA = 3;
    constructor(mask: RenderTexture, fromChannel: number, toChannel: number);
}
