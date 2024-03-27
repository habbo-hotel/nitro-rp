import { IRoomObjectSprite } from '../../../../../../api';
import { AvatarVisualization } from '../AvatarVisualization';
import { IAvatarAddition } from './IAvatarAddition';
export declare class NumberBubbleAddition implements IAvatarAddition {
    private _id;
    private _visualization;
    private _asset;
    private _scale;
    private _number;
    private _numberValueFadeDirection;
    private _numberValueMoving;
    private _numberValueMoveCounter;
    constructor(id: number, number: number, visualization: AvatarVisualization);
    dispose(): void;
    update(sprite: IRoomObjectSprite, scale: number): void;
    animate(sprite: IRoomObjectSprite): boolean;
    get id(): number;
}
