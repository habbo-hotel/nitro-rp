import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CameraPurchaseOKMessageParser } from '../../parser';
export declare class CameraPurchaseOKMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CameraPurchaseOKMessageParser;
}
