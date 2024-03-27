import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PerkAllowancesMessageParser } from './../../parser';
export declare class PerkAllowancesMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PerkAllowancesMessageParser;
}
