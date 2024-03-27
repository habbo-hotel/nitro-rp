import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { FlatCreatedMessageParser } from '../../parser';
export declare class FlatCreatedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FlatCreatedMessageParser;
}
