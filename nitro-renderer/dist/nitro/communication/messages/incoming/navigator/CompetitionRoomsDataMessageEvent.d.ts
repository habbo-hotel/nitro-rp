import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CompetitionRoomsDataMessageParser } from '../../parser';
export declare class CompetitionRoomsDataMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CompetitionRoomsDataMessageParser;
}
