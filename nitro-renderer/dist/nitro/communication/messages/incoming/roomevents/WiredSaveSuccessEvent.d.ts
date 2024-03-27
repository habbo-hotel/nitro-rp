import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { WiredSaveSuccessParser } from '../../parser';
export declare class WiredSaveSuccessEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): WiredSaveSuccessParser;
}
