import { IMessageComposer } from '../../../../../../api';
export declare class FurniturePlaceComposer implements IMessageComposer<string[]> {
    private _itemId;
    private _category;
    private _wallLocation;
    private _x;
    private _y;
    private _direction;
    constructor(itemId: number, category: number, wallLocation: string, x: number, y: number, direction: number);
    getMessageArray(): string[];
    dispose(): void;
}
