import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NavigatorCollapsedParser } from '../../parser';
export declare class NavigatorCollapsedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NavigatorCollapsedParser;
}
