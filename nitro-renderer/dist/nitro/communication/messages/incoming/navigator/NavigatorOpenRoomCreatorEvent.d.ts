import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NavigatorOpenRoomCreatorParser } from '../../parser';
export declare class NavigatorOpenRoomCreatorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NavigatorOpenRoomCreatorParser;
}
