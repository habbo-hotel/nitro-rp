import { IRoomObjectSprite } from '../../../../../../api';
import { AvatarVisualization } from '../AvatarVisualization';
import { IAvatarAddition } from './IAvatarAddition';
export declare class TypingBubbleAddition implements IAvatarAddition {
    private _id;
    private _visualization;
    private _asset;
    private _relativeDepth;
    constructor(id: number, visualization: AvatarVisualization);
    dispose(): void;
    update(sprite: IRoomObjectSprite, scale: number): void;
    animate(sprite: IRoomObjectSprite): boolean;
    get id(): number;
    get relativeDepth(): number;
    set relativeDepth(depth: number);
}
