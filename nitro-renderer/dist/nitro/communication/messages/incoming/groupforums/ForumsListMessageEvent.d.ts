import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GetForumsListMessageParser } from '../../parser';
export declare class ForumsListMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GetForumsListMessageParser;
}
