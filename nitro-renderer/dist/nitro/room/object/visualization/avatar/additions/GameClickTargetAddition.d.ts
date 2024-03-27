import { IRoomObjectSprite } from '../../../../../../api';
import { IAvatarAddition } from './IAvatarAddition';
export declare class GameClickTargetAddition implements IAvatarAddition {
    private static WIDTH;
    private static HEIGHT;
    private static OFFSET_X;
    private static OFFSET_Y;
    private _id;
    private _asset;
    private _disposed;
    constructor(id: number);
    dispose(): void;
    update(sprite: IRoomObjectSprite, scale: number): void;
    animate(sprite: IRoomObjectSprite): boolean;
    get id(): number;
}
