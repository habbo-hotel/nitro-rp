import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { OfficialSongIdMessageParser } from '../../parser';
export declare class OfficialSongIdMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): OfficialSongIdMessageParser;
}
