import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomHeightMapParser } from '../../../parser';
export declare class RoomHeightMapEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomHeightMapParser;
}
