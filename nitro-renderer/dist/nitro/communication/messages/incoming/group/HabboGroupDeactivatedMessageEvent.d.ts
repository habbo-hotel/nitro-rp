import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HabboGroupDeactivatedMessageParser } from '../../parser';
export declare class HabboGroupDeactivatedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HabboGroupDeactivatedMessageParser;
}
