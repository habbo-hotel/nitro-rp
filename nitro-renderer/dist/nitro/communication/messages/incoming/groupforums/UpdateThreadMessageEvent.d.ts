import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { UpdateThreadMessageParser } from '../../parser';
export declare class UpdateThreadMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): UpdateThreadMessageParser;
}
