import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomUnitIdleParser } from '../../../parser';
export declare class RoomUnitIdleEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomUnitIdleParser;
}
