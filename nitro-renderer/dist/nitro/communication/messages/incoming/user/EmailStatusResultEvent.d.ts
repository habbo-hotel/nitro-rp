import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { EmailStatusParser } from '../../parser';
export declare class EmailStatusResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): EmailStatusParser;
}
