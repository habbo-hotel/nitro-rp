import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MessengerInitParser } from '../../parser';
export declare class MessengerInitEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MessengerInitParser;
}
