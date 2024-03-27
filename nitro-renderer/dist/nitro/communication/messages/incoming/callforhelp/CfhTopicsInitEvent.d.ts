import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CfhTopicsInitMessageParser } from '../../parser';
export declare class CfhTopicsInitEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CfhTopicsInitMessageParser;
}
