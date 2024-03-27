import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CanCreateRoomEventParser } from '../../parser';
export declare class CanCreateRoomEventEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CanCreateRoomEventParser;
}
