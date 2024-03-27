import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { RoomDoorbellAcceptedParser } from '../../../../parser';
export declare class RoomDoorbellAcceptedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomDoorbellAcceptedParser;
}
