import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { DesktopViewParser } from '../../parser';
export declare class DesktopViewEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): DesktopViewParser;
}
