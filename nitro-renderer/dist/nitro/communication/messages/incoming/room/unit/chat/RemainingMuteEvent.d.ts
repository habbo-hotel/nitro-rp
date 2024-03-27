import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { RemainingMuteParser } from '../../../../parser';
export declare class RemainingMuteEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RemainingMuteParser;
}
