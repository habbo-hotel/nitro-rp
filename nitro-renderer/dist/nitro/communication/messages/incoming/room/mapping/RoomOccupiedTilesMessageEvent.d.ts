import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomOccupiedTilesMessageParser } from '../../../parser';
export declare class RoomOccupiedTilesMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomOccupiedTilesMessageParser;
}
