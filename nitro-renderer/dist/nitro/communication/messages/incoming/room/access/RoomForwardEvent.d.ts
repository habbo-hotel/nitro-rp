import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomFowardParser as RoomForwardParser } from '../../../parser';
export declare class RoomForwardEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomForwardParser;
}
