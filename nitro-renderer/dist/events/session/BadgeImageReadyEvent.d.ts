import { Resource, Texture } from '@pixi/core';
import { NitroEvent } from '../core';
export declare class BadgeImageReadyEvent extends NitroEvent {
    static IMAGE_READY: string;
    private _badgeId;
    private _image;
    constructor(badgeId: string, image: Texture<Resource>);
    get badgeId(): string;
    get image(): Texture<Resource>;
}
