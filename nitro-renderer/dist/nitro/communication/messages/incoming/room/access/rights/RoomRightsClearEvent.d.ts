import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { RoomRightsClearParser } from '../../../../parser';
export declare class RoomRightsClearEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomRightsClearParser;
}
