import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { RoomRightsParser } from '../../../../parser';
export declare class RoomRightsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomRightsParser;
}
