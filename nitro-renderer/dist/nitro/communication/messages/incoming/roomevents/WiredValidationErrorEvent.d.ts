import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { WiredValidationErrorParser } from '../../parser';
export declare class WiredValidationErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): WiredValidationErrorParser;
}
