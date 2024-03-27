import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideReportingStatusMessageParser } from './../../parser';
export declare class GuideReportingStatusMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideReportingStatusMessageParser;
}
