import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { LoadGameMessageParser } from '../../../parser';
export declare class LoadGameMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): LoadGameMessageParser;
}
