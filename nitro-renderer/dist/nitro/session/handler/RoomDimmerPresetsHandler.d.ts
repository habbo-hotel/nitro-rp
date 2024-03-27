import { IConnection, IRoomHandlerListener } from '../../../api';
import { BaseHandler } from './BaseHandler';
export declare class RoomDimmerPresetsHandler extends BaseHandler {
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    private onRoomDimmerPresets;
}
