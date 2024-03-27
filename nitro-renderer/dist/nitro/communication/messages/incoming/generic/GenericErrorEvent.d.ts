import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GenericErrorParser } from '../../parser';
export declare class GenericErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GenericErrorParser;
}
