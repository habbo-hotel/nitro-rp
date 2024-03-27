import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RecyclerStatusMessageParser } from '../../parser';
export declare class RecyclerStatusMessageEvent extends MessageEvent implements IMessageEvent {
    static readonly SYSTEM_STATUS_ENABLED: number;
    static readonly SYSTEM_STATUS_DISABLED: number;
    static readonly SYSTEM_STATUS_TIMEOUT: number;
    constructor(callBack: Function);
    getParser(): RecyclerStatusMessageParser;
}
