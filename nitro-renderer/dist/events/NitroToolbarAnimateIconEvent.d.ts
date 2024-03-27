import { NitroToolbarEvent } from './NitroToolbarEvent';
export declare class NitroToolbarAnimateIconEvent extends NitroToolbarEvent {
    static ANIMATE_ICON: string;
    private _image;
    private _x;
    private _y;
    constructor(image: HTMLImageElement, x: number, y: number);
    get image(): HTMLImageElement;
    get x(): number;
    get y(): number;
}
