import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { EpicPopupMessageParser } from '../../parser';
export declare class EpicPopupMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): EpicPopupMessageParser;
}
