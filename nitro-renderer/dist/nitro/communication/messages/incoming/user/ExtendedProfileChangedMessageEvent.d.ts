import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ExtendedProfileChangedMessageParser } from '../../parser';
export declare class ExtendedProfileChangedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ExtendedProfileChangedMessageParser;
}
