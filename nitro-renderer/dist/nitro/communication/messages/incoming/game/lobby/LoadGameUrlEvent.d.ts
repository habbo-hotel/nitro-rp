import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { LoadGameUrlParser } from '../../../parser';
export declare class LoadGameUrlEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): LoadGameUrlParser;
}
