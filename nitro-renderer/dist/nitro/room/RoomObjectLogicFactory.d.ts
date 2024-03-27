import { IEventDispatcher, IRoomObjectEventHandler, IRoomObjectLogicFactory } from '../../api';
import { RoomObjectLogicBase } from '../../room';
export declare class RoomObjectLogicFactory implements IRoomObjectLogicFactory {
    private _events;
    private _cachedEvents;
    private _registeredEvents;
    private _functions;
    constructor();
    getLogic(type: string): IRoomObjectEventHandler;
    private registerEventType;
    registerEventFunction(func: Function): void;
    removeEventFunction(func: Function): void;
    getLogicType(type: string): typeof RoomObjectLogicBase;
    get events(): IEventDispatcher;
}
