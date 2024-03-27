import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { LimitedEditionSoldOutParser } from '../../parser';
export declare class LimitedEditionSoldOutEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): LimitedEditionSoldOutParser;
}
