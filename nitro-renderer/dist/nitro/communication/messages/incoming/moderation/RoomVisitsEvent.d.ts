import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomVisitsMessageParser } from '../../parser';
export declare class RoomVisitsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomVisitsMessageParser;
}
