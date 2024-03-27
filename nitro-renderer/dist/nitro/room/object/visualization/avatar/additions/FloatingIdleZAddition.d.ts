import { IRoomObjectSprite } from '../../../../../../api';
import { AvatarVisualization } from '../AvatarVisualization';
import { IAvatarAddition } from './IAvatarAddition';
export declare class FloatingIdleZAddition implements IAvatarAddition {
    private static DELAY_BEFORE_ANIMATION;
    private static DELAY_PER_FRAME;
    private static STATE_DELAY;
    private static STATE_FRAME_A;
    private static STATE_FRAME_B;
    private _id;
    private _visualization;
    private _asset;
    private _startTime;
    private _offsetY;
    private _scale;
    private _state;
    constructor(id: number, visualization: AvatarVisualization);
    dispose(): void;
    private getSpriteAssetName;
    update(sprite: IRoomObjectSprite, scale: number): void;
    animate(sprite: IRoomObjectSprite): boolean;
    get id(): number;
}
