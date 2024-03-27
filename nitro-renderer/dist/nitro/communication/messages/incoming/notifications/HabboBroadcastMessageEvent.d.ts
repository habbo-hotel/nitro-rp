import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HabboBroadcastMessageParser } from '../../parser';
export declare class HabboBroadcastMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HabboBroadcastMessageParser;
}
