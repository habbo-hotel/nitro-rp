import { IConnection, IRoomHandlerListener } from '../../../api';
import { Disposable } from '../../../core';
export declare class BaseHandler extends Disposable {
    private _connection;
    private _listener;
    private _roomId;
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    protected onDispose(): void;
    setRoomId(id: number): void;
    get connection(): IConnection;
    get listener(): IRoomHandlerListener;
    get roomId(): number;
}
