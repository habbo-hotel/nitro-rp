import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HabboGroupJoinFailedMessageParser } from '../../parser';
export declare class HabboGroupJoinFailedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HabboGroupJoinFailedMessageParser;
}
