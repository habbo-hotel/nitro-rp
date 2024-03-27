import { IEventDispatcher, IRoomGeometry, IRoomObjectController, IRoomObjectEventHandler, IRoomObjectUpdateMessage } from '../../../api';
import { Disposable } from '../../../core';
import { RoomSpriteMouseEvent } from '../../../events';
export declare class RoomObjectLogicBase extends Disposable implements IRoomObjectEventHandler {
    private _events;
    private _object;
    private _time;
    constructor();
    initialize(data: unknown): void;
    protected onDispose(): void;
    update(time: number): void;
    processUpdateMessage(message: IRoomObjectUpdateMessage): void;
    getEventTypes(): string[];
    protected mergeTypes(k: string[], _arg_2: string[]): string[];
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
    useObject(): void;
    setObject(object: IRoomObjectController): void;
    tearDown(): void;
    get object(): IRoomObjectController;
    get eventDispatcher(): IEventDispatcher;
    set eventDispatcher(events: IEventDispatcher);
    get widget(): string;
    get contextMenu(): string;
    get time(): number;
}
