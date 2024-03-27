import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideSessionMessageMessageParser } from '../../parser';
export declare class GuideSessionMessageMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideSessionMessageMessageParser;
}
