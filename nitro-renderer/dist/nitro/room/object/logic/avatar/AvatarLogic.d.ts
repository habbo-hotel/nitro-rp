import { IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { RoomObjectUpdateMessage } from '../../../../../room';
import { MovingObjectLogic } from '../MovingObjectLogic';
export declare class AvatarLogic extends MovingObjectLogic {
    private static MAX_HAND_ID;
    private static MAX_HAND_USE_ID;
    private static EFFECT_TYPE_SPLASH;
    private static EFFECT_SPLASH_LENGTH;
    private static EFFECT_TYPE_SWIM;
    private static EFFECT_TYPE_SPLASH_DARK;
    private static EFFECT_TYPE_SWIM_DARK;
    private _selected;
    private _reportedLocation;
    private _effectChangeTimeStamp;
    private _newEffect;
    private _blinkingStartTimestamp;
    private _blinkingEndTimestamp;
    private _talkingEndTimestamp;
    private _talkingPauseStartTimestamp;
    private _talkingPauseEndTimestamp;
    private _carryObjectStartTimestamp;
    private _carryObjectEndTimestamp;
    private _allowUseCarryObject;
    private _animationEndTimestamp;
    private _signEndTimestamp;
    private _gestureEndTimestamp;
    private _numberValueEndTimestamp;
    constructor();
    getEventTypes(): string[];
    dispose(): void;
    update(time: number): void;
    private updateModel;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private updateAvatarEffect;
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
    private randomTalkingPauseStartTimestamp;
    private randomTalkingPauseEndTimestamp;
    private randomBlinkStartTimestamp;
    private randomBlinkEndTimestamp;
}