import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomHeightMapUpdateParser } from '../../../parser';
export declare class RoomHeightMapUpdateEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomHeightMapUpdateParser;
}
