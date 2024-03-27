import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomThumbnailUpdateResultMessageParser } from '../../parser';
export declare class RoomThumbnailUpdateResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomThumbnailUpdateResultMessageParser;
}
