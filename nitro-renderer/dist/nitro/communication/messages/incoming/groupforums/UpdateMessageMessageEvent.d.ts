import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { UpdateMessageMessageParser } from '../../parser';
export declare class UpdateMessageMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UpdateMessageMessageParser;
}
