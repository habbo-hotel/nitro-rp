import { IConnection, IRoomHandlerListener } from '../../../api';
import { BaseHandler } from './BaseHandler';
export declare class RoomChatHandler extends BaseHandler {
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    private onRoomUnitChatEvent;
    private onRoomUnitHandItemReceivedEvent;
    private onRespectReceivedEvent;
    private onPetRespectNoficationEvent;
    private onPetSupplementedNotificationEvent;
    private onFloodControlEvent;
    private onRemainingMuteEvent;
}
