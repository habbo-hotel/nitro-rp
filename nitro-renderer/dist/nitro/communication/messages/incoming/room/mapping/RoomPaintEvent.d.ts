import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomPaintParser } from '../../../parser';
export declare class RoomPaintEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomPaintParser;
}
