import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PopularRoomTagsResultMessageParser } from '../../parser';
export declare class PopularRoomTagsResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PopularRoomTagsResultMessageParser;
}
