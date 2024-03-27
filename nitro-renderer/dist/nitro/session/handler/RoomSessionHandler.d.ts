import { IConnection, IRoomHandlerListener } from '../../../api';
import { BaseHandler } from './BaseHandler';
export declare class RoomSessionHandler extends BaseHandler {
    static RS_CONNECTED: string;
    static RS_READY: string;
    static RS_DISCONNECTED: string;
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    private onRoomEnterEvent;
    private onRoomReadyMessageEvent;
    private onDesktopViewEvent;
    private onRoomDoorbellAcceptedEvent;
    private onRoomDoorbellRejectedEvent;
    private onYouAreSpectatorMessageEvent;
}
