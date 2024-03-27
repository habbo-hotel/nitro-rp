import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { _Str_8728 } from '../../../parser';
export declare class _Str_16135 extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): _Str_8728;
}
