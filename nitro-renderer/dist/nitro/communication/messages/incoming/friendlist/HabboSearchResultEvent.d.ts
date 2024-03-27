import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { HabboSearchResultParser } from '../../parser';
export declare class HabboSearchResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): HabboSearchResultParser;
}
