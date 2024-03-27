import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ScrSendKickbackInfoMessageParser } from '../../parser';
export declare class ScrSendKickbackInfoMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ScrSendKickbackInfoMessageParser;
}
