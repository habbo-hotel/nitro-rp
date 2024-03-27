import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { BonusRareInfoMessageParser } from '../../parser';
export declare class BonusRareInfoMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): BonusRareInfoMessageParser;
}
