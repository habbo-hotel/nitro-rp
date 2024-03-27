import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ModerationCautionParser } from '../../parser';
export declare class ModeratorCautionEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ModerationCautionParser;
}
