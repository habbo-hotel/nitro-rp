import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { PresentOpenedMessageParser } from '../../../../parser';
export declare class PresentOpenedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PresentOpenedMessageParser;
}
