import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { _Str_9021 } from '../../../parser';
export declare class _Str_17532 extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): _Str_9021;
}
