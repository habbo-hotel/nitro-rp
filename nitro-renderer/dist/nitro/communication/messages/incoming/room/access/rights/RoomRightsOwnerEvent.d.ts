import { IMessageEvent } from '../../../../../../../api';
import { MessageEvent } from '../../../../../../../events';
import { RoomRightsOwnerParser } from '../../../../parser';
export declare class RoomRightsOwnerEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomRightsOwnerParser;
}
