import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NoSuchFlatParser } from '../../parser';
export declare class NoSuchFlatEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NoSuchFlatParser;
}
