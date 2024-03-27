import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { TryPhoneNumberResultParser } from '../../parser';
export declare class TryPhoneNumberResultMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TryPhoneNumberResultParser;
}
