import { IConnection } from '../../api';
import { NitroEvent } from './NitroEvent';
export declare class SocketConnectionEvent extends NitroEvent {
    static CONNECTION_OPENED: string;
    static CONNECTION_CLOSED: string;
    static CONNECTION_ERROR: string;
    static CONNECTION_MESSAGE: string;
    private _connection;
    private _originalEvent;
    constructor(type: string, connection: IConnection, originalEvent: Event);
    get connection(): IConnection;
    get originalEvent(): Event;
}
