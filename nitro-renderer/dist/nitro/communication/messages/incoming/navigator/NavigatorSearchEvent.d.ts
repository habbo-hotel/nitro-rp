import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NavigatorSearchParser } from '../../parser';
export declare class NavigatorSearchEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NavigatorSearchParser;
}
