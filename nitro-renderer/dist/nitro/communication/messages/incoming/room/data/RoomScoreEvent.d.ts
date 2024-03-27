import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomScoreParser } from '../../../parser';
export declare class RoomScoreEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomScoreParser;
}
