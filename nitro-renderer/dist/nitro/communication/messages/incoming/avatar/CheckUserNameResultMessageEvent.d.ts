import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CheckUserNameResultMessageParser } from '../../parser';
export declare class CheckUserNameResultMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CheckUserNameResultMessageParser;
}
