import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CanCreateRoomMessageParser } from '../../parser';
export declare class CanCreateRoomEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CanCreateRoomMessageParser;
}
