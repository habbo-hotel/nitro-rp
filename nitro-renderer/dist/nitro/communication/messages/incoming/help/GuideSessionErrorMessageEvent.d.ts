import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideSessionErrorMessageParser } from '../../parser';
export declare class GuideSessionErrorMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideSessionErrorMessageParser;
}
