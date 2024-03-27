import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomDimmerPresetsMessageParser } from '../../../parser';
export declare class RoomDimmerPresetsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomDimmerPresetsMessageParser;
}
