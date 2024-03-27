import { IConnection, IRoomHandlerListener } from '../../../api';
import { BaseHandler } from './BaseHandler';
export declare class PollHandler extends BaseHandler {
    constructor(connection: IConnection, listener: IRoomHandlerListener);
    private onPollContentsEvent;
    private onPollOfferEvent;
    private onPollErrorEvent;
    private onStartRoomPollEvent;
    private onRoomPollResultEvent;
}
