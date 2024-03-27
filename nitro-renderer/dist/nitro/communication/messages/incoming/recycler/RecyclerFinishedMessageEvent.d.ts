import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RecyclerFinishedMessageParser } from '../../parser';
export declare class RecyclerFinishedMessageEvent extends MessageEvent implements IMessageEvent {
    static readonly FINISHED_OK: number;
    static readonly FINISHED_FAIL: number;
    constructor(callBack: Function);
    getParser(): RecyclerFinishedMessageParser;
}
