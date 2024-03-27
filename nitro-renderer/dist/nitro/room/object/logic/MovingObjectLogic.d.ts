import { IRoomObjectController, IRoomObjectUpdateMessage, IVector3D } from '../../../../api';
import { RoomObjectLogicBase } from '../../../../room';
export declare class MovingObjectLogic extends RoomObjectLogicBase {
    static DEFAULT_UPDATE_INTERVAL: number;
    private static TEMP_VECTOR;
    private _liftAmount;
    private _location;
    private _locationDelta;
    private _lastUpdateTime;
    private _changeTime;
    private _updateInterval;
    constructor();
    protected onDispose(): void;
    update(time: number): void;
    setObject(object: IRoomObjectController): void;
    processUpdateMessage(message: IRoomObjectUpdateMessage): void;
    private processMoveMessage;
    protected getLocationOffset(): IVector3D;
    protected get lastUpdateTime(): number;
    protected set updateInterval(interval: number);
}
