import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ElementPointerMessageParser } from '../../parser';
export declare class ElementPointerMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ElementPointerMessageParser;
}
