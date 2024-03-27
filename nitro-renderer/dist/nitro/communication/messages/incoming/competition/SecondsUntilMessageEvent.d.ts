import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { SecondsUntilMessageParser } from '../../parser';
export declare class SecondsUntilMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): SecondsUntilMessageParser;
}
