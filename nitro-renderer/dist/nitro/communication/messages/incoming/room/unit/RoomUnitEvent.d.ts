import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomUnitParser } from '../../../parser';
export declare class RoomUnitEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomUnitParser;
}
