import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NavigatorLiftedParser } from '../../parser';
export declare class NavigatorLiftedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NavigatorLiftedParser;
}
