import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { TryVerificationCodeResultParser } from '../../parser';
export declare class TryVerificationCodeResultMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TryVerificationCodeResultParser;
}
