import { IRoomObjectSprite } from '../../../../../../api';
import { AvatarVisualization } from '../AvatarVisualization';
import { ExpressionAddition } from './ExpressionAddition';
export declare class FloatingHeartAddition extends ExpressionAddition {
    private static DELAY_BEFORE_ANIMATION;
    private static STATE_DELAY;
    private static STATE_FADE_IN;
    private static STATE_FLOAT;
    private static STATE_COMPLETE;
    private _asset;
    private _startTime;
    private _delta;
    private _offsetY;
    private _scale;
    private _state;
    constructor(id: number, type: number, visualization: AvatarVisualization);
    update(sprite: IRoomObjectSprite, scale: number): void;
    animate(sprite: IRoomObjectSprite): boolean;
}
