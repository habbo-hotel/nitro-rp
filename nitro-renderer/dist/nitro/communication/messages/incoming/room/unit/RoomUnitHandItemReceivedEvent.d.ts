import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomUnitHandItemReceivedParser } from '../../../parser';
export declare class RoomUnitHandItemReceivedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomUnitHandItemReceivedParser;
}
