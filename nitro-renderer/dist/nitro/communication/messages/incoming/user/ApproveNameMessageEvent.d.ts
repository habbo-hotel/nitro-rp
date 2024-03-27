import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ApproveNameResultParser } from '../../parser';
export declare class ApproveNameMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ApproveNameResultParser;
}
