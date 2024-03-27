import { IConnection, IRoomHandlerListener } from '../../../api';
import { BaseHandler } from './BaseHandler';
export declare class RoomPermissionsHandler extends BaseHandler {
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    private onRoomRightsEvent;
    private onRoomRightsClearEvent;
    private onRoomRightsOwnerEvent;
}
