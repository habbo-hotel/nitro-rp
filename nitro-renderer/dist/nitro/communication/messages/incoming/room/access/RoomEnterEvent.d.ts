import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomEnterParser } from '../../../parser';
export declare class RoomEnterEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomEnterParser;
}
