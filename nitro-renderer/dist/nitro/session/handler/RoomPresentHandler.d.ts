import { IConnection, IRoomHandlerListener } from '../../../api';
import { BaseHandler } from './BaseHandler';
export declare class RoomPresentHandler extends BaseHandler {
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    private onFurnitureGiftOpenedEvent;
}
