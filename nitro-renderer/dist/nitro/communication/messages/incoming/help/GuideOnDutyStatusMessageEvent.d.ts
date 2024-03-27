import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideOnDutyStatusMessageParser } from '../../parser';
export declare class GuideOnDutyStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideOnDutyStatusMessageParser;
}
