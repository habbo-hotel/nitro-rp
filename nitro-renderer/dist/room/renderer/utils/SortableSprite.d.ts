import { IRoomObjectSprite, ISortableSprite } from '../../../api';
export declare class SortableSprite implements ISortableSprite {
    static Z_INFINITY: number;
    private _name;
    private _sprite;
    private _x;
    private _y;
    private _z;
    constructor();
    dispose(): void;
    get name(): string;
    set name(name: string);
    get sprite(): IRoomObjectSprite;
    set sprite(sprite: IRoomObjectSprite);
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get z(): number;
    set z(z: number);
}
