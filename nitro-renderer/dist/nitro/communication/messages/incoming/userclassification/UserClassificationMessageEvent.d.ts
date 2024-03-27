import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { UserClassificationMessageParser } from '../../parser';
export declare class UserClassificationMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UserClassificationMessageParser;
}
