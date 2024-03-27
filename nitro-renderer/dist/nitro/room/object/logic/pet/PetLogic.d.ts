import { IAssetData, IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { RoomObjectUpdateMessage } from '../../../../../room';
import { MovingObjectLogic } from '../MovingObjectLogic';
export declare class PetLogic extends MovingObjectLogic {
    private _selected;
    private _reportedLocation;
    private _postureIndex;
    private _gestureIndex;
    private _headDirectionDelta;
    private _directions;
    private _talkingEndTimestamp;
    private _gestureEndTimestamp;
    private _expressionEndTimestamp;
    constructor();
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    dispose(): void;
    update(totalTimeRunning: number): void;
    private updateModel;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
}
