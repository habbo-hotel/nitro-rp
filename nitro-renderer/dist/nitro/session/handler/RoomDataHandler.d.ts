import { IConnection, IRoomHandlerListener } from '../../../api';
import { BaseHandler } from './BaseHandler';
export declare class RoomDataHandler extends BaseHandler {
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    private onGetGuestRoomResultEvent;
}
