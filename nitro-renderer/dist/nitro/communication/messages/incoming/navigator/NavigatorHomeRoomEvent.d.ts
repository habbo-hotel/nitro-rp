import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NavigatorHomeRoomParser } from '../../parser';
export declare class NavigatorHomeRoomEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NavigatorHomeRoomParser;
}
